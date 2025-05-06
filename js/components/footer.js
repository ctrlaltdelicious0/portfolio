// Check if file is loaded
console.log('footer.js loaded');

// Auto update the year under footer
document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});