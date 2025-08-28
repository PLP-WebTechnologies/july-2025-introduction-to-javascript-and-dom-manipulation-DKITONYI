
// Part 1: Variables & Conditionals

let isDarkMode = false; 

// using if
function checkName(name) {
  if (!name) {
    return "Please enter your name!";
  } else {
    return `Welcome to school, ${name}! 🎓`;
  }
}


// Part 2: Functions


// Function 1: Display greeting
function displayGreeting() {
  const nameInput = document.getElementById("nameInput").value;
  const message = checkName(nameInput);
  document.getElementById("greeting").textContent = message;
}

// Function 2: Display student names
function generateStudents() {
  const students = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  
  // Part 3: Loop Example #1
  
  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.textContent = students[i];
    list.appendChild(li);
  }
}

// Function 3: Show student grades (Second Loop)
function checkGrades() {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 },
    { name: "Diana", grade: 60 },
    { name: "Ethan", grade: 95 }
  ];

  const list = document.getElementById("gradeList");
  list.innerHTML = "";

  
  // Part 3: Loop Example #2
  
  students.forEach(student => {
    const li = document.createElement("li");
    let status = student.grade >= 70 ? "Pass" : "Fail";
    li.textContent = `${student.name}: ${student.grade} (${status})`;
    list.appendChild(li);
  });
}


// Part 4: DOM Manipulation

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
}

// Event listeners
document.getElementById("greetBtn").addEventListener("click", displayGreeting);
document.getElementById("generateBtn").addEventListener("click", generateStudents);
document.getElementById("checkGradesBtn").addEventListener("click", checkGrades);
document.getElementById("toggleThemeBtn").addEventListener("click", toggleTheme);

// Extra DOM Example: Autofocus input
window.onload = function() {
  document.getElementById("nameInput").focus();
};
