const monImage = document.querySelector("img");

monImage.addEventListener("click", () => {
  const maSrc = monImage.getAttribute("src");
  if (maSrc === "images/3274492.jpg") {
    monImage.setAttribute("src", "images/3dd48ca26bbbfa9386d080498ff96786.jpg");
  } else {
    monImage.setAttribute("src", "images/3274492.jpg");
  }
});

let monBouton = document.querySelector("button");
let monTitre = document.querySelector("h1");

function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  if (!monNom) {
    definirNomUtilisateur();
}  
  else {
        localStorage.setItem("nom", monNom);
        monTitre.textContent = `Bienvenue à toi chère dévoué à la lumière, ${monNom}`;
    }
}

if (!localStorage.getItem("nom")) {
  definirNomUtilisateur();
} else {
  const nomEnregistre = localStorage.getItem("nom");
  monTitre.textContent = `Bienvenue à toi chère dévoué à la lumière, ${nomEnregistre}`;
}

monBouton.addEventListener("click", () => {
  definirNomUtilisateur();
});