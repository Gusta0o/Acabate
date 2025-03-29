let count = 0;
let lastIndex = -1;
const abacates = ["abacateDiva.png", "abacateT-T.png", "abacate0o0.png", "abacateUwU.png"];

function trocaImgA()
{
    let img = document.getElementById("abacate1");

    // Verifica qual imagem está sendo exibida e troca para a outra
    if (img.src.includes("abacateUwU.png")) {
        img.src = "Imgs/abacate0o0.png";
    } else {
        img.src = "Imgs/abacateUwU.png";
    }
}

function addAbacate() {
    count++;

    if (count >= 10) {

        let newDiv = document.createElement("div");
        newDiv.classList.add("container");

        let newAbct = document.createElement("img");
        newAbct.src = "Imgs/abacateDiva.png"
        newAbct.width = 100;
        newAbct.classList.add("abacate");

        newDiv.appendChild(newAbct);
        document.body.appendChild(newDiv); // Adiciona no body

        count = 0;
    }
}
