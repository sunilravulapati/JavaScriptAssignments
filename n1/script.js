function showSection(sectionId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.topic-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Show the specific section clicked
    const activeSection = document.getElementById(sectionId);
    if(activeSection) {
        activeSection.classList.add('active');
    }

    // 3. Update sidebar active state
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Simple check to match text content to ID or index, 
        // strictly speaking we'd bind the click better, but this works for demo
        if(link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });
}