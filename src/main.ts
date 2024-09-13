document.addEventListener('DOMContentLoaded', () => {
    const section1Btn = document.getElementById('section1-btn') as HTMLButtonElement;
    const section2Btn = document.getElementById('section2-btn') as HTMLButtonElement;
    const section3Btn = document.getElementById('section3-btn') as HTMLButtonElement;

    // Function to show/hide sections
    function showSection(sectionId: string) {
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Event listeners for buttons
    if (section1Btn) section1Btn.addEventListener('click', () => showSection('section1'));
    if (section2Btn) section2Btn.addEventListener('click', () => showSection('section2'));
    if (section3Btn) section3Btn.addEventListener('click', () => showSection('section3'));

    // Optionally, show the first section by default
    showSection('section1');
});