import React from 'react';
import { T, HEAD, MONO, Icon, Page, H1, Btn, Row, Thumb, DarkCard } from '../theme.jsx';

export const title = 'Learn';

export default function Learn() {
  return (
    <Page tab="Learn">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <H1>Learn</H1>
        <Btn href="#/NewDeck" style={{ height: 44, fontSize: 15 }}><Icon name="plus" size={18} sw={2} />New deck</Btn>
      </div>
      <div style={{ fontSize: 14, color: T.muted, marginTop: -8 }}>This week: 2 of 3 days done</div>

      <DarkCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.6px', color: T.soft }}>CONTINUE · SLIDE 4 OF 7</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: T.mint }}>1 side page</span>
        </div>
        <div style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 22, lineHeight: 1.25 }}>Computer Network Protocols</div>
        <div style={{ fontSize: 15, color: T.softer }}>DNS: turning a name into an address</div>
        <div role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} aria-label="Deck progress" style={{ height: 6, borderRadius: 3, background: T.navyLine }}><div style={{ width: '57%', height: 6, borderRadius: 3, background: T.mint }} /></div>
        <Btn kind="mint" big href="#/Viewer">Resume<Icon name="arrow" size={20} sw={2} /></Btn>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: T.soft }}><Icon name="rotate" size={16} sw={1.8} />Slides open in landscape</div>
      </DarkCard>

      <section aria-labelledby="decks">
        <div id="decks" style={{ fontFamily: HEAD, fontWeight: 600, fontSize: 17, marginBottom: 2 }}>Your decks</div>
        <Row href="#/Deck" left={<Thumb hue="mint" />} title="Computer Network Protocols" meta="7 slides · saved offline" right={<span style={{ fontSize: 13, fontWeight: 600, color: T.green }}>57%</span>} />
        <Row left={<Thumb w={34} />} title="Data Communication Network Devices" meta="12 slides · not started" />
        <Row last left={<Thumb w={26} />} title="Pointer to Pointer in C" meta="12 slides · finished" right={<span style={{ color: T.green, display: 'flex' }} role="img" aria-label="Finished"><Icon name="check" size={22} sw={2} /></span>} />
      </section>
    </Page>
  );
}
