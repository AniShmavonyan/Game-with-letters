function randLetterGen() {
    return ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')[(Math.floor(Math.random() * 26))];
}

document.getElementById("btnAdd").addEventListener("click", function () {
    let letter = randLetterGen();
    let deviation = 'Z'.charCodeAt() - letter.charCodeAt();
    let ratio = Math.floor(Math.random() * deviation);

    random.innerHTML = letter + " + " + ratio;

    let cell = Math.floor(Math.random() * 4);
    document.getElementById("random" + cell).innerText = String.fromCharCode(letter.charCodeAt() + ratio);

    let arr = [];
    arr.push(String.fromCharCode(letter.charCodeAt() + ratio));
    for (let i = 0; i < 4; i++) {
        if (i == cell) {
            continue;
        }

        let genNum = randLetterGen();
        while (arr.find(x => x == genNum)) {
            genNum = randLetterGen();
        }
        document.getElementById("random" + i).innerText = genNum;
        arr.push(genNum);
    }
});
