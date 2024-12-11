// Get refernces to the form  and display. 
const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle Form Submission
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault(); // Prevent Page Reload

    // Collect Input Values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value


    // Generate The Resume Content Dynamically
    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p> 
    <p><b>Email:</b>${email}</p> 
    <p><b>Phone:</b>${phone}</p> 

    <h2><b>Education</b></h2>
    <p>${education}</p> 

    <h2><b>Experience</b></h2>
    <p>${experience}</p> 

    <h2><b>Skills</b></h2>
    <p>${skills}</p> 
    `;

    //Display The Generated Resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }else {
        console.error('The Resume Display Element Is Missing')
    }






});