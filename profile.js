function showSection(sectionId) {
    // Hide all sections first
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Show the clicked section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}
// Wait for the page to load
window.onload = function() {
    document.getElementById('home').classList.add('active');  // Add 'active' class to trigger animations (if needed)
};

