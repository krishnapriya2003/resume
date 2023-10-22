// JavaScript to handle the download link

document.addEventListener('DOMContentLoaded', function () {
    // Get the download link element
    const downloadLink = document.getElementById('download-link');
    
    // Add a click event listener to the download link
    downloadLink.addEventListener('click', function (event) {
        // Prevent the default link behavior to avoid navigation
        event.preventDefault();

        // Replace 'resume.pdf' with the actual name of your resume file
        const resumePath = 'https://drive.google.com/file/d/1geCiOn2znzfBi344rULdCk4T_i2JkP_K/view?usp=drivesdk';

        // Create an invisible link to the resume file
        const hiddenLink = document.createElement('a');
        hiddenLink.href = resumePath;
        hiddenLink.download = 'my_resume.pdf'; // You can change the download file name here
        
        // Trigger a click event on the hidden link to start the download
        hiddenLink.click();
    });
});


