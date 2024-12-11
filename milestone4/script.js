// Get refernces to the form  and display. 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent Page Reload
    // Collect Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate The Resume Content Dynamically
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</p> \n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</p> \n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</p> \n\n    <h2><b>Education</b></h2>\n    <p contenteditable=\"true\">").concat(education, "</p> \n\n    <h2><b>Experience</b></h2>\n    <p contenteditable=\"true\">").concat(experience, "</p> \n\n    <h2><b>Skills</b></h2>\n    <p contenteditable=\"true\">").concat(skills, "</p> \n    ");
    //Display The Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The Resume Display Element Is Missing');
    }
});