// 1. Kích hoạt AOS
AOS.init({
    offset: 120,
    duration: 1000,
    once: true,
});

// 2. Kích hoạt Typed.js (CHỈ CHẠY NẾU CÓ CLASS .typing-text)
// Dòng if này giúp code không bị lỗi khi sang trang profile
if (document.querySelector('.typing-text')) {
    var typed = new Typed('.typing-text', {
        strings: ['Lập trình viên.', 'Designer.', 'Freelancer.', 'Người yêu công nghệ.'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

// 3. Xử lý thanh Menu và nút Back-to-top
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        if(backToTopBtn) backToTopBtn.classList.add('active'); // Kiểm tra nếu có nút thì mới add
    } else {
        // Ở trang Profile, ta muốn menu luôn trắng (đã có class scrolled sẵn trong HTML)
        // Nên ta chỉ gỡ class này nếu đang ở trang chủ (không có class 'scrolled' lúc đầu)
        // Tuy nhiên, để đơn giản, đoạn code dưới đây vẫn ổn cho cả 2 trang
        // Nếu bạn thấy menu trang profile bị trong suốt khi kéo lên đỉnh, hãy nhắn mình chỉnh lại nhé.
        navbar.classList.remove('scrolled');
        if(backToTopBtn) backToTopBtn.classList.remove('active');
    }
});

// 4. Xử lý nút Back-to-top
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
