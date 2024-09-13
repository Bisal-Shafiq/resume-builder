var _a;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a;
    var pictureInput = document.getElementById('upload-picture');
    var name = document.getElementById('name').value;
    var objective = document.getElementById('objective').value;
    var contact = document.getElementById('contact').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var projects = document.getElementById('projects').value;
    var certificates = document.getElementById('certificates').value;
    if (!name || !objective || !contact || !experience || !education || !skills || !projects || !certificates) {
        alert("Please fill all the required fields.");
        return;
    }
    var pictureHTML = '';
    if (pictureInput.files && pictureInput.files[0]) {
        var pictureURL = URL.createObjectURL(pictureInput.files[0]);
        pictureHTML = "<img src=\"".concat(pictureURL, "\" alt=\"Profile Picture\">");
    }
    var resumeHTML = "\n        ".concat(pictureHTML, "\n        <h1>").concat(name, "</h1>\n        <h3>Objective</h3>\n        <p>").concat(objective, "</p>\n        <h3>Contact Info</h3>\n        <p>").concat(contact, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Projects</h3>\n        <p>").concat(projects, "</p>\n        <h3>Certificates</h3>\n        <p>").concat(certificates, "</p>\n        <button class=\"button\" id=\"download-pdf\" >Generate PDF</button>\n    ");
    var newWindow = window.open("", "Resume", "width=800,height=1000");
    if (newWindow) {
        newWindow.document.write("\n            <html>\n                <head>\n                    <title>Generated Resume</title>\n                    <style>\n                        body {\n                            font-family: 'Poppins', sans-serif;\n                            padding: 20px;\n                            background-color: #f9f9f9;\n                        }\n                        h1 {\n                            text-align: center;\n                            color: #007bff;\n                        }\n                        h3 {\n                            color: #007bff;\n                            border-bottom: 2px solid #007bff;\n                            padding-bottom: 5px;\n                        }\n                        p {\n                            font-size: 1.2rem;\n                            line-height: 1.6;\n                        }\n                        img {\n                            display: block;\n                            margin: 0 auto;\n                            border-radius: 50%;\n                            width: 150px;\n                            height: 150px;\n                        }\n                            button{\n                                    width: 140px;\n                                    border: 0;\n                                    padding: 12px 10px;\n                                    color: #fff;\n                                    background: linear-gradient(to right, #60acbb, #007bff);\n                                    border-radius: 6px;\n                                    cursor: pointer;\n                                    transition: width 0.4s;\n                                    font-size: 14px;\n                                    }\n\n                                    button:hover{\n                                    background: #ff5ea2;\n                                    width: 160px;\n                                    align-content: center;\n                                    justify-content: space-between;\n                                    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n                                    }\n                    </style>\n                </head>\n                <body>\n                    ".concat(resumeHTML, "\n                </body>\n            </html>\n        "));
        newWindow.document.close();
        // Add event listener for PDF generation
        (_a = newWindow.document.getElementById("download-pdf")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            var resumeContent = newWindow.document.body.innerHTML;
            var blob = new Blob([resumeContent], { type: 'application/pdf' });
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'resume.pdf';
            link.click();
        });
    }
});
