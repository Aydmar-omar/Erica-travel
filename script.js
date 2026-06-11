document.addEventListener("DOMContentLoaded", () => {
    // 1. تأثير الدخول عند فتح أي صفحة
    document.body.classList.add('fade-in');

    // 2. تأثير الخروج عند الضغط على أي لينك في المنيو
    const links = document.querySelectorAll('.nav-link, .cta-btn, .back-btn');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // التأكد أن اللينك يوجه لصفحة داخلية وليس مجرد #
            if (this.href && !this.href.includes('#')) {
                e.preventDefault();
                const target = this.href;

                // تفعيل تأثير الاختفاء
                document.body.classList.remove('fade-in');
                document.body.classList.add('fade-out');

                // الانتظار قليلاً ثم الانتقال الفعلي
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            }
        });
    });
});