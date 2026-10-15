import React from 'react';
import { T, HEAD, MONO, Icon, Page, Btn } from '../theme.jsx';

export const title = 'Deck finished';

export default function DeckDone() {
  return (
    <Page>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center' }}>
        <span style={{ width: 72, height: 72, borderRadius: 36, background: T.mintTint, color: T.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="tick" size={34} sw={2.4} /></span>
        <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 28, letterSpacing: '-0.5px' }}>Deck finished</div>
        <div style={{ fontSize: 16, color: T.body, lineHeight: 1.45, maxWidth: 300 }}>You read all 7 slides of Computer Network Protocols. That counts as today’s learning day.</div>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.6px', color: T.green }}>3 OF 3 DAYS THIS WEEK</span>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 'calc(24px + env(safe-area-inset-bottom))' }}>
        <Btn big href="#/Quiz">Take the quiz<Icon name="arrow" size={20} sw={2} /></Btn>
        <Btn kind="quiet" href="#/Review">Review your side pages</Btn>
        <Btn kind="quiet" href="#/Main">Back to Learn</Btn>
      </div>
    </Page>
  );
}
