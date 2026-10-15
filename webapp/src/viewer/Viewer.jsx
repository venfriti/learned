import React from 'react';
import { T, HEAD, SANS, MONO, Icon } from '../theme.jsx';
import { SLIDES, STAGE } from './Slides.jsx';
import { SIDE, NARRATION } from '../data.js';

export const landscape = true;
export const title = 'Slides';

const round = { width: 44, height: 44, borderRadius: 22, border: 'none', background: T.navy2, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', padding: 0, flexShrink: 0 };
const ghost = { flex: 1, height: 48, borderRadius: 24, fontFamily: SANS, fontSize: 15, fontWeight: 600, cursor: 'pointer' };

export default class Viewer extends React.Component {
  constructor(props) {
    super(props);
    const n = Math.max(1, Math.min(SLIDES.length, parseInt(props.slide, 10) || 4));
    this.state = { i: n - 1, side: props.startOpen ? (parseInt(props.level, 10) === 2 ? 2 : 1) : 0, saved: false, listening: !!props.startListening, speed: 1, w: 800, h: 300 };
    this.box = React.createRef(); this.speeds = [1, 1.25, 1.5, 0.75];
  }
  tell = (landscape) => { try { if (window.parent !== window) window.parent.postMessage({ learned: 'orientation', landscape }, '*'); } catch (e) {} };
  componentDidMount() {
    this.tell(true); this.measure(); this.ro = new ResizeObserver(this.measure); this.ro.observe(this.box.current);
    try { if (window.parent === window && window.matchMedia('(pointer: coarse)').matches) { document.documentElement.requestFullscreen?.().catch(() => {}); screen.orientation?.lock?.('landscape').catch(() => {}); } } catch (e) {}
    if (this.state.listening) this.speak();
  }
  componentWillUnmount() {
    this.tell(false); this.ro && this.ro.disconnect(); try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
    try { screen.orientation?.unlock?.(); if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {}
  }
  measure = () => { const r = this.box.current.getBoundingClientRect(); this.setState({ w: r.width, h: r.height }); };
  speak = () => {
    try { const s = window.speechSynthesis; if (!s) return; s.cancel(); const u = new SpeechSynthesisUtterance(NARRATION[this.state.i]); u.rate = this.state.speed; u.lang = 'en'; u.onend = () => this.setState({ listening: false }); s.speak(u); } catch (e) {}
  };
  go = (d) => this.setState((s) => ({ i: Math.max(0, Math.min(SLIDES.length - 1, s.i + d)), side: 0 }), () => { if (this.state.listening) this.speak(); });
  toggleListen = () => this.setState((s) => ({ listening: !s.listening }), () => { if (this.state.listening) this.speak(); else try { window.speechSynthesis.cancel(); } catch (e) {} });
  cycleSpeed = () => this.setState((s) => ({ speed: this.speeds[(this.speeds.indexOf(s.speed) + 1) % this.speeds.length] }), () => { if (this.state.listening) this.speak(); });

  panel() {
    const { side, saved } = this.state; const d = SIDE[side]; if (!d) return null;
    return (
      <div role="dialog" aria-label="Side page" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(50%, 440px)', background: T.card, boxShadow: '-10px 0 30px rgba(11,27,43,0.28)', display: 'flex', flexDirection: 'column', fontFamily: SANS, color: T.ink, zIndex: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px 10px 20px', borderBottom: `1px solid ${T.line}` }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.8px', color: T.green, fontWeight: 500, textTransform: 'uppercase' }}>{d.eyebrow}</div>
            <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 18, marginTop: 2, lineHeight: 1.2 }}>{d.title}</div>
          </div>
          <button type="button" aria-label="Close side page" onClick={() => this.setState({ side: 0 })} style={{ ...round, background: T.tint, color: T.ink }}><Icon name="close" size={20} sw={2} /></button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, lineHeight: 1.45, color: T.body }}>
          <div>{d.body}</div>
          {d.steps && <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>{d.steps.map(([n, t]) => <div key={n} style={{ display: 'flex', gap: 10 }}><b style={{ width: 20, color: T.green, fontWeight: 600 }}>{n}</b><span>{t}</span></div>)}</div>}
          {d.rows && <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>{d.rows.map(([a, b]) => <div key={a} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', borderRadius: 10, background: T.page, border: `1px solid ${T.line}` }}><span style={{ color: T.muted }}>{a}</span><span style={{ fontFamily: MONO, fontSize: 14, fontWeight: 500, color: T.green }}>{b}</span></div>)}</div>}
          <div style={{ fontSize: 12, color: T.muted }}>Source: {d.source}</div>
          {side === 2 && <div style={{ fontSize: 12, color: T.muted }}>This is the last level. Still stuck? Ask your lecturer or tutor.</div>}
        </div>
        <div style={{ display: 'flex', gap: 10, padding: '10px 20px 14px', borderTop: `1px solid ${T.line}` }}>
          {side === 1 ? (<>
            <button type="button" onClick={() => this.setState({ side: 2 })} style={{ ...ghost, border: 'none', background: T.green, color: '#fff' }}>Go deeper</button>
            <button type="button" aria-pressed={saved} onClick={() => this.setState({ saved: !saved })} style={{ ...ghost, border: `1.5px solid ${T.navy}`, background: saved ? T.mintTint : 'transparent', color: T.navy }}>{saved ? 'Saved ✓' : 'Keep for review'}</button>
          </>) : (
            <button type="button" onClick={() => this.setState({ side: 1 })} style={{ ...ghost, border: `1.5px solid ${T.navy}`, background: 'transparent', color: T.navy }}>Back to level 1</button>
          )}
        </div>
      </div>
    );
  }

  render() {
    const { i, side, w, h, listening, speed } = this.state; const Slide = SLIDES[i]; const scale = Math.min(w / STAGE.w, h / STAGE.h); const last = i === SLIDES.length - 1;
    return (
      <div className="screen-root" style={{ display: 'flex', flexDirection: 'column', background: T.ink, fontFamily: SANS, position: 'relative', overflow: 'hidden' }}>
        <div ref={this.box} style={{ flex: 1, minHeight: 0, position: 'relative', background: T.page, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: '50%', top: '50%', width: STAGE.w, height: STAGE.h, marginLeft: -STAGE.w / 2, marginTop: -STAGE.h / 2, transform: `scale(${scale})` }}>
            <Slide marker={i === 3} />
          </div>
          {listening && (
            <div style={{ position: 'absolute', left: 12, bottom: 10, background: 'rgba(11,27,43,0.94)', color: '#fff', borderRadius: 22, display: 'flex', alignItems: 'center', gap: 8, padding: '0 6px 0 14px', height: 44, zIndex: 3 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: T.mint }}>Narration · slide {i + 1}</span>
              <button type="button" aria-label={`Speed ${speed}x, change`} onClick={this.cycleSpeed} style={{ height: 36, minWidth: 52, borderRadius: 18, border: 'none', background: T.navy2, color: '#fff', fontFamily: SANS, fontSize: 13, fontWeight: 600 }}>{speed}x</button>
            </div>
          )}
        </div>
        <div style={{ height: 64, flexShrink: 0, background: T.ink, display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', paddingLeft: 'max(16px, env(safe-area-inset-left))', paddingRight: 'max(16px, env(safe-area-inset-right))' }}>
          <a href="#/Deck" aria-label="Close slides" style={round}><Icon name="close" size={20} sw={2} /></a>
          <div role="progressbar" aria-label={`Slide ${i + 1} of ${SLIDES.length}`} aria-valuenow={i + 1} aria-valuemin={1} aria-valuemax={SLIDES.length} style={{ flex: 1, display: 'flex', gap: 6 }}>
            {SLIDES.map((_, k) => <div key={k} style={{ flex: 1, height: 5, borderRadius: 3, background: k < i ? T.mint : k === i ? '#fff' : T.navyLine }} />)}
          </div>
          <button type="button" onClick={() => this.setState({ side: 1 })} style={{ ...round, width: 'auto', padding: '0 18px', gap: 8, background: T.mint, color: T.mintInk, fontFamily: SANS, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}><Icon name="help" size={20} sw={2} />I don’t get this</button>
          <button type="button" aria-label={listening ? 'Stop listening' : 'Listen to this slide'} aria-pressed={listening} onClick={this.toggleListen} style={{ ...round, background: listening ? T.mint : T.navy2, color: listening ? T.mintInk : '#fff', cursor: 'pointer' }}><Icon name="speaker" size={20} /></button>
          <button type="button" onClick={() => this.go(-1)} aria-label="Previous slide" disabled={i === 0} style={{ ...round, opacity: i === 0 ? 0.35 : 1, cursor: 'pointer' }}><Icon name="prev" size={20} sw={2} /></button>
          {last
            ? <a href="#/DeckDone" aria-label="Finish the deck" style={{ ...round, background: T.mint, color: T.mintInk }}><Icon name="tick" size={20} sw={2.4} /></a>
            : <button type="button" onClick={() => this.go(1)} aria-label="Next slide" style={{ ...round, background: '#fff', color: T.ink, cursor: 'pointer' }}><Icon name="next" size={20} sw={2} /></button>}
        </div>
        {this.panel()}
      </div>
    );
  }
}
