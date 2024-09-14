const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;

const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
const profilePicPreview = document.querySelector('.profile-picture img') as HTMLImageElement;




profilePicInput.addEventListener('change', function() {
    const file = profilePicInput.files?.[0];  

    if (file) {
        const reader = new FileReader();  
        
        reader.onload = function(e) {
            console.log("File read successfully:", e.target?.result);
            profilePicPreview.src = e.target?.result as string;
        };

        reader.readAsDataURL(file);  
    }
});


form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    if (!profilePicPreview) {
        console.error("Profile picture preview element not found.");
        return;
    }

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Profile Pic Source:", profilePicPreview.src);

    
    const resumeHTML = `
        <div class="profile-picture">
            <img src="${profilePicPreview.src}" alt="Profile Picture">
        </div>
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong></p>
        <p>${education}</p>
        <p id="skills-section"><strong>Skills:</strong></p>
        <ul id="skills-list">${skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
    `;

    
    resumeOutput.innerHTML = resumeHTML;
});

