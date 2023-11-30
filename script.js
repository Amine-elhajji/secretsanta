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
    "Aimee",
    "Andrea",
    "Mael",
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
let i = noms.length - 3;

let nouvelleListe = localStorage.getItem("liste")


const casse = (d, r, nl) => {
    console.log(`cassé (${d}, ${r})`)
    i = 0
    nl = []
    paragraphe.innerHTML = "La liste est cassée (quelqu'un s'est pioché lui-même), faut actualiser"
}

bouton.addEventListener("click", () => {
    if(!nouvelleListe) {
        nouvelleListe = ["Marouane donne à Téa", "Ici c'est le résultat", "Teysha donne à Jules", "Ici c'est le résultat", "Alix donne à Eddy", "Ici c'est le résultat"];

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
        localStorage.setItem("liste", JSON.stringify(nouvelleListe))
    } else {
        paragraphe.innerHTML = "La liste a été chargée depuis un ancien tirage au sort"
    }
})

bouton2.addEventListener("click", () => {
    item = item + 1
    annonce.innerHTML = JSON.parse(localStorage.getItem("liste"))[item]
    if(item%2 == 1) {
        bouton2.innerHTML = `Récupère (prochain : ${noms[(item+1)/2]})`
    }
})
