import * as Viewer from './viewer/Viewer.jsx';
const screens = import.meta.glob('./screens/*.jsx', { eager: true });
const byName = Object.fromEntries(Object.entries(screens).map(([p, m]) => [p.match(/\/([^/]+)\.jsx$/)[1], m]));
byName.Viewer = Viewer;

// Same screen opened in another state, handy for links and screenshots.
export const aliases = {
  ViewerSide: ['Viewer', { startOpen: true, level: 1 }],
  ViewerSideDeeper: ['Viewer', { startOpen: true, level: 2 }],
  ViewerListen: ['Viewer', { startListening: true }],
  ReviewAnswer: ['Review', { showAnswer: true }]
};

export function resolve(name) {
  const a = aliases[name];
  const mod = byName[a ? a[0] : name];
  if (!mod) return null;
  return { Screen: mod.default, title: mod.title, props: a ? a[1] : {}, landscape: !!mod.landscape };
}
