var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume-output");
var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
var profilePicInput = document.getElementById('profile-pic');
var profilePicPreview = document.querySelector('.profile-picture img');
var skillsVisible = true;
// Function to handle the image upload and display it in the preview
profilePicInput.addEventListener('change', function () {
    var _a;
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0]; // Get the uploaded file
    if (file) {
        var reader = new FileReader(); // Use FileReader to read the uploaded file
        reader.onload = function (e) {
            var _a, _b;
            console.log("File read successfully:", (_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
            profilePicPreview.src = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
        };
        reader.readAsDataURL(file); // Read the file as a Data URL (base64)
    }
});
// Handle form submission to generate the resume preview
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
    if (!profilePicPreview) {
        console.error("Profile picture preview element not found.");
        return;
    }
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Profile Pic Source:", profilePicPreview.src);
    // Generate the resume output HTML
    var resumeHTML = "\n        <div class=\"profile-picture\">\n            <img src=\"".concat(profilePicPreview.src, "\" alt=\"Profile Picture\">\n        </div>\n        <h3>").concat(name, "</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong></p>\n        <p>").concat(education, "</p>\n        <p id=\"skills-section\"><strong>Skills:</strong></p>\n        <ul id=\"skills-list\">").concat(skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n        <p><strong>Experience:</strong></p>\n        <p>").concat(experience, "</p>\n    ");
    // Display the resume output
    resumeOutput.innerHTML = resumeHTML;
});
// Toggle the visibility of the Skills section
toggleSkillsBtn.addEventListener("click", function () {
    var skillsSection = document.getElementById("skills-section");
    var skillsList = document.getElementById("skills-list");
    if (skillsVisible) {
        skillsSection.style.display = "none";
        skillsList.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills Section";
    }
    else {
        skillsSection.style.display = "block";
        skillsList.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills Section";
    }
    skillsVisible = !skillsVisible;
});
