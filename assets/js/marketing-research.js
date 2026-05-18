 // ─── SCROLL REVEAL ───
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => io.observe(el));

    // ─── FORM SUBMIT ───
    function submitForm(btn) {
      const inputs = btn.closest('.form-box').querySelectorAll('input[type="text"], input[type="tel"]');
      let valid = true;
      inputs.forEach(inp => {
        if (inp.hasAttribute('placeholder') && inp.value.trim() === '' && inp.placeholder !== 'اسم شركتك أو مشروعك') {
          inp.style.borderColor = 'rgba(255,80,80,0.5)';
          valid = false;
          setTimeout(() => inp.style.borderColor = '', 2000);
        }
      });

      if (!valid) { return; }

      const name = btn.closest('.form-box').querySelector('input[placeholder="اسمك الكامل"]').value || 'عميل';
      const phone = btn.closest('.form-box').querySelector('input[type="tel"]').value || '';
      const company = btn.closest('.form-box').querySelector('input[placeholder*="شركتك"]').value || '';
      const selects = btn.closest('.form-box').querySelectorAll('select');
      const sector = selects[0].value || '';
      const type = selects[1].value || '';
      const pkg = selects[2].value || '';
      const msg = btn.closest('.form-box').querySelector('textarea').value || '';

      const waText = encodeURIComponent(
        `أهلاً، أريد طلب بحث تسويقي من بوصلة\n` +
        `الاسم: ${name}\n` +
        `الشركة: ${company}\n` +
        `القطاع: ${sector}\n` +
        `نوع البحث: ${type}\n` +
        `الباقة: ${pkg}\n` +
        `التفاصيل: ${msg}`
      );

      btn.textContent = '✓ جارٍ التحويل إلى واتساب...';
      btn.style.background = 'linear-gradient(135deg,#2d7a4f,#3da066)';
      setTimeout(() => {
        window.open(`https://wa.me/201006801168?text=${waText}`, '_blank');
        btn.textContent = 'إرسال الطلب — سنتواصل خلال 24 ساعة ⚡';
        btn.style.background = '';
      }, 900);
    }

    // ─── SMOOTH HOVER on stat bars (already CSS-animated) ───
    document.querySelectorAll('.type-card, .sector-card, .pkg-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
      });
    });