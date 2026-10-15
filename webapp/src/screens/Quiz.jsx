import React from 'react';
import { T, HEAD, MONO, Icon, Page, BackRow, Btn } from '../theme.jsx';
import { QUIZ } from '../data.js';

export const title = 'Quiz';

export default function Quiz({ q: start = 0, picked: pre }) {
  const [n, setN] = React.useState(Math.max(0, Math.min(QUIZ.length - 1, parseInt(start, 10) || 0)));
  const [pick, setPick] = React.useState(pre === undefined ? null : parseInt(pre, 10));
  const [score, setScore] = React.useState(0);
  const done = n >= QUIZ.length;
  const Q = QUIZ[n];
  const choose = (k) => { if (pick !== null) return; setPick(k); if (k === Q.c) setScore((s) => s + 1); };
  const next = () => { setPick(null); setN(n + 1); };

  if (done) return (
    <Page>
      <BackRow href="#/Review" />
      <div style={{ flex: 1 }} />
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 40 }}>{score} of {QUIZ.length}</div>
        <div style={{ fontSize: 16, color: T.body, maxWidth: 300, lineHeight: 1.45 }}>{score >= 4 ? 'Passed. Topic complete.' : 'Not quite yet. Reopen the side pages and try again.'}</div>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ paddingBottom: 'calc(24px + env(safe-area-inset-bottom))', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Btn big href="#/Main">Back to Learn</Btn>
      </div>
    </Page>
  );

  return (
    <Page>
      <BackRow href="#/Review" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.6px', color: T.green }}>QUESTION {n + 1} OF {QUIZ.length}</span>
        <div style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 21, lineHeight: 1.3 }}>{Q.q}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} role="group" aria-label="Answers">
        {Q.o.map((o, k) => {
          const right = pick !== null && k === Q.c; const wrong = pick === k && k !== Q.c;
          return (
            <button key={o} type="button" onClick={() => choose(k)} aria-pressed={pick === k}
              style={{ minHeight: 60, textAlign: 'left', padding: '12px 16px', borderRadius: 16, fontFamily: 'inherit', fontSize: 16, lineHeight: 1.35, color: T.ink, background: right ? T.mintTint : T.card, border: `2px solid ${right ? T.green : wrong ? '#B3261E' : T.line}`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ flex: 1 }}>{o}</span>
              {right && <span style={{ color: T.green, display: 'flex' }}><Icon name="tick" size={20} sw={2.4} /></span>}
              {wrong && <span style={{ color: '#B3261E', fontSize: 13, fontWeight: 600 }}>Not this one</span>}
            </button>
          );
        })}
      </div>
      {pick !== null && <div role="status" style={{ background: T.tint, borderRadius: 16, padding: 16, fontSize: 15, lineHeight: 1.45, color: T.body }}>{Q.why}</div>}
      <div style={{ flex: 1 }} />
      <div style={{ paddingBottom: 'calc(24px + env(safe-area-inset-bottom))' }}>
        {pick !== null && <Btn big onClick={next} style={{ width: '100%' }}>{n === QUIZ.length - 1 ? 'See result' : 'Next question'}<Icon name="arrow" size={20} sw={2} /></Btn>}
      </div>
    </Page>
  );
}
