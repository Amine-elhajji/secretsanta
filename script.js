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
    return Math.floor(Math.random() * (nombre + 1))
}



const bouton = document.querySelector("#creation");
const bouton2 = document.querySelector("#recuperation");
const bouton3 = document.querySelector("#reinitialisation");
const annonce = document.querySelector("li");
const paragraphe = document.querySelector("p");

let item = -1
let i = noms.length;

let nouvelleListe = localStorage.getItem("liste")


const casse = (d, r, nl) => {
    console.log(`cassé (${d}, ${r})`)
    i = 0
    nl = []
    paragraphe.innerHTML = "La liste est cassée (quelqu'un s'est pioché lui-même), faut actualiser"
}

bouton.addEventListener("click", () => {
    if(!nouvelleListe) {
        nouvelleListe = new Array;

        for(i; i>0; null) {
            const nombre = random(donneurs.length - 1)
    
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


bouton3.addEventListener("click", () => {
    localStorage.clear()
    bouton3.innerHTML = "Stockage local effacé avec succès."
})
