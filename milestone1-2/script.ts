const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    // Check the current computed display style
    if (getComputedStyle(skills).display === 'none') {
        skills.style.display = 'block'; // Show the element
    } else {
        skills.style.display = 'none'; // Hide the element
    }
});
