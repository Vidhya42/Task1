function result() {
    var n = document.getElementById("n").value;
    var t = parseInt(document.getElementById("t").value);
    var e = parseInt(document.getElementById("e").value);
    var m = parseInt(document.getElementById("m").value);
    var s = parseInt(document.getElementById("s").value);
    var ss = parseInt(document.getElementById("ss").value);
    var total, res;
    total = t + e + m + s + ss;
    var row1 = document.getElementById("tableResult");
    var row = row1.insertRow(-1);
    var cell8 = row.insertCell(0);
    var cell7 = row.insertCell(0);
    var cell6 = row.insertCell(0);
    var cell5 = row.insertCell(0);
    var cell4 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell1 = row.insertCell(0);

    cell1.innerHTML = n;
    if (t < 35) {
        cell2.innerHTML = t;
        cell2.style.backgroundColor = "red";
    }else{
        cell2.innerHTML = t;
        cell2.style.backgroundColor = "green";
    }
    if (e < 35) {
        cell3.innerHTML = e;
        cell3.style.backgroundColor = "red";
    }else{
        cell3.innerHTML = e;
        cell3.style.backgroundColor = "green";
    }
    if (m < 35) {
        cell4.innerHTML = m;
        cell4.style.backgroundColor = "red";
    }else{
        cell4.innerHTML = m;
        cell4.style.backgroundColor = "green";
    }
    if (s < 35) {
        cell5.innerHTML = s;
        cell5.style.backgroundColor = "red";
    }else{
        cell5.innerHTML = s;
        cell5.style.backgroundColor = "green";
    }
    if (ss < 35) {
        cell6.innerHTML = ss;
        cell6.style.backgroundColor = "red";
    }else{
        cell6.innerHTML = ss;
        cell6.style.backgroundColor = "green";
    }
    cell7.innerHTML = total;
    if (t<35 || e<35 || m<35 || s<35 || ss<35) {
        res="Fail";
        cell8.innerHTML = res;
        cell8.style.color = "red";
        cell8.style.backgroundColor = "white";
    }else{
        res="Pass";
        cell8.innerHTML = res;
        cell8.style.color = "green";
        cell8.style.backgroundColor = "white";
    }
}
