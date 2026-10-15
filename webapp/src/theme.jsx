import React from 'react';

// One identity for every screen, the slide player, the deck and the PDF.
export const T = {
  ink: '#0B1B2B', navy: '#12304F', navy2: '#1B2E44', navyLine: '#2A4A6E',
  green: '#0B7A4B', mint: '#3DDC97', mintTint: '#DDF5EA', mintInk: '#062014',
  page: '#F4F7FB', card: '#FFFFFF', tint: '#E7EEF7', line: '#DCE3EC',
  muted: '#566679', body: '#26384B', soft: '#9FB6D0', softer: '#C9D8EA'
};
export const HEAD = "'Sora', system-ui, sans-serif";
export const SANS = "'IBM Plex Sans', system-ui, sans-serif";
export const MONO = "'IBM Plex Mono', ui-monospace, monospace";

const paths = {
  learn: <><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z" /><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z" /></>,
  review: <><path d="M20 11a8 8 0 1 0-2.3 5.7" /><path d="M20 5v6h-6" /></>,
  me: <><circle cx="12" cy="8" r="4" /><path d="M4 20c1-4 4-6 8-6s7 2 8 6" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  back: <path d="M19 12H5M11 6l-6 6 6 6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  speaker: <><path d="M4 9v6h4l5 4V5L8 9z" /><path d="M16.5 8.5a5 5 0 0 1 0 7" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" /></>,
  prev: <path d="M15 6l-6 6 6 6" />,
  next: <path d="M9 6l6 6-6 6" />,
  rotate: <><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.7 5.6L4 15.5M4 20v-4.5h4.5" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  upload: <path d="M12 16V4M7 9l5-5 5 5M5 20h14" />,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></>,
  tick: <path d="M5 12l5 5 9-10" />,
  bookmark: <path d="M6 4h12v17l-6-4-6 4z" />,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>
};

export const Icon = ({ name, size = 22, sw = 1.9 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
);

export const Page = ({ children, tab, pad = '56px 20px 0' }) => (
  <div className="screen-root" style={{ display: 'flex', flexDirection: 'column', background: T.page, color: T.ink, fontFamily: SANS }}>
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: pad, display: 'flex', flexDirection: 'column', gap: 20 }}>{children}<div style={{ flexShrink: 0, height: 4 }} /></div>
    {tab && <TabBar active={tab} />}
  </div>
);

export const H1 = ({ children }) => (
  <h1 style={{ margin: 0, fontFamily: HEAD, fontWeight: 700, fontSize: 30, letterSpacing: '-0.5px' }}>{children}</h1>
);

export const Eyebrow = ({ children, color = T.green }) => (
  <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.6px', fontWeight: 500, color, textTransform: 'uppercase' }}>{children}</span>
);

export const TabBar = ({ active }) => {
  const tabs = [['Learn', 'learn', '#/Main'], ['Review', 'review', '#/Review'], ['Me', 'me', '#/Me']];
  return (
    <nav aria-label="Main" style={{ flexShrink: 0, background: T.card, borderTop: `1px solid ${T.line}`, display: 'flex', padding: '8px 12px calc(14px + env(safe-area-inset-bottom))', fontFamily: SANS }}>
      {tabs.map(([label, icon, href]) => (
        <a key={label} href={href} aria-current={active === label ? 'page' : undefined} style={{ flex: 1, minHeight: 56, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, textDecoration: 'none', fontSize: 12, fontWeight: active === label ? 600 : 500, color: active === label ? T.green : T.muted }}>
          <Icon name={icon} size={24} />{label}
        </a>
      ))}
    </nav>
  );
};

export const BackRow = ({ href = '#/Main', title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <a href={href} aria-label="Back" style={{ width: 44, height: 44, borderRadius: 22, background: T.card, border: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.ink, textDecoration: 'none' }}><Icon name="back" /></a>
    {title && <h1 style={{ margin: 0, fontFamily: HEAD, fontWeight: 700, fontSize: 26, letterSpacing: '-0.4px' }}>{title}</h1>}
  </div>
);

const btnBase = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 999, fontFamily: SANS, fontWeight: 600, textDecoration: 'none', border: 'none', cursor: 'pointer' };
const kinds = {
  primary: { background: T.green, color: '#fff' },
  mint: { background: T.mint, color: T.mintInk },
  navy: { background: T.navy, color: '#fff' },
  outline: { background: 'transparent', color: T.navy, border: `1.5px solid ${T.navy}`, boxSizing: 'border-box' },
  quiet: { background: T.card, color: T.ink, border: `1px solid ${T.line}`, boxSizing: 'border-box' }
};
export const Btn = ({ kind = 'primary', big, href, onClick, children, style, ...rest }) => {
  const s = { ...btnBase, ...kinds[kind], height: big ? 56 : 48, fontSize: big ? 17 : 15, padding: '0 20px', ...style };
  return href ? <a href={href} style={s} {...rest}>{children}</a> : <button type="button" onClick={onClick} style={s} {...rest}>{children}</button>;
};

export const Row = ({ href, left, title, meta, right, last }) => {
  const inner = (
    <>
      {left}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.3 }}>{title}</div>
        {meta && <div style={{ fontSize: 13, color: T.muted, marginTop: 2 }}>{meta}</div>}
      </div>
      {right}
    </>
  );
  const s = { display: 'flex', alignItems: 'center', gap: 14, minHeight: 72, borderBottom: last ? 'none' : `1px solid ${T.line}`, textDecoration: 'none', color: T.ink };
  return href ? <a href={href} style={s}>{inner}</a> : <div style={s}>{inner}</div>;
};

export const Thumb = ({ w = 30, hue = T.navy }) => (
  <div aria-hidden="true" style={{ width: 72, height: 44, flexShrink: 0, borderRadius: 8, background: T.card, border: `1px solid ${T.line}`, padding: 6, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 4 }}>
    <div style={{ width: w, height: 5, borderRadius: 2, background: T.navy }} />
    <div style={{ width: 48, height: 3, borderRadius: 2, background: '#C3CFDD' }} />
    <div style={{ width: 38, height: 3, borderRadius: 2, background: hue === 'mint' ? T.mint : '#C3CFDD' }} />
  </div>
);

export const DarkCard = ({ children }) => (
  <div style={{ background: T.navy, color: '#fff', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>{children}</div>
);
