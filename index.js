

let projects = document.getElementById('projects');
let skills = document.getElementById("skills");


let skill__btn = document.getElementById("skills__btn")
let project__btn = document.getElementById("project__btn")


skill__btn.addEventListener('click', () => {
    skills.style.display = "flex";
    projects.style.display = "none";
})

project__btn.addEventListener('click', () => {
    skills.style.display = "none";
    projects.style.display = "grid";
})