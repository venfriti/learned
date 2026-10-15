import React from 'react';
import { T, HEAD, MONO, Icon, Page, Btn } from '../theme.jsx';

export const title = 'Welcome';

const STEPS = [
  ['1', 'Type a topic', 'The app builds a short deck of slides, each with its source.'],
  ['2', 'Read in landscape', 'Slides fill the screen. Tap the speaker to hear a slide.'],
  ['3', 'Tap "I don\'t get this"', 'A cited side page opens for that slide, and comes back in Review.']
];

export default function FirstRun() {
  return (
    <Page>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.6px', color: T.green }}>WELCOME TO LEARNED</span>
        <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 30, lineHeight: 1.15, letterSpacing: '-0.5px' }}>Learn from slides that explain themselves</div>
      </div>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {STEPS.map(([n, a, b]) => (
          <li key={n} style={{ display: 'flex', gap: 14 }}>
            <span style={{ width: 32, height: 32, borderRadius: 16, flexShrink: 0, background: T.navy, color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</span>
            <div><div style={{ fontSize: 17, fontWeight: 600 }}>{a}</div><div style={{ fontSize: 14, color: T.muted, lineHeight: 1.4, marginTop: 2 }}>{b}</div></div>
          </li>
        ))}
      </ol>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 'calc(24px + env(safe-area-inset-bottom))' }}>
        <Btn big href="#/Main">Get started<Icon name="arrow" size={20} sw={2} /></Btn>
        <div style={{ fontSize: 13, color: T.muted, textAlign: 'center' }}>No account needed. Works offline once a deck is saved.<br />Proof of concept with sample content.</div>
      </div>
    </Page>
  );
}
