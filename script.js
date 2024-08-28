// This file can be used for future enhancements or interactivity
console.log("Welcome to the Web Development Landing Page!");

// Get the star element
const star = document.getElementById('star');

// Follow the mouse cursor
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    star.style.left = mouseX + 'px';
    star.style.bottom = (window.innerHeight - mouseY) + 'px';
});

// Add functionality to the Learn More button
const learnMoreButton = document.querySelector('button');
learnMoreButton.addEventListener('click', () => {
    alert("see the information below and don't mind the Star po hehe. Thanks!");
    // You can also navigate to another section or open a modal here
});

// Future enhancements can be added below