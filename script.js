function submitQuiz(formId, lessonName) {
  // Correct answers for each quiz
  const answers = {
    quiz1: ["a","b","b","a","a"],  // HTML Basics
    quiz2: ["b","b","a","a","a"],  // CSS Basics
    quiz3: ["a","a","a","b","c"]   // Excel Basics
  };

  const form = document.getElementById(formId);
  let score = 0;
  const total = answers[formId].length;

  // Loop through each question
  for (let i = 0; i < total; i++) {
    const qName = "q" + (i + 1);
    const options = form.elements[qName];
    
    // If user selected an option and it's correct, increase score
    for (let option of options) {
      if (option.checked && option.value === answers[formId][i]) {
        score++;
      }
    }
  }

  // Calculate percentage
  const percent = Math.round((score / total) * 100);

  // Ask for user name
  const name = prompt("Enter your name:");

  // Store in localStorage for certificate page
  localStorage.setItem("username", name || "Student");
  localStorage.setItem("lesson", lessonName);
  localStorage.setItem("score", percent);

  alert(`You scored ${percent}%!`);
  
  // Redirect to certificate page
  window.location.href = "certificate.html";
}
