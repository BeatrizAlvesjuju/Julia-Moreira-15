Pela imagem, você estava criando o **convite interativo de 15 anos da Júlia** e o arquivo pedido era o **`script.js`** para ativar:

💙 Confirmar presença
🎁 Sugestões de presentes
📍 Localização
📱 QR Code
✨ Animações do convite

Segue um exemplo completo de código para colocar no arquivo **script.js**:

```javascript
// ===============================
// CONVITE INTERATIVO - JULIA 15 ANOS
// ===============================

// Botão Confirmar Presença
function confirmarPresenca() {
    const mensagem = 
    "Olá! Confirmo minha presença no aniversário de 15 anos da Júlia Moreira 💙✨";
    
    const telefone = "62992610754" coloque o WhatsApp que receberá as confirmações

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}


// Botão Sugestões de Presentes
function mostrarPresentes() {

    alert(`
🎁 Sugestões de presentes:

✨ Perfumes
👗 Roupas tamanho 16 anos ou nº 34
👠 Calçados nº 36
💎 Pratas
💄 Maquiagem

Obrigada pelo carinho! 💙
    `);

}


// Botão Localização
function abrirLocalizacao() {

    const endereco = 
    "SM Espaço de Festa - Via Santa Luzia, Setor Rio Formoso";

    const mapa = 
    "https://www.google.com/maps/search/?api=1&query=" 
    + encodeURIComponent(endereco);

    window.open(mapa, "_blank");

}


// QR Code do convite
function gerarQRCode() {

    const linkConvite = window.location.href;

    const qr =
    `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(linkConvite)}`;

    document.getElementById("qrcode").src = qr;

}


// Animação ao carregar página
window.addEventListener("load", () => {

    document.body.classList.add("entrada");

    gerarQRCode();

});


// Efeito de aparecer elementos na rolagem
const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

});


elementos.forEach((elemento)=>{
    observer.observe(elemento);
});
```

No seu projeto do GitHub, a estrutura deve ficar assim:

```
Convite-Julia/
│
├── index.html
├── style.css
└── script.js   ✅ (cole esse código aqui)
```

Depois no seu **index.html**, antes de fechar o `</body>`, precisa existir:

```html
<script src="script.js"></script>
```

E os botões precisam chamar as funções:

```html
<button onclick="confirmarPresenca()">
💙 Confirmar Presença
</button>

<button onclick="mostrarPresentes()">
🎁 Sugestões de Presentes
</button>

<button onclick="abrirLocalizacao()">
📍 Localização
</button>
```

Também vi na imagem que o GitHub Pages estava dizendo que o repositório estava vazio. Depois de colocar esses 3 arquivos (`index.html`, `style.css`, `script.js`) e fazer o **Commit**, ele já permitirá publicar o convite.

Posso também montar para você o **`index.html` completo do convite cinematográfico azul floral da Júlia com todos esses botões funcionando** para você apenas copiar no GitHub.
