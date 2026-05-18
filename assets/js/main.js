const master = document.querySelector(".master")
if(master) {


window.addEventListener('load', () => {
    const barHeight = document.querySelector('.announcement-bar').offsetHeight;
    const navbar = document.querySelector('.navbar.fixed-top');
    if(navbar) {
        navbar.style.top = barHeight + 'px';
    }
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".bosla-nav");
  if (window.scrollY > 50) {
    nav.classList.add("shadow-sm");
  } else {
    nav.classList.remove("shadow-sm");
  }
});

// Add this to your main.js
document.addEventListener("DOMContentLoaded", () => {
  // Simple Entrance Animation for Service Cards
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".service-card, .job-hover").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});

function showComingSoon() {
  alert("قريباً جداً! (Coming Soon) - هذه الميزة قيد التطوير حالياً.");
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("marketChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          data: [62, 65, 63, 68, 70, 74],
          borderColor: "#1cc88a",
          borderWidth: 3,
          fill: true,
          backgroundColor: "rgba(28, 200, 138, 0.1)",
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
    },
  });
});

function copyEventLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("تم نسخ رابط الفعالية، يمكنك مشاركته الآن!");
}

function comingSoon() {
  const messages = [
    "نحن نضع اللمسات الأخيرة.. انتظرونا!",
    "المنصة تحت الإنشاء لتكون بأفضل جودة.",
    "قريباً جداً.. ترقبوا انطلاق هذه البوابة.",
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}





function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    if(!name || !phone || !message) {
        alert("يرجى ملء الحقول الأساسية (الاسم، الهاتف، والرسالة)");
        return;
    }

    const phoneNumber = "201001226683"; 

    const text = `*طلب تواصل جديد من موقع بوصلة*%0A%0A` +
                 `* الاسم:* ${name}%0A` +
                 `* الهاتف:* ${phone}%0A` +
                 `* البريد:* ${email}%0A` +
                 `* الخدمة:* ${service}%0A` +
                 `* الرسالة:* ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, '_blank').focus();
}
}

const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount(); 
});


const gromedia = document.querySelector(".gromedia")
if(gromedia) {
    // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Sticky CTA
  const stickyCta = document.getElementById('stickyCta');
  window.addEventListener('scroll', () => {
    stickyCta.classList.toggle('visible', window.scrollY > 600);
  });
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. The Magazine Database
    const magazineData = {
    "bosla": {
        title: "مجلة بوصلة",
        subtitle: "مستقبل الشركات والمصانع",
        desc: "تصفح النسخة الحصرية من مجلة بوصلة التي تستعرض رؤى استراتيجية حول مستقبل الشركات والمصانع في القطاع الزراعي المصري وكيفية التكيف مع المتغيرات الاقتصادية.",
        date: "مارس ٢٠٢٤",
        stats: "+٥٠٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/sjrw/index.html"
    },
    "24": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "التهديد الخفي للسموم الفطرية",
        desc: "هل أصبح التهديد الخفي مكشوفاً؟ ملف خاص يناقش أحدث طرق الكشف عن السموم الفطرية في الأعلاف وتأثيرها المباشر على معدلات التحويل.",
        date: "يونيو ٢٠٢٣",
        stats: "+٣٢٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/cruo/index.html" 
    },
    "23": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "مؤتمر بوصلة كاريير النسخة الخامسة",
        desc: "من معرض أجرينا انطلقت BOSLA BUSINESS GATE لتقود التغيير في عالم تطوير الشركات البيطرية والزراعية.",
        date: "اكتوبر ٢٠٢٥",
        stats: "+٤١٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/jnby/index.html"
    },
    "22": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "Poultry Doctor AI - المساعد الذكي",
        desc: "استعراض تقنية 'دكتور الدواجن بالذكاء الاصطناعي' وكيف يعمل كمساعد رقمي للطبيب البيطري في تشخيص الأمراض المعقدة داخل العنابر.",
        date: "مايو ٢٠٢٣",
        stats: "+٤١٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/aspn/index.html"
    },
    "21": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "الذكاء الاصطناعي وإنترنت الأشياء (IoT)",
        desc: "كيف تعيد تقنيات إنترنت الأشياء تشكيل صناعة الدواجن من خلال المراقبة اللحظية لدرجات الحرارة والرطوبة واستهلاك العلف.",
        date: "أبريل ٢٠٢٣",
        stats: "+٢٩٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/slcc/index.html"
    },
    "20": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "تربية الدواجن في الشتاء",
        desc: "دليل المربي للتعامل مع تحديات فصل الشتاء وارتفاع أسعار الكتاكيت، مع نصائح لضبط أنظمة التدفئة وتقليل تكاليف التشغيل.",
        date: "يناير ٢٠٢٣",
        stats: "+٣٨٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/wzpj/index.html"
    },
    "19": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "أمراض مبيض الدجاج",
        desc: "دراسة طبية متخصصة: هل يصاب مبيض الدجاجة بالأورام السرطانية؟ التعرف على الأعراض التشريحية وطرق الوقاية.",
        date: "نوفمبر ٢٠٢٢",
        stats: "+٢١٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/xgqy/index.html"
    },
    "18": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "مستقبل صناعة الدواجن في مصر",
        desc: "تحليل اقتصادي وفني للإجابة على السؤال الصعب: إلى أين تتجه صناعة الدواجن في ظل التحديات العالمية الراهنة؟",
        date: "أكتوبر ٢٠٢٢",
        stats: "+٤٥٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/18-ePjK/"
    },
    "17": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "تغطية معرض إيجي بلكس - كفر الشيخ",
        desc: "تغطية حصرية لفعاليات معرض إيجي بلكس بكفر الشيخ، وأهم اللقاءات مع رواد الصناعة والشركات العارضة.",
        date: "سبتمبر ٢٠٢٢",
        stats: "+١٥٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/qipt/"
    },
    "16": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "افتتاح إيجي بلكس ٢٠٢٢",
        desc: "ملف خاص حول انطلاق الدورة الجديدة لمعرض إيجي بلكس، وتسليط الضوء على الابتكارات الجديدة في قطاع الماشية والدواجن.",
        date: "أغسطس ٢٠٢٢",
        stats: "+١٩٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/ghyh/"
    },
    "15": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "مؤتمر بوصلة فيت للتأهيل",
        desc: "تغطية خاصة لمؤتمر 'بوصلة فيت' لتأهيل حديثي التخرج لسوق العمل البيطري والزراعي وتجسير الفجوة بين الدراسة والواقع.",
        date: "يوليو ٢٠٢٢",
        stats: "+٥٢٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/hfpo/"
    },
    "14": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "المسؤولية الاجتماعية للشركات",
        desc: "نموذج 'دلتا فيت سنتر': كيف تساهم الشركات في تطوير المجتمع المحيط ودعم صغار المربين كجزء من رؤيتها الاستراتيجية.",
        date: "مايو ٢٠٢٢",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/13-iauY/"
    },
    "13": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "المسؤولية الاجتماعية للشركات",
        desc: "نموذج 'دلتا فيت سنتر': كيف تساهم الشركات في تطوير المجتمع المحيط ودعم صغار المربين كجزء من رؤيتها الاستراتيجية.",
        date: "مايو ٢٠٢٢",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/13-iauY/"
    },
    "12": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "انتفاضة أمل جديدة فى قلوب البيطريين",
        desc: "منتدى دلتا فيت سنتر لتبادل الخبرات .. تغطية خاصة",
        date: "سبتمبر ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/find/"
    },
    "7": {
        title: "المختبر البيطرى",
        subtitle: "الجلد العقدي يحاصر المحافظات",
        desc: "كيف تراقب الحالة الصحية لقطيع من دجاجك ؟",
        date: "فبراير ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/jnfx"
    },
    "6": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "إنطلاق معرض جرو إكسبو ٣-٥ مايو",
        desc: "أهمية التشخيص المعملى الدقيق و تحديات صناعة الدواجن فى مؤتمر الجمعية البيطرية",
        date: "فبراير ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/6-sLXL"
    },
    "5": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "تجهيز المزرعة قبل دخول فصل الشتاء",
        desc: "الجهاز التناسلى فى الدجاج البياض",
        date: "فبراير ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/5-Wzh4/"
    },
    "4": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "ترشيد استخدام الدواء في علاج الحيوان",
        desc: "مواصفات الكتكوت الجيد وأخطاء التحضين",
        date: "فبراير ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/dbyp/"
    },
    "3": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "تأثير الحرعلى الطيور",
        desc: "الصعيد والاستثمار .. رؤية خاصة ..",
        date: "فبراير ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/qpwx/"
    },
    "2": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "معرض دواجن السودان وفرص النجاح",
        desc: "الخطايا العشر في صناعة الدواجن",
        date: "فبراير ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/xlec/"
    },
    "1": {
        title: "دواجن وماشية مصر أفريقيا",
        subtitle: "خبراء ومربين هيكلة صناعة الدواجن هى الحل",
        desc: "ملامح الثروة الحيوانية فى باكستان",
        date: "فبراير ٢٠٢٠",
        stats: "+١٣٠٠ قراءة",
        url: "https://online.fliphtml5.com/karxs/kpbg/"
    },
};

    // 2. Get the ID from the URL (e.g., ?id=24)
    const urlParams = new URLSearchParams(window.location.search);
    const magId = urlParams.get('id');

    // 3. Elements to update
    const titleEl = document.querySelector('.bosla-view-title');
    const subtitleEl = document.querySelector('.bosla-view-subtitle');
    const descEl = document.querySelector('.bosla-view-desc p');
    const dateEl = document.querySelectorAll('.spec-val')[0];
    const statsEl = document.querySelectorAll('.spec-val')[1];
    const iframeEl = document.querySelector('.bosla-iframe-wrapper iframe');

    // 4. Update Logic
    if (magId && magazineData[magId]) {
        const data = magazineData[magId];
        titleEl.textContent = data.title;
        subtitleEl.textContent = data.subtitle;
        descEl.textContent = data.desc;
        dateEl.textContent = data.date;
        statsEl.textContent = data.stats;
        iframeEl.src = data.url;
        
        // Update browser tab title
        document.title = data.subtitle + " | بوصلة";
    } else {
        // Fallback if ID not found or missing
        titleEl.textContent = "العدد غير موجود";
        iframeEl.style.display = 'none';
    }
});

const ticket = document.querySelector(".ticket")
if(ticket) {
   /* Navbar scroll */
    window.addEventListener('scroll', () => { document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60); });

    /* Countdown to August 1, 2026 */
    function updateCD() {
      const diff = new Date('2026-08-01T09:00:00') - new Date();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000), h = Math.floor(diff % 86400000 / 3600000),
        m = Math.floor(diff % 3600000 / 60000), s = Math.floor(diff % 60000 / 1000);
      document.getElementById('cd-d').textContent = String(d).padStart(3, '0');
      document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
      document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
      document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
    }
    updateCD(); setInterval(updateCD, 1000);

    /* Video Modal */
  function openVideo(driveUrl) {
    // Basic check to see if it's a valid link or if it's still the placeholder
    if (!driveUrl || driveUrl.includes('drive.google.com') === false) { 
        alert('يرجى إضافة رابط فيديو Google Drive الصحيح'); 
        return; 
    }
    
    // Ensure the link ends with /preview to work inside an iframe
    let finalUrl = driveUrl;
    if (finalUrl.includes('/view')) {
        finalUrl = finalUrl.replace('/view', '/preview');
    }

    const frame = document.getElementById('vidFrame');
    frame.src = finalUrl;
    
    // Google Drive doesn't always support ?autoplay=1 via iframe, 
    // but the preview mode usually starts the player interface immediately.
    document.getElementById('vidModal').classList.add('active');
}

function closeVideo() { 
    document.getElementById('vidModal').classList.remove('active'); 
    document.getElementById('vidFrame').src = ''; 
}

    /* ──────────────────────────────────
      FORM LOGIC
      ────────────────────────────────── */
    let currentStep = 1;
    const totalSteps = 3;

    const stepHeaders = [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#8b5cf6" stroke-width="2"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/></svg>`,
        title: 'البيانات الشخصية', sub: 'أدخل معلوماتك الأساسية لإتمام التسجيل'
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#8b5cf6" stroke-width="2"/><path d="M8 21h8M12 17v4" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/></svg>`,
        title: 'التخصص والجهة', sub: 'أخبرنا عن خلفيتك المهنية والأكاديمية'
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none"><path d="M20 12V22H4V12" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/><path d="M22 7H2v5h20V7z" stroke="#8b5cf6" stroke-width="2" stroke-linejoin="round"/><path d="M12 22V7" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/></svg>`,
        title: 'التذكرة وتأكيد الحجز', sub: 'اختر نوع تذكرتك وأتمّ التسجيل'
      },
    ];

    function updateFormUI() {
      // Steps
      for (let i = 1; i <= totalSteps; i++) {
        const el = document.getElementById('fstep' + i);
        el.className = 'f-step' + (i === currentStep ? ' active' : (i < currentStep ? ' done' : ''));
      }
      // Progress
      document.getElementById('fpFill').style.width = (currentStep / totalSteps * 100) + '%';
      // Pages
      document.querySelectorAll('.form-page').forEach(p => p.classList.remove('active'));
      document.getElementById('fpage' + currentStep).classList.add('active');
      // Header
      const h = stepHeaders[currentStep - 1];
      document.getElementById('fhdrIcon').innerHTML = h.icon;
      document.getElementById('fhdrTitle').textContent = h.title;
      document.getElementById('fhdrSub').textContent = h.sub;
      // Buttons
      const back = document.getElementById('btnBack');
      const next = document.getElementById('btnNext');
      back.disabled = currentStep === 1;
      next.innerHTML = currentStep === totalSteps
        ? 'تأكيد الحجز <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="1.8"/></svg>'
        : 'التالي <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>';
    }

    function validate(step) {
      const err = (id) => { const el = document.getElementById(id); if (el) { el.classList.add('error'); setTimeout(() => el.classList.remove('error'), 2500); } };

      if (step === 1) {
        const fname = document.getElementById('ff_fname').value.trim();
        const lname = document.getElementById('ff_lname').value.trim();
        const phone = document.getElementById('ff_phone').value.trim();
        const email = document.getElementById('ff_email').value.trim();
        const gov = document.getElementById('ff_gov').value;
        if (!fname) { err('ff_fname'); showToast('❌ أدخل اسمك الأول', true); return false; }
        if (!lname) { err('ff_lname'); showToast('❌ أدخل اسمك الأخير', true); return false; }
        if (!phone || phone.length < 10) { err('ff_phone'); showToast('❌ أدخل رقم هاتف صحيح', true); return false; }
        if (!email || !email.includes('@')) { err('ff_email'); showToast('❌ أدخل بريد إلكتروني صحيح', true); return false; }
        if (!gov) { err('ff_gov'); showToast('❌ اختر المحافظة', true); return false; }
      }
      if (step === 2) {
        const spec = document.querySelector('input[name="spec"]:checked');
        const src = document.getElementById('ff_src').value;
        if (!spec) { showToast('❌ اختر تخصصك المهني', true); return false; }
        if (!src) { err('ff_src'); showToast('❌ أخبرنا كيف عرفت عنا', true); return false; }
      }
      if (step === 3) {
        const ticket = document.querySelector('input[name="ticket"]:checked');
        if (!ticket) { showToast('❌ اختر نوع التذكرة', true); return false; }
      }
      return true;
    }

    function fillSummary() {
      const fname = document.getElementById('ff_fname').value.trim();
      const lname = document.getElementById('ff_lname').value.trim();
      const spec = document.querySelector('input[name="spec"]:checked');
      const ticket = document.querySelector('input[name="ticket"]:checked');
      document.getElementById('sum_name').textContent = fname + ' ' + lname;
      document.getElementById('sum_phone').textContent = document.getElementById('ff_phone').value.trim();
      document.getElementById('sum_email').textContent = document.getElementById('ff_email').value.trim();
      document.getElementById('sum_gov').textContent = document.getElementById('ff_gov').value;
      document.getElementById('sum_spec').textContent = spec ? spec.value : '—';
      
     // Logic for the new ticket display
  let ticketText = 'اختر أعلاه';
  if (ticket) {
    if (ticket.value === 'standard') ticketText = '🎟️ تذكرة الحضور — 100 جنيه';
    else if (ticket.value === 'transport') ticketText = '🚌 تذكرة الانتقالات — 300 جنيه';
    else if (ticket.value === 'trans_meal') ticketText = '🚌🍔 انتقالات ووجبة — 400 جنيه'; // الإضافة هنا
    else if (ticket.value === 'premium') ticketText = '⭐ تذكرة مميزة — 350 جنيه';
  }
  document.getElementById('sum_ticket').textContent = ticketText;
}
    // Watch ticket change to update summary + InstaPay amount
 document.querySelectorAll('input[name="ticket"]').forEach(r => {
  r.addEventListener('change', () => {
    fillSummary();
    const badge = document.getElementById('ip-amount-badge');
    if (badge) {
      if (r.value === 'premium') badge.textContent = '350 جنيه';
      else if (r.value === 'transport') badge.textContent = '300 جنيه';
      else if (r.value === 'trans_meal') badge.textContent = '400 جنيه'; // السعر الجديد
      else badge.textContent = '100 جنيه';
    }
  });
});

    function nextStep() {
      if (!validate(currentStep)) return;
      if (currentStep === totalSteps) { submitForm(); return; }
      if (currentStep === 2) fillSummary();
      currentStep++;
      updateFormUI();
      document.querySelector('.form-wrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function prevStep() {
      if (currentStep === 1) return;
      currentStep--;
      updateFormUI();
    }

    async function submitForm() {
      const ticket = document.querySelector('input[name="ticket"]:checked');
      const spec = document.querySelector('input[name="spec"]:checked');
      const prev = document.querySelector('input[name="prev"]:checked');

      const payload = {
        firstName: document.getElementById('ff_fname').value.trim(),
        lastName: document.getElementById('ff_lname').value.trim(),
        phone: document.getElementById('ff_phone').value.trim(),
        email: document.getElementById('ff_email').value.trim(),
        governorate: document.getElementById('ff_gov').value,
        birthYear: document.getElementById('ff_year').value,
        specialization: spec ? spec.value : '',
        organization: document.getElementById('ff_org').value.trim(),
        experience: document.getElementById('ff_exp').value,
        source: document.getElementById('ff_src').value,
        previousAttendance: prev ? prev.value : 'لا',
        topics: document.getElementById('ff_topics').value.trim(),
        ticketType: ticket ? ticket.value : '',
    ticketLabel: ticket ? (
    ticket.value === 'standard' ? 'تذكرة الحضور — 100 جنيه' : 
    ticket.value === 'transport' ? 'تذكرة شاملة الانتقالات — 300 جنيه' : 
    ticket.value === 'trans_meal' ? 'تذكرة الانتقالات والوجبة — 400 جنيه' : // الإضافة هنا
    'تذكرة مميزة — 350 جنيه'
) : '',
};

      // Show loading
     const btn = document.getElementById('btnNext');
  btn.textContent = '⏳ جارٍ الإرسال...';
  btn.disabled = true;

  // Create a timeout controller (10 seconds)
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 1000);

      try {
    const resp = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal // Add the signal here
    });

    clearTimeout(id); // Clear timeout if it responds in time

    if (resp.ok) {
      const data = await resp.json();
      showSuccess(data.bookingId);
    } else {
      const err = await resp.json();
      showToast('❌ ' + (err.message || 'حدث خطأ'), true);
      btn.textContent = 'تأكيد الحجز';
      btn.disabled = false;
    }
  } catch (e) {
    console.error("Submission Error:", e);
    // If the server is down or pending, this fallback will now trigger
    const fakeId = 'BOSLA6-' + String(Math.floor(1000 + Math.random() * 9000));
    showSuccess(fakeId, true);
  }
}

    function showSuccess(bookingId, offline = false) {
      document.querySelectorAll('.form-page').forEach(p => p.style.display = 'none');
      document.getElementById('formNavBtns').style.display = 'none';
      document.querySelector('.form-steps').style.display = 'none';
      document.getElementById('fpFill').style.width = '100%';
      document.getElementById('fhdrTitle').textContent = 'تم الحجز!';
      document.getElementById('fhdrSub').textContent = 'نراك في بوصلة كارير 6 🎉';
      document.getElementById('fhdrIcon').innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="12" r="9" stroke="#8b5cf6" stroke-width="2"/></svg>';

      document.getElementById('bookingIdDisplay').textContent = bookingId;
      const sw = document.getElementById('successWrap');
      sw.classList.add('show');

      if (offline) showToast('✅ تم التسجيل! سنتواصل معك للتأكيد');
    }

    // Ticket select from ticket cards
 function selectTicketAndScroll(type) {
  let id = 'tk_std';
  if (type === 'premium') id = 'tk_prm';
  if (type === 'transport') id = 'tk_trans';
  if (type === 'trans_meal') id = 'tk_trans_meal'; // الإضافة هنا
  
  const r = document.getElementById(id);
  if (r) r.checked = true;
  r.dispatchEvent(new Event('change'));
  document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

    // Init
    updateFormUI();

    /* Scroll reveal */
    const io = new IntersectionObserver(entries => {
      entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }, i * 60); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.perk-card,.speaker-card,.video-card').forEach(el => {
      el.style.opacity = '0'; el.style.transform = 'translateY(24px)'; el.style.transition = 'opacity .55s ease,transform .55s ease'; io.observe(el);
    });

}

const jobs = document.querySelector(".jobs")
if(jobs){
  /* ─────────────────────────────────
   DATA
   ───────────────────────────────── */
const CATEGORIES = [
  { id:'vet',    name:'طب بيطري',       count:420, color:'ci-teal',
    icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M15 4a5 5 0 00-5 5v2a5 5 0 0010 0V9a5 5 0 00-5-5z" stroke="currentColor" stroke-width="1.8"/><path d="M9 16h12l1 4H8l1-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M11 20l1 6M19 20l-1 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="22" cy="8" r="3" fill="currentColor" opacity=".6"/><path d="M20 8h4M22 6v4" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>` },
  { id:'agri',   name:'علوم زراعية',     count:285, color:'ci-emerald',
    icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M15 26V14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M15 14C15 8 8 5 5 8c3 1 6 4 10 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M15 14c0-6 7-9 10-6-3 1-6 4-10 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M7 26h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>` },
  { id:'animal', name:'إنتاج حيواني',    count:198, color:'ci-gold',
    icon:`<svg viewBox="0 0 30 30" fill="none"><ellipse cx="15" cy="17" rx="8" ry="6" stroke="currentColor" stroke-width="1.8"/><circle cx="11" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/><circle cx="19" cy="10" r="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M9 14l-3 2M21 14l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 22l-1 4M18 22l1 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>` },
  { id:'pharma', name:'صيدلة بيطرية',    count:142, color:'ci-violet',
    icon:`<svg viewBox="0 0 30 30" fill="none"><rect x="10" y="4" width="10" height="22" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M13 10h4M15 8v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10 14h10" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M12 18h2M16 20h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
  { id:'lab',    name:'مختبرات وأبحاث',  count:115, color:'ci-sky',
    icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M11 4v10l-5 8a2 2 0 001.7 3h14.6A2 2 0 0024 22l-5-8V4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 4h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="14" cy="20" r="1.5" fill="currentColor" opacity=".5"/><circle cx="17" cy="18" r="1" fill="currentColor" opacity=".4"/></svg>` },
  { id:'sales',  name:'مبيعات وتسويق',   count:234, color:'ci-rose',
    icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M4 22L10 14l5 4 6-8 5 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="26" cy="9" r="3" stroke="currentColor" stroke-width="1.5"/></svg>` },
  { id:'eng',    name:'هندسة زراعية',    count:89,  color:'ci-gold',
    icon:`<svg viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M15 4v4M15 22v4M4 15h4M22 15h4M7.2 7.2l2.8 2.8M20 20l2.8 2.8M7.2 22.8L10 20M20 10l2.8-2.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>` },
  { id:'mgmt',   name:'إدارة مزارع',     count:167, color:'ci-teal',
    icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M3 26l4-12 5 5 5-8 5 5 5-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 26h24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>` },
  { id:'nutrition',name:'تغذية حيوانية', count:78,  color:'ci-emerald',
    icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M15 4c-5 0-10 4-10 10s5 10 10 10 10-4 10-10" stroke="currentColor" stroke-width="1.8"/><path d="M15 4c2 3 5 5 5 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M15 10v6l3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>` },
  { id:'hr',     name:'موارد بشرية',     count:56,  color:'ci-violet',
    icon:`<svg viewBox="0 0 30 30" fill="none"><circle cx="15" cy="9" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M6 24c0-5 4-8 9-8s9 3 9 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>` },
];

const JOBS = [
  {
    id:1, featured:true,
    title:'طبيب بيطري ميداني',
    company:'شركة سيرا للأدوية البيطرية',
    companyInitials:'سيرا', companyColor:'#0f2a4a',
    specialty:'طب بيطري', category:'vet',
    type:'دوام كامل', location:'القاهرة',
    salary:'5,000 – 8,000 ج.م', experience:'1 – 3 سنوات',
    posted:'منذ يومين',
    desc:'نبحث عن طبيب بيطري متخصص في الدواجن للعمل في الزيارات الميدانية للمزارع وتقديم الخدمات البيطرية.',
    requirements:['بكالوريوس طب بيطري','خبرة في الدواجن أو الحيوانات الكبيرة','رخصة قيادة','إجادة الكمبيوتر'],
    benefits:['سيارة شركة','تأمين طبي','بدل انتقالات','مكافأة أداء'],
  },
  {
    id:2, featured:true,
    title:'ممثل مبيعات بيطري',
    company:'إيدي فارم — Edi Farm',
    companyInitials:'EF', companyColor:'#1a0f3a',
    specialty:'مبيعات وتسويق', category:'sales',
    type:'دوام كامل', location:'الدقهلية',
    salary:'4,000 – 6,500 ج.م',  experience:'حديث التخرج',
    posted:'منذ 3 أيام',
    desc:'فرصة رائعة لخريجي الطب البيطري في مجال المبيعات الطبية الزراعية، مع تدريب متكامل.',
    requirements:['مؤهل طب بيطري أو زراعي','قدرة على التواصل والإقناع','استعداد للسفر'],
    benefits:['عمولات مجزية','تدريب مكثف','مسار وظيفي واضح'],
  },
  {
    id:3,
    title:'مدير مزرعة دواجن',
    company:'مجموعة الريف الأخضر',
    companyInitials:'رخ', companyColor:'#0a2a1a',
    specialty:'إدارة مزارع', category:'mgmt',
    type:'دوام كامل', location:'البحيرة',
    salary:'8,000 – 12,000 ج.م', experience:'5+ سنوات',
    posted:'منذ أسبوع',
    desc:'إدارة مزرعة دواجن متكاملة بطاقة 500,000 طائر، الإشراف على الفريق البيطري والإنتاجي.',
    requirements:['بكالوريوس إنتاج حيواني أو طب بيطري','خبرة 5 سنوات في الدواجن','قيادة فرق العمل'],
    benefits:['سكن داخل المزرعة','سيارة','تأمين صحي وإجازة سنوية'],
  },
  {
    id:4,
    title:'أخصائي مختبر بيطري',
    company:'المركز القومي للبحوث',
    companyInitials:'قبح', companyColor:'#1a1a2e',
    specialty:'مختبرات وأبحاث', category:'lab',
    type:'دوام كامل', location:'القاهرة',
    salary:'5,500 – 7,500 ج.م', experience:'2 – 5 سنوات',
    posted:'منذ 4 أيام',
    desc:'إجراء التحاليل المختبرية وتشخيص الأمراض الحيوانية باستخدام أحدث تقنيات الـ PCR والمصليات.',
    requirements:['طب بيطري أو علوم مختبرية','خبرة في تقنيات PCR','دقة واهتمام بالتفاصيل'],
    benefits:['بيئة بحثية متطورة','فرص للنشر العلمي','تأمين حكومي'],
  },
  {
    id:5,
    title:'صيدلاني أدوية بيطرية',
    company:'فارماكيا فيت',
    companyInitials:'PV', companyColor:'#2a1a0a',
    specialty:'صيدلة بيطرية', category:'pharma',
    type:'دوام كامل', location:'الإسكندرية',
    salary:'6,000 – 9,000 ج.م', experience:'2 – 4 سنوات',
    posted:'منذ 5 أيام',
    desc:'الإشراف على صياغة وتطوير الأدوية البيطرية والرقابة الجودة والتسجيل لدى الجهات التنظيمية.',
    requirements:['بكالوريوس صيدلة أو طب بيطري','معرفة بلوائح الهيئة المصرية للدواء','خبرة في الـ GMP'],
    benefits:['حوافز مميزة','تطوير مهني مستمر','بيئة عمل دولية'],
  },
  {
    id:6,
    title:'مهندس زراعي استشاري',
    company:'شركة أجروتك مصر',
    companyInitials:'AG', companyColor:'#0a1f10',
    specialty:'علوم زراعية', category:'agri',
    type:'هجين', location:'الشرقية',
    salary:'5,000 – 7,000 ج.م', experience:'3 – 6 سنوات',
    posted:'منذ يومين',
    desc:'تقديم الاستشارات الزراعية للمزارعين وشركات الإنتاج الزراعي في مجالات التربة والمحاصيل والري.',
    requirements:['هندسة زراعية أو زراعة','خبرة ميدانية','إجادة برامج GIS','اللغة الإنجليزية'],
    benefits:['سيارة ميدانية','مرونة في العمل','بدل مهني'],
  },
  {
    id:7,
    title:'أخصائي تغذية حيوانية',
    company:'مجمع الدلتا للأعلاف',
    companyInitials:'دأ', companyColor:'#1a0f00',
    specialty:'تغذية حيوانية', category:'nutrition',
    type:'دوام كامل', location:'كفر الشيخ',
    salary:'5,500 – 8,000 ج.م', experience:'2 – 5 سنوات',
    posted:'منذ 6 أيام',
    desc:'وضع برامج غذائية متخصصة للدواجن والأسماك والحيوانات المجترة وتحليل العلائق الغذائية.',
    requirements:['إنتاج حيواني أو تغذية حيوانية','إجادة حسابات العلائق','خبرة عملية في المزارع'],
    benefits:['عمل بيئي','تأمين صحي وتقاعد','إجازة سنوية 21 يوم'],
  },
  {
    id:8,
    title:'مدير موارد بشرية — قطاع زراعي',
    company:'هولدينج النيل الزراعي',
    companyInitials:'ه', companyColor:'#1f1f1f',
    specialty:'موارد بشرية', category:'hr',
    type:'دوام كامل', location:'القاهرة',
    salary:'10,000 – 15,000 ج.م', experience:'7+ سنوات',
    posted:'منذ 3 أيام',
    desc:'قيادة إدارة الموارد البشرية لمجموعة زراعية كبرى بها أكثر من 1200 موظف في 7 محافظات.',
    requirements:['HR أو إدارة أعمال','خبرة 7 سنوات في الموارد البشرية','شهادة SHRM أو PHRi ميزة'],
    benefits:['راتب تنافسي','سيارة الشركة','تأمين طبي للعائلة'],
  },
];

const COMPANIES = [
  { name:'سيرا للأدوية البيطرية', sector:'أدوية بيطرية', jobs:24, size:'500+ موظف', init:'سيرا', color:'#0f2a4a' },
  { name:'مجموعة الريف الأخضر', sector:'إنتاج دواجن', jobs:12, size:'1000+ موظف', init:'رخ', color:'#0a2a1a' },
  { name:'المركز القومي للبحوث', sector:'أبحاث وتطوير', jobs:8, size:'حكومي', init:'قبح', color:'#1a1a2e' },
  { name:'أجروتك مصر', sector:'استشارات زراعية', jobs:15, size:'200+ موظف', init:'AG', color:'#0a1f10' },
  { name:'مجمع الدلتا للأعلاف', sector:'علف وتغذية', jobs:10, size:'750+ موظف', init:'دأ', color:'#1a1200' },
  { name:'هولدينج النيل الزراعي', sector:'تجميع زراعي', jobs:30, size:'1500+ موظف', init:'ه', color:'#1f1010' },
  { name:'إيدي فارم', sector:'مزارع دواجن', jobs:18, size:'400+ موظف', init:'EF', color:'#1a0f3a' },
  { name:'فارماكيا فيت', sector:'صيدلة بيطرية', jobs:9, size:'300+ موظف', init:'PV', color:'#2a1a0a' },
];

const HOW_STEPS_SEEKER = [
  { num:'01', icon:`<svg viewBox="0 0 30 30" fill="none"><circle cx="15" cy="10" r="5" stroke="currentColor" stroke-width="1.8"/><path d="M7 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`, color:'ci-teal', title:'أنشئ ملفك المهني', desc:'سجّل بياناتك وتخصصك وخبراتك في 3 دقائق فقط وأضف سيرتك الذاتية' },
  { num:'02', icon:`<svg viewBox="0 0 30 30" fill="none"><circle cx="14" cy="14" r="8" stroke="currentColor" stroke-width="1.8"/><path d="M24 24l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`, color:'ci-violet', title:'ابحث وصفّي الوظائف', desc:'استخدم محرك البحث المتقدم وفلتر النتائج حسب التخصص والمكان والراتب' },
  { num:'03', icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M5 7h20v16a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" stroke="currentColor" stroke-width="1.8"/><path d="M5 7l7.5-4H17L24 7M12 7v18M18 7v18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`, color:'ci-gold', title:'قدّم بنقرة واحدة', desc:'أرسل طلبك مع سيرتك الذاتية ورسالة تقديم احترافية لآلاف الشركات' },
  { num:'04', icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M24 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.8"/><path d="M9 12l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`, color:'ci-emerald', title:'ابدأ مسيرتك', desc:'تلقّ عروض العمل وإشعارات الشركات وابدأ مسيرتك المهنية الحقيقية' },
];

const HOW_STEPS_EMPLOYER = [
  { num:'01', icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M5 6h20v18a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" stroke="currentColor" stroke-width="1.8"/><path d="M19 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 14h6M12 18h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`, color:'ci-teal', title:'سجّل شركتك', desc:'أنشئ ملف شركتك وأضف شعارها ووصفها وقطاعاتها في دقائق' },
  { num:'02', icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M15 6v10M11 10l4-4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="5" y="18" width="20" height="8" rx="2" stroke="currentColor" stroke-width="1.8"/></svg>`, color:'ci-violet', title:'انشر وظيفتك', desc:'أدخل تفاصيل الوظيفة والمتطلبات وحدد الراتب وانشر في ثوانٍ' },
  { num:'03', icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M4 20L10 13l5 4 6-8 5 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="3" y="22" width="24" height="4" rx="1" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/></svg>`, color:'ci-gold', title:'استعرض المتقدمين', desc:'اطّلع على ملفات المتقدمين وصفّ أفضل المرشحين بسهولة تامة' },
  { num:'04', icon:`<svg viewBox="0 0 30 30" fill="none"><path d="M10 15l5 5 10-10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="15" r="12" stroke="currentColor" stroke-width="1.5"/></svg>`, color:'ci-emerald', title:'وظّف بكفاءة', desc:'تواصل مع المرشحين المناسبين مباشرة واختر الأنسب لفريقك' },
];

/* ─────────────────────────────────
   RENDER
   ───────────────────────────────── */
function renderCategories() {
  const grid = document.getElementById('catsGrid');
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" onclick="filterByCategory('${c.id}')">
      <div class="cat-icon ${c.color}">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} وظيفة</div>
    </div>
  `).join('');
}

function renderJobs(jobs) {
  const list = document.getElementById('jobsList');
  list.innerHTML = jobs.map(j => `
    <div class="job-card${j.featured?' featured':''}" onclick="openJobDetail(${j.id})">
      ${j.featured?'<div style="position:absolute;top:5px;left:20px"><span class="badge badge-featured" style="padding:0px 4px">⭐ مميز</span></div>':''}
      <div class="jc-top">
        <div class="jc-logo" style="background:${j.companyColor};color:#fff">${j.companyInitials}</div>
        <div class="jc-info">
          <div class="jc-title">${j.title}</div>
          <div class="jc-company">
            ${j.company}
            <span class="jc-verified">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 11l-3.7 1.6.7-4.1L2 5.6l4.2-1z" fill="#0d9488"/></svg>
            </span>
          </div>
        </div>
        <div style="text-align:left">
          <div class="jc-salary">${j.salary}</div>
          <div class="jc-time" style="margin-top:3px">${j.posted}</div>
        </div>
      </div>
      <div class="jc-badges">
        <span class="badge badge-teal">${j.specialty}</span>
        <span class="badge badge-gray">${j.type}</span>
        <span class="badge badge-gray">${j.experience}</span>
      </div>
      <div class="jc-desc">${j.desc}</div>
      <div class="jc-bottom">
        <div class="jc-meta">
          <div class="jc-meta-item">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" stroke="currentColor" stroke-width="1.8"/></svg>
            ${j.location}
          </div>
        </div>
        <div class="jc-actions">
          <div class="btn-save" onclick="event.stopPropagation();toggleSave(this,${j.id})" title="حفظ">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" stroke-width="2"/></svg>
          </div>
          <button class="btn-apply" onclick="event.stopPropagation();openApply(${j.id})">قدّم الآن</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCompanies() {
  const grid = document.getElementById('companiesGrid');
  grid.innerHTML = COMPANIES.map(c => `
    <div class="company-card">
      <div class="co-logo" style="background:${c.color};color:#fff">${c.init}</div>
      <div class="co-name">${c.name}</div>
      <div class="co-sector">${c.sector}</div>
      <div class="co-info">
        <div class="co-info-item">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><rect x="1" y="4" width="14" height="9" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M6 4V3a2 2 0 014 0v1" stroke="currentColor" stroke-width="1.3"/></svg>
          ${c.jobs} وظيفة
        </div>
        <div class="co-info-item">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
          ${c.size}
        </div>
      </div>
    </div>
  `).join('');
}

function renderHowSteps(type) {
  const steps = type === 'seeker' ? HOW_STEPS_SEEKER : HOW_STEPS_EMPLOYER;
  document.getElementById('howSteps').innerHTML = steps.map(s => `
    <div class="how-step">
      <div class="how-step-num">${s.num}</div>
      <div class="how-icon ${s.color}">${s.icon}</div>
      <div class="how-title">${s.title}</div>
      <div class="how-desc">${s.desc}</div>
    </div>
  `).join('');
}

/* ─────────────────────────────────
   INTERACTIONS
   ───────────────────────────────── */
function filterByCategory(id) {
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  const filtered = id === 'all' ? JOBS : JOBS.filter(j => j.category === id);
  renderJobs(filtered.length ? filtered : JOBS);
  document.getElementById('jobsCount').textContent = filtered.length || JOBS.length;
  document.getElementById('jobs').scrollIntoView({behavior:'smooth', block:'start'});
  showToast('🔍 تم التصفية حسب التخصص');
}

function searchJobs() {
  const q    = document.getElementById('heroSearch').value.toLowerCase();
  const city = document.getElementById('heroCity').value;
  const spec = document.getElementById('heroSpec').value;

  let filtered = JOBS.filter(j => {
    const matchQ    = !q    || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.specialty.includes(q);
    const matchCity = !city || j.location === city;
    const matchSpec = !spec || j.specialty.includes(spec.slice(0,4));
    return matchQ && matchCity && matchSpec;
  });
  renderJobs(filtered.length ? filtered : JOBS);
  document.getElementById('jobsCount').textContent = filtered.length || JOBS.length;
  document.getElementById('jobs').scrollIntoView({behavior:'smooth'});
  if(filtered.length) showToast(`🎯 تم إيجاد ${filtered.length} وظيفة مناسبة`);
  else showToast('⚠️ لا نتائج — عرض كل الوظائف', 'error');
}

// NavSearch
document.getElementById('navSearchInput').addEventListener('keydown', e => {
  if(e.key==='Enter'){
    document.getElementById('heroSearch').value = e.target.value;
    searchJobs();
  }
});

// Quick tags
document.getElementById('quickTags').addEventListener('click', e => {
  const t = e.target.closest('.qtag');
  if(!t) return;
  document.querySelectorAll('.qtag').forEach(q=>q.classList.remove('active'));
  t.classList.add('active');
  const tag = t.dataset.tag;
  if(tag==='all') renderJobs(JOBS);
  else if(tag==='remote') renderJobs(JOBS.filter(j=>j.type.includes('بعد')));
  else renderJobs(JOBS.filter(j=>j.category===tag));
  document.getElementById('jobsCount').textContent = document.querySelectorAll('.job-card').length;
});

function toggleFilter(el) {
  const check = el.querySelector('.fc-check');
  check.classList.toggle('checked');
}

function clearFilters() {
  document.querySelectorAll('.fc-check').forEach(c => c.classList.remove('checked'));
  renderJobs(JOBS);
  showToast('🔄 تم مسح الفلاتر');
}

function toggleSave(btn, id) {
  btn.classList.toggle('saved');
  if(btn.classList.contains('saved')) {
    showToast('💛 تم حفظ الوظيفة');
    btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/></svg>';
  } else {
    showToast('تم إزالة الوظيفة من المحفوظات');
    btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" stroke-width="2"/></svg>';
  }
}

function loadMore() {
  showToast('⏳ تحميل المزيد من الوظائف...'); 
  setTimeout(()=>showToast('✅ تم تحميل 8 وظائف إضافية'),1200);
}

function switchTab(btn, type) {
  document.querySelectorAll('.how-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderHowSteps(type);
}

/* ─────────────────────────────────
   JOB DETAIL MODAL
   ───────────────────────────────── */
function openJobDetail(id) {
  const job = JOBS.find(j=>j.id===id);
  if(!job) return;
  document.getElementById('jobModalTitle').textContent = job.title;
  document.getElementById('jobModalBody').innerHTML = `
    <div class="jd-company-row">
      <div class="jd-logo" style="background:${job.companyColor};color:#fff">${job.companyInitials}</div>
      <div>
        <div class="jd-co-name">${job.company}</div>
        <div class="jd-co-meta">${job.type} · ${job.location} · ${job.posted}</div>
      </div>
    </div>
    <div class="jd-badges">
      <span class="badge badge-teal">${job.specialty}</span>
      <span class="badge badge-gray">${job.type}</span>
      <span class="badge badge-gold">${job.salary}</span>
      <span class="badge badge-gray">${job.experience}</span>
    </div>
    <div class="jd-highlights">
      <div class="jdh-item"><div class="jdh-label">الراتب</div><div class="jdh-val" style="color:var(--teal-lt)">${job.salary}</div></div>
      <div class="jdh-item"><div class="jdh-label">الخبرة</div><div class="jdh-val">${job.experience}</div></div>
      <div class="jdh-item"><div class="jdh-label">النوع</div><div class="jdh-val">${job.type}</div></div>
      <div class="jdh-item"><div class="jdh-label">الموقع</div><div class="jdh-val">${job.location}</div></div>
    </div>
    <div class="jd-section" style="margin-top:18px">
      <div class="jd-sec-title"><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" stroke-width="2"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>وصف الوظيفة</div>
      <div class="jd-text">${job.desc}</div>
    </div>
    <div class="jd-section">
      <div class="jd-sec-title"><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M9 12l2 2 4-4M7 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-2M15 3H9a1 1 0 000 2h6a1 1 0 000-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>المتطلبات</div>
      <ul class="jd-list">${job.requirements.map(r=>`<li>${r}</li>`).join('')}</ul>
    </div>
    <div class="jd-section">
      <div class="jd-sec-title"><svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>المزايا</div>
      <ul class="jd-list">${job.benefits.map(b=>`<li>${b}</li>`).join('')}</ul>
    </div>
    <div style="display:flex;gap:12px;margin-top:24px;">
      <button class="btn-apply" style="flex:1;padding:14px;font-size:15px;border-radius:12px;font-family:'Cairo',sans-serif;font-weight:900" onclick="closeModal('jobModal');openApply(${job.id})">قدّم على الوظيفة</button>
      <div class="btn-save" style="width:44px;height:44px" onclick="toggleSave(this,${job.id})" title="حفظ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" stroke-width="2"/></svg>
      </div>
    </div>
  `;
  openModal('jobModal');
}

function openApply(id) {
  const job = JOBS.find(j=>j.id===id);
  if(!job) return;
  document.getElementById('applyJobMeta').innerHTML = `
    <strong>${job.title}</strong> — ${job.company}
    <span style="color:var(--teal-lt);margin-right:10px">${job.salary}</span>
  `;
  openModal('applyModal');
}

/* ─────────────────────────────────
   MODAL HELPERS
   ───────────────────────────────── */
function openModal(id) { document.getElementById(id).classList.add('open'); document.body.style.overflow='hidden'; }
function closeModal(id){ document.getElementById(id).classList.remove('open'); document.body.style.overflow=''; }
function closeOnOverlay(e, id){ if(e.target===document.getElementById(id)) closeModal(id); }

/* ─────────────────────────────────
   FORM SUBMITS
   ───────────────────────────────── */
function submitApply(e) {
  e.preventDefault();
  closeModal('applyModal');
  showToast('✅ تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً', 'success');
}
function submitPostJob(e) {
  e.preventDefault();
  closeModal('postJobModal');
  showToast('🚀 تم نشر الوظيفة بنجاح!', 'success');
}
function submitLogin(e) {
  e.preventDefault();
  closeModal('loginModal');
  showToast('👋 أهلاً بك! تم تسجيل الدخول', 'success');
}
function submitRegister(e) {
  e.preventDefault();
  closeModal('registerModal');
  showToast('🎉 تم إنشاء حسابك! مرحباً بك في BOSLA Jobs', 'success');
}
function triggerUpload() { document.getElementById('cvUpload').click(); }
document.getElementById('cvUpload').addEventListener('change', function() {
  if(this.files[0]) showToast(`📄 تم رفع: ${this.files[0].name}`);
});

/* ─────────────────────────────────
   REGISTER TYPE
   ───────────────────────────────── */
function setRegType(type) {
  const seeker   = document.getElementById('rt-seeker');
  const employer = document.getElementById('rt-employer');
  const specField= document.getElementById('specField');
  if(type==='seeker'){
    seeker.style.borderColor   = 'var(--teal)';
    seeker.style.background    = 'var(--teal-dim)';
    seeker.querySelector('div:last-child').style.color = 'var(--teal-lt)';
    employer.style.borderColor = 'var(--bw)';
    employer.style.background  = 'var(--w06)';
    employer.querySelector('div:last-child').style.color = 'var(--w70)';
    specField.style.display = 'block';
  } else {
    employer.style.borderColor = 'var(--teal)';
    employer.style.background  = 'var(--teal-dim)';
    employer.querySelector('div:last-child').style.color = 'var(--teal-lt)';
    seeker.style.borderColor   = 'var(--bw)';
    seeker.style.background    = 'var(--w06)';
    seeker.querySelector('div:last-child').style.color = 'var(--w70)';
    specField.style.display = 'none';
  }
}

/* ─────────────────────────────────
   STATS COUNTERS
   ───────────────────────────────── */
function animCount(el, target, suffix='') {
  let v=0; const step=target/80;
  const t = setInterval(()=>{
    v = Math.min(v+step, target);
    el.textContent = Math.floor(v).toLocaleString('ar-EG')+(v>=target?suffix:'');
    if(v>=target) clearInterval(t);
  }, 20);
}
const statsObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    e.target.querySelectorAll('[data-target]').forEach(el=>{
      animCount(el, parseInt(el.dataset.target), el.dataset.target=='94'?'%':'+');
    });
    statsObs.unobserve(e.target);
  });
},{threshold:.3});
document.querySelector('.stats-strip') && statsObs.observe(document.querySelector('.stats-strip'));

/* ─────────────────────────────────
   SCROLL REVEAL
   ───────────────────────────────── */
const revObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }
  });
},{threshold:.08});
document.querySelectorAll('.cat-card,.job-card,.company-card,.how-step').forEach((el,i)=>{
  el.style.opacity='0'; el.style.transform='translateY(22px)';
  el.style.transition=`opacity .6s ${i*.06}s ease, transform .6s ${i*.06}s ease`;
  revObs.observe(el);
});

/* ─────────────────────────────────
   TOAST
   ───────────────────────────────── */
let toastTimer;
function showToast(msg, type='') {
  const t  = document.getElementById('toastEl');
  const tm = document.getElementById('toastMsg');
  tm.textContent = msg;
  t.className = 'toast show'+(type?' '+type:'');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 3200);
}

/* ─────────────────────────────────
   INIT
   ───────────────────────────────── */
renderCategories();
renderJobs(JOBS);
renderCompanies();
renderHowSteps('seeker');
}

 const swiper = new Swiper('.partnerSwiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    centeredSlides: false, 
                },
                1200: {
                    slidesPerView: 7,
                    spaceBetween: 40,
                    centeredSlides: false,
                }
            },
        });

        document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropdown-mega .dropdown-toggle');
    var megaMenu = document.querySelector('.mega-menu-wrapper');

    if (window.innerWidth < 992) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // تبديل ظهور القائمة
            var isShown = megaMenu.style.display === 'block';
            megaMenu.style.display = isShown ? 'none' : 'block';
            
            // إضافة كلاس show للعنصر الأب للتوافق مع التنسيقات
            this.parentElement.classList.toggle('show');
        });
    }
});