let arr = [1, 4, 3, 7, 6, 8];

bubleSort(arr);

function bubleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
}


let btns = document.getElementsByClassName("btn");
let timeouts = [];
let hzBtn = document.getElementById("btn10");
let hzInterval;

hzBtn.addEventListener('click', hz_btn(hzBtn, 10));

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', hide_btn(btns[i], 1000 * (i + 1)));
}

function showBtn() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.visibility = "visible";
    }
    // btns.forEach((b) => b.style.visibility = "visible");
    timeouts.forEach((t) => clearTimeout(t));

    clearInterval(hzInterval);
    hzInterval = undefined;
    hzBtn.style.visibility = "visible";
}

function hide_btn(btn, time) {

    return function () {
        let timeout = setTimeout(() => { btn.style.visibility = 'hidden' }, time);
        timeouts.push(timeout);
    };
}

function hz_btn(btn, time) {
    return function () {
        if (hzInterval != undefined)
            return;

        hzInterval = setInterval(() => btn.style.visibility = btn.style.visibility == 'hidden' ? "visible" : 'hidden', time);
    }
}