document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");
    const cameraStream = document.getElementById("cameraStream");
    const openCameraButton = document.getElementById("openCameraButton");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // openCameraButton.addEventListener("click", function () {
    //     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //         navigator.mediaDevices.getUserMedia({ video: true })
    //             .then(function (stream) {
    //                 cameraStream.srcObject = stream;
    //                 cameraStream.style.display = 'block';
    //             })
    //             .catch(function (error) {
    //                 alert("Error accessing camera: " + error.message);
    //             });
    //     } else {
    //         alert("Camera access is not supported by your browser.");
    //     }
    // });
});