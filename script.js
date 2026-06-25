// Dynamic scroll tracking mapping layout active links
const sections = document.querySelectorAll('.content-block');
const navButtons = document.querySelectorAll('.nav-btn');

window.addEventListener('scroll', () => {
    let currentActiveSectionId = "";
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 120) {
            currentActiveSectionId = section.getAttribute('id');
        }
    });

    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('href') === `#${currentActiveSectionId}`) {
            btn.classList.add('active');
        }
    });
});