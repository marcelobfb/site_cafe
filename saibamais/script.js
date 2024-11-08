var searchButton = document.getElementById("procura");
var searchBar = document.getElementById("textoprocura");
var cartButton = document.getElementById("carrinho");
var cart = document.getElementById("shop");
var limpar = document.getElementById("limpar");
var l = document.getElementById("lista");
var item1 = document.getElementById("item-1");
var item2 = document.getElementById("item-2");
var item3 = document.getElementById("item-3");
var item4 = document.getElementById("item-4");
var item5 = document.getElementById("item-5");
var item6 = document.getElementById("item-6");
var totalpreco = document.getElementById("totalpreco");
var total = 0;
var preco = 15.99;
var count = 0;

searchButton.addEventListener("click", function () {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "inline";

        searchBar.focus();
    } else {
        searchBar.style.display = "none";
    }
});

cartButton.addEventListener("click", function () {
    if (shop.style.right == "100vw") {
        shop.style.right = "5px";
    } else {
        shop.style.right = "100vw";
    }
});

var contagemItens = {
    "Café Coado": 0,
    "Café Extraordinário": 0,
    "Café Gourmet": 0,
    "Café Especial": 0,
    "Café Tradicional": 0,
    "Café Premium": 0,
};

var total = 0;

function adicionarItem(nome) {
    contagemItens[nome]++;

    if (contagemItens[nome] === 1) {
        var novoItem = document.createElement("li");
        novoItem.innerText = `1x ${nome} --- R$15,99`;
        novoItem.dataset.nome = nome;
        l.appendChild(novoItem);
    } else {
        var itens = l.getElementsByTagName("li");
        for (var i = 0; i < itens.length; i++) {
            if (itens[i].dataset.nome === nome) {
                itens[
                    i
                ].innerText = `${contagemItens[nome]}x ${nome} --- R$15,99`;
                break;
            }
        }
    }

    total += 15.99;
    totalpreco.innerText = `Valor Total: R$ ${total.toFixed(2)}`;
    inputItem.value = "";
}

limpar.addEventListener("click", function () {
    for (var nome in contagemItens) {
        contagemItens[nome] = 0;
    }

    while (l.firstChild) {
        l.removeChild(l.firstChild);
    }

    total = 0;
    totalpreco.innerText = `Valor Total: R$ ${total.toFixed(2)}`;
});

item1.addEventListener("click", function () {
    adicionarItem("Café Coado");
});
item2.addEventListener("click", function () {
    adicionarItem("Café Extraordinário");
});
item3.addEventListener("click", function () {
    adicionarItem("Café Gourmet");
});
item4.addEventListener("click", function () {
    adicionarItem("Café Especial");
});
item5.addEventListener("click", function () {
    adicionarItem("Café Tradicional");
});
item6.addEventListener("click", function () {
    adicionarItem("Café Premium");
});

const cafes = [
    "Café Coado",
    "Café Extraordinário",
    "Café Gourmet",
    "Café Especial",
    "Café Tradicional",
    "Café Premium",
];

const searchInput = document.getElementById("textoprocura");
const sugestoesContainer = document.getElementById("sugestoes");

searchInput.addEventListener("input", function () {
    const valor = searchInput.value.toLowerCase();
    sugestoesContainer.innerHTML = "";

    const sugestoes = cafes.filter((cafe) =>
        cafe.toLowerCase().includes(valor)
    );

    if (sugestoes.length > 0) {
        sugestoes.forEach((cafe) => {
            const li = document.createElement("li");
            li.textContent = cafe;
            li.onclick = () => {
                searchInput.value = cafe;
                sugestoesContainer.innerHTML = "";
                sugestoesContainer.style.display = "none";
            };
            sugestoesContainer.appendChild(li);
        });
        sugestoesContainer.style.display = "block";
    } else {
        sugestoesContainer.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (
        !sugestoesContainer.contains(event.target) &&
        event.target !== searchInput
    ) {
        sugestoesContainer.innerHTML = "";
        sugestoesContainer.style.display = "none";
    }
});

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const valor = searchInput.value.toLowerCase();
        const sugestoes = cafes.filter((cafe) =>
            cafe.toLowerCase().includes(valor)
        );

        if (sugestoes.length > 0) {
            window.location.href = "#menu";
        }
    }
});

document.getElementById("finalizarcompra").addEventListener("click", function() {
    window.location.href = "../carrinho/index.html";
});