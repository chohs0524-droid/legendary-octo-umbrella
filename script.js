document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            
            // Remove active class from all buttons and sections
            navBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked button and target section
            btn.classList.add('active');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Simple Quiz Logic
    const optionBtns = document.querySelectorAll('.option-btn');
    const resultMsg = document.querySelector('.result-msg');

    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Reset previous styles
            optionBtns.forEach(b => {
                b.style.background = 'rgba(255,255,255,0.1)';
                b.style.borderColor = 'rgba(255,255,255,0.2)';
            });

            if (this.classList.contains('correct-answer')) {
                this.style.background = '#2ecc71'; // Green
                this.style.borderColor = '#27ae60';
                resultMsg.textContent = "정답입니다! 훌륭해요! 🎉";
                resultMsg.style.color = '#2ecc71';
                resultMsg.style.marginTop = '15px';
                resultMsg.style.fontWeight = 'bold';
            } else {
                this.style.background = '#e74c3c'; // Red
                this.style.borderColor = '#c0392b';
                resultMsg.textContent = "오답입니다. 다시 도전해보세요! 🤔";
                resultMsg.style.color = '#e74c3c';
                resultMsg.style.marginTop = '15px';
                resultMsg.style.fontWeight = 'bold';
            }
        });
    });
});
