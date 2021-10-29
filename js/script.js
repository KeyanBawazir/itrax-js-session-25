function calc() {
    var mark = document.getElementById('mark').value;
    console.log(mark);
    if (mark >= 90) {
        document.getElementById('result').innerText= "A";
    } else if (mark>=80 && mark<90 ) {
        document.getElementById('result').innerText= "B";
    }
    else if (mark>=70 && mark<80 ) {
        document.getElementById('result').innerText= "C";
    } else if (mark>=60 && mark<70 ) {
        document.getElementById('result').innerText= "D";
    } else {
        document.getElementById('result').innerText= "Failed";
    }
}
