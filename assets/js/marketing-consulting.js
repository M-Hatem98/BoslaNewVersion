// ══════════════════════════════
//  DATA
// ══════════════════════════════
const QUESTIONS = [
  { id:"type", q:"ما نوع مؤسستك؟", hint:"اختر الأقرب لطبيعة نشاطك",
    opts:[{v:"feed_factory",l:"مصنع علف",i:"🏭"},{v:"pharma",l:"شركة أدوية بيطرية",i:"💊"},{v:"distributor",l:"موزع / تاجر جملة",i:"🚛"},{v:"importer",l:"مستورد / وكيل أجنبي",i:"🌍"},{v:"agtech",l:"شركة تقنية زراعية",i:"🔬"}]},
  { id:"team_size", q:"كم عدد فريق المبيعات عندك؟", hint:"المندوبين الفنيين والتجاريين",
    opts:[{v:"none",l:"مفيش فريق لسه",i:"—"},{v:"small",l:"من 1 إلى 5",i:"👤"},{v:"medium",l:"من 6 إلى 15",i:"👥"},{v:"large",l:"أكثر من 15",i:"🏢"}]},
  { id:"target", q:"نسبة تحقيق الـ Target العام اللي فات؟", hint:"كن صريحاً — التشخيص الحقيقي يبدأ من هنا",
    opts:[{v:"low",l:"أقل من 60%",i:"📉"},{v:"mid",l:"من 60% لـ 80%",i:"📊"},{v:"good",l:"من 80% لـ 100%",i:"📈"},{v:"over",l:"فاق الـ Target",i:"🚀"}]},
  { id:"marketing_plan", q:"عندك خطة تسويق مكتوبة وبتتنفذ؟", hint:"مش بس في الدماغ — مكتوبة وفيها أهداف وميزانية",
    opts:[{v:"written",l:"آه مكتوبة ومتابعة",i:"✅"},{v:"mental",l:"موجودة في الدماغ بس",i:"🧠"},{v:"seasonal",l:"حاجات موسمية بس",i:"📅"},{v:"no",l:"لأ — بنشتغل على الفرص",i:"❌"}]},
  { id:"marketing_content", q:"إزاي بتوصّل رسالتك التسويقية لعملائك؟", hint:"الطريقة الأساسية اللي بتعتمد عليها",
    opts:[{v:"reps_only",l:"المندوبين بس",i:"🧑‍💼"},{v:"social_weak",l:"سوشيال غير منتظم",i:"📱"},{v:"social_active",l:"محتوى تسويقي منتظم",i:"🔥"},{v:"mixed",l:"مزيج مندوبين + أونلاين",i:"⚡"}]},
  { id:"marketing_brand", q:"عملاؤك بيفرّقوك عن المنافسين إزاي؟", hint:"الـ USP أو الـ Positioning بتاعتك",
    opts:[{v:"price",l:"السعر الأرخص فقط",i:"💸"},{v:"product",l:"جودة المنتج — صعب نوصّلها",i:"📦"},{v:"service",l:"الخدمة والدعم الفني",i:"🤝"},{v:"no_diff",l:"مش عارف إيه اللي يميزنا",i:"❓"}]},
  { id:"training", q:"آخر مرة دربت فريقك إمتى؟", hint:"التدريب المنظم — مش ورشة عشوائية",
    opts:[{v:"recent",l:"أقل من 6 شهور",i:"✅"},{v:"year",l:"من حوالي سنة",i:"⚠️"},{v:"old",l:"أكتر من سنة",i:"🔴"},{v:"never",l:"ما دربناش خالص",i:"❌"}]},
  { id:"talent", q:"بتعاني من شُح كوادر بيطرية كفء؟", hint:"صعوبة الإحلال والاستبقاء",
    opts:[{v:"always",l:"باستمرار — مشكلة حقيقية",i:"🔴"},{v:"sometimes",l:"أحياناً",i:"🟡"},{v:"rarely",l:"نادراً",i:"🟢"}]},
  { id:"competition", q:"المنافسة من الشركات الكبيرة بتأثر على حصتك؟", hint:"التأثير على الأسعار والعملاء والسوق",
    opts:[{v:"heavy",l:"تأثير كبير وحاسسه",i:"🔴"},{v:"moderate",l:"في بعض المناطق",i:"🟡"},{v:"light",l:"بنتعامل معاها كويس",i:"🟢"}]},
  { id:"priority", q:"أكبر أولوية عندك دلوقتي؟", hint:"اللي لو حليته هيغير المؤسسة",
    opts:[{v:"sales",l:"رفع المبيعات وتحقيق الـ Target",i:"💰"},{v:"team",l:"بناء فريق كفء ومتدرب",i:"🎯"},{v:"marketing",l:"استراتيجية تسويق واضحة",i:"📣"},{v:"expansion",l:"التوسع في أسواق جديدة",i:"🗺️"},{v:"all",l:"كل ده مع بعض",i:"⚡"}]},
];

const MONTHS_AR = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
const DAYS_AR   = ["أح","إث","ثل","أر","خم","جم","سب"];
const TIMES     = ["09:00 ص","10:00 ص","11:00 ص","12:00 م","01:00 م","02:00 م","03:00 م","04:00 م","05:00 م"];

// ══════════════════════════════
//  STATE
// ══════════════════════════════
let cur = 0, answers = {}, report = null;
let calY, calM, selDate = null, selTime = null;

const today = new Date(); today.setHours(0,0,0,0);
calY = today.getFullYear(); calM = today.getMonth();

// ══════════════════════════════
//  HELPERS
// ══════════════════════════════
function show(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); const el=document.getElementById(id); el.classList.add('active'); el.classList.remove('anim-up'); void el.offsetWidth; el.classList.add('anim-up'); window.scrollTo({top:0,behavior:'smooth'}); }
function scoreColor(s){ return s>=70?'var(--green)':s>=45?'var(--gold)':'var(--red)'; }

// ══════════════════════════════
//  QUIZ
// ══════════════════════════════
function startQuiz(){ cur=0; answers={}; show('screen-questions'); renderQ(); }

function renderQ(){
  const q = QUESTIONS[cur];
  document.getElementById('q-num').textContent = String(cur+1).padStart(2,'0')+' / '+QUESTIONS.length;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-hint').textContent = q.hint;
  document.getElementById('btn-back').style.display = cur>0?'flex':'none';
  document.getElementById('progress-wrap').classList.add('visible');
  document.getElementById('progress-bar-fill').style.width = ((cur+1)/QUESTIONS.length*100)+'%';
  document.getElementById('progress-label').textContent = (cur+1)+'/'+QUESTIONS.length;

  const list = document.getElementById('options-list');
  list.innerHTML='';
  q.opts.forEach((o,i)=>{
    const btn = document.createElement('button');
    btn.className='opt btn'+(answers[q.id]===o.v?' selected':'');
    btn.style.animationDelay=(i*.05)+'s';
    btn.style.animation='fadeUp .35s ease both';
    btn.innerHTML=`<span class="opt-icon">${o.i}</span><span class="opt-label">${o.l}</span><span class="opt-arrow">←</span>`;
    btn.onclick=()=>pickOpt(o.v);
    list.appendChild(btn);
  });
}

function pickOpt(v){
  answers[QUESTIONS[cur].id] = v;
  document.querySelectorAll('.opt').forEach(b=>b.classList.remove('selected'));
  event.currentTarget && event.currentTarget.classList.add('selected');
  if(cur < QUESTIONS.length-1){ setTimeout(()=>{ cur++; renderQ(); },180); }
  else{ runReport(); }
}

function prevQ(){ if(cur>0){ cur--; renderQ(); } }


// ══════════════════════════════
//  RULE-BASED REPORT ENGINE
// ══════════════════════════════
function generateReport(a){
  const typeLabels={feed_factory:'مصنع علف',pharma:'شركة أدوية بيطرية',distributor:'موزع / تاجر جملة',importer:'مستورد / وكيل أجنبي',agtech:'شركة تقنية زراعية'};

  // ── Scores ──
  let sales=50, marketing=50, talent=50, strategy=50;

  // Sales
  if(a.target==='low') sales-=30;
  else if(a.target==='mid') sales-=10;
  else if(a.target==='good') sales+=10;
  else if(a.target==='over') sales+=25;
  if(a.team_size==='none') sales-=20;
  else if(a.team_size==='large') sales+=15;

  // Marketing
  if(a.marketing_plan==='written') marketing+=25;
  else if(a.marketing_plan==='mental') marketing-=10;
  else if(a.marketing_plan==='seasonal') marketing-=5;
  else if(a.marketing_plan==='no') marketing-=30;
  if(a.marketing_content==='reps_only') marketing-=25;
  else if(a.marketing_content==='social_weak') marketing-=10;
  else if(a.marketing_content==='social_active') marketing+=20;
  else if(a.marketing_content==='mixed') marketing+=10;
  if(a.marketing_brand==='price') marketing-=20;
  else if(a.marketing_brand==='no_diff') marketing-=25;
  else if(a.marketing_brand==='service') marketing+=10;

  // Talent
  if(a.training==='recent') talent+=20;
  else if(a.training==='year') talent-=5;
  else if(a.training==='old') talent-=20;
  else if(a.training==='never') talent-=30;
  if(a.talent==='always') talent-=20;
  else if(a.talent==='rarely') talent+=15;

  // Strategy
  if(a.marketing_plan==='written') strategy+=20;
  else if(a.marketing_plan==='no') strategy-=25;
  if(a.competition==='heavy') strategy-=15;
  else if(a.competition==='light') strategy+=10;
  if(a.priority==='all') strategy-=10;
  else if(a.priority==='expansion') strategy+=10;

  sales    = Math.max(10,Math.min(95,sales));
  marketing= Math.max(10,Math.min(95,marketing));
  talent   = Math.max(10,Math.min(95,talent));
  strategy = Math.max(10,Math.min(95,strategy));
  const overall = Math.round((sales+marketing+talent+strategy)/4);

  // ── Profile label ──
  const inst = typeLabels[a.type]||'مؤسسة';
  const mktgState = marketing<40?'تعاني من فجوة تسويقية حادة':marketing<60?'تسويقها غير منتظم':' لديها أساس تسويقي جيد';
  const profile_label = inst+' — '+mktgState;

  // ── Pain Points ──
  const allPains = [
    // Marketing
    { cond: a.marketing_content==='reps_only', title:'الاعتماد الكلي على المندوبين', category:'تسويق', detail:'مؤسستك بلا وجود تسويقي مستقل — إذا غادر المندوب يوماً، يأخذ معه العميل. البراند غير موجود في ذهن السوق بدون وجه الشخص.' },
    { cond: a.marketing_brand==='price', title:'التسويق بالسعر فقط يُفقدك الهامش', category:'تسويق', detail:'المنافسة على السعر تستنزف الربحية تدريجياً وتحوّل منتجك لسلعة. الشركات الكبيرة والمستوردة ستكسب دائماً في هذه المعركة.' },
    { cond: a.marketing_plan==='no'||a.marketing_plan==='mental', title:'غياب خطة تسويق مكتوبة', category:'تسويق', detail:'التسويق العشوائي يعني إنفاق بلا أثر قابل للقياس. بدون خطة مكتوبة لا يوجد هدف ولا مؤشر أداء ولا توقيت صحيح للحملات.' },
    { cond: a.marketing_brand==='no_diff', title:'غياب الـ Positioning الواضح', category:'تسويق', detail:'عندما لا يعرف عملاؤك ما يميزك، تصبح مجرد خيار من عشرين خياراً. هذا يجعل قرار الشراء مبنياً على السعر والمعرفة الشخصية فقط.' },
    { cond: a.marketing_content==='social_weak', title:'حضور رقمي ضعيف في سوق يبحث أونلاين', category:'تسويق', detail:'أصحاب المزارع والأطباء البيطريين باتوا يبحثون عن المنتجات أونلاين. غيابك الرقمي يعني أن المنافس يأخذ العميل قبل ما تصله.' },
    { cond: true, title:'لا توجد قاعدة بيانات عملاء منظمة للـ Follow-up', category:'تسويق', detail:'معظم شركات القطاع تفقد 30-40% من عملائها سنوياً لغياب نظام متابعة. الاحتفاظ بالعميل الحالي أرخص 7 مرات من اكتساب عميل جديد.' },
    // Sales
    { cond: a.target==='low'||a.target==='mid', title:'فجوة واسعة بين الـ Target والأداء الفعلي', category:'مبيعات', detail:'عدم تحقيق الـ Target ليس مشكلة مندوبين فقط — هو أعراض لمشكلة في الاستراتيجية أو التدريب أو التسويق الداعم للمبيعات.' },
    { cond: a.team_size==='none'||a.team_size==='small', title:'فريق المبيعات أصغر من حجم السوق المستهدف', category:'مبيعات', detail:'التغطية المحدودة تعني فرص ضائعة يومياً. المنافسون ذوو الفرق الأكبر يملأون الفراغ في المناطق التي لا تغطيها.' },
    // Strategy/Talent
    { cond: a.training==='old'||a.training==='never', title:'الفريق الفني يبيع بأدوات قديمة', category:'كوادر', detail:'المنتجات البيطرية تتطور، واحتياجات العملاء تتغير، لكن فريقك يعمل بنفس أسلوب المبيعات منذ سنوات — مما يضعف قدرته التنافسية.' },
    { cond: a.competition==='heavy', title:'الضغط التنافسي بلا استراتيجية دفاعية', category:'استراتيجية', detail:'الشركات الكبيرة تستخدم قوة التسعير والبراند الدولي. بدون تمايز واضح في القيمة المقدمة، تخسر الحصة السوقية تدريجياً.' },
    { cond: a.talent==='always', title:'استنزاف الكوادر البيطرية المدربة', category:'كوادر', detail:'كل كادر بيطري يغادر يحمل معه علاقات عملاء وخبرة تشغيلية. تكلفة الاستبدال تتجاوز 3 أضعاف الراتب السنوي.' },
  ];

  const pain_points = allPains.filter(p=>p.cond).slice(0,5).map(p=>({title:p.title,category:p.category,detail:p.detail}));
  while(pain_points.length<3) pain_points.push({title:'ضعف التنسيق بين التسويق والمبيعات',category:'تسويق',detail:'غياب التنسيق يعني أن المندوب يصل للعميل بدون أي تمهيد تسويقي، مما يرفع وقت وتكلفة الإقناع.'});

  // ── Marketing Diagnosis ──
  const mktgHeadlines = {
    reps_only: 'مؤسستك تعمل على طاقة المندوب لا على قوة البراند',
    social_weak: 'حضورك الرقمي لا يعكس حجم مؤسستك الحقيقي',
    social_active: 'لديك أساس تسويقي جيد — الفرصة في التحسين والقياس',
    mixed: 'مزيج جيد لكن يحتاج استراتيجية واضحة لتحقيق أقصى عائد',
  };
  const mktgGaps = {
    reps_only: 'المنافسون الذين بنوا براند رقمي يصلون لعملاء لا تعرف أنهم موجودون',
    price: 'تضيع في حرب السعر بينما المنافسون يبيعون القيمة والثقة',
    no_diff: 'عدم وضوح الـ Positioning يجعل قراراتك الشرائية مبنية على العلاقات الشخصية فقط',
    social_weak: 'الفجوة بين حضورك الرقمي الضعيف وتوقعات السوق الحديث تتسع يوماً بعد يوم',
  };
  const mktgOpps = {
    pharma: 'بناء محتوى فني متخصص (case studies + بروتوكولات) يضعك كـ Thought Leader أمام الأطباء البيطريين',
    feed_factory: 'حملة رقمية موجهة لأصحاب المزارع الصغيرة والمتوسطة غير المخدومة من المنافسين الكبار',
    distributor: 'برنامج ولاء وتواصل مع العملاء الحاليين يرفع معدل التكرار الشرائي بنسبة 25-40%',
    importer: 'محتوى مقارن يبرز ميزة جودة منتجاتك الأجنبية مقابل المحلية — لبناء تفضيل واضح',
    agtech: 'ندوات ويبينار تقنية مجانية تبني الثقة وتجذب leads من شريحة التكنولوجيا الزراعية المتنامية',
  };

  const marketing_diagnosis = {
    headline: mktgHeadlines[a.marketing_content]||'استراتيجيتك التسويقية تحتاج إعادة هيكلة شاملة',
    gap: mktgGaps[a.marketing_brand]||mktgGaps[a.marketing_content]||'الفجوة بين إمكانات مؤسستك وصورتها في السوق أكبر مما تتصور',
    opportunity: mktgOpps[a.type]||'بناء محتوى تسويقي متخصص يبني الثقة ويجلب leads جديدة خلال 30 يوم',
  };

  // ── Recommended Service ──
  let recommended_service, recommended_service_reason, first_step;
  const lowestScore = Math.min(sales,marketing,talent,strategy);
  if(lowestScore===marketing||marketing<45){
    recommended_service='Bosla Consulting — استراتيجية تسويق متكاملة';
    recommended_service_reason='تحتاج خطة تسويق مكتوبة وـ Positioning واضح قبل أي استثمار تسويقي آخر';
    first_step='اعمل قائمة بأهم 3 شرائح عملاء وما الرسالة الوحيدة التي تريد أن يحفظوها عن مؤسستك';
  } else if(lowestScore===talent){
    recommended_service='Bosla Academy — تدريب فريق المبيعات والفنيين';
    recommended_service_reason='فريقك يحتاج أدوات بيع احترافية وتأهيل فني محدّث ليتنافس بفاعلية';
    first_step='حدد أضعف 3 مهارات في فريقك الآن وابدأ تصميم برنامج تدريب 8 أسابيع';
  } else if(lowestScore===strategy){
    recommended_service='Bosla Consulting — تخطيط استراتيجي';
    recommended_service_reason='مؤسستك تحتاج خارطة طريق واضحة لتحقيق نمو منظم وقابل للقياس';
    first_step='اكتب هدفاً واحداً قابلاً للقياس لمؤسستك خلال 6 أشهر القادمة ثم اشتق منه المهام الأسبوعية';
  } else {
    recommended_service='Bosla Career — بناء فريق وتوظيف كوادر بيطرية';
    recommended_service_reason='توسيع الفريق بكوادر مؤهلة هو المحرك الأسرع لزيادة حصتك السوقية';
    first_step='حدد الوظيفة الواحدة التي لو ملأتها ستحدث أكبر أثر في مبيعاتك خلال 90 يوماً';
  }

  // ── Urgency ──
  const urgency = overall<45?'high':overall<65?'medium':'low';

  // ── Summary ──
  const summaries = {
    high: `مؤسستك ${typeLabels[a.type]||''} تعمل تحت ضغط تنافسي حقيقي مع فجوات واضحة في التسويق والأداء. التأخر في المعالجة يعني خسارة حصة سوقية يصعب استرجاعها. التدخل الآن وليس لاحقاً.`,
    medium: `مؤسستك لديها أساس جيد لكن هناك فرص نمو غير مستغلة، خاصة في التسويق وتطوير الفريق. المنافسون الأذكياء يعملون على نفس الفرص — الوقت عامل حاسم.`,
    low: `مؤسستك في وضع مستقر نسبياً. التحدي الآن هو التحول من الاستقرار إلى النمو المتسارع، والفرصة موجودة لمن يتحرك بخطة واضحة.`,
  };

  return {
    profile_label, overall_score:overall,
    scores:{sales,marketing,talent,strategy},
    pain_points, marketing_diagnosis,
    recommended_service, recommended_service_reason,
    first_step, urgency,
    summary: summaries[urgency],
  };
}

// ══════════════════════════════
//  API
// ══════════════════════════════
function runReport(){
  show('screen-loading');
  document.getElementById('progress-wrap').classList.remove('visible');

  const txt = QUESTIONS.map(q=>{ const o=q.opts.find(x=>x.v===answers[q.id]); return `${q.q}: ${o?o.l:answers[q.id]}`; }).join('\n');

  report = generateReport(answers);
  renderReport();
}

// ══════════════════════════════
//  RENDER REPORT
// ══════════════════════════════
function renderReport(){
  show('screen-report');

  // Score circle
  const circ = 2*Math.PI*42;
  const color = scoreColor(report.overall_score);
  const arc = document.getElementById('score-arc');
  arc.style.stroke = color;
  arc.style.filter = `drop-shadow(0 0 6px ${color.replace('var(--','').replace(')','')==='green'?'#22C55E':color.replace('var(--','').replace(')','')=='gold'?'#C8A84B':'#E05252'})`;

  // Glow
  const glowEl = document.getElementById('score-glow');
  const gc = report.overall_score>=70?'#22C55E':report.overall_score>=45?'#C8A84B':'#E05252';
  glowEl.style.background = `radial-gradient(circle, ${gc}18 0%, transparent 70%)`;

  let count=0; const target=report.overall_score;
  const numEl=document.getElementById('score-num');
  numEl.style.color=color;
  const timer=setInterval(()=>{ count=Math.min(count+Math.ceil(target/40),target); numEl.textContent=count; arc.style.strokeDasharray=(count/100*circ)+' 999'; if(count>=target)clearInterval(timer); },30);

  document.getElementById('profile-label').textContent = report.profile_label;

  const ub=document.getElementById('urgency-badge');
  const urg=report.urgency;
  ub.textContent = urg==='high'?'⚠ أولوية عالية':urg==='medium'?'◑ أولوية متوسطة':'✓ وضع مستقر';
  ub.style.background = urg==='high'?'rgba(224,82,82,.15)':urg==='medium'?'rgba(200,168,75,.15)':'rgba(34,197,94,.15)';
  ub.style.color = urg==='high'?'var(--red)':urg==='medium'?'var(--gold)':'var(--green)';

  // Bars
  [['sales','bar-sales'],['marketing','bar-marketing'],['talent','bar-talent'],['strategy','bar-strategy']].forEach(([key,id],i)=>{
    const val=report.scores[key]; const c=scoreColor(val);
    const fill=document.getElementById(id);
    const valEl=document.getElementById(id+'-val');
    valEl.style.color=c; valEl.textContent=val;
    setTimeout(()=>{ fill.style.width=val+'%'; fill.style.background=`linear-gradient(90deg,${gc}88,${gc})`; fill.style.background=`linear-gradient(90deg,${val>=70?'#22C55E88':val>=45?'#C8A84B88':'#E0525288'},${val>=70?'#22C55E':val>=45?'#C8A84B':'#E05252'})`; fill.style.boxShadow=`0 0 8px ${val>=70?'#22C55E':val>=45?'#C8A84B':'#E05252'}60`; },100+i*100);
  });

  // Pain points
  const pp=document.getElementById('pain-points-list');
  pp.innerHTML='';
  (report.pain_points||[]).forEach((p,i)=>{
    const cc=p.category==='تسويق'?'var(--orange)':p.category==='مبيعات'?'var(--red)':'var(--purple)';
    const div=document.createElement('div');
    div.className='pain-card';
    div.style.borderRight=`3px solid ${cc}`;
    div.style.animationDelay=(i*.08)+'s';
    div.style.animation='fadeUp .4s ease both';
    div.innerHTML=`<div class="pain-head"><span class="pain-title">${p.title}</span><span class="pain-cat" style="color:${cc};border-color:${cc};background:${cc}18">${p.category}</span></div><p class="pain-detail">${p.detail}</p>`;
    pp.appendChild(div);
  });

  // Marketing diag
  if(report.marketing_diagnosis){
    document.getElementById('mktg-headline').textContent=report.marketing_diagnosis.headline;
    document.getElementById('mktg-gap').textContent=report.marketing_diagnosis.gap;
    document.getElementById('mktg-opportunity').textContent=report.marketing_diagnosis.opportunity;
  } else { document.getElementById('mktg-diag-wrap').style.display='none'; }

  document.getElementById('summary-text').textContent=report.summary;
  document.getElementById('rec-name').textContent=report.recommended_service;
  document.getElementById('rec-reason').textContent=report.recommended_service_reason;
  document.getElementById('first-step-text').textContent=report.first_step;
}

function restart(){ report=null; selDate=null; selTime=null; cur=0; answers={}; document.getElementById('progress-wrap').classList.remove('visible'); show('screen-intro'); }

// ══════════════════════════════
//  CALENDAR
// ══════════════════════════════
function openCal(){ document.getElementById('cal-overlay').classList.add('open'); renderCal(); }
function closeCal(){ document.getElementById('cal-overlay').classList.remove('open'); }
function calOverlayClick(e){ if(e.target===document.getElementById('cal-overlay')) closeCal(); }
function prevMonth(){ const d=new Date(calY,calM-1); calY=d.getFullYear(); calM=d.getMonth(); selDate=null; selTime=null; renderCal(); }
function nextMonth(){ const d=new Date(calY,calM+1); calY=d.getFullYear(); calM=d.getMonth(); selDate=null; selTime=null; renderCal(); }

function renderCal(){
  document.getElementById('cal-month-name').textContent=MONTHS_AR[calM]+' '+calY;

  // Day headers
  const dh=document.getElementById('cal-days-header');
  dh.innerHTML='';
  DAYS_AR.forEach(d=>{ const el=document.createElement('div'); el.className='cal-day-name'; el.textContent=d; dh.appendChild(el); });

  // Grid
  const grid=document.getElementById('cal-grid');
  grid.innerHTML='';
  const firstDay=new Date(calY,calM,1).getDay();
  const days=new Date(calY,calM+1,0).getDate();
  for(let i=0;i<firstDay;i++){ const c=document.createElement('div'); c.className='cal-cell empty'; grid.appendChild(c); }
  for(let d=1;d<=days;d++){
    const cellDate=new Date(calY,calM,d);
    const dow=cellDate.getDay();
    const isPast=cellDate<today;
    const isWeekend=dow===5||dow===6;
    const avail=!isPast&&!isWeekend;
    const c=document.createElement('div');
    c.textContent=d;
    c.className='cal-cell '+(avail?'available':'disabled')+(d===selDate?' selected':'');
    if(avail) c.onclick=()=>selectDate(d);
    grid.appendChild(c);
  }

  // Times
  document.getElementById('time-section').style.display=selDate?'block':'none';
  document.getElementById('confirm-wrap').style.display=(selDate&&selTime)?'block':'none';
  if(selDate) renderTimes();
}

function selectDate(d){ selDate=d; selTime=null; renderCal(); }

function renderTimes(){
  document.getElementById('time-label').textContent='المواعيد المتاحة — '+selDate+' '+MONTHS_AR[calM];
  const tg=document.getElementById('time-grid');
  tg.innerHTML='';
  TIMES.forEach(t=>{
    const el=document.createElement('div');
    el.className='time-slot'+(t===selTime?' selected':'');
    el.textContent=t;
    el.onclick=()=>selectTime(t);
    tg.appendChild(el);
  });
}

function selectTime(t){
  selTime=t;
  const dateStr=selDate+' '+MONTHS_AR[calM]+' '+calY;
  document.getElementById('confirm-date').textContent=dateStr+' — الساعة '+t;
  const msg=`مرحباً، أكملت تشخيص Bosla Business Diagnostic وحصلت على Score ${report?report.overall_score:'—'}/100.\nأود حجز جلسة تشخيص مجانية يوم: ${dateStr}، الساعة: ${t}.\nفي انتظار التأكيد.`;
  document.getElementById('wa-link').href='https://wa.me/201001226683?text='+encodeURIComponent(msg);
  renderCal();
  document.getElementById('confirm-wrap').style.display='block';
  document.getElementById('confirm-wrap').scrollIntoView({behavior:'smooth',block:'nearest'});
}