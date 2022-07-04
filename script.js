document.getElementById("sent").onclick = function () {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    d.getTime();
    let month = months[d.getMonth()];
    var my_date = d.getDate() + " - " + month + " - " + d.getFullYear();

    var firstHi = document.getElementById("input").value;
    if (firstHi == "hi" || firstHi == "Hi" || firstHi == "HI") {
        document.getElementById("date").innerHTML += my_date;
        document.getElementById("input").value = "";
        document.getElementById("f").style.display = "block";
        document.getElementById("today").style.display = "block";
        document.getElementById("hi").innerHTML = firstHi;
        function afterHi() {
            document.getElementById("s").style.display = "block";
        }
        setInterval(afterHi, 1000);
        run();
        function run() {
            document.getElementById("rb").innerHTML = "typing...";
            for (var i = 0; i < 1; i++) {
                setTimeout(function () {
                    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello'));
                    document.getElementById("rb").innerHTML = "online";
                }, 500);
            }


        }
    }

    else if (firstHi == "run loop" || firstHi == "Run Loop") {
        document.getElementById("input").value = "";
        document.getElementById("r").style.display = "block";
        // document.getElementById("h").style.display = "block";
        function afterHi() {
            document.getElementById("h").style.display = "block";
        }
        setInterval(afterHi, 1000);
        run();
        function run() {
            for (var i = 0; i < 1; i++) {
                document.getElementById("rb").innerHTML = "typing...";
                setTimeout(function () {
                    window.speechSynthesis.speak(new SpeechSynthesisUtterance('How many times'));
                    document.getElementById("rb").innerHTML = "online";
                }, 500);
            }


        }
    }
    else if (firstHi > 0 && firstHi < 1001) {
        document.getElementById("input").value = "";
        document.getElementById("n").style.display = "block";
        document.getElementById("no").innerHTML = firstHi;
        function afterHi() {
            document.getElementById("o").style.display = "block";
        }
        run();
        document.getElementById("rb").innerHTML = "typing...";
        function run() {
            document.getElementById("op").innerHTML = "";
            for (var i = 0; i < Number(firstHi); i++) {
                setTimeout(function () {
                    const div = document.createElement("div");
                    div.style.marginTop = "5px";
                    div.innerHTML = "Hello<hr>";
                    document.getElementById("op").appendChild(div);
                    document.getElementById("rb").innerHTML = "online";
                }, 1000);
            }


        }
        setInterval(afterHi, 1000);
        runLast();
        function runLast() {
            for (var i = 0; i < 1; i++) {
                setTimeout(function () {
                    window.speechSynthesis.speak(new SpeechSynthesisUtterance('Loop Run ' + firstHi + ' times'));
                }, 500);
            }


        }
    }
}
