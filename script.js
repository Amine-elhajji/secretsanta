const noms = [
    "Marouane",
    "Teysha",
    "Alix",
    "Sofyane",
    "Liam",
    "Jeanne",
    "Lucia",
    "Maïa",
    "Amine",
    "Céleste",
    "Jaime",
    "Kenzi",
    "Azir",
    "Corinne",
    "Ferdinand",
    "Ramatoulaye",
    "Ilian",
    "Raphaëlle",
    "Simon",
    "Eddy",
    "Jules",
    "Aimee",
    "Andrea",
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
    "Jeanne",
    "Lucia",
    "Maïa",
    "Amine",
    "Céleste",
    "Jaime",
    "Kenzi",
    "Azir",
    "Corinne",
    "Ferdinand",
    "Ramatoulaye",
    "Ilian",
    "Raphaëlle",
    "Simon",
    "Eddy",
    "Jules",
    "Aimee",
    "Andrea",
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
    "Jeanne",
    "Lucia",
    "Maïa",
    "Amine",
    "Céleste",
    "Jaime",
    "Kenzi",
    "Azir",
    "Corinne",
    "Ferdinand",
    "Ramatoulaye",
    "Ilian",
    "Raphaëlle",
    "Simon",
    "Eddy",
    "Jules",
    "Aimee",
    "Andrea",
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
    paragraphe.innerHTML = "La liste est cassée (quelqu'un s'est pioché lui-même), faut actualiser"
}

bouton.addEventListener("click", () => {
    for(i; i>0; null) {
        const nombre = Math.floor(Math.random() * donneurs.length-1)

        if(donneurs[0] == receveurs[nombre]) return casse(donneurs[0], receveurs[nombre], nouvelleListe)

        const donneur = donneurs.splice(0, 1)
        const receveur = receveurs.splice(nombre, 1)

        nouvelleListe.push(`- ${donneur} donne à ${receveur}`)
        nouvelleListe.push("Ici c'est le résultat")
        
        i = i - 1
    }
    
    paragraphe.innerHTML = "La liste est créée, appuie sur le bouton pour avoir les résultats"
})

bouton2.addEventListener("click", () => {
    item = item + 1
    annonce.innerHTML = nouvelleListe[item]
    if(item%2 == 1) {
        bouton2.innerHTML = `Récupère (prochain : ${noms[(item+1)/2]})`
    }
})
