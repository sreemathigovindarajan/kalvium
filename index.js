var answers = ["A", "C", "B", ["A", "B", "C"]],
    tot = answers.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}

function getCheckedValues(checkboxName) {
    var checkboxes = document.getElementsByName(checkboxName);
    var values = [];
    for (var y = 0; y < checkboxes.length; y++)
        if (checkboxes[y].checked) values.push(checkboxes[y].value);
    return values;
}

function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++) {
        if (Array.isArray(answers[i])) {
            if (getCheckedValues("question" + i).toString() === answers[i].toString()) score += 1;
        } else {
            if (getCheckedValue("question" + i) === answers[i]) score += 1;
        }
    }
    return score;
}

function returnScore() {
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
    if (getScore() > 2) {
        console.log("Bravo");
    }
}