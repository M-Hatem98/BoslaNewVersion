        // Smooth scroll and interaction logic
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('.bosla-nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });

// Add this to your main.js
document.addEventListener('DOMContentLoaded', () => {
    // Simple Entrance Animation for Service Cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .job-hover').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});

function showComingSoon() {
    alert("قريباً جداً! (Coming Soon) - هذه الميزة قيد التطوير حالياً.");
}

// كود رسم المخطط (كما في الخطوات السابقة)
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('marketChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                data: [62, 65, 63, 68, 70, 74],
                borderColor: '#1cc88a',
                borderWidth: 3,
                fill: true,
                backgroundColor: 'rgba(28, 200, 138, 0.1)',
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { display: false }, y: { display: false } }
        }
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
        "قريباً جداً.. ترقبوا انطلاق هذه البوابة."
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

var swiper = new Swiper(".partnersSwiper", {
            loop: true,
            loopedSlides: 8,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 4000,
            slidesPerView: 2,
            spaceBetween: 30,
            breakpoints: {
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 }
            },
            allowTouchMove: true,
            freeMode: false,
        });