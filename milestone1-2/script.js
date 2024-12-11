var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    // Check the current computed display style
    if (getComputedStyle(skills).display === 'none') {
        skills.style.display = 'block'; // Show the element
    }
    else {
        skills.style.display = 'none'; // Hide the element
    }
});
