function submitQuiz() {
  let answers = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "b",
    q5: "a"
  };

  let form = document.forms["quizForm"];
  let score = 0;

  for (let q in answers) {
    let userAns = form[q].value;
    if (userAns === answers[q]) {
      score++;
    }
  }

  localStorage.setItem("quizScore", score);
  window.location.href = "certificate.html";
}

window.onload = function() {
  if (document.getElementById("scoreText")) {
    let score = localStorage.getItem("quizScore");
    document.getElementById("studentName").innerText = "Your Name";
    document.getElementById("scoreText").innerText = score + " / 5";
    document.getElementById("date").innerText = new Date().toLocaleDateString();
  }
};
