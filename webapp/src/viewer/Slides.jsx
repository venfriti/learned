import React from 'react';
import { T, HEAD, SANS, MONO } from '../theme.jsx';

// Slides are drawn on a fixed 844 x 326 stage and scaled to fit the screen.
export const STAGE = { w: 844, h: 326 };

const Frame = ({ eyebrow, title, marker, source, children }) => (
  <div style={{ width: STAGE.w, height: STAGE.h, boxSizing: 'border-box', background: T.page, color: T.ink, fontFamily: SANS, padding: '24px 40px 0', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 20 }}>
      <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.8px', color: T.green, fontWeight: 500 }}>{eyebrow}</span>
      {marker && <span style={{ fontSize: 12, fontWeight: 600, color: T.green, background: T.mintTint, padding: '3px 10px', borderRadius: 12 }}>1 side page</span>}
    </div>
    <h1 style={{ margin: '8px 0 12px', fontFamily: HEAD, fontWeight: 700, fontSize: 28, lineHeight: 1.15, letterSpacing: '-0.5px', color: T.navy }}>{title}</h1>
    <div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 32 }}>{children}</div>
    <div style={{ height: 30, display: 'flex', alignItems: 'center', fontSize: 12, color: T.muted }}>Source: {source}</div>
  </div>
);

const Text = ({ children }) => <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 16, lineHeight: 1.5, color: T.body }}>{children}</div>;
const Code = ({ children }) => <div style={{ alignSelf: 'flex-start', fontFamily: MONO, fontSize: 15, background: T.navy, color: '#fff', padding: '10px 14px', borderRadius: 10 }}>{children}</div>;
const Box = ({ children, hot, w }) => <div style={{ padding: '10px 14px', borderRadius: 12, background: hot ? T.mintTint : T.card, border: `1px solid ${hot ? T.green : T.line}`, fontSize: 15, width: w }}>{children}</div>;
const Num = ({ n, hot }) => <div style={{ width: 26, height: 26, borderRadius: 13, flexShrink: 0, background: hot ? T.green : T.navy, color: '#fff', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>;
const Link = () => <div style={{ marginLeft: 13, width: 2, height: 12, background: T.soft }} />;

export const SLIDES = [
  ({ marker }) => (
    <Frame eyebrow="PROTOCOLS · 1 OF 7" title="A protocol is an agreed set of rules" marker={marker} source="RFC 1122, Requirements for Internet Hosts">
      <Text>
        <div>Two machines can only talk if both follow the same rules: what to say, in what order, and what to do when something goes wrong.</div>
        <div>Those rules are called a protocol. Every step on the next slides is one.</div>
      </Text>
      <div style={{ width: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <Box>Sender</Box>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: T.green, fontSize: 12, fontWeight: 600 }}>
          <span style={{ height: 2, width: 56, background: T.green, display: 'block' }} />same rules
        </div>
        <Box>Receiver</Box>
      </div>
    </Frame>
  ),
  ({ marker }) => (
    <Frame eyebrow="LAYERS · 2 OF 7" title="Network software works in four layers" marker={marker} source="RFC 1122, Requirements for Internet Hosts">
      <Text>
        <div>Each layer does one job and trusts the layer below it. You can change Wi-Fi to a cable without touching your browser.</div>
      </Text>
      <div style={{ width: 380, display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center' }}>
        {[['Application', 'HTTP · DNS · email'], ['Transport', 'TCP · UDP'], ['Internet', 'IP addresses'], ['Link', 'Wi-Fi · Ethernet']].map(([a, b], k) => (
          <div key={a} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, background: k === 0 ? T.navy : T.card, color: k === 0 ? '#fff' : T.ink, border: `1px solid ${k === 0 ? T.navy : T.line}` }}>
            <b style={{ fontWeight: 600, fontSize: 15 }}>{a}</b><span style={{ fontFamily: MONO, fontSize: 12, color: k === 0 ? T.softer : T.muted }}>{b}</span>
          </div>
        ))}
      </div>
    </Frame>
  ),
  ({ marker }) => (
    <Frame eyebrow="LAYERS · 3 OF 7" title="One message, wrapped four times" marker={marker} source="RFC 1122, Requirements for Internet Hosts">
      <Text>
        <div>Send a post and each layer adds its own envelope. The receiver opens them in the opposite order.</div>
        <Code>"hello" → HTTP → TCP → IP → Wi-Fi</Code>
      </Text>
      <div style={{ width: 360, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', padding: 10, borderRadius: 12, background: T.tint, border: `1px solid ${T.line}`, fontSize: 12, fontWeight: 600, color: T.muted }}>Link frame
          <div style={{ marginTop: 6, padding: 10, borderRadius: 10, background: '#D4E1F1' }}>IP packet
            <div style={{ marginTop: 6, padding: 10, borderRadius: 8, background: '#BDD0E8' }}>TCP segment
              <div style={{ marginTop: 6, padding: 10, borderRadius: 8, background: T.mintTint, border: `1px solid ${T.green}`, color: T.ink }}>HTTP message: "hello"</div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  ),
  ({ marker }) => (
    <Frame eyebrow="DNS · 4 OF 7" title="DNS turns a name into an address" marker={marker} source="RFC 1034, Domain Names: Concepts and Facilities">
      <Text>
        <div>Your phone doesn't know where example.com lives. It asks a DNS resolver, which looks the name up and answers with an IP address.</div>
        <Code>example.com <span style={{ color: T.mint }}>→</span> 192.0.2.10</Code>
      </Text>
      <div style={{ width: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Num n="1" /><div style={{ flex: 1 }}><Box><b style={{ fontWeight: 600 }}>Phone</b> asks: where is example.com?</Box></div></div>
        <Link />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Num n="2" /><div style={{ flex: 1 }}><Box><b style={{ fontWeight: 600 }}>Resolver</b> looks it up</Box></div></div>
        <Link />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Num n="3" hot /><div style={{ flex: 1 }}><Box hot><b style={{ fontWeight: 600 }}>Answer:</b> 192.0.2.10</Box></div></div>
      </div>
    </Frame>
  ),
  ({ marker }) => (
    <Frame eyebrow="TRANSPORT · 5 OF 7" title="TCP is careful, UDP is fast" marker={marker} source="RFC 9293 (TCP) and RFC 768 (UDP)">
      <div style={{ flex: 1, display: 'flex', gap: 14 }}>
        {[['TCP', ['Sets up a connection first', 'Resends lost data', 'Keeps data in order'], 'Web pages, email', T.navy], ['UDP', ['Just sends', 'May lose data', 'Very little delay'], 'Calls, video, DNS lookups', T.green]].map(([n, pts, use, col]) => (
          <div key={n} style={{ flex: 1, borderRadius: 14, background: T.card, border: `1px solid ${T.line}`, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 22, color: col }}>{n}</div>
            {pts.map((p) => <div key={p} style={{ fontSize: 15, color: T.body }}>{p}</div>)}
            <div style={{ marginTop: 'auto', fontSize: 13, color: T.muted }}>Good for: <b style={{ color: T.ink, fontWeight: 600 }}>{use}</b></div>
          </div>
        ))}
      </div>
    </Frame>
  ),
  ({ marker }) => (
    <Frame eyebrow="WEB · 6 OF 7" title="HTTPS is HTTP inside a locked tunnel" marker={marker} source="RFC 9110 (HTTP) and RFC 8446 (TLS 1.3)">
      <Text>
        <div>On café Wi-Fi, anyone listening can read plain HTTP, password included. With HTTPS they see scrambled bytes.</div>
      </Text>
      <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
        <div style={{ borderRadius: 12, background: T.card, border: `1px solid ${T.line}`, padding: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#B3261E', marginBottom: 4 }}>HTTP · readable</div>
          <div style={{ fontFamily: MONO, fontSize: 13 }}>password=<b>ngr2026</b></div>
        </div>
        <div style={{ borderRadius: 12, background: T.navy, color: '#fff', padding: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: T.mint, marginBottom: 4 }}>HTTPS · scrambled</div>
          <div style={{ fontFamily: MONO, fontSize: 13, color: T.softer }}>x8Fq…9aZ3·Lm2v…tB07</div>
        </div>
      </div>
    </Frame>
  ),
  ({ marker }) => (
    <Frame eyebrow="RECAP · 7 OF 7" title="Four things to keep" marker={marker} source="RFC 1122, 1034, 9293, 768, 9110, 8446">
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignContent: 'start' }}>
        {[['Protocols', 'Shared rules both sides follow'], ['Layers', 'Four layers, one job each'], ['DNS', 'Finds the address for a name'], ['TCP or UDP', 'Reliable, or fast']].map(([a, b], k) => (
          <div key={a} style={{ borderRadius: 14, background: T.card, border: `1px solid ${T.line}`, padding: 14, display: 'flex', gap: 12 }}>
            <Num n={k + 1} />
            <div><div style={{ fontWeight: 600, fontSize: 16 }}>{a}</div><div style={{ fontSize: 14, color: T.muted, marginTop: 2 }}>{b}</div></div>
          </div>
        ))}
      </div>
    </Frame>
  )
];
