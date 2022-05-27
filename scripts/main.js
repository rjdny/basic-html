function OnClickBtn1() {
    const txtbx1 = document.getElementById("tb1")
    if (txtbx1.value == "") {
        alert(`Please Enter Your Name`)
    } else {
        alert(`Hello ${txtbx1.value}!!`)
    }
}

function OnClickBtn2() {
    const txtbx1 = document.getElementById("tb1")
    if (txtbx1.value == "") {
        alert(`Please Enter Your Name`)
    } else {
        alert(`Goodbye ${txtbx1.value}!!`)
    }
}

document.onkeydown = logKey;

function logKey(e) {
    log = document.getElementById('log');
    log.innerText = `You pressed: ${e.code}`;
}