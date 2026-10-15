import React from 'react';
import { createRoot } from 'react-dom/client';
import { resolve } from './routes.js';
import '@fontsource/sora/latin-600.css';
import '@fontsource/sora/latin-700.css';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';
import './shell.css';

const FIRST = 'FirstRun';
const HOME = 'Main';

function parse() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [name, query] = raw.split('?');
  const props = {};
  new URLSearchParams(query || '').forEach((v, k) => {
    props[k] = v === 'true' ? true : v === 'false' ? false : v;
  });
  return { name: name || '', props };
}

function seen() { try { return localStorage.getItem('onboarded') === '1'; } catch (e) { return true; } }
function markSeen() { try { localStorage.setItem('onboarded', '1'); } catch (e) {} }

function App() {
  const [route, setRoute] = React.useState(parse);
  React.useEffect(() => {
    const on = () => { setRoute(parse()); const r = document.querySelector('.screen-root'); if (r) r.scrollTop = 0; };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  let name = route.name;
  if (!name) name = seen() ? HOME : FIRST;
  if (name === 'HomeEmpty' || name === HOME) markSeen();
  const found = resolve(name) || resolve(HOME);
  const { Screen, title, props, landscape } = found;

  React.useEffect(() => { document.title = title + ' · Learned'; }, [title]);

  return (
    <div className="stage">
      <div className={`phone${landscape ? " landscape" : ""}`}>
        <Screen key={name + JSON.stringify(route.props)} {...props} {...route.props} />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  import('virtual:pwa-register').then(({ registerSW }) => registerSW({ immediate: true })).catch(() => {});
}
