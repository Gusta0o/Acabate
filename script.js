let count = 0;

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
    count++; // Aumenta o contador a cada clique

    // Adiciona um novo abacate após 10 cliques
    if (count >= 10) {
        // Cria uma nova div para o novo abacate
        let newDiv = document.createElement("div");
        newDiv.classList.add("container"); // Adiciona a classe de estilo para exibir como flex

        // Cria o novo abacate
        let newAbct = document.createElement("img");
        newAbct.src = "Imgs/abacateDiva.png";
        newAbct.width = 100;
        newAbct.classList.add("abacate");

        // Adiciona o novo abacate à nova div
        newDiv.appendChild(newAbct);

        // Adiciona a nova div ao contêiner original (abacateCont)
        document.body.appendChild(newDiv);

        count = 0; // Reseta o contador para o próximo ciclo
    }
}