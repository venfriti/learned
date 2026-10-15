import React from 'react';
import { T, HEAD, MONO, Page, H1, Btn, Row, DarkCard } from '../theme.jsx';
import { REVIEW } from '../data.js';

export const title = 'Review';

export default function Review({ showAnswer = false }) {
  const [shown, setShown] = React.useState(!!showAnswer);
  const item = REVIEW[0];
  return (
    <Page tab="Review">
      <div>
        <H1>Review</H1>
        <div style={{ fontSize: 15, color: T.muted, marginTop: 4 }}>Things you got stuck on. 1 due today.</div>
      </div>

      <DarkCard>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.6px', color: T.soft }}>DUE TODAY · SLIDE {item.slide}</span>
        <div style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 20, lineHeight: 1.3 }}>{item.q}</div>
        {shown
          ? <div role="status" style={{ background: T.navy2, borderRadius: 14, padding: 14, fontSize: 15, lineHeight: 1.45, color: T.softer }}>{item.a}</div>
          : <div style={{ fontSize: 14, color: T.softer }}>Answer in your own words first, then check.</div>}
        {shown
          ? <div style={{ display: 'flex', gap: 10 }}><Btn kind="mint" style={{ flex: 1 }} onClick={() => setShown(false)}>I got it</Btn><Btn kind="quiet" style={{ flex: 1, background: 'transparent', color: '#fff', border: `1.5px solid ${T.soft}` }} href="#/Viewer?slide=4&startOpen=true&level=1">Side page</Btn></div>
          : <Btn kind="mint" big onClick={() => setShown(true)}>Show answer</Btn>}
      </DarkCard>

      <section aria-labelledby="later">
        <div id="later" style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 17, marginBottom: 2 }}>Later</div>
        {REVIEW.slice(1).map((r, k, a) => <Row key={r.title} last={k === a.length - 1} title={r.title} meta={`Slide ${r.slide} · ${r.due.toLowerCase()}`} />)}
      </section>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 72, padding: '0 16px', borderRadius: 16, background: T.card, border: `1px solid ${T.line}` }}>
        <div style={{ flex: 1 }}><div style={{ fontSize: 16, fontWeight: 600 }}>Topic quiz: Protocols</div><div style={{ fontSize: 13, color: T.muted, marginTop: 2 }}>5 questions · about 4 minutes</div></div>
        <Btn href="#/Quiz" style={{ height: 40 }}>Start</Btn>
      </div>
    </Page>
  );
}
