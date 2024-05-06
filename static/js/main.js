// static/js/main.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle between video and PDF
    function toggleContent(language) {
        var videoDiv = document.getElementById(language + '-video');
        var pdfDiv = document.getElementById(language + '-pdf');
        
        // Toggle visibility
        videoDiv.style.display = videoDiv.style.display === 'none' ? 'block' : 'none';
        pdfDiv.style.display = pdfDiv.style.display === 'none' ? 'block' : 'none';
    }

    // Event listeners for language buttons
    document.getElementById('toggle-french').addEventListener('click', function () {
        toggleContent('french');
    });

    document.getElementById('toggle-spanish').addEventListener('click', function () {
        toggleContent('spanish');
    });

    document.getElementById('toggle-english').addEventListener('click', function () {
        toggleContent('english');
    });
});
