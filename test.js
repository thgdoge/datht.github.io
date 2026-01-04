// 1. Kích hoạt thư viện hiệu ứng cuộn AOS
AOS.init({
    offset: 120, // Khoảng cách từ dưới lên để bắt đầu hiệu ứng
    duration: 1000, // Thời gian chạy hiệu ứng (ms)
    once: true, // Chỉ chạy hiệu ứng 1 lần khi cuộn xuống
});

// 2. Kích hoạt hiệu ứng gõ chữ (Typed.js)
var typed = new Typed('.typing-text', {
    // Danh sách các chữ muốn hiển thị
    strings: ['Lập trình viên.', 'Designer.', 'Freelancer.', 'Người yêu công nghệ.'],
    typeSpeed: 100, // Tốc độ gõ
    backSpeed: 60, // Tốc độ xóa
    loop: true // Lặp lại vô tận
});

// 3. Xử lý sự kiện cuộn trang (Navbar và nút Back-to-top)
const navbar = document.querySelector('.navbar');
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        // Nếu cuộn xuống quá 100px
        navbar.classList.add('scrolled'); // Thêm class để menu đổi màu
        backToTopBtn.classList.add('active'); // Hiện nút back-to-top
    } else {
        // Nếu ở trên đầu trang
        navbar.classList.remove('scrolled');
        backToTopBtn.classList.remove('active');
    }
});

// 4. Xử lý khi bấm nút Back-to-top (Cuộn mượt lên đầu)
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});