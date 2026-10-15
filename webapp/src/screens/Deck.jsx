import React from 'react';
import { T, HEAD, Icon, Page, BackRow, Btn } from '../theme.jsx';
import { SLIDE_TITLES, DECK } from '../data.js';

export const title = 'Deck';

export default function Deck() {
  return (
    <Page>
      <BackRow />
      <div>
        <h1 style={{ margin: 0, fontFamily: HEAD, fontWeight: 700, fontSize: 26, lineHeight: 1.2, letterSpacing: '-0.4px' }}>{DECK.title}</h1>
        <div style={{ fontSize: 14, color: T.muted, marginTop: 6 }}>7 slides · cites IETF RFCs · saved offline</div>
      </div>
      <Btn kind="navy" big href="#/Viewer"><Icon name="rotate" size={22} sw={1.8} />Open slides</Btn>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {SLIDE_TITLES.map((t, k) => {
          const on = k === 3;
          return (
            <li key={t}>
              <a href={`#/Viewer?slide=${k + 1}`} style={{ display: 'flex', alignItems: 'center', gap: 14, minHeight: 56, borderBottom: k < 6 ? `1px solid ${T.line}` : 'none', textDecoration: 'none', color: T.ink }}>
                <span style={{ width: 28, height: 28, borderRadius: 14, flexShrink: 0, background: on ? T.navy : T.tint, color: on ? '#fff' : T.ink, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{k + 1}</span>
                <span style={{ flex: 1, fontSize: 16, fontWeight: on ? 600 : 400 }}>{t}</span>
                {on && <span style={{ fontSize: 12, fontWeight: 600, color: T.green, background: T.mintTint, padding: '4px 10px', borderRadius: 12 }}>1 side page</span>}
              </a>
            </li>
          );
        })}
      </ol>
      <details style={{ borderTop: `1px solid ${T.line}`, paddingTop: 12 }}>
        <summary style={{ minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 15, cursor: 'pointer', listStyle: 'none' }}><b style={{ fontWeight: 600 }}>Sources</b><span style={{ color: T.muted }}>{DECK.sources.length} documents</span></summary>
        <ul style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 14, color: T.body, lineHeight: 1.5 }}>
          {DECK.sources.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </details>
    </Page>
  );
}
