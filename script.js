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


    emailjs.send(
        "service_u9f0ofb",
        "izutyhq",
        {
            answer: answer
        }
    )

    .then(function () {

        alert("تم إرسال إجابتك ❤️");

        document.getElementById("question1").style.display = "none";

        document.getElementById("question2").style.display = "block";

    })

    .catch(function (error) {

        console.log("FAILED...", error);

        alert(
            "حصل خطأ ❌\n\n" +
            "Status: " + error.status +
            "\nMessage: " + error.text
        );

    });
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
