document.getElementById('generate-resume')?.addEventListener('click', () => {
    const pictureInput = document.getElementById('upload-picture') as HTMLInputElement;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const contact = (document.getElementById('contact') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const certificates = (document.getElementById('certificates') as HTMLTextAreaElement).value;

    if (!name || !objective || !contact || !experience || !education || !skills || !projects || !certificates) {
        alert("Please fill all the required fields.");
        return;
    }

    let pictureHTML = '';
    if (pictureInput.files && pictureInput.files[0]) {
        const pictureURL = URL.createObjectURL(pictureInput.files[0]);
        pictureHTML = `<img src="${pictureURL}" alt="Profile Picture">`;
    }

    const resumeHTML = `
        ${pictureHTML}
        <h1>${name}</h1>
        <h3>Objective</h3>
        <p>${objective}</p>
        <h3>Contact Info</h3>
        <p>${contact}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Projects</h3>
        <p>${projects}</p>
        <h3>Certificates</h3>
        <p>${certificates}</p>
        <button class="button" id="download-pdf" >Generate PDF</button>
    `;

    const newWindow = window.open("", "Resume", "width=800,height=1000");
    if (newWindow) {
        newWindow.document.write(`
            <html>
                <head>
                    <title>Generated Resume</title>
                    <style>
                        body {
                            font-family: 'Poppins', sans-serif;
                            padding: 20px;
                            background-color: #f9f9f9;
                        }
                        h1 {
                            text-align: center;
                            color: #007bff;
                        }
                        h3 {
                            color: #007bff;
                            border-bottom: 2px solid #007bff;
                            padding-bottom: 5px;
                        }
                        p {
                            font-size: 1.2rem;
                            line-height: 1.6;
                        }
                        img {
                            display: block;
                            margin: 0 auto;
                            border-radius: 50%;
                            width: 150px;
                            height: 150px;
                        }
                            button{
                                    width: 140px;
                                    border: 0;
                                    padding: 12px 10px;
                                    color: #fff;
                                    background: linear-gradient(to right, #60acbb, #007bff);
                                    border-radius: 6px;
                                    cursor: pointer;
                                    transition: width 0.4s;
                                    font-size: 14px;
                                    }

                                    button:hover{
                                    background: #ff5ea2;
                                    width: 160px;
                                    align-content: center;
                                    justify-content: space-between;
                                    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
                                    }
                    </style>
                </head>
                <body>
                    ${resumeHTML}
                </body>
            </html>
        `);
        newWindow.document.close();

        // Add event listener for PDF generation
        newWindow.document.getElementById("download-pdf")?.addEventListener('click', () => {
            const resumeContent = newWindow.document.body.innerHTML;
            const blob = new Blob([resumeContent], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'resume.pdf';
            link.click();
        });
    }
});
