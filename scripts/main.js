// JavaScript for dynamic current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// JavaScript for dynamic last modified date
document.getElementById('lastModified').textContent = 'Last Update: ' + document.lastModified;

// Array of courses
const courses = [
    { id: 'CSE 110', credits: 3, completed: true },
    { id: 'WDD 130', credits: 3, completed: false },
    { id: 'CSE 111', credits: 3, completed: true },
    { id: 'CSE 210', credits: 4, completed: false },
    { id: 'WDD 131', credits: 3, completed: false },
    { id: 'WDD 231', credits: 4, completed: true },
];

const coursesDiv = document.querySelector('.courses');
const totalCredits = document.getElementById('total-credits');

// Function to display courses
function displayCourses(filter = 'All') {
    let filteredCourses = courses;
    if (filter !== 'All') {
        filteredCourses = courses.filter(course => course.id.startsWith(filter));
    }

    coursesDiv.innerHTML = filteredCourses.map(course => `
        <div class="course-card ${course.completed ? 'completed' : ''}">
            ${course.id} (${course.credits} credits)
        </div>
    `).join('');

    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = total;
}

// Event listeners for filtering courses
document.getElementById('all-courses').addEventListener('click', () => displayCourses('All'));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses('WDD'));

// Display all courses on load
displayCourses();

// Toggle menu for mobile view
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('ul.menu').classList.toggle('active');
});
