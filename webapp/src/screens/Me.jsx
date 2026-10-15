import React from 'react';
import { T, HEAD, SANS, Page, H1, Btn } from '../theme.jsx';

export const title = 'Me';

function useSetting(key, init) {
  const [v, setV] = React.useState(() => { try { const s = localStorage.getItem(key); return s === null ? init : JSON.parse(s); } catch (e) { return init; } });
  const set = (x) => { setV(x); try { localStorage.setItem(key, JSON.stringify(x)); } catch (e) {} };
  return [v, set];
}

const Switch = ({ on, set, label, hint }) => (
  <button type="button" role="switch" aria-checked={on} onClick={() => set(!on)} style={{ width: '100%', minHeight: 64, display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', background: 'none', border: 'none', borderBottom: `1px solid ${T.line}`, padding: 0, fontFamily: SANS, color: T.ink }}>
    <span style={{ flex: 1 }}><span style={{ display: 'block', fontSize: 16, fontWeight: 600 }}>{label}</span><span style={{ display: 'block', fontSize: 13, color: T.muted, marginTop: 2 }}>{hint}</span></span>
    <span aria-hidden="true" style={{ width: 52, height: 32, borderRadius: 16, background: on ? T.green : '#B8C4D2', position: 'relative', flexShrink: 0 }}><span style={{ position: 'absolute', top: 3, left: on ? 23 : 3, width: 26, height: 26, borderRadius: 13, background: '#fff' }} /></span>
  </button>
);

export default function Me() {
  const [dataSaver, setDataSaver] = useSetting('dataSaver', true);
  const [wifi, setWifi] = useSetting('wifiOnly', true);
  const [aloud, setAloud] = useSetting('aloud', false);
  const [contrast, setContrast] = useSetting('contrast', false);
  const [goal, setGoal] = useSetting('goal', 3);
  return (
    <Page tab="Me">
      <H1>Me</H1>

      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 16, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 17 }}>No profile yet</div>
        <div style={{ fontSize: 14, color: T.muted, lineHeight: 1.45 }}>Everything works without one. Progress stays on this phone. A profile (email and a 6-digit code) keeps it across devices.</div>
        <Btn kind="outline">Create a profile</Btn>
      </div>

      <section aria-labelledby="goal">
        <div id="goal" style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 17, marginBottom: 4 }}>Weekly goal</div>
        <div style={{ fontSize: 14, color: T.muted, marginBottom: 10, lineHeight: 1.45 }}>A day counts when you finish a quiz or a review. Missed days cost nothing.</div>
        <div style={{ display: 'flex', gap: 8 }} role="radiogroup" aria-label="Days per week">
          {[2, 3, 4, 5].map((d) => (
            <button key={d} type="button" role="radio" aria-checked={goal === d} onClick={() => setGoal(d)} style={{ flex: 1, height: 48, borderRadius: 24, fontFamily: SANS, fontSize: 15, fontWeight: 600, border: goal === d ? 'none' : `1.5px solid ${T.line}`, background: goal === d ? T.navy : T.card, color: goal === d ? '#fff' : T.ink }}>{d} days</button>
          ))}
        </div>
      </section>

      <section aria-labelledby="set">
        <div id="set" style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 17, marginBottom: 2 }}>Settings</div>
        <Switch on={dataSaver} set={setDataSaver} label="Data saver" hint="Text and diagrams only, no extra images" />
        <Switch on={wifi} set={setWifi} label="Download on Wi-Fi only" hint="Never spends mobile data on decks" />
        <Switch on={aloud} set={setAloud} label="Read side pages aloud" hint="Uses your phone's own voice. Works offline" />
        <Switch on={contrast} set={setContrast} label="High contrast" hint="Stronger colours and borders" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 56, fontSize: 16 }}><b style={{ fontWeight: 600 }}>Language</b><span style={{ color: T.muted }}>English</span></div>
      </section>
    </Page>
  );
}
