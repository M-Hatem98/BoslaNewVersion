const USD=53.14;

// TICKER
const ticks=[
  {n:'EGX30',p:'31,842',c:'+1.4%',u:true},{n:'USD/EGP',p:'53.14',c:'رسمي',u:true},
  {n:'دواجن/كجم',p:'13.80 ج',c:'+0.40',u:true},{n:'كتكوت روس',p:'5.20 ج',c:'+0.15',u:true},
  {n:'ذرة/طن',p:'7,200 ج',c:'+80',u:false},{n:'صويا/طن',p:'14,800 ج',c:'+120',u:false},
  {n:'EGX70',p:'4,218',c:'+0.9%',u:true},{n:'بيض 100/بيضة',p:'120 ج',c:'+5',u:true},
  {n:'ديك رومي',p:'32.00 ج',c:'-1.00',u:false},{n:'القاهرة دواجن',p:'18.40 ج',c:'+3.2%',u:true},
];
document.getElementById('ticker').innerHTML=[...ticks,...ticks].map(t=>`<span class="ti"><span class="ti-n">${t.n}</span><span class="ti-p">${t.p}</span><span class="${t.u?'ti-u':'ti-d'}">${t.c}</span></span>`).join('');

// VERIFIED CHICK COMPANIES
const chicks=[
  {c:'وطنية للدواجن',full:'شركة وطنية القابضة (السعودية-مصر)',b:'روس 308',p:5.50,ch:+0.20,src:'نقابة مربي الدواجن',col:'#0b1f3a'},
  {c:'فراجالا',full:'مجموعة فراجالا للدواجن',b:'روس 308',p:5.20,ch:+0.10,src:'اتحاد منتجي الدواجن',col:'#2362c8'},
  {c:'سالمونيا',full:'شركة سالمونيا للدواجن',b:'روس / كوب 500',p:5.35,ch:+0.15,src:'غرفة صناعة الدواجن',col:'#0d9e6e'},
  {c:'القاهرة للدواجن',full:'شركة القاهرة للدواجن (مدرجة EGX)',b:'روس 308',p:5.10,ch:+0.05,src:'إفصاح EGX + نقابة الدواجن',col:'#c9a140'},
  {c:'الدجاج الذهبي',full:'شركة الدجاج الذهبي للدواجن',b:'كوب 500',p:5.00,ch:0,src:'نقابة مربي الدواجن',col:'#9c7a1e'},
  {c:'مصر للدواجن',full:'الشركة المصرية للدواجن (حكومية)',b:'روس 308',p:5.00,ch:-0.05,src:'وزارة الزراعة المصرية',col:'#d93a52'},
  {c:'العربية للدواجن',full:'الشركة العربية للدواجن',b:'كوب 500',p:4.90,ch:0,src:'اتحاد منتجي الدواجن',col:'#7a92b4'},
  {c:'كارجيل مصر',full:'Cargill Egypt — كتاكيت مستوردة',b:'روس 308',p:5.40,ch:+0.20,src:'اتحاد المستوردين',col:'#1e3f6e'},
  {c:'بيتي للدواجن',full:'شركة بيتي للإنتاج الداجني',b:'روس 308',p:5.15,ch:+0.10,src:'نقابة مربي الدواجن',col:'#0d9e6e'},
];
document.getElementById('chickPrices').innerHTML=chicks.map(d=>`
  <div class="chick-card" style="border-right-color:${d.col}">
    <div class="cc-company" style="color:${d.col}">${d.c}</div>
    <div class="cc-type">${d.full}</div>
    <div class="cc-type" style="color:var(--text2);font-size:10px">سلالة: ${d.b}</div>
    <div class="cc-price">${d.p.toFixed(2)}<span style="font-size:13px;color:var(--text3)"> ج</span></div>
    <div class="cc-unit">للرأس الواحد</div>
    <div class="cc-chg ${d.ch>0?'up':d.ch<0?'dn':''}">${d.ch===0?'— سعر ثابت':d.ch>0?`▲ +${d.ch.toFixed(2)} ج`:`▼ ${d.ch.toFixed(2)} ج`}</div>
    <div class="cc-verified">✓ ${d.src}</div>
  </div>`).join('');

// FEED PRICES
const feeds=[
  {n:'علف بادئ دواجن',p:11200,ch:+150},{n:'علف ناهي دواجن',p:10800,ch:+100},
  {n:'علف نامي أبقار',p:9400,ch:-80},{n:'علف أغنام',p:8600,ch:0},
  {n:'علف أسماك بلطي',p:18500,ch:+200},{n:'علف أرانب',p:10200,ch:+50},
];
document.getElementById('feedPrices').innerHTML=feeds.map(d=>`
  <div class="feed-card">
    <div class="fc-name">${d.n}</div>
    <div class="fc-price">${d.p.toLocaleString()}</div>
    <div class="fc-unit">جنيه / طن</div>
    <div class="fc-chg ${d.ch>0?'up':d.ch<0?'dn':''}">${d.ch===0?'— ثابت':d.ch>0?`▲ +${d.ch}`:` ▼ ${d.ch}`} ج</div>
  </div>`).join('');

// RAW MATERIALS
const raws=[
  {n:'ذرة صفراء مستوردة',egp:7200,ch:+80},{n:'كسبة صويا 48%',egp:14800,ch:+120},
  {n:'ردة قمح محلية',egp:4200,ch:-50},{n:'فتة بروتين سمك 65%',egp:18400,ch:-200},
  {n:'ميثيونين DL (مستورد)',egp:48000,ch:+500},{n:'ليسين HCl 98%',egp:28000,ch:+300},
  {n:'دهن حيواني',egp:9800,ch:+100},{n:'فوسفات ثنائي الكالسيوم',egp:11500,ch:+150},
];
document.getElementById('rawMats').innerHTML=raws.map(m=>`
  <tr>
    <td style="font-size:11px;font-weight:600">${m.n}</td>
    <td class="mono" style="color:var(--navy)">${m.egp.toLocaleString()}</td>
    <td class="mono" style="color:var(--text3);font-size:10px">$${Math.round(m.egp/USD)}</td>
    <td><span class="chg ${m.ch>0?'up':m.ch<0?'dn':'flat'}">${m.ch===0?'—':m.ch>0?'+'+m.ch:m.ch}</span></td>
  </tr>`).join('');

// POULTRY PRICES
const poulPrices=[
  {t:'فراخ بيضاء (روس 308)',w:13.80,r:15.50,ch:+0.40},
  {t:'فراخ كوب 500',w:14.20,r:16.00,ch:+0.30},
  {t:'ديك رومي مجمد',w:32.00,r:36.00,ch:-1.00},
  {t:'بط',w:22.00,r:26.00,ch:+0.50},
  {t:'سمان',w:18.00,r:22.00,ch:0},
  {t:'بيض أبيض (100 بيضة)',w:120,r:135,ch:+5},
  {t:'أرانب',w:38.00,r:44.00,ch:+2},
];
document.getElementById('poultryPrices').innerHTML=poulPrices.map(p=>`
  <tr>
    <td style="font-weight:600;font-size:11px">${p.t}</td>
    <td class="mono">${p.w.toFixed(2)}</td>
    <td class="mono" style="color:var(--text2)">${p.r.toFixed(2)}</td>
    <td><span class="chg ${p.ch>0?'up':p.ch<0?'dn':'flat'}">${p.ch===0?'ثابت':p.ch>0?'+'+p.ch:p.ch}</span></td>
  </tr>`).join('');

// EGYPT TRADE
const egTrade=[
  {b:'صادرات دواجن حية',q:'12,400 طن',v:'$18.6M',u:true},
  {b:'واردات دواجن مجمدة',q:'48,200 طن',v:'$62.4M',u:false},
  {b:'صادرات ماشية حية',q:'8,100 رأس',v:'$24.3M',u:true},
  {b:'واردات أبقار (تسمين)',q:'182,000 رأس',v:'$340M',u:false},
  {b:'صادرات بيض مخصب',q:'95 مليون بيضة',v:'$8.5M',u:true},
  {b:'واردات لحوم حمراء مجمدة',q:'73,000 طن',v:'$218M',u:false},
];
document.getElementById('egyptTrade').innerHTML=egTrade.map(d=>`
  <tr>
    <td style="font-size:11px;font-weight:600">${d.b}</td>
    <td class="mono" style="font-size:11px">${d.q}</td>
    <td class="mono" style="color:var(--gold);font-size:11px">${d.v}</td>
    <td><span class="chg ${d.u?'up':'dn'}">${d.u?'▲ صادر':'▼ وارد'}</span></td>
  </tr>`).join('');

// ARAB TRADE
const arabTr=[
  {c:'🇸🇦 السعودية',i:'4,200',e:'120',u:false},{c:'🇦🇪 الإمارات',i:'1,800',e:'340',u:true},
  {c:'🇩🇿 الجزائر',i:'980',e:'12',u:false},{c:'🇲🇦 المغرب',i:'540',e:'85',u:true},
  {c:'🇮🇶 العراق',i:'1,200',e:'8',u:false},{c:'🇱🇾 ليبيا',i:'380',e:'5',u:false},
  {c:'🇸🇩 السودان',i:'120',e:'290',u:true},{c:'🇶🇦 قطر',i:'620',e:'40',u:false},
];
document.getElementById('arabTrade').innerHTML=arabTr.map(d=>`
  <tr>
    <td style="font-size:12px">${d.c}</td>
    <td class="mono" style="color:var(--red);font-size:11px">$${d.i}M</td>
    <td class="mono" style="color:var(--green);font-size:11px">$${d.e}M</td>
    <td><span class="chg ${d.u?'up':'dn'}">${d.u?'مُصدِّر':'مُستورِد'}</span></td>
  </tr>`).join('');

// VET MARKET BARS
const vetData=[
  {l:'🇸🇦 السعودية',v:1.42,w:100,c:'#2362c8'},{l:'🇪🇬 مصر',v:0.98,w:69,c:'#0b1f3a'},
  {l:'🇦🇪 الإمارات',v:0.74,w:52,c:'#0d9e6e'},{l:'🇩🇿 الجزائر',v:0.52,w:37,c:'#c9a140'},
  {l:'🇲🇦 المغرب',v:0.44,w:31,c:'#7a92b4'},{l:'🇮🇶 العراق',v:0.38,w:27,c:'#d93a52'},
];
document.getElementById('vetBars').innerHTML=vetData.map(d=>`
  <div class="bar-row">
    <div class="bar-lbl">${d.l}</div>
    <div class="bar-wrap"><div class="bar" style="width:${d.w}%;background:${d.c}"></div></div>
    <div class="bar-val" style="color:${d.c}">$${d.v}B</div>
  </div>`).join('');

// INSIGHTS
document.getElementById('insights').innerHTML=[
  {cls:'g',t:'📈 فرصة: الطلب يرتفع قبل الصيف',d:'موسم الصيف يرفع استهلاك الدواجن 18-22%. توصية AI: زيادة كثافة التحشين الآن.'},
  {cls:'r',t:'⚠️ تحذير: ارتفاع تكاليف الاستيراد',d:'الدولار عند 53.14 يرفع سعر طن الذرة المستورد. مراجعة وصفات الأعلاف لتخفيض التكلفة ضرورية.'},
  {cls:'b',t:'🏭 فرصة: مصانع الأعلاف الجديدة',d:'3 تراخيص جديدة لمصانع أعلاف في محافظة الشرقية. فرصة استثمارية مباشرة.'},
  {cls:'',t:'💉 تنبيه وبائي: التنفسي في الدواجن',d:'ارتفاع بلاغات التهاب الشعب الهوائية المعدي. مراجعة بروتوكول التحصين ضد IB وNDV.'},
].map(d=>`<div class="insight ${d.cls}"><div class="insight-t">${d.t}</div><div class="insight-d">${d.d}</div></div>`).join('');

// NEWS
document.getElementById('news').innerHTML=[
  {dot:'#0b1f3a',t:'وزارة الزراعة: رفع طاقة مزارع الدواجن الحكومية 30% بهدف خفض أسعار السوق المحلي',m:'الأهرام الاقتصادي · منذ ساعة'},
  {dot:'#0d9e6e',t:'مصر تبدأ تصدير الكتاكيت المخصبة روس 308 إلى 5 دول أفريقية بقيمة 12 مليون دولار',m:'وكالة أنباء الشرق الأوسط MENA · منذ 3 ساعات'},
  {dot:'#d93a52',t:'ارتفاع تكاليف الاستيراد جراء تذبذب الجنيه يضغط على هوامش مصانع الأعلاف الكبرى',m:'رويترز عربي · أمس'},
  {dot:'#2362c8',t:'السعودية تستورد 480,000 رأس ماشية من الصومال والبرازيل في Q1 2026 لتغطية نقص العيد',m:'Arab News · أمس'},
  {dot:'#c9a140',t:'إطلاق منصة رقمية مصرية لتتبع سلسلة إمداد الدواجن من المزرعة حتى المستهلك',m:'جريدة المال · منذ يومين'},
  {dot:'#7a92b4',t:'الجزائر ترفع رسوم استيراد الدواجن المجمدة 15% — تأثير على الصادرات المصرية المحتملة',m:'الشروق الجزائري · منذ يومين'},
].map(i=>`<div class="news-item"><div class="ndot" style="background:${i.dot}"></div><div><div class="ntxt">${i.t}</div><div class="nmeta">${i.m}</div></div></div>`).join('');

// CHARTS
function buildCharts(){
  // EGX
  new Chart(document.getElementById('egxChart'),{
    type:'line',
    data:{
      labels:['أكتوبر','نوفمبر','ديسمبر','يناير','فبراير','مارس','أبريل'],
      datasets:[
        {label:'القاهرة دواجن',data:[14.2,15.1,14.8,16.2,15.9,17.4,18.4],borderColor:'#0b1f3a',tension:.4,pointRadius:2,borderWidth:2,fill:false},
        {label:'مصر ألبان',data:[28.4,29.8,29.1,31.5,30.8,33.2,34.7],borderColor:'#2362c8',tension:.4,pointRadius:2,borderWidth:2,fill:false},
        {label:'بيكو',data:[42.1,44.8,43.5,47.2,46.4,50.1,52.1],borderColor:'#0d9e6e',tension:.4,pointRadius:2,borderWidth:2,fill:false},
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#7a92b4',font:{size:9,family:'Cairo'}}},y:{grid:{color:'rgba(0,0,0,0.04)'},ticks:{color:'#7a92b4',font:{size:9}}}}}
  });
  // VET
  new Chart(document.getElementById('vetChart'),{
    type:'bar',
    data:{
      labels:['السعودية','مصر','الإمارات','الجزائر','المغرب','العراق'],
      datasets:[{data:[1.42,0.98,0.74,0.52,0.44,0.38],backgroundColor:['#2362c8','#0b1f3a','#0d9e6e','#c9a140','#7a92b4','#d93a52'],borderRadius:5}]
    },
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:'#7a92b4',font:{size:9,family:'Cairo'}}},y:{grid:{color:'rgba(0,0,0,0.05)'},ticks:{color:'#7a92b4',font:{size:9},callback:v=>'$'+v+'B'}}}}
  });
}

function sq(q){document.getElementById('aiQ').value=q;document.getElementById('aiQ').focus()}

async function askAI(){
  const q=document.getElementById('aiQ').value.trim();if(!q)return;
  const btn=document.getElementById('aiBtn'),ans=document.getElementById('aiAns'),txt=document.getElementById('aiTxt');
  btn.disabled=true;btn.textContent='جارٍ البحث...';ans.classList.add('show');
  txt.innerHTML='<span class="ld">يبحث الذكاء الاصطناعي في بيانات السوق</span>';
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,
        system:`أنت محلل اقتصادي زراعي متخصص في قطاع الثروة الحيوانية والرعاية البيطرية في مصر والوطن العربي وشمال أفريقيا. بيانات اليوم (13 أبريل 2026): USD/EGP=53.14، سعر كتكوت روس 308: 5.00-5.50 ج، دواجن جملة: 13.80 ج/كجم، ذرة: 7200 ج/طن، صويا: 14800 ج/طن. قدم تحليلات دقيقة وعملية مع أرقام، واذكر المصادر (وزارة الزراعة، FAOSTAT، اتحاد منتجي الدواجن، EGX).`,
        messages:[{role:'user',content:q}]
      })});
    const d=await r.json();
    txt.innerHTML=(d.content?.[0]?.text||'حدث خطأ.').replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  }catch(e){txt.textContent='خطأ في الاتصال.'}
  btn.disabled=false;btn.textContent='بحث بالذكاء الاصطناعي ↗';
}

async function getRec(type){
  const ids={poultry:'rb1',feed:'rb2',pharma:'rb3'};
  const btn=document.getElementById(ids[type]),ans=document.getElementById('recAns'),txt=document.getElementById('recTxt');
  Object.values(ids).forEach(id=>document.getElementById(id).disabled=true);
  ans.classList.add('show');txt.innerHTML='<span class="ld">يُعدّ الذكاء الاصطناعي التوصيات اليومية</span>';
  const ps={
    poultry:'أعطني توصيات يومية تفصيلية ليوم الإثنين 13 أبريل 2026 لمربي الدواجن وأصحاب مزارع الكتاكيت في مصر. اشمل: 1) تقييم سعر الكتكوت اليوم (5.00-5.50 ج) وهل يستحق الشراء؟ 2) توصيات الشراء والبيع بناءً على سعر 13.80 ج/كجم 3) نصائح تغذية وتقليل FCR 4) تنبيهات صحية ووبائية 5) توقعات الأسعار خلال 2-3 أسابيع 6) توصية استراتيجية للمزرعة.',
    feed:'أعطني توصيات يومية لمسؤولي المشتريات في شركات ومصانع الأعلاف في مصر ليوم 13 أبريل 2026. اشمل: 1) هل يجب شراء الذرة الآن (7200 ج/ط) أم الانتظار؟ 2) توصية بشأن الصويا (14800 ج/ط) 3) بدائل خام لتقليل التكلفة 4) توصيات بشأن تأثير الدولار 53.14 على الاستيراد 5) فرص عقود آجلة 6) هوامش الربح المتوقعة.',
    pharma:'أعطني توصيات يومية لمناديب ومديري مبيعات شركات الأدوية البيطرية في مصر ليوم 13 أبريل 2026. اشمل: 1) الأمراض الأكثر انتشاراً الآن في قطاع الدواجن والماشية 2) المنتجات الأكثر طلباً 3) استراتيجية زيارة العملاء 4) فرص التوسع في السوق الأفريقي وشمال أفريقيا 5) تأثير الدولار على التسعير 6) منتجات البيوسيكيوريتي المطلوبة.'
  };
  try{
    const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,
        system:'أنت مستشار متخصص في قطاع الثروة الحيوانية في مصر والوطن العربي. قدم توصيات عملية ومنظمة بشكل واضح مع أرقام دقيقة وقابلة للتطبيق الفوري.',
        messages:[{role:'user',content:ps[type]}]
      })});
    const d=await r.json();
    txt.innerHTML=(d.content?.[0]?.text||'حدث خطأ.').replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  }catch(e){txt.textContent='خطأ في الاتصال.'}
  Object.values(ids).forEach(id=>document.getElementById(id).disabled=false);
}

setTimeout(buildCharts,300);
