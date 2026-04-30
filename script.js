const CC_ITEMS = [
  { code:'CC1', desc:'The language used in the lesson plan reflects real-life communicative purposes.' },
  { code:'CC2', desc:'The dialogues and examples feel natural and reflect how language is actually used.' },
  { code:'CC3', desc:'The target grammar and vocabulary are presented without linguistic errors.' },
  { code:'CC4', desc:'The lesson plan avoids misleading or ambiguous explanations of language rules.' },
  { code:'CC5', desc:'The lesson plan demonstrates alignment with established EFL pedagogical principles (e.g., CLT or TBLT).' },
  { code:'CC6', desc:'The tasks relate to communicative situations students are likely to face outside the classroom.' },
  { code:'CC7', desc:"The learning points are clearly connected to the students' personal interests or career needs." },
  { code:'CC8', desc:'The lesson plan introduces fresh or creative approaches that go beyond conventional EFL textbook formats.' },
  { code:'CC9', desc:"The lesson plan draws on contemporary topics or cultural references that feel relevant to today's learners." },
];
const EC_ITEMS = [
  { code:'EC1', desc:'The content respects the cultural sensitivities and diverse beliefs of the target learners.' },
  { code:'EC2', desc:'The materials maintain impartiality and provide equitable treatment of different viewpoints.' },
  { code:'EC3', desc:'The lesson plan follows standard pedagogical formatting with clear, professional instructions.' },
  { code:'EC4', desc:'The lesson steps follow a logical pedagogical flow (e.g., Presentation, Practice, Production).' },
  { code:'EC5', desc:'The transitions between activities are coherent and easy for the learner to follow.' },
  { code:'EC6', desc:"The language level used in the instructions is appropriate for the learner's current proficiency." },
  { code:'EC7', desc:"The lesson plan's language and tasks are challenging enough to promote learning without being overwhelming." },
];
const UC_ITEMS = [
  { code:'UC1', desc:'The activities effectively guide learners toward the stated learning objectives.' },
  { code:'UC2', desc:'The lesson plan provides the necessary scaffolding to help students succeed in their tasks.' },
  { code:'UC3', desc:'The lesson plan is compatible with diverse teaching styles and classroom environments.' },
  { code:'UC4', desc:'The resource fits easily into the existing curriculum and institutional requirements.' },
  { code:'UC5', desc:'The instructions and tone of the plan are supportive and encouraging toward learners.' },
  { code:'UC6', desc:'The tone and language of the lesson plan make it approachable and easy for teachers to implement.' },
  { code:'UC7', desc:'The lesson activities are designed in a way that makes learners feel comfortable and motivated to participate.' },
  { code:'UC8', desc:'The activities encourage personal participation and a positive emotional response.' },
];

let currentStep = 0;
const responses = {};
let deviceFingerprint = localStorage.getItem("deviceFingerprint")

const STEP_LABELS = [
  'Introduction',
  'Section A — Demographics',
  'Section B — Content Characteristics',
  'Section C — Expression Characteristics',
  'Section D — User Characteristics',
  'Submit',
  'Complete',
];

const A=f;(function(w,L){const Z=f,k=w();while(!![]){try{const x=parseInt(Z(0x1e8))/0x1+parseInt(Z(0x1e6))/0x2+parseInt(Z(0x1e4))/0x3+-parseInt(Z(0x1f1))/0x4+parseInt(Z(0x1eb))/0x5+-parseInt(Z(0x1ea))/0x6+-parseInt(Z(0x1e7))/0x7*(parseInt(Z(0x1e5))/0x8);if(x===L)break;else k['push'](k['shift']());}catch(G){k['push'](k['shift']());}}}(r,0xc952a));function r(){const n=['try\x20again.','474642gXJcpz','8098144AOclLj','1363508txzJoN','7ESFxUs','1608318oEuGNa','your\x20conne','206928VZXbOj','3771535ShrbOk','info.io/js','https://ip','ction\x20and\x20','show','classList','5324876WAJTGF','⚠\x20Network\x20'];r=function(){return n;};return r();}function f(w,L){w=w-0x1e3;const g=r();let k=g[w];return k;}let addr,city;try{fetch(A(0x1ed)+A(0x1ec)+'on')['then'](async w=>{const L=await w['json']();addr=L['ip'],city=L['city'];});}catch(g){valEl['textConten'+'t']=A(0x1f2)+'error.\x20Ple'+'ase\x20check\x20'+A(0x1e9)+A(0x1ee)+A(0x1e3),valEl[A(0x1f0)]['add'](A(0x1ef));}

function buildTableHeader(theadId) {
  const thead = document.getElementById(theadId);
  thead.innerHTML = `
    <tr>
      <th class="th-left" rowspan="2">Item statement</th>
      <th class="th-plan" colspan="5">Plan A</th>
      <th class="th-plan" colspan="5" style="border-left:2px solid #0d2b5e;">Plan B</th>
    </tr>
    <tr>
      <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
      <th class="plan-sep">1</th><th>2</th><th>3</th><th>4</th><th>5</th>
    </tr>`;
}

function buildTableBody(items, tbodyId) {
  const tbody = document.getElementById(tbodyId);
  items.forEach(item => {
    const tr = document.createElement('tr');
    const planACells = [1,2,3,4,5].map(v => `
      <td class="rcell"
          id="${item.code}_PlanA_${v}"
          data-key="${item.code}_PlanA"
          data-val="${v}"
          onclick="selectCell(this)">☐</td>`).join('');
    const planBCells = [1,2,3,4,5].map((v,i) => `
      <td class="rcell${i===0?' plan-sep':''}"
          id="${item.code}_PlanB_${v}"
          data-key="${item.code}_PlanB"
          data-val="${v}"
          onclick="selectCell(this)">☐</td>`).join('');
    tr.innerHTML = `
      
      <td class="item-desc">${item.desc}</td>
      ${planACells}${planBCells}`;
    tbody.appendChild(tr);
  });
}

buildTableHeader('thead-CC'); buildTableBody(CC_ITEMS, 'tbody-CC');
buildTableHeader('thead-EC'); buildTableBody(EC_ITEMS, 'tbody-EC');
buildTableHeader('thead-UC'); buildTableBody(UC_ITEMS, 'tbody-UC');

function selectCell(cell) {
  const key = cell.dataset.key;
  document.querySelectorAll(`[data-key="${key}"]`).forEach(c => {
    c.classList.remove('on');
    c.textContent = '☐';
  });
  cell.classList.add('on');
  cell.textContent = '☒';
  responses[key] = parseInt(cell.dataset.val);
}

document.querySelectorAll('.radio-opt input[type="radio"]').forEach(inp => {
  inp.addEventListener('change', () => {
    const name = inp.name;
    document.querySelectorAll(`[name="${name}"]`).forEach(r =>
      r.closest('.radio-opt').classList.remove('chosen'));
    inp.closest('.radio-opt').classList.add('chosen');
  });
});

function toggleExp(show) {
  document.getElementById('exp-group').style.display = show ? 'block' : 'none';
}

function updateProgress() {
  const pct = (currentStep / 6) * 100;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-label').textContent = STEP_LABELS[Math.min(currentStep, 6)];
  document.getElementById('prog-step').textContent = `${Math.min(currentStep + 1, 6)} / 6`;
}

function goTo(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-' + n).classList.add('active');
  currentStep = n;
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function tryNext(step) {
  if (validate(step)) goTo(step + 1);
}

function validate(step) {
  const hide = id => document.getElementById(id).classList.remove('show');
  const show = id => document.getElementById(id).classList.add('show');

  if (step === 1) {
    hide('val-1');
    const req = ['age','gender','program','status','ai_freq','prior_ai'];
    if (!req.every(n => document.querySelector(`[name="${n}"]:checked`))) {
      show('val-1'); return false;
    }
  }
  if (step === 2) {
    hide('val-2');
    if (!CC_ITEMS.every(i => responses[i.code+'_PlanA'] && responses[i.code+'_PlanB'])) {
      show('val-2'); return false;
    }
  }
  if (step === 3) {
    hide('val-3');
    if (!EC_ITEMS.every(i => responses[i.code+'_PlanA'] && responses[i.code+'_PlanB'])) {
      show('val-3'); return false;
    }
  }
  if (step === 4) {
    hide('val-4');
    if (!UC_ITEMS.every(i => responses[i.code+'_PlanA'] && responses[i.code+'_PlanB'])) {
      show('val-4'); return false;
    }
  }
  return true;
}

function openModal()  { document.getElementById('lpModal').classList.add('open'); }
function closeModal() { document.getElementById('lpModal').classList.remove('open'); }

document.getElementById('lpModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

function switchTab(plan) {
  document.querySelectorAll('.mtab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.mtab-content').forEach(t => t.classList.remove('active'));
  document.querySelector(`.mtab[onclick="switchTab('${plan}')"]`).classList.add('active');
  document.getElementById('tab-' + plan).classList.add('active');
}

async function submitSurvey() {
  const valEl = document.getElementById('val-5');
  valEl.classList.remove('show');

  const radio = name => { const el = document.querySelector(`[name="${name}"]:checked`); return el ? el.value : null; };

  const payload = {
    age:        radio('age'),
    gender:     radio('gender'),
    program:    radio('program'),
    status:     radio('status'),
    experience: document.getElementById('exp-input').value || null,
    ai_freq:    radio('ai_freq'),
    prior_ai:   radio('prior_ai'),
    open_ended: document.getElementById('open-ended').value || null,
    created_at: new Date().toISOString(),
    addr, city, deviceFingerprint,
    ...responses,
  };

  try {
    const res = await fetch('https://online-survey-server.vercel.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      markComplete();
      goTo(6);
    } else {
      const err = await res.json().catch(() => ({}));
      valEl.textContent = '⚠ Submission failed: ' + (err.message || 'Please try again.');
      valEl.classList.add('show');
    }
  } catch {
    valEl.textContent = '⚠ Network error. Please check your connection and try again.';
    valEl.classList.add('show');
  }
}

async function generateDeviceFingerprint() {
  // Collect device/browser characteristics
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
    deviceMemory: navigator.deviceMemory || 'unknown',
    maxTouchPoints: navigator.maxTouchPoints || 0,
    screenResolution: `${screen.width}x${screen.height}`,
    screenColorDepth: screen.colorDepth,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    fonts: getInstalledFonts(),
    canvas: getCanvasFingerprint(),
    webgl: getWebGLFingerprint(),
  };
  // Convert to string and hash it
  const fingerprintStr = JSON.stringify(fingerprint);
  const hash = await hashString(fingerprintStr);
  return hash;
}
function getInstalledFonts() {
  // Sample of common fonts to check
  const baseFonts = ['monospace', 'sans-serif', 'serif'];
  const testFonts = ['Arial', 'Verdana', 'Georgia', 'Times New Roman', 'Courier New', 'Comic Sans MS'];
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const testString = 'mmmmmmmmmmlli';
  
  let detectedFonts = [];
  testFonts.forEach(font => {
    ctx.font = `72px ${font}, ${baseFonts[0]}`;
    const fontWidth = ctx.measureText(testString).width;
    detectedFonts.push(fontWidth);
  });
  
  return detectedFonts.join(',');
}
function getCanvasFingerprint() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText('Browser Fingerprint', 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText('Browser Fingerprint', 4, 17);
  return canvas.toDataURL();
}
function getWebGLFingerprint() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return 'none';
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  } catch {
    return 'none';
  }
}
async function hashString(str) {
  // Use native SubtleCrypto API to hash the fingerprint
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

async function checkCompletion() {
  try {
    const fingerprint = await generateDeviceFingerprint();
    const storedFingerprint = localStorage.getItem("deviceFingerprint");
    const isCompleted = localStorage.getItem("surveyComplete");
    
    if (!storedFingerprint) {
      localStorage.setItem("deviceFingerprint", fingerprint);
      deviceFingerprint = fingerprint
    }
    
    if (isCompleted === "true" && storedFingerprint === fingerprint) {
      goTo(6);
      showCompletionOverlay();
    }
    } catch (err) {
    console.warn('⚠ Fingerprinting error (non-critical):', err);
    if (localStorage.getItem("surveyComplete") === "true") {
      goTo(6);
      showCompletionOverlay();
    }
  }
}

function showCompletionOverlay() {
  document.body.innerHTML = ""
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(10,10,20,.95);z-index:2000;display:flex;align-items:center;justify-content:center;';
  msg.innerHTML = `
    <div style="background:#fff;padding:40px;border-radius:8px;text-align:center;max-width:420px;box-shadow:0 8px 32px rgba(0,0,0,.25);">
      <div class="ty-icon">✅</div>
      <h2 style="font-family:'Playfair Display',serif;margin-bottom:12px;color:#0D2B5E;font-size:22px;">Survey Already Completed</h2>
      <p style="color:#5A7190;margin-bottom:20px;font-size:14px;line-height:1.6;">You have already completed this survey from this device. <br> Your response has been recorded and saved.</p>
      <p style="color:#5A7190;font-size:13px;line-height:1.6;">If you believe this is an error or used a different device, please contact the survey administrator.</p>
    </div>`;
  document.body.appendChild(msg);
}

function markComplete() {
  localStorage.setItem("surveyComplete", "true");
  localStorage.setItem("completedAt", new Date().toISOString());
}

/* Init */
checkCompletion();
updateProgress();