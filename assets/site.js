// NBA Picks 26-27
const PLAYERS = ["Luka Doncic","Victor Wembanyama","Shai Gilgeous-Alexander","Nikola Jokic","Giannis Antetokounmpo","Jayson Tatum","Anthony Edwards","Jalen Brunson","Cade Cunningham","Donovan Mitchell","Jalen Williams","Kevin Durant","LeBron James","Stephen Curry","Anthony Davis","Joel Embiid","Tyrese Haliburton","Paolo Banchero","Franz Wagner","Evan Mobley","Amen Thompson","Ausar Thompson","Alperen Sengun","Jalen Johnson","Trae Young","LaMelo Ball","Devin Booker","De'Aaron Fox","Tyrese Maxey","Jaylen Brown","Kawhi Leonard","James Harden","Kyrie Irving","Damian Lillard","Karl-Anthony Towns","Domantas Sabonis","Rudy Gobert","Jaren Jackson Jr.","Chet Holmgren","Draymond Green","Dyson Daniels","Bam Adebayo","Scottie Barnes","Brandon Ingram","Zion Williamson","Ja Morant","Lauri Markkanen","Dejounte Murray","Derrick White","Jrue Holiday","Kristaps Porzingis","Aaron Gordon","Jamal Murray","Michael Porter Jr.","Austin Reaves","Darius Garland","Jarrett Allen","Pascal Siakam","OG Anunoby","Mikal Bridges","Josh Hart","Alex Caruso","Luguentz Dort","Trey Murphy III","Cooper Flagg","Dylan Harper","VJ Edgecombe","Kon Knueppel","Cedric Coward","Moussa Diabate","Nickeil Alexander-Walker","Keldon Johnson","Deni Avdija","Jalen Duren","Ausar Thompson"];
const ROOKIES = ["AJ Dybantsa","Darryn Peterson","Cameron Boozer","Caleb Wilson","Keaton Wagler","Mikel Brown Jr.","Darius Acuff Jr.","Kingston Flemings","Morez Johnson Jr.","Brayden Burries","Yaxel Lendeborg","Aday Mara","Nate Ament","Hannes Steinbach","Dailyn Swain","Bennett Stirtz","Ebuka Okorie","Christian Anderson","Allen Graves","Jayden Quaintance","Karim Lopez","Labaron Philon Jr.","Zuby Ejiofor","Cameron Carr"];
const COACHES = ["Quin Snyder","Joe Mazzulla","Jordi Fernandez","Tiago Splitter","Charles Lee","Kenny Atkinson","Dusty May","David Adelman","J.B. Bickerstaff","Steve Kerr","Ime Udoka","Rick Carlisle","Tyronn Lue","JJ Redick","Tuomas Iisalo","Erik Spoelstra","Taylor Jenkins","Chris Finch","Jamahl Mosley","Mike Brown","Mark Daigneault","Sean Sweeney","Nick Nurse","Jordan Ott","Micah Nori","Doug Christie","Mitch Johnson","Darko Rajakovic","Will Hardy","Brian Keefe"];

function fillList(id, names){ const dl = document.getElementById(id); if(!dl) return; names.forEach(p => { const o = document.createElement('option'); o.value = p; dl.appendChild(o); }); }
fillList('players', PLAYERS); fillList('rookies', ROOKIES); fillList('coaches', COACHES);
function buildRow(id, listId, n){ const d = document.getElementById(id); if(!d) return; for(let i=0;i<(n||5);i++){ const inp = document.createElement('input'); inp.className='pl'; inp.setAttribute('list', listId || 'players'); inp.setAttribute('autocomplete','off'); inp.placeholder='Player '+(i+1); inp.setAttribute('aria-label', id + ' player ' + (i+1)); d.appendChild(inp); } }
[['f-nba1'],['f-nba2'],['f-nba3'],['f-def1'],['f-def2'],['f-rook1','rookies'],['f-rook2','rookies'],['f-ase-s'],['f-ase-r','players',7],['f-asw-s'],['f-asw-r','players',7]].forEach(([id, list, n]) => buildRow(id, list, n));

function vals(id){ return Array.from(document.getElementById(id).querySelectorAll('input')).map(i => i.value.trim()); }
function v(id){ return document.getElementById(id).value.trim(); }
function collect(){
  return {
    name: v('f-name'),
    mvp: v('f-mvp'), dpoy: v('f-dpoy'), roy: v('f-roy'), mip: v('f-mip'),
    smoy: v('f-smoy'), clutch: v('f-clutch'), coty: v('f-coty'),
    hustle: v('f-hustle'), sportsmanship: v('f-sport'), teammate: v('f-team'),
    socialJustice: v('f-sjc'), eoy: v('f-eoy'),
    asEastStarters: vals('f-ase-s'), asEastReserves: vals('f-ase-r'),
    asWestStarters: vals('f-asw-s'), asWestReserves: vals('f-asw-r'),
    allNba1: vals('f-nba1'), allNba2: vals('f-nba2'), allNba3: vals('f-nba3'),
    allDef1: vals('f-def1'), allDef2: vals('f-def2'),
    allRookie1: vals('f-rook1'), allRookie2: vals('f-rook2'),
    submitted: new Date().toISOString().slice(0,10)
  };
}
function validate(p){
  if(!p.name) return 'Add your name.';
  for(const [k,label] of [['mvp','MVP'],['dpoy','Defensive Player of the Year'],['roy','Rookie of the Year'],['mip','Most Improved Player'],['smoy','Sixth Man of the Year'],['clutch','Clutch Player of the Year'],['coty','Coach of the Year'],['hustle','Hustle Award'],['sportsmanship','Sportsmanship Award'],['teammate','Teammate of the Year'],['socialJustice','Social Justice Champion'],['eoy','Executive of the Year']]) if(!p[k]) return 'Missing: ' + label;
  const allstar = p.asEastStarters.concat(p.asEastReserves, p.asWestStarters, p.asWestReserves);
  if(allstar.some(x => !x)) return 'Fill all 24 All-Star slots (12 per conference).';
  if(new Set(allstar.map(x => x.toLowerCase())).size !== 24) return 'All-Star: each player can only appear once across both conferences.';
  const nba = p.allNba1.concat(p.allNba2, p.allNba3), def = p.allDef1.concat(p.allDef2), rook = p.allRookie1.concat(p.allRookie2);
  if(nba.some(x => !x)) return 'Fill all 15 All-NBA slots.';
  if(def.some(x => !x)) return 'Fill all 10 All-Defensive slots.';
  if(rook.some(x => !x)) return 'Fill all 10 All-Rookie slots.';
  if(new Set(nba.map(x => x.toLowerCase())).size !== 15) return 'All-NBA: each player can only appear once across the three teams.';
  if(new Set(def.map(x => x.toLowerCase())).size !== 10) return 'All-Defensive: each player can only appear once across both teams.';
  if(new Set(rook.map(x => x.toLowerCase())).size !== 10) return 'All-Rookie: each player can only appear once across both teams.';
  return null;
}
function fmt(p){
  return `NBA 26-27 Picks - ${p.name}
MVP: ${p.mvp}
DPOY: ${p.dpoy}
Rookie of the Year: ${p.roy}
Most Improved: ${p.mip}
Sixth Man: ${p.smoy}
Clutch Player: ${p.clutch}
Coach of the Year: ${p.coty}
Hustle Award: ${p.hustle}
Sportsmanship: ${p.sportsmanship}
Teammate of the Year: ${p.teammate}
Social Justice Champion: ${p.socialJustice}
Executive of the Year: ${p.eoy}
All-Star East starters: ${p.asEastStarters.join(', ')}
All-Star East reserves: ${p.asEastReserves.join(', ')}
All-Star West starters: ${p.asWestStarters.join(', ')}
All-Star West reserves: ${p.asWestReserves.join(', ')}
All-NBA 1st: ${p.allNba1.join(', ')}
All-NBA 2nd: ${p.allNba2.join(', ')}
All-NBA 3rd: ${p.allNba3.join(', ')}
All-Def 1st: ${p.allDef1.join(', ')}
All-Def 2nd: ${p.allDef2.join(', ')}
All-Rookie 1st: ${p.allRookie1.join(', ')}
All-Rookie 2nd: ${p.allRookie2.join(', ')}`;
}
function flash(t, ok){ const m = document.getElementById('msg'); m.textContent = t; m.className = ok ? 'ok' : 'err'; }
function doCopy(text){
  if(navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
  const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); return Promise.resolve();
}
const btnCopy = document.getElementById('btn-copy');
if(btnCopy) btnCopy.addEventListener('click', () => {
  const p = collect(); const err = validate(p); if(err) return flash(err, false);
  doCopy(fmt(p)).then(() => flash('Copied. Now paste it in the group chat and send it to Miguel.', true))
    .catch(() => flash('Copy failed. Long-press and select the text instead.', false));
});
const btnJson = document.getElementById('btn-json');
if(btnJson) btnJson.addEventListener('click', () => {
  const p = collect(); const err = validate(p); if(err) return flash(err, false);
  doCopy(JSON.stringify(p)).then(() => flash('JSON copied (for the admin file).', true))
    .catch(() => flash('Copy failed.', false));
});

/* Leaderboard */
function single(s, pick, winner, top3, pts, half){
  if(!winner) return s;
  if(pick === winner) return s + pts;
  if((top3 || []).includes(pick)) return s + half;
  return s;
}
function score(p, r){
  let s = 0;
  s = single(s, p.mvp, r.mvp, r.mvpTop3, 10, 5);
  s = single(s, p.dpoy, r.dpoy, r.dpoyTop3, 8, 4);
  s = single(s, p.roy, r.roy, r.royTop3, 8, 4);
  s = single(s, p.mip, r.mip, r.mipTop3, 8, 4);
  s = single(s, p.smoy, r.smoy, r.smoyTop3, 6, 3);
  s = single(s, p.clutch, r.clutch, r.clutchTop3, 6, 3);
  s = single(s, p.coty, r.coty, r.cotyTop3, 6, 3);
  s = single(s, p.hustle, r.hustle, null, 4, 0);
  s = single(s, p.sportsmanship, r.sportsmanship, null, 4, 0);
  s = single(s, p.teammate, r.teammate, null, 4, 0);
  s = single(s, p.socialJustice, r.socialJustice, null, 4, 0);
  s = single(s, p.eoy, r.eoy, null, 4, 0);
  [['asEastStarters','asEastReserves'],['asWestStarters','asWestReserves']].forEach(([sk, rk]) => {
    (p[sk] || []).forEach(x => { if((r[sk] || []).includes(x)) s += 2; else if((r[rk] || []).includes(x)) s += 1; });
    (p[rk] || []).forEach(x => { if((r[rk] || []).includes(x)) s += 2; else if((r[sk] || []).includes(x)) s += 1; });
  });
  [['allNba1',3,2],['allNba2',3,2],['allNba3',3,2]].forEach(([k, exact, any]) => {
    const all = (r.allNba1 || []).concat(r.allNba2 || [], r.allNba3 || []);
    (p[k] || []).forEach(x => { if((r[k] || []).includes(x)) s += exact; else if(all.includes(x)) s += any; });
  });
  [['allDef1',2,1],['allDef2',2,1]].forEach(([k, exact, any]) => {
    const all = (r.allDef1 || []).concat(r.allDef2 || []);
    (p[k] || []).forEach(x => { if((r[k] || []).includes(x)) s += exact; else if(all.includes(x)) s += any; });
  });
  [['allRookie1',2,1],['allRookie2',2,1]].forEach(([k, exact, any]) => {
    const all = (r.allRookie1 || []).concat(r.allRookie2 || []);
    (p[k] || []).forEach(x => { if((r[k] || []).includes(x)) s += exact; else if(all.includes(x)) s += any; });
  });
  return s;
}
function hasResults(r){ return r && (r.mvp || r.dpoy || r.roy || r.mip || r.smoy || r.clutch || r.coty || r.hustle || (r.allNba1 || []).length || (r.asEastStarters || []).length); }
function renderBoard(){
  const b = document.getElementById('board'); if(!b) return;
  const picks = window.PICKS || [], r = window.RESULTS || {};
  if(!picks.length){ b.innerHTML = '<div class="panel"><p class="empty">No entries yet. Be the first: make your picks and send them to Miguel.</p></div>'; return; }
  const scored = hasResults(r);
  const rows = picks.map(p => ({ p, s: score(p, r) })).sort((a, b) => b.s - a.s);
  let html = '<div class="panel"><h2>Leaderboard</h2><p class="sub">' + (scored ? 'Scored against official results so far.' : 'Results not in yet. Standings go live as results are announced (Apr-Jun 2027).') + '</p><table><tr><th>#</th><th>Name</th><th>Pts</th><th>Picks</th></tr>';
  rows.forEach((x, i) => {
    html += `<tr><td class="board-rank">${i+1}</td><td><span class="board-name">${x.p.name}</span><br><span class="picks-detail">in ${x.p.submitted || '-'}</span></td><td>${scored ? x.s : '-'}</td>
      <td class="picks-detail">MVP: ${x.p.mvp}<br>DPOY: ${x.p.dpoy}<br>ROY: ${x.p.roy || '-'}<br>6MOY: ${x.p.smoy || '-'}</td></tr>`;
  });
  b.innerHTML = html + '</table></div>';
}

/* Tabs */
function switchTab(name){
  document.querySelectorAll('.site-nav a').forEach(x => {
    if(x.dataset.tab === name) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current');
  });
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const target = document.getElementById('tab-' + name);
  if(target) target.classList.add('active');
  if(name === 'board') renderBoard();
}
document.querySelectorAll('.site-nav a').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(document.startViewTransition) document.startViewTransition(() => switchTab(btn.dataset.tab));
    else switchTab(btn.dataset.tab);
  });
});

/* Header shadow after scroll */
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

/* Reveal on scroll (hidden state only exists under html.js) */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = document.querySelectorAll('.reveal');
els.forEach((el, i) => el.style.setProperty('--i', Math.min(i, 8)));
if(reduce || !('IntersectionObserver' in window)) els.forEach(el => el.classList.add('in-view'));
else {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if(en.isIntersecting){ en.target.classList.add('in-view'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -10% 0px' });
  els.forEach(el => io.observe(el));
}

renderBoard();
window.siteReady = true;
