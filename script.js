
function spin() {
    
    const imagems = ["spr/Can.png,spr/Ok.png,spr/"];
    let imagem1 = document.getElementById('img1');
    let imagem2 = document.getElementById('img2');
    let imagem3 = document.getElementById('img3');
    let resultImage = document.getelementById("resultado")

    let rand1 = imagems[Math.floor(Math.random() * imagems.length)];
    let rand2 = imagems[Math.floor(Math.random() * imagems.length)];
    let rand3 = imagems[Math.floor(Math.random() * imagems.length)];

    slot1.ImgContent = rand1;
    slot2.ImgContent = rand2;
    slot3.ImgContent = rand3;
    
    if (rand1 === rand2 && rand2 === rand3) {
        resultText.textContent = "🎉 Você ganhou! 🎉";
    } else {
        resultText.textContent = "Tente novamente!";
    }
}