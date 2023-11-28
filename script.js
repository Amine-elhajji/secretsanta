const noms = [
    "Marouane",
    "Teysha",
    "Alix",
    "Sofyane",
    "Liam",
    "Alice",
    "Jeanne",
    "Lucia",
    "Maïa",
    "Amine",
    "Céleste",
    "Jaime",
    "Ange-Maëlys",
    "Bamba",
    "Kenzi",
    "Azir",
    "Corinne",
    "Ferdinand",
    "Ramatoulaye",
    "Parina",
    "Ilian",
    "Raphaëlle",
    "Simon",
    "Eddy",
    "Jules",
    "Aimee",
    "Andrea",
    "Norma",
    "Mael",
    "Téa",
    "Charles",
    "Deniz",
    "Raphael",
    "Andrija",
    "Maor",
    "Anaïs",
    "Meena"
]
const donneurs = [
    "Marouane",
    "Teysha",
    "Alix",
    "Sofyane",
    "Liam",
    "Alice",
    "Jeanne",
    "Lucia",
    "Maïa",
    "Amine",
    "Céleste",
    "Jaime",
    "Ange-Maëlys",
    "Bamba",
    "Kenzi",
    "Azir",
    "Corinne",
    "Ferdinand",
    "Ramatoulaye",
    "Parina",
    "Ilian",
    "Raphaëlle",
    "Simon",
    "Eddy",
    "Jules",
    "Aimee",
    "Andrea",
    "Norma",
    "Mael",
    "Téa",
    "Charles",
    "Deniz",
    "Raphael",
    "Andrija",
    "Maor",
    "Anaïs",
    "Meena"
]
const receveurs = [
    "Marouane",
    "Teysha",
    "Alix",
    "Sofyane",
    "Liam",
    "Alice",
    "Jeanne",
    "Lucia",
    "Maïa",
    "Amine",
    "Céleste",
    "Jaime",
    "Ange-Maëlys",
    "Bamba",
    "Kenzi",
    "Azir",
    "Corinne",
    "Ferdinand",
    "Ramatoulaye",
    "Parina",
    "Ilian",
    "Raphaëlle",
    "Simon",
    "Eddy",
    "Jules",
    "Aimee",
    "Andrea",
    "Norma",
    "Mael",
    "Téa",
    "Charles",
    "Deniz",
    "Raphael",
    "Andrija",
    "Maor",
    "Anaïs",
    "Meena"
]

const random = (nombre) => {
    Math.floor(Math.random() * nombre + 1)
}

const bouton = document.querySelector("#creation");
const bouton2 = document.querySelector("#recuperation");
const annonce = document.querySelector("li");
const paragraphe = document.querySelector("p");

let item = -1
let i = noms.length

let nouvelleListe = new Array;

const casse = (d, r, nl) => {
    console.log(`cassé (${d}, ${r})`)
    i = 0
    nl = []
}

bouton.addEventListener("click", () => {
    for(i; i>0; null) {
        const nombre = Math.floor(Math.random() * donneurs.length-1)

        if(donneurs[0] == receveurs[nombre]) return casse(donneurs[0], receveurs[nombre], nouvelleListe)

        const donneur = donneurs.splice(0, 1)
        const receveur = receveurs.splice(nombre, 1)

        nouvelleListe.push(`- ${donneur} donne à ${receveur}`)
        
        i = i - 1
    }
    
    paragraphe.innerHTML = "Liste créée (normalement, vérif la console)"
})

bouton2.addEventListener("click", () => {
    item++
    annonce.innerHTML = nouvelleListe[item]
    bouton2.innerHTML = `Récupère (prochain : ${noms[item + 1]})`
})