const coursesArray = [
    'IT',
    'Computer Science',
    'Electrical',
    'Electronics',
    'Mechanical',
    'AutoMobile',
]

const skillsArray = [
    'AngularJS',
    'ReactJS',
    'VeuJS',
    'Java',
    'SQL',
    'GraphQL',
    'NodeJS',
    'Wordpress',
    'Quantitative Analysis',
    'Electronics',
    'Physics',
    'Electrical',
]

function getCourses() {
    return coursesArray.slice(Math.floor(Math.random() * coursesArray.length));
}

function getSkills(){
    return skillsArray.slice(Math.floor(Math.random() * skillsArray.length))
}

module.exports =  { getCourses , getSkills };