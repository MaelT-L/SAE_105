// Tableau des infos des chalets : titres images descriptions
const chalets = [
    {
        title: "Chalet du 15 aout",
        description: "Ce chalet propose une sélection chaleureuse d’accessoires d’hiver, avec des pulls, écharpes, bonnets, sacs et trousses, parfaits pour se préparer aux fêtes de fin d’année.",
        image: "images/chalets/15_aout.jpg"
    },
    {
        title: "Chalet l'Alsacien",
        description: "Une invitation à savourer les spécialités alsaciennes, sucrées et salées. C’est l’endroit idéal pour goûter aux délices authentiques de l’Alsace.",
        image: "images/chalets/alsacien.jpg"
    },
    {
        title: "Chalet Atelier Boutique",
        description: "Ce chalet regorge de créations artisanales : bijoux, porte-clés, et couteaux en kits ou à l'unité, parfaits pour un cadeau unique et fait main.",
        image: "images/chalets/atelier_boutique.jpg"
    },
    {
        title: "Chalet Maison Mignon",
        description: "Un chalet dédié au nougat, avec une variété de saveurs qui raviront les papilles de toute la famille.",
        image: "images/chalets/maison_mignon.jpg"
    },
    {
        title: "Chalet Malakoff 1855",
        description: "Les amateurs de chocolat se régaleront avec une sélection raffinée de chocolats et de paniers gourmands, parfaits pour offrir ou se faire plaisir.",
        image: "images/chalets/malakoff.jpg"
    },
    {
        title: "Chalet le Comptoir de Mathilde",
        description: "Les plaisirs sucrés se trouvent ici, avec une gamme de chocolats fins, pâtes à tartiner, et autres délices sucrés à savourer sans modération.",
        image: "images/chalets/comptoir_mathilde.jpg"
    },
    {
        title: "Chalet Boules de Choco",
        description: "Pour les amateurs de sucré, ce chalet vous propose une variété de boules de chocolat, avec différents parfums et délicieuses gourmandises.",
        image: "images/chalets/boule_choco.jpg"
    },
    {
        title: "Chalet le Breton",
        description: "Embarquez pour un voyage en Bretagne avec les spécialités de cette région, des crêpes aux produits traditionnels, pour une expérience savoureuse.",
        image: "images/chalets/breton.jpg"
    },
    {
        title: "Chalet l'Atelier de Mamie Tartine",
        description: "Retrouvez des confitures maison, ainsi que des paniers garnis, parfaits pour un cadeau gourmand aux saveurs fruitées.",
        image: "images/chalets/confiture.jpg"
    },
    {
        title: "Chalet Pates dans la meule",
        description: "Un délice de pâtes fraîches cuisinées directement dans une meule de fromage, un plat savoureux et réconfortant à déguster sur place.",
        image: "images/chalets/pates.jpg"
    },
    {
        title: "Chalet Pulls moches de Noël",
        description: "Le chalet des pulls de Noël décalés ! Des pulls moches, des chaussettes rigolotes et des bonnets festifs pour des looks amusants et chaleureux.",
        image: "images/chalets/pulls_moches.jpg"
    },
    {
        title: "Chalet Santons de Provence",
        description: "Un lieu magique pour les amateurs de crèches de Noël, avec des santons en terre cuite pour décorer votre maison et apporter une touche provençale à vos fêtes.",
        image: "images/chalets/santons.jpg"
    },
    {
        title: "Chalet le Croque Savoyard",
        description: "Venez déguster la cuisine savoyarde avec des plats réconfortants comme la tartiflette et des sandwichs à la raclette, parfaits pour se réchauffer en plein cœur de l’hiver.",
        image: "images/chalets/savoyard.jpg"
    },
    {
        title: "Chalet Sergine & Fanny",
        description: "Des produits artisanaux créatifs, allant des trousses et petits sacs aux lots de produits faits main, pour un cadeau original et local.",
        image: "images/chalets/sergine_fanny.jpg"
    },
    {
        title: "Chalet le Bar à soupes",
        description: "Pour un moment de réconfort, ce chalet propose différentes soupes maison, idéales pour se réchauffer pendant les journées froides.",
        image: "images/chalets/soupes.jpg"
    },
    {
        title: "Chalet Vin chaud à l'ancienne",
        description: "Venez savourer un vin chaud épicé, une boisson réconfortante qui accompagne parfaitement vos déambulations au marché de Noël.",
        image: "images/chalets/vin_chaud.jpg"
    },
    {
        title: "Chalet The Hidden Distillery",
        description: "Venez découvrir les spiritueux locaux dans ce chalet, qui vous offre une sélection de rhums fins et d'autres boissons inspirées des terroirs de la région.",
        image: "images/chalets/alcool.jpg"
    },
    {
        title: "Chalet l'Atelier C",
        description: "Un espace dédié à la couture où vous trouverez des sacs, trousses et objets de déco confectionnés avec soin et créativité.",
        image: "images/chalets/atelier_sac.jpg"
    },
    {
        title: "Chalet Chicaxula",
        description: " Plongez dans un univers spirituel avec des créations artisanales inspirées du christianisme, telles que des croix, des sculptures de la Vierge Marie et d'autres objets religieux. Chaque pièce, pleine de symbolisme et de tradition, apporte une touche sacrée et élégante à votre Noël.",
        image: "images/chalets/religion.jpg"
    },
    {
        title: "Chalet de la Sève au Sirop",
        description: "Ce chalet vous transporte au Canada avec des spécialités à base de sirop d’érable, des douceurs sucrées aux produits du terroir canadien.",
        image: "images/chalets/canada.jpg"
    },
    {
        title: "Chalet sur les Chemins de la Bohème",
        description: "Un univers bohème vous attend avec des tasses, bols, bijoux artisanaux et plateaux de cuisine, tous réalisés avec un savoir-faire authentique.",
        image: "images/chalets/bijoux.jpg"
    },
    {
        title: "Chalet la Caverne de Caliom",
        description: "Offrez-vous un peu de douceur et de parfum avec des bougies artisanales et des savons faits main, pour une ambiance chaleureuse et parfumée.",
        image: "images/chalets/caverne.jpg"
    }
]

// récupère les infos et les mets dans la carte pop up au moment du click
document.addEventListener('DOMContentLoaded', () => {
    //sélectionne la cible "chaletModal"
    document.querySelectorAll('[data-bs-target="#chaletModal"]').forEach(link => {
        //attends l'évènement click
        link.addEventListener('click', () => {
            // Récupère le bon index
            const index = link.getAttribute('data-index');

            // Récupère les données du tableau en fonction de l'index
            const chalet = chalets[index];

            // Envoie les bonnes données dans la card pop up
            document.getElementById('chaletModalLabel').textContent = chalet.title;
            document.getElementById('chaletModalDescription').textContent = chalet.description;
            document.getElementById('chaletModalImage').src = chalet.image;
        });
    });
});