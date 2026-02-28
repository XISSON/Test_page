// 移动端菜单切换
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 考虑导航栏高度
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.classList.add('bg-white/95');
        nav.classList.add('backdrop-blur-sm');
    } else {
        nav.classList.remove('shadow-lg');
        nav.classList.remove('bg-white/95');
        nav.classList.remove('backdrop-blur-sm');
    }
});

// 卡片悬停效果
const cards = document.querySelectorAll('.card-hover');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    });
});

// 滚动动画
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card-hover');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('opacity-100');
            element.classList.remove('opacity-0', 'translate-y-10');
        }
    });
};

// 初始化元素状态
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.card-hover');
    elements.forEach(element => {
        element.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    });
    animateOnScroll();
});

// 滚动时执行动画
window.addEventListener('scroll', animateOnScroll);