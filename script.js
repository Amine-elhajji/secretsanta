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
// Création de la liste ayant tous les noms (celle-ci ne sera pas changée, mais permettra d'afficher les noms même quand les 2 autres listes seront vides)

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
// Création de la liste des donneurs

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
// Création de la liste des receveurs (c la même, ne vous inquiétez pas)

const random = (nombre) => {
    return Math.floor(Math.random() * (nombre + 1))
}
// Création d'une fonction random(x) qui permettra d'obtenir un nombre aléatoire entre 0 et x inclus.


const bouton = document.querySelector("#creation");
const bouton2 = document.querySelector("#recuperation");
const bouton3 = document.querySelector("#reinitialisation");
const annonce = document.querySelector("li");
const paragraphe = document.querySelector("p");
// Récupération de quelques éléments de la page HTML (bouton = celui pour créer la liste, bouton2 pour afficher les noms 1 par 1, bouton3 pour supprimer la liste actuelle, annonce pour modif le texte en noir afin d'annoncer les résultats, paragraphe pour confirmer la création de la liste ou dire que c'est cassé)


let item = -1
let i = noms.length;
// Création de 2 variables cheloues que j'ai du mal à expliquer

let nouvelleListe = localStorage.getItem("liste")
// Tentative de récupération de la dernière liste créée


const casse = (d, r, nl) => {
    console.log(`cassé (${d}, ${r})`)
    i = 0
    nl = []
    paragraphe.innerHTML = "La liste est cassée (quelqu'un s'est pioché lui-même), faut actualiser"
}
// Création de la fonction casse, qui va tout arrêter si ça se casse (pas très dur à déchiffrer)

bouton.addEventListener("click", () => {
    // Si on clique sur le bouton 1 (créer une nouvelle liste), alors :

    if(!nouvelleListe) {
        //Si la tentative de récupération de la dernière liste échoue, on en créé une nouvelle

        nouvelleListe = new Array;
        // Création d'une nouvelle liste

        for(i; i>0; null) {
            // Boucle qui se répète pour chaque personne qui participe

            const nombre = random(donneurs.length - 1)
            // Génération d'un nombre aléatoire grâce à la fonction random de tt à l'heure
    
            if(donneurs[0] == receveurs[nombre]) return casse(donneurs[0], receveurs[nombre], nouvelleListe)
            // Si quelqu'un se donne le truc à lui-même on arrête tout et on éxécute la fonction casse de tt à l'heure
    
            const donneur = donneurs.splice(0, 1)
            // Création de la constante (variable mais qui change pas) donneur, qui est la première personne de la liste des donneurs actuelle (et suppression de cette personne de la liste des donneurs)
            const receveur = receveurs.splice(nombre, 1)
            // Création de la constante receveur, qui est une personne aléatoire de la liste des receveurs actuelle (et suppression de cette personne de la liste des receveurs, comme ça il ne reçoit qu'un seul cadeau)
    
            nouvelleListe.push(`- ${donneur} donne à ${receveur}`)
            // Ajout de la combinaison donneur--receveur à la nouvelle liste
            nouvelleListe.push("Ici c'est le résultat")
            // Ajout d'un séparateur pour qu'on ne voit pas la combinaison suivante lorsqu'on regarde la sienne

            i = i - 1
            // Compliqué à expliqué mais ça permet de faire en sorte que la boucle ne se répète qu'un certain nombre de fois, et pas à l'infini
        }
        
        paragraphe.innerHTML = "La liste est créée, appuie sur le bouton pour avoir les résultats"
        // Puisque la liste est créée, on dit qu'elle est créée correctement sur le site

        localStorage.setItem("liste", JSON.stringify(nouvelleListe))
        // Ajout de la liste dans le stockage local, permet de ne pas la perdre si on actualise par accident
    } else {
        // Sinon (donc, si on a bien récupéré une liste depuis un tirage au sort avant)
        paragraphe.innerHTML = "La liste a été chargée depuis un ancien tirage au sort"
        // Puisque la liste est récupérée, on dit qu'elle est récupérée correctement sur le site
    }
})

bouton2.addEventListener("click", () => {
    // Si on clique sur le bouton 2 (récupérer la liste créée avant), alors :

    item = item + 1
    // Chepa comment expliquer mais ça permet qu'à chaque fois on passe à la personne suivante après avoir vu le tirage de quelqu'un (c'est pour ça que c'est en ordre alphabétique)

    annonce.innerHTML = JSON.parse(localStorage.getItem("liste"))[item]
    // Récupère l'association donneur--receveur pour le donneur concerné, et l'affiche dans le carré noir

    if(item%2 == 1) {
        // Compliqué à expliquer aussi, mais permet de faire en sorte que la ligne de texte suivante ne se lance qu'une fois sur 2

        bouton2.innerHTML = `Récupère (prochain : ${noms[(item+1)/2]})`
        // Change le texte du bouton pour que ça montre qui sera le prochain donneur à être affiché 
    }
})


bouton3.addEventListener("click", () => {
    // Si on clique sur le bouton 3 (réinitialisation de la liste), alors :

    localStorage.clear()
    // "Nettoie" le stockage de la liste (la variable "nouvelleListe" est encore là (heureusement sinon je l'aurai perdu 3 fois (merci Sofyane, Céleste et Jaime)), mais si on actualise on la perd complètement)

    bouton3.innerHTML = "Stockage local effacé avec succès."
    // Confirme la suppression du stockage de la liste
})
