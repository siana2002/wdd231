// DIRECTORY JS
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    if(navigation.classList.contains("show")){
        menuButton.textContent = "x";
    } else{
        menuButton.textContent = "☰";
    }
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
         status: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
         status: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
         status: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
         status: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        status: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        status: false
    }
]

const courseContainer = document.querySelector("#courseCards");
function displayCourses(coursesList){
    courseContainer.innerHTML = "";

    const totalCredits = coursesList.reduce(
        (total, course) => total + course.credits,
        0
    );

    document.querySelector("#totalCredits").textContent = totalCredits;

    coursesList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if (course.status){
            card.classList.add("completed");
        } else{
            card.classList.add("not-completed");
        }

        const status = document.createElement("p");

        if (course.status) {
            status.textContent = "✓";
        } else {
        status.textContent = "○";
        }

        const subject = document.createElement("p");
        subject.textContent = course.subject;

        const number = document.createElement("p");
        number.textContent = course.number;

        card.appendChild(status);
        card.appendChild(subject);
        card.appendChild(number);

        courseContainer.appendChild(card);
    });
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () =>{
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () =>{
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () =>{
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});