function start() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("questions").style.display = "block";
}


function nextQuestion() {

    let answer = document.getElementById("specialAnswer").value;

    if (answer.trim() === "") {

        alert("اكتبي إجابتك الأول ❤️");

        return;
    }

    document.getElementById("question1").style.display = "none";

    document.getElementById("question2").style.display = "block";
}

function showNo() {
    document.getElementById("yesButton").innerText = "لا ❤️";
}

function showYes() {
    document.getElementById("yesButton").innerText = "نعم";
}

function answerNo() {

    document.getElementById("question2").style.display = "none";

    document.getElementById("finish").style.display = "block";
}

function answerNo() {

    document.getElementById("question2").style.display = "none";

    document.getElementById("finish").style.display = "block";
}