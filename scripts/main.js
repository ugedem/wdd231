// Get the current year and display it in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date and display it in the footer
document.getElementById("lastModified").textContent += document.lastModified;

// Course filtering functionality
const courses = document.querySelectorAll('.course-card');
document.getElementById('all-courses').addEventListener('click', () => {
    courses.forEach(course => course.style.display = 'block');
});

document.getElementById('cse-courses').addEventListener('click', () => {
    courses.forEach(course => {
        course.style.display = course.classList.contains('cse') ? 'block' : 'none';
    });
});

document.getElementById('wdd-courses').addEventListener('click', () => {
    courses.forEach(course => {
        course.style.display = course.classList.contains('wdd') ? 'block' : 'none';
    });
});
