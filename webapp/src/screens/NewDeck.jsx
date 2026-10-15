import React from 'react';
import { T, SANS, Icon, Page, BackRow, Btn } from '../theme.jsx';

export const title = 'New deck';

export default function NewDeck() {
  const [topic, setTopic] = React.useState('Computer Network Protocols');
  const [note, setNote] = React.useState('');
  return (
    <Page>
      <BackRow title="New deck" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label htmlFor="topic" style={{ fontSize: 16, fontWeight: 600 }}>What do you want to understand?</label>
        <textarea id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} rows={3}
          style={{ boxSizing: 'border-box', width: '100%', borderRadius: 16, border: `2px solid ${T.green}`, background: T.card, padding: 16, fontFamily: SANS, fontSize: 18, lineHeight: 1.4, color: T.ink, resize: 'none' }} />
        <div style={{ fontSize: 14, color: T.muted, lineHeight: 1.4 }}>Rough is fine. You can fill gaps later by tapping "I don't get this".</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minHeight: 64, padding: '0 16px', borderRadius: 16, background: T.tint }}>
        <span style={{ color: T.navy, display: 'flex' }}><Icon name="shield" /></span>
        <div style={{ flex: 1, fontSize: 14, lineHeight: 1.35 }}><b style={{ fontWeight: 600 }}>Cites IETF RFCs and OpenStax</b><br /><span style={{ color: T.muted }}>Every slide shows its source</span></div>
        <span style={{ fontSize: 14, fontWeight: 600, color: T.green }}>Change</span>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Btn kind="quiet" style={{ flex: 1, fontWeight: 500 }} onClick={() => setNote('upload')}><Icon name="upload" size={18} sw={1.8} />Upload notes</Btn>
        <Btn kind="quiet" style={{ flex: 1, fontWeight: 500 }} onClick={() => setNote('course')}><Icon name="learn" size={18} sw={1.8} />Use my course</Btn>
      </div>
      {note && <div role="status" style={{ fontSize: 14, color: T.muted }}>{note === 'upload' ? 'Text is read on your phone. Nothing is uploaded.' : 'Your course packs are listed here once you add a profile.'}</div>}
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', paddingBottom: 'calc(24px + env(safe-area-inset-bottom))' }}>
        <Btn big href="#/Building" style={{ width: '100%', boxSizing: 'border-box' }}>Build deck<Icon name="arrow" size={20} sw={2} /></Btn>
        <div style={{ fontSize: 13, color: T.muted }}>No account needed. Stays on your phone.</div>
      </div>
    </Page>
  );
}
