import React from 'react';
import { T, HEAD, Icon, Page, BackRow, Btn } from '../theme.jsx';

export const title = 'Building your deck';

const STEPS = [
  ['Found sources', 'IETF RFCs, OpenStax'],
  ['Checking each point against the sources', 'Anything that can’t be traced is left out'],
  ['Drawing the slides', 'Text and diagrams only, so the deck stays small']
];

export default function Building() {
  return (
    <Page>
      <BackRow href="#/NewDeck" />
      <div>
        <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 26, lineHeight: 1.2, letterSpacing: '-0.4px' }}>Building your deck</div>
        <div style={{ fontSize: 15, color: T.muted, marginTop: 6 }}>Computer Network Protocols</div>
      </div>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
        {STEPS.map(([a, b], k) => (
          <li key={a} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', minHeight: 72, borderBottom: k < 2 ? `1px solid ${T.line}` : 'none', paddingTop: 12 }}>
            <span style={{ width: 28, height: 28, borderRadius: 14, flexShrink: 0, background: k === 0 ? T.green : k === 1 ? T.navy : T.tint, color: k < 2 ? '#fff' : T.muted, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{k === 0 ? <Icon name="tick" size={16} sw={2.4} /> : k + 1}</span>
            <div><div style={{ fontWeight: 600, fontSize: 16 }}>{a}</div><div style={{ fontSize: 14, color: T.muted, marginTop: 2 }}>{b}</div></div>
          </li>
        ))}
      </ol>
      <div style={{ background: T.tint, borderRadius: 16, padding: 16, fontSize: 14, lineHeight: 1.45, color: T.body }}>
        You can start reading now. The rest arrives while you read, and the whole deck saves for offline when it is done.
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 'calc(24px + env(safe-area-inset-bottom))' }}>
        <Btn big href="#/Viewer?slide=1">Start reading<Icon name="arrow" size={20} sw={2} /></Btn>
        <Btn kind="quiet" href="#/Main">Cancel</Btn>
      </div>
    </Page>
  );
}
