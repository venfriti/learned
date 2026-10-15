(function () {
  function note(l, t) { return '<div class="note"><b>' + l + '</b><span>' + t + '</span></div>'; }
  function notes(a) { return '<div class="notes">' + a.map(function (n) { return note(n[0], n[1]); }).join('') + '</div>'; }
  function frame(eyebrow, title, inner, src) {
    return '<div class="eyebrow">' + eyebrow + '</div><h2>' + title + '</h2>' + inner + (src ? '<div class="src">' + src + '</div>' : '');
  }
  function app(n, title, nts, src) {
    return frame('The app · ' + n + ' of 9', title, notes(nts), src);
  }

  var S = [];
  // 1 title
  S.push({ t: 'Learned', dark: 1, title: 1, h: '<div class="titlebig"><span class="tap">tap  “I don’t get this”</span><h1>Learn it step by step, and get unstuck</h1><p>Learned: a visual, slide-based learning app for Nigerian university and polytechnic students.</p></div>' });
  // 2 problem
  S.push({ t: 'Students have material, but not a way to use it', h: frame('The problem · 1 of 2', 'Students have material, but not a way to use it',
    '<p class="lead">Three problems the brief names, as they show up for a student in a technical course:</p><div class="cards3">' +
    [['1', 'Finding resources', 'Notes, handouts, videos and chat groups. No easy way to tell which explanation is right, or where it came from.'],
     ['2', 'Staying engaged', 'Long PDFs and hour-long videos are hard to finish on a small phone and a small data budget. People drop off at the first confusing step.'],
     ['3', 'Getting guidance', 'A student stuck at 10 pm has nobody to ask. The NUC says universities admit about 700,000 of roughly 2 million applicants a year.']]
      .map(function (c) { return '<div class="card"><div class="big">' + c[0] + '</div><h3>' + c[1] + '</h3><p>' + c[2] + '</p></div>'; }).join('') + '</div>',
    'Sources: NUC via Nairametrics, September 2024. The rest is our framing and still needs checking with students.') });
  // 3 audience
  S.push({ t: 'The audience is online, on phones, and watching data', h: frame('The problem · 2 of 2', 'The audience is online, on phones, and watching data',
    '<div class="cards3" style="margin-top:36px">' +
    [['109M', 'Nigerians online at the end of 2025, 45.5% of the population', 'DataReportal, Digital 2026'],
     ['165M', 'mobile connections, so the phone is the main device', 'DataReportal, Digital 2026'],
     ['₦600', 'about the price of 1 GB of mobile data, and students pay it per megabyte', 'Team estimate, 2026']]
      .map(function (c) { return '<div class="card"><div class="big">' + c[0] + '</div><p style="margin-top:20px">' + c[1] + '</p><div class="meta">' + c[2] + '</div></div>'; }).join('') + '</div>' +
    '<div class="statement">So the design rule is text and diagrams, not video, with a shell that works offline.</div>',
    'Sources: DataReportal, Digital 2026 Nigeria (late 2025). The ₦600 per GB figure is a team estimate.') });
  // 4-12 app (the phone on the right shows these live — tap through it as you read)
  S.push({ t: 'Topic in, slides out, tap where you are lost', h: app(1, 'Topic in, slides out, tap where you are lost',
    [['1  Create', 'Type a topic, or use your own notes.'], ['2  Learn', 'Slides like a lecture deck: one idea each, with a diagram.'], ['3  Get unstuck', 'Tap “I don’t get this” for a cited side page.']]) });
  S.push({ t: 'Start from a topic, and start reading in seconds', h: app(2, 'Start from a topic, and start reading in seconds',
    [['One question', 'What do you want to understand? Rough is fine.'], ['Sources up front', 'Every slide cites IETF RFCs or OpenStax, and you can change that.'], ['Start reading early', 'The first slides arrive first. The deck saves offline when done.']]) });
  S.push({ t: 'Learn: resume first, then your decks', h: app(3, 'Learn: resume first, then your decks',
    [['Resume', 'One tap back to the slide where you stopped.'], ['Your decks', 'Progress on each, and which work offline.'], ['Deck page', 'Slide list, side-page markers and all sources.']]) });
  S.push({ t: 'Decks open full screen, as landscape slides', h: app(4, 'Decks open full screen, as landscape slides',
    [['Full screen, landscape', 'The deck opens like a presentation, with one idea per slide.'], ['One slim control bar', 'Close, progress, “I don’t get this”, listen, back and next.'], ['Works on any phone', 'Held upright, the slide is turned to fill the screen.']]) });
  S.push({ t: 'Get unstuck with a side page', h: app(5, 'Get unstuck with a side page',
    [['“I don’t get this”', 'Opens an explanation attached to that exact slide, with its source.'], ['Go deeper', 'Level 2 gives a second explanation. It is the last level.'], ['Keep for review', 'Saved on your phone; it comes back in Review.']]) });
  S.push({ t: 'Built to be listened to, not only read', h: app(6, 'Built to be listened to, not only read',
    [['Narration on every slide', 'Read aloud by the phone’s own voice. Nothing to download.'], ['You set the pace', 'Cycle the speed: 1x, 1.25x, 1.5x, 0.75x.'], ['Text stays', 'Audio supports the slide. It never replaces the text.']]) });
  S.push({ t: 'Quizzes that check, never block', h: app(7, 'Quizzes that check, never block',
    [['End of a deck', 'You are offered the quiz, or you can go back to Learn.'], ['Explained answers', 'Each answer says why, in a line or two.'], ['Always optional', 'Skipping never blocks the next deck.']]) });
  S.push({ t: 'Review brings back what you needed help with', h: app(8, 'Review brings back what you needed help with',
    [['Due today', 'One card from your side pages, with a question to answer first.'], ['Recall, then reveal', 'Try to answer, then show the answer.'], ['Later and quiz', 'Upcoming cards, and the topic quiz, on one screen.']]) });
  S.push({ t: 'A weekly goal, simple settings, optional profile', h: app(9, 'A weekly goal, simple settings, optional profile',
    [['Weekly goal', 'Two to five days a week. Missed days cost nothing.'], ['Data saver and Wi-Fi only', 'Text and diagrams only, and no mobile data spent on decks.'], ['Optional profile', 'Email and a 6-digit code. Learning works without one.']]) });
  // 13 constraints
  S.push({ t: 'How the design meets the brief’s constraints', h: frame('The brief · constraints', 'How the design meets the brief’s constraints',
    '<div class="grid2">' + [
      ['Credible, traceable sources', 'Curated sources, a citation on every claim. Pipeline not built yet.'],
      ['Low bandwidth', 'Text and diagrams, no video. Offline shell. Only extracted text is uploaded.'],
      ['Accessible', 'Narration, large targets, labelled controls.'],
      ['Personalisation without exclusion', 'Advised start, never forced. Weekly goal.'],
      ['Privacy', 'Profile optional; email and code only.'],
      ['Multilingual', 'English now. Pidgin and one local language planned, after native-speaker review.'],
      ['Local relevance', 'Nigerian technical courses and department course packs.']
    ].map(function (c) { return note(c[0], c[1]); }).join('') + '</div>') });
  // 14 impact
  S.push({ t: 'Impact: hypotheses a pilot would test', h: frame('Impact', 'Impact: hypotheses a pilot would test',
    '<div class="grid2" style="gap:24px">' + [
      ['Students finish more', 'Share of decks finished; return rate the following week'],
      ['Confusion gets resolved', 'Share of “I don’t get this” taps followed by a correct quiz answer'],
      ['Works on a small data budget', 'Megabytes per finished deck; share of sessions that work offline'],
      ['Lecturers see where a class struggles', 'Course packs published; slides flagged by many students']
    ].map(function (c) { return '<div class="card" style="padding:26px"><h3 style="color:var(--green);margin:0 0 10px">' + c[0] + '</h3><p>Measure: ' + c[1] + '</p></div>'; }).join('') + '</div>',
    'No usage data exists yet. Quiz outcomes, not streaks, should be the headline measure.') });
  // 15 market
  S.push({ t: 'Free for students, paid for by a sponsor', h: frame('Marketability', 'Free for students, paid for by a sponsor',
    '<div class="tworow"><div class="notes">' + [
      ['Edukoya shut down in early 2025', 'It raised $3.5M, but free users did not convert to paying customers.'],
      ['Career outcomes sell', 'Platforms tied to a job or skill do better with learners who see a return.'],
      ['Gap: tertiary technical courses', 'uLesson charges from ₦50,000 a year and serves school level.']
    ].map(function (c) { return note(c[0], c[1]); }).join('') + '</div>' +
    '<div class="notes">' + [
      ['Institution or department licence', 'The school pays; students use it free. Risk: slow sales cycles.'],
      ['Sponsor or telco zero-rating', 'A partner pays; no data cost to students. Risk: depends on a partner.'],
      ['Optional paid extras', 'Exam packs, offline bundles. Risk: low willingness to pay.']
    ].map(function (c) { return note(c[0], c[1]); }).join('') + '</div></div>' +
    '<div class="statement">Start with one or two polytechnic departments and one lecturer each, in one subject, for one term.</div>',
    'Sources: Techloy on Edukoya (27 Feb 2025); TechCabal on uLesson pricing. The business model is a proposal, not tested.') });
  // 16 status
  S.push({ t: 'What exists today, and what does not', h: frame('Status', 'What exists today, and what does not',
    '<div class="grid2">' + [
      ['Built', ['Installable phone web app (PWA) with sample content', 'Three tabs: Learn, Review and Me', 'Landscape slide player with side pages and narration', 'Quiz, Review, weekly goal and settings'], 'var(--green)'],
      ['Not built yet', ['Deck generation from curated sources, with citations', 'Source checking and expert review of explanations', 'Upload notes (button only for now)', 'Accounts, saved progress, lecturer view', 'Pidgin and local-language versions'], 'var(--navy)']
    ].map(function (c) { return '<div class="card" style="padding:30px"><h3 style="font-size:24px;margin:0 0 18px;color:' + c[2] + '">' + c[0] + '</h3><ul class="list">' + c[1].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>'; }).join('') + '</div>') });
  // 17 try
  S.push({ t: 'Try it yourself', dark: 1, h: '<div class="eyebrow">Try it</div><h1>Try it yourself</h1>' +
    '<div class="tryrow"><div class="darktext"><p>The app on this site is the working prototype, with a sample lesson on computer network protocols. The phone on the right is live — try it as you scroll.</p>' +
    '<div class="btnrow"><a class="btn mint" href="try/">Try it in your browser</a><a class="btn ghost" href="app/">Open the full app</a></div>' +
    '<p class="fine">On a phone, open it and use Add to Home Screen to install it.</p></div>' +
    '<div class="qrbox"><div id="qr" role="img" aria-label="QR code that opens the app"></div><p>Scan to open on your phone</p></div></div>' });
  // 18 close
  S.push({ t: 'Test it in a real class', dark: 1, title: 1, h: '<div class="titlebig"><span class="tap">next  one cited deck</span><h1>Test it in a real class</h1><p>Build one fully cited deck (TCP, networking) and try it with a class before building more.</p></div>' });

  var slides = document.getElementById('slides'), live = document.getElementById('live');
  var prev = document.getElementById('prev'), next = document.getElementById('next'), count = document.getElementById('count');
  var els = S.map(function (s, i) {
    var d = document.createElement('section');
    d.className = 'slide' + (s.dark ? ' dark' : '') + (s.title ? ' title' : '');
    d.id = 'slide-' + (i + 1);
    d.setAttribute('aria-label', 'Slide ' + (i + 1) + ' of ' + S.length + ': ' + s.t);
    d.innerHTML = s.h; slides.appendChild(d); return d;
  });

  var cur = 0;
  function updateUI(i) {
    cur = i;
    count.textContent = (i + 1) + ' / ' + S.length;
    prev.disabled = i === 0; next.disabled = i === S.length - 1;
    live.textContent = 'Slide ' + (i + 1) + ' of ' + S.length + ': ' + S[i].t;
    history.replaceState(null, '', '#' + (i + 1));
  }
  function go(i) {
    i = Math.max(0, Math.min(S.length - 1, i));
    els[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (window.IntersectionObserver) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && en.intersectionRatio >= 0.55) {
          var i = els.indexOf(en.target);
          if (i >= 0 && i !== cur) updateUI(i);
        }
      });
    }, { root: slides, threshold: [0, 0.55, 1] });
    els.forEach(function (el) { io.observe(el); });
  }

  prev.onclick = function () { go(cur - 1); };
  next.onclick = function () { go(cur + 1); };
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var t = e.target && e.target.tagName;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && t !== 'BUTTON' && t !== 'A' && t !== 'SUMMARY')) { e.preventDefault(); go(cur + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); go(cur - 1); }
    else if (e.key === 'Home') { go(0); } else if (e.key === 'End') { go(S.length - 1); }
    else if (e.key === 'f' || e.key === 'F') { toggleFull(); }
  });

  function toggleFull() {
    var d = document, el = d.documentElement;
    if (d.fullscreenElement) d.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(function () {});
  }
  document.getElementById('full').onclick = toggleFull;
  var idle; function wake() { document.body.classList.remove('idle'); clearTimeout(idle); idle = setTimeout(function () { if (document.body.classList.contains('full')) document.body.classList.add('idle'); }, 2500); }
  document.addEventListener('fullscreenchange', function () { document.body.classList.toggle('full', !!document.fullscreenElement); wake(); });
  ['mousemove', 'touchstart', 'keydown'].forEach(function (ev) { document.addEventListener(ev, wake, { passive: true }); });
  window.addEventListener('hashchange', function () { var n = parseInt(location.hash.slice(1), 10); if (n) go(n - 1); });

  function drawQR() {
    var box = document.getElementById('qr'); if (!box || box.firstChild || typeof qrcode === 'undefined') return;
    var q = qrcode(0, 'M'); q.addData(location.origin + '/app/'); q.make();
    box.innerHTML = q.createSvgTag({ cellSize: 6, margin: 0, scalable: true });
  }
  drawQR();

  // jump straight to a slide on load (e.g. /#17), instantly, no animation
  var start = Math.max(0, Math.min(S.length - 1, (parseInt(location.hash.slice(1), 10) || 1) - 1));
  els[start].scrollIntoView({ block: 'start' });
  updateUI(start);

  // keep menu closed on outside click
  document.addEventListener('click', function (e) { var d = document.querySelector('.nav details'); if (d && d.open && !d.contains(e.target)) d.open = false; });

  // Live phone preview docked on the right: mirrors /try/'s frame, flips with the app's own orientation
  var box = document.getElementById('phonebox'), scaler = document.getElementById('phonescaler'), frameEl = document.getElementById('phoneframe');
  if (box && scaler && frameEl) {
    var land = false;
    function dims() { return land ? [844, 390, '36px'] : [390, 844, '44px']; }
    function fitPhone() {
      var d = dims(), w = d[0], h = d[1];
      var availW = box.clientWidth - 20, availH = box.clientHeight - 20;
      var k = Math.min(1, availW / (w + 20), availH / (h + 20));
      if (k < 0.3) k = 0.3;
      scaler.style.transform = 'scale(' + k + ')';
    }
    function setSize() {
      var d = dims();
      frameEl.style.width = d[0] + 'px'; frameEl.style.height = d[1] + 'px'; frameEl.style.borderRadius = d[2];
    }
    window.addEventListener('message', function (e) {
      if (e.origin !== location.origin || !e.data || e.data.learned !== 'orientation') return;
      var next = !!e.data.landscape;
      if (next === land) return;
      land = next;
      frameEl.classList.remove('turning-to-landscape', 'turning-to-portrait');
      void frameEl.offsetWidth; // restart the animation if one was already running
      frameEl.classList.add(land ? 'turning-to-landscape' : 'turning-to-portrait');
      fitPhone(); // the scaler eases to the new fit while the frame turns
    });
    frameEl.addEventListener('animationend', function () {
      frameEl.classList.remove('turning-to-landscape', 'turning-to-portrait');
      setSize();
    });
    window.addEventListener('resize', fitPhone);
    if (window.ResizeObserver) new ResizeObserver(fitPhone).observe(box);
    setSize(); fitPhone();
  }
})();
