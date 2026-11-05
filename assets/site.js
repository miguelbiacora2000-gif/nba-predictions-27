// NBA Picks 26-27
const PLAYERS = ["Luka Doncic","Victor Wembanyama","Shai Gilgeous-Alexander","Nikola Jokic","Giannis Antetokounmpo","Jayson Tatum","Anthony Edwards","Jalen Brunson","Cade Cunningham","Donovan Mitchell","Jalen Williams","Kevin Durant","LeBron James","Stephen Curry","Anthony Davis","Joel Embiid","Tyrese Haliburton","Paolo Banchero","Franz Wagner","Evan Mobley","Amen Thompson","Ausar Thompson","Alperen Sengun","Jalen Johnson","Trae Young","LaMelo Ball","Devin Booker","De'Aaron Fox","Tyrese Maxey","Jaylen Brown","Kawhi Leonard","James Harden","Kyrie Irving","Damian Lillard","Karl-Anthony Towns","Domantas Sabonis","Rudy Gobert","Jaren Jackson Jr.","Chet Holmgren","Draymond Green","Dyson Daniels","Bam Adebayo","Scottie Barnes","Brandon Ingram","Zion Williamson","Ja Morant","Lauri Markkanen","Dejounte Murray","Derrick White","Jrue Holiday","Kristaps Porzingis","Aaron Gordon","Jamal Murray","Michael Porter Jr.","Austin Reaves","Darius Garland","Jarrett Allen","Pascal Siakam","OG Anunoby","Mikal Bridges","Josh Hart","Alex Caruso","Luguentz Dort","Trey Murphy III","Cooper Flagg","Dylan Harper"];
const EAST = ["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers","Detroit Pistons","Indiana Pacers","Miami Heat","Milwaukee Bucks","New York Knicks","Orlando Magic","Philadelphia 76ers","Toronto Raptors","Washington Wizards"];
const WEST = ["Dallas Mavericks","Denver Nuggets","Golden State Warriors","Houston Rockets","LA Clippers","Los Angeles Lakers","Memphis Grizzlies","Minnesota Timberwolves","New Orleans Pelicans","Oklahoma City Thunder","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Utah Jazz"];

const dl = document.getElementById('players');
PLAYERS.forEach(p => { const o = document.createElement('option'); o.value = p; dl.appendChild(o); });
function buildRow(id){ const d = document.getElementById(id); if(!d) return; for(let i=0;i<5;i++){ const inp = document.createElement('input'); inp.className='pl'; inp.setAttribute('list','players'); inp.setAttribute('autocomplete','off'); inp.placeholder='Player '+(i+1); inp.setAttribute('aria-label', id + ' player ' + (i+1)); d.appendChild(inp); } }
['f-nba1','f-nba2','f-nba3','f-def1','f-def2'].forEach(buildRow);
function fillTeams(id, teams){ const s = document.getElementById(id); if(!s) return; s.innerHTML = '<option value="">Pick...</option>' + teams.map(t => `<option>${t}</option>`).join(''); }
fillTeams('f-east', EAST); fillTeams('f-west', WEST); fillTeams('f-champ', EAST.concat(WEST));

function vals(id){ return Array.from(document.getElementById(id).querySelectorAll('input')).map(i => i.value.trim()); }
function collect(){
  return {
    name: document.getElementById('f-name').value.trim(),
    mvp: document.getElementById('f-mvp').value.trim(),
    dpoy: document.getElementById('f-dpoy').value.trim(),
    allNba1: vals('f-nba1'), allNba2: vals('f-nba2'), allNba3: vals('f-nba3'),
    allDef1: vals('f-def1'), allDef2: vals('f-def2'),
    east: document.getElementById('f-east').value, west: document.getElementById('f-west').value,
    champion: document.getElementById('f-champ').value, finalsScore: document.getElementById('f-score').value,
    submitted: new Date().toISOString().slice(0,10)
  };
}
function validate(p){
  if(!p.name) return 'Add your name.';
  for(const [k,label] of [['mvp','MVP'],['dpoy','DPOY'],['east','East champion'],['west','West champion'],['champion','NBA champion'],['finalsScore','Finals score']]) if(!p[k]) return 'Missing: ' + label;
  const nba = p.allNba1.concat(p.allNba2, p.allNba3), def = p.allDef1.concat(p.allDef2);
  if(nba.some(x => !x)) return 'Fill all 15 All-NBA slots.';
  if(def.some(x => !x)) return 'Fill all 10 All-Defensive slots.';
  if(new Set(nba.map(x => x.toLowerCase())).size !== 15) return 'All-NBA: each player can only appear once across the three teams.';
  if(new Set(def.map(x => x.toLowerCase())).size !== 10) return 'All-Defensive: each player can only appear once across both teams.';
  if(p.champion !== p.east && p.champion !== p.west) return 'The NBA champion must be one of your two conference champions.';
  return null;
}
function fmt(p){
  return `NBA 26-27 Picks - ${p.name}\nMVP: ${p.mvp}\nDPOY: ${p.dpoy}\nAll-NBA 1st: ${p.allNba1.join(', ')}\nAll-NBA 2nd: ${p.allNba2.join(', ')}\nAll-NBA 3rd: ${p.allNba3.join(', ')}\nAll-Def 1st: ${p.allDef1.join(', ')}\nAll-Def 2nd: ${p.allDef2.join(', ')}\nFinals: ${p.east} vs ${p.west}\nChampion: ${p.champion} (${p.finalsScore})`;
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
function score(p, r){
  let s = 0;
  if(r.mvp){ if(p.mvp === r.mvp) s += 10; else if((r.mvpTop3 || []).includes(p.mvp)) s += 5; }
  if(r.dpoy){ if(p.dpoy === r.dpoy) s += 8; else if((r.dpoyTop3 || []).includes(p.dpoy)) s += 4; }
  [['allNba1',3,2],['allNba2',3,2],['allNba3',3,2]].forEach(([k, exact, any]) => {
    const all = (r.allNba1 || []).concat(r.allNba2 || [], r.allNba3 || []);
    (p[k] || []).forEach(x => { if((r[k] || []).includes(x)) s += exact; else if(all.includes(x)) s += any; });
  });
  [['allDef1',2,1],['allDef2',2,1]].forEach(([k, exact, any]) => {
    const all = (r.allDef1 || []).concat(r.allDef2 || []);
    (p[k] || []).forEach(x => { if((r[k] || []).includes(x)) s += exact; else if(all.includes(x)) s += any; });
  });
  if(r.east && p.east === r.east) s += 10;
  if(r.west && p.west === r.west) s += 10;
  if(r.champion && p.champion === r.champion){ s += 15; if(r.finalsScore && p.finalsScore === r.finalsScore) s += 5; }
  return s;
}
function hasResults(r){ return r && (r.mvp || r.dpoy || r.east || r.champion || (r.allNba1 || []).length); }
function renderBoard(){
  const b = document.getElementById('board'); if(!b) return;
  const picks = window.PICKS || [], r = window.RESULTS || {};
  if(!picks.length){ b.innerHTML = '<div class="panel"><p class="empty">No entries yet. Be the first: make your picks and send them to Miguel.</p></div>'; return; }
  const scored = hasResults(r);
  const rows = picks.map(p => ({ p, s: score(p, r) })).sort((a, b) => b.s - a.s);
  let html = '<div class="panel"><h2>Leaderboard</h2><p class="sub">' + (scored ? 'Scored against official results so far.' : 'Results not in yet. Standings go live as results are announced (Apr-Jun 2027).') + '</p><table><tr><th>#</th><th>Name</th><th>Pts</th><th>Picks</th></tr>';
  rows.forEach((x, i) => {
    html += `<tr><td class="board-rank">${i+1}</td><td><span class="board-name">${x.p.name}</span><br><span class="picks-detail">in ${x.p.submitted || '-'}</span></td><td>${scored ? x.s : '-'}</td>
      <td class="picks-detail">MVP: ${x.p.mvp}<br>DPOY: ${x.p.dpoy}<br>Champ: ${x.p.champion} (${x.p.finalsScore || '?'})</td></tr>`;
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
