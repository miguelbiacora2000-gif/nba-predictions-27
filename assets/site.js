// NBA Picks 26-27
const PLAYERS = ["Luka Doncic", "Victor Wembanyama", "Shai Gilgeous-Alexander", "Nikola Jokic", "Giannis Antetokounmpo", "Jayson Tatum", "Anthony Edwards", "Jalen Brunson", "Cade Cunningham", "Donovan Mitchell", "Jalen Williams", "Kevin Durant", "LeBron James", "Stephen Curry", "Anthony Davis", "Joel Embiid", "Tyrese Haliburton", "Paolo Banchero", "Franz Wagner", "Evan Mobley", "Amen Thompson", "Ausar Thompson", "Alperen Sengun", "Jalen Johnson", "Trae Young", "LaMelo Ball", "Devin Booker", "De'Aaron Fox", "Tyrese Maxey", "Jaylen Brown", "Kawhi Leonard", "James Harden", "Kyrie Irving", "Damian Lillard", "Karl-Anthony Towns", "Domantas Sabonis", "Rudy Gobert", "Jaren Jackson Jr.", "Chet Holmgren", "Draymond Green", "Dyson Daniels", "Bam Adebayo", "Scottie Barnes", "Brandon Ingram", "Zion Williamson", "Ja Morant", "Lauri Markkanen", "Dejounte Murray", "Derrick White", "Jrue Holiday", "Kristaps Porzingis", "Aaron Gordon", "Jamal Murray", "Michael Porter Jr.", "Austin Reaves", "Darius Garland", "Jarrett Allen", "Pascal Siakam", "OG Anunoby", "Mikal Bridges", "Josh Hart", "Alex Caruso", "Luguentz Dort", "Trey Murphy III", "Cooper Flagg", "Dylan Harper", "VJ Edgecombe", "Kon Knueppel", "Cedric Coward", "Moussa Diabate", "Nickeil Alexander-Walker", "Keldon Johnson", "Deni Avdija", "Jalen Duren", "Aaron Nesmith", "Aaron Wiggins", "Ace Bailey", "Aday Mara", "Adem Bona", "Adou Thiero", "Ajay Mitchell", "AJ Dybantsa", "A.J. Green", "AJ Johnson", "Alex Karaban", "Alex Morales", "Alex Sarr", "Al Horford", "Alijah Martin", "Allen Graves", "Alpha Diallo", "Amari Williams", "Andre Drummond", "Andrew Nembhard", "Andrew Wiggins", "Anfernee Simons", "Anthony Black", "Anthony Gill", "Ariel Hukporti", "Arthur Kaluma", "Asa Newell", "Ayo Dosunmu", "Baba Miller", "Baylor Scheierman", "Bennedict Mathurin", "Bennett Stirtz", "Ben Saraf", "Ben Sheppard", "Ben Simmons", "Bilal Coulibaly", "Bobby Portis", "Bogdan Bogdanovic", "Bogoljub Markovic", "Bones Hyland", "Braden Smith", "Bradley Beal", "Branden Carlson", "Brandin Podziemski", "Brandon Miller", "Brandon Williams", "Brayden Burries", "Brice Sensabaugh", "Bronny James", "Brook Lopez", "Brooks Barnhizer", "Bruce Thornton", "Bryce Hopkins", "Bryce McGowens", "Bub Carrington", "Buddy Hield", "Caleb Love", "Caleb Martin", "Caleb Wilson", "Cam Christie", "Cameron Boozer", "Cameron Carr", "Cameron Johnson", "Cam Spencer", "Cam Whitmore", "Caris LeVert", "Carson Cooper", "Carter Bryant", "Cason Wallace", "Chaney Johnson", "Charles Bassey", "Chaz Lanier", "Chris Cenac Jr.", "Chris Manon", "Christian Anderson Jr.", "Christian Braun", "Chris Youngblood", "CJ McCollum", "Clint Capela", "Coby White", "Cody Williams", "Colin Castleton", "Collin Gillespie", "Collin Murray-Boyles", "Collin Sexton", "Corey Kispert", "Cormac Ryan", "Craig Porter Jr.", "Daeqwon Plowden", "Dailyn Swain", "Dalton Knecht", "Daniel Gafford", "Daniss Jenkins", "Danny Wolf", "Darius Acuff Jr.", "DaRon Holmes", "Darryn Peterson", "David Jones Garcia", "Davion Mitchell", "Day'Ron Sharpe", "Deandre Ayton", "De'Andre Hunter", "DeAndre Jordan", "De'Anthony Melton", "Dean Wade", "DeMar DeRozan", "Dennis Schroder", "Dereck Lively II", "Derik Queen", "Derrick Jones Jr.", "Desmond Bane", "Devin Carter", "Devin Vassell", "Dillon Brooks", "Dillon Mitchell", "Dominick Barlow", "Donovan Clingan", "Donte DiVincenzo", "Dorian Finney-Smith", "Drake Powell", "Drew Timme", "Dru Smith", "Duncan Robinson", "Duop Reath", "Ebuka Okorie", "Egor Demin", "Elijah Harkless", "Emanuel Sharp", "Ernest Udeh Jr.", "Felix Okpara", "Fred VanVleet", "Gary Payton II", "Gary Trent Jr.", "Georges Niang", "GG Jackson II", "Goga Bitadze", "Gradey Dick", "Graham Ike", "Grant Nelson", "Grant Williams", "Grayson Allen", "Gui Santos", "Hannes Steinbach", "Harrison Barnes", "Harrison Ingram", "Henri Veesaar", "Herbert Jones", "Hugo Gonzalez", "Immanuel Quickley", "Isaac Jones", "Isaac Okoro", "Isaiah Collier", "Isaiah Crawford", "Isaiah Evans", "Isaiah Hartenstein", "Isaiah Jackson", "Isaiah Joe", "Isaiah Stewart", "Ivica Zubac", "Izaiyah Nelson", "Jabari Smith Jr.", "Jabari Walker", "Jaden Akins", "Jaden Bradley", "Jaden Hardy", "Jaden McDaniels", "Jae'Sean Tate", "Jahmai Mashack", "Jahmir Young", "Jaime Jaquez Jr.", "Jake LaRavia", "Ja'Kobe Walter", "Ja'Kobi Gillespie", "Jakob Poeltl", "Jalen Green", "Jalen Pickett", "Jalen Slawson", "Jalen Smith", "Jalen Suggs", "Jalen Wilson", "Jamal Cain", "Jamal Shead", "Jamaree Bouyea", "James Wiseman", "Jamir Watkins", "Jamison Battle", "Jarace Walker", "Jared McCain", "Jaron Pierre Jr.", "Jarred Vanderbilt", "Jase Richardson", "Javon Small", "Javonte Green", "Jaxson Hayes", "Jayden Quaintance", "Jay Huff", "Jaylen Clark", "Jaylen Wells", "Jaylin Sellers", "Jaylin Williams", "Jaylon Tyson", "Jayson Kent", "Jerami Grant", "Jeremiah Fears", "Jericho Sims", "Jett Howard", "Jevon Carter", "Jimmy Butler", "Joan Beringer", "Jock Landale", "John Collins", "Johnny Furphy", "John Tonje", "Jonathan Isaac", "Jonathan Kuminga", "Jonathan Mogbo", "Jordan Clarkson", "Jordan Goodwin", "Jordan Hawkins", "Jordan McLaughlin", "Jordan Miller", "Jordan Poole", "Jordan Walsh", "Jose Alvarado", "Josh Dix", "Josh Giddey", "Josh Green", "Josh Minott", "Josh Okogie", "Joshua Jefferson", "Julian Champagnie", "Julian Phillips", "Julian Reese", "Julian Strawther", "Julius Randle", "Justin Champagnie", "Justin Edwards", "Jusuf Nurkic", "Kam Jones", "Karim Lopez", "Karlo Matkovic", "Kasparas Jakucionis", "Keaton Wagler", "Keegan Murray", "Kel'el Ware", "Kelly Oubre Jr.", "Kenrich Williams", "Kentavious Caldwell-Pope", "Keon Ellis", "Keshad Johnson", "Keshon Gilbert", "Kevin Huerter", "Kevin McCullar Jr.", "Kevon Looney", "Keyonte George", "Khalifa Diop", "Khaman Maluach", "Khris Middleton", "Killian Hayes", "Kingston Flemings", "Klay Thompson", "Koa Peat", "Kobe Brown", "Kobe Bufkin", "Kobe Sanders", "Kris Dunn", "Kris Murray", "Kylan Boswell", "Kyle Anderson", "Kyle Filipowski", "Kyle Kuzma", "Kyshawn George", "Labaron Philon Jr.", "Landry Shamet", "Larry Nance Jr.", "Leaky Black", "Leonard Miller", "Liam McNeeley", "LJ Cryer", "Luka Garza", "Luke Kennard", "Luke Kornet", "Malachi Smith", "Malevy Leons", "Malik Dia", "Malik Monk", "Maliq Brown", "Marcus Sasser", "Marcus Smart", "Mario Hezonja", "Mark Williams", "Marvin Bagley III", "Mason Plumlee", "Matas Buzelis", "Matisse Thybulle", "Max Christie", "Maxime Raynaud", "Max Strus", "Meleek Thomas", "Micah Peavy", "Micah Potter", "Michael Ajayi", "Mike Conley", "Mikel Brown Jr.", "Miles Bridges", "Miles McBride", "Mitchell Robinson", "Mo Bamba", "Mohamed Diawara", "Morez Johnson Jr.", "Moritz Wagner", "Moses Moody", "Mouhamed Gueye", "Moussa Cisse", "Myles Turner", "Myron Gardner", "Nae'Qwan Tomlin", "Naji Marshall", "Nate Ament", "Nate Bittle", "Naz Reid", "Neemias Queta", "Nic Claxton", "Nick Martinelli", "Nick Richards", "Nick Smith Jr.", "Nicolas Batum", "Nikola Jovic", "Nikola Topic", "Nikola Vucevic", "Nique Clifford", "Noa Essengue", "Noah Clowney", "Noah Penda", "Nolan Traore", "Norchad Omier", "Norman Powell", "Obi Toppin", "Olivier-Maxence Prosper", "Onyeka Okongwu", "Oscar Tshiebwe", "Oso Ighodaro", "Ousmane Dieng", "Pacome Dadiet", "Patrick Williams", "Pat Spencer", "Paul George", "Paul Reed", "Payton Pritchard", "Pelle Larsson", "Pete Nance", "Peyton Watson", "PJ Hall", "P.J. Washington", "Precious Achiuwa", "Quadir Copeland", "Quentin Grimes", "Quenton Jackson", "Quinten Post", "Rasheer Fleming", "Rayan Rupert", "RayJ Dennis", "Reece Beekman", "Reed Sheppard", "Richie Saunders", "Riley Minix", "RJ Barrett", "Robert Williams", "Rocco Zikarsky", "Ron Harper Jr.", "Ron Holland", "Royce O'Neale", "Rui Hachimura", "Ryan Conwell", "Ryan Dunn", "Ryan Kalkbrenner", "Ryan Nembhard", "Ryan Rollins", "Saddiq Bey", "Sam Hauser", "Sam Merrill", "Sandro Mamukelashvili", "Santi Aldama", "Scoot Henderson", "Scotty Pippen Jr.", "Sean Pedulla", "Sergio de Larrea", "Shaedon Sharpe", "Sidy Cissoko", "Simone Fontecchio", "Sion James", "Spencer Jones", "Stephon Castle", "Steven Adams", "Svi Mykhailiuk", "Tacko Fall", "Tari Eason", "Tarik Biberovic", "Tarris Reed Jr.", "Taurean Prince", "Taylor Hendricks", "Team Totals", "Terance Mann", "Terrence Shannon Jr.", "Thomas Bryant", "Thomas Sorber", "Tidjane Salaun", "Tim Hardaway Jr.", "T.J. McConnell", "Tobe Awaka", "Tobias Harris", "Tobi Lawal", "Tolu Smith", "Tony Bradley", "Toumani Camara", "Trayce Jackson-Davis", "Tre Donaldson", "Tre Johnson", "Tre Jones", "Tre Mann", "Trendon Watford", "Trevon Brazile", "Trey Alexander", "Trey Lyles", "Tristan Da Silva", "Tristan Vukcevic", "Ty Jerome", "Tyler Bilodeau", "Tyler Herro", "Tyler Kolek", "Tyler Nickel", "Tyrese Proctor", "Tyus Jones", "Ugonna Onyenso", "Vit Krejci", "Vladislav Goldin", "Walker Kessler", "Walter Clayton", "Wendell Carter Jr.", "Will Richard", "Will Riley", "Yang Hansen", "Yanic Konan Niederhauser", "Yaxel Lendeborg", "Yves Missi", "Zaccharie Risacher", "Zach Collins", "Zach Edey", "Zach LaVine", "Zeke Nnaji", "Ziaire Williams", "Zuby Ejiofor", "Zyon Pullin"];
const ROOKIES = ["AJ Dybantsa", "Darryn Peterson", "Cameron Boozer", "Caleb Wilson", "Keaton Wagler", "Mikel Brown Jr.", "Darius Acuff Jr.", "Kingston Flemings", "Morez Johnson Jr.", "Brayden Burries", "Yaxel Lendeborg", "Aday Mara", "Nate Ament", "Hannes Steinbach", "Dailyn Swain", "Bennett Stirtz", "Ebuka Okorie", "Christian Anderson", "Allen Graves", "Jayden Quaintance", "Karim Lopez", "Labaron Philon Jr.", "Zuby Ejiofor", "Cameron Carr", "Alex Karaban", "Alpha Diallo", "Arthur Kaluma", "Baba Miller", "Bogoljub Markovic", "Braden Smith", "Bruce Thornton", "Bryce Hopkins", "Carson Cooper", "Chris Cenac Jr.", "Christian Anderson Jr.", "Dillon Mitchell", "Emanuel Sharp", "Ernest Udeh Jr.", "Felix Okpara", "Graham Ike", "Henri Veesaar", "Isaiah Evans", "Izaiyah Nelson", "Jaden Akins", "Jaden Bradley", "Ja'Kobi Gillespie", "Jaron Pierre Jr.", "Jaylin Sellers", "Josh Dix", "Joshua Jefferson", "Khalifa Diop", "Koa Peat", "Kylan Boswell", "Malik Dia", "Maliq Brown", "Meleek Thomas", "Michael Ajayi", "Nate Bittle", "Nick Martinelli", "Quadir Copeland", "Richie Saunders", "Ryan Conwell", "Sergio de Larrea", "Tarik Biberovic", "Tarris Reed Jr.", "Thomas Sorber", "Tobe Awaka", "Tobi Lawal", "Tre Donaldson", "Trevon Brazile", "Tyler Bilodeau", "Tyler Nickel", "Ugonna Onyenso"];
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
    smoy: v('f-smoy'), coty: v('f-coty'),
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
  for(const [k,label] of [['mvp','MVP'],['dpoy','Defensive Player of the Year'],['roy','Rookie of the Year'],['mip','Most Improved Player'],['smoy','Sixth Man of the Year'],['coty','Coach of the Year']]) if(!p[k]) return 'Missing: ' + label;
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
Coach of the Year: ${p.coty}
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
  s = single(s, p.mvp, r.mvp, r.mvpTop3, 15, 7);
  s = single(s, p.dpoy, r.dpoy, r.dpoyTop3, 12, 6);
  s = single(s, p.roy, r.roy, r.royTop3, 12, 6);
  s = single(s, p.mip, r.mip, r.mipTop3, 12, 6);
  s = single(s, p.smoy, r.smoy, r.smoyTop3, 6, 3);
  s = single(s, p.coty, r.coty, r.cotyTop3, 6, 3);
  // All-Star: 0.5 per player who makes a roster (either bucket counts; injury replacements are added to the results lists)
  [['asEastStarters','asEastReserves'],['asWestStarters','asWestReserves']].forEach(([sk, rk]) => {
    const all = (r[sk] || []).concat(r[rk] || []);
    (p[sk] || []).concat(p[rk] || []).forEach(x => { if(all.includes(x)) s += 0.5; });
  });
  // All-NBA: 1 per player in the exact team you called, 0.5 if on a different All-NBA team
  ['allNba1','allNba2','allNba3'].forEach(k => {
    const all = (r.allNba1 || []).concat(r.allNba2 || [], r.allNba3 || []);
    (p[k] || []).forEach(x => { if((r[k] || []).includes(x)) s += 1; else if(all.includes(x)) s += 0.5; });
  });
  // All-Defensive / All-Rookie: 0.5 per player on either team
  [['allDef1','allDef2'],['allRookie1','allRookie2']].forEach(([a, b]) => {
    const all = (r[a] || []).concat(r[b] || []);
    (p[a] || []).concat(p[b] || []).forEach(x => { if(all.includes(x)) s += 0.5; });
  });
  return s;
}
function hasResults(r){ return r && (r.mvp || r.dpoy || r.roy || r.mip || r.smoy || r.coty || (r.allNba1 || []).length || (r.asEastStarters || []).length); }
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
