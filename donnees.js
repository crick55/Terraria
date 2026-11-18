const CODEX_DATA = {
    titre: "Terraria",

    // ==========================================
    // 1. PERSONNAGES (Ordre alphabétique)
    // ==========================================
    personnages: [
        // --- 1. Personnages principaux ---
        {
            nom: "Azelion",
            categorie: "1. Personnages principaux",
            image: "images/persos/Azelion.jpg",
            age: "Inconnu",
            descriptionPhysique: "A compléter.",
            aptitudes: "Contrôle des ombres.",
            infosComplementaires: "Démon des ombres et des ténèbres.",
            etat: "Vivant"
        },
        {
            nom: "Celes",
            categorie: "1. Personnages principaux",
            image: "images/persos/Celes.jpg",
            age: "À compléter",
            descriptionPhysique: "Humaine - A compléter",
            aptitudes: "Medium qui peut contacter les morts. Contrôle la glace. Peut respirer sous l'eau, contrôler les animaux et créatures aquatiques et contrôle de l'eau",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Dolios",
            categorie: "1. Personnages principaux",
            image: "images/persos/Dolios.jpg",
            age: "À compléter",
            descriptionPhysique: "Homme Sirène.",
            aptitudes: "Contrôle de l'eau et des créatures marines.",
            infosComplementaires: "Est surnommé « l'homme poisson » par Azelion.",
            etat: "Vivant"
        },
        {
            nom: "Galathéa",
            categorie: "1. Personnages principaux",
            image: "images/persos/Galathea.png",
            age: "17 ans",
            descriptionPhysique: "À compléter.",
            aptitudes: "Contrôle la nature",
            infosComplementaires: "Parents décédés",
            etat: "Vivant"
        },
        {
            nom: "Kael",
            categorie: "1. Personnages principaux",
            image: "images/persos/Kael.jpg",
            age: "7,5 ans",
            descriptionPhysique: "Petit garçon haut d'à peine 1 mètre aux cheveux blonds",
            aptitudes: "Inconnu ou inexistant",
            infosComplementaires: "Terrarien - A été adopté par Liam et Thayri, juste après la bataille contre le Grand Maître. Fils d'Arden, mort au combat. Possède une très forte empathie. Intelligent et très débrouillard, n'a pas froid aux yeux... ce qui peut déplaire à Liam ou Thayri.",
            etat: "Vivant"
        },
        {
            nom: "Liam",
            categorie: "1. Personnages principaux",
            image: "images/persos/Liam.jpg",
            age: "19 ans",
            descriptionPhysique: "Jeune homme, grand de 1.8m, cheveux blonds. Pas musclé mais pas gringalet pour autant.",
            aptitudes: "Manipule la trame, ce qui lui permet de jouer sur la matière et sur tout ce qui l'entoure.",
            infosComplementaires: "Conjoint de Thayri, prend le commandement de la cité en l'absence de Thayri.",
            etat: "Vivant"
        },
        {
            nom: "Nyssara",
            categorie: "1. Personnages principaux",
            image: "images/persos/Nyssara.png",
            age: "17 ans",
            descriptionPhysique: "À compléter.",
            aptitudes: "Manipule les astres",
            infosComplementaires: "Née de la convergence Astrale, (même si on sait pas ce que ça veut dire...)",
            etat: "Vivant"
        },
        {
            nom: "Tamara",
            categorie: "1. Personnages principaux",
            image: "images/persos/Tamara.jpg",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Thayri",
            categorie: "1. Personnages principaux",
            image: "images/persos/Thayri.jpg",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Valtor",
            categorie: "1. Personnages principaux",
            image: "images/persos/Valtor.jpg",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },

        // --- 2. Personnages secondaires ---
        {
            nom: "Asher",
            categorie: "2. Personnages secondaires",
            image: "images/persos/Asher.jpg",
            age: "500 ans environ",
            descriptionPhysique: "Vampire, habillé d'une tunique toujours noire et sombre",
            aptitudes: "Rapide, hypnotise ses proies, très bon combattant",
            infosComplementaires: "Est le père de Saphira",
            etat: "Vivant"
        },
        {
            nom: "Darch",
            categorie: "2. Personnages secondaires",
            image: "images/persos/Darch.jpg",
            age: "Iconnu",
            descriptionPhysique: "Imposant, grand, décharné, dangereux",
            aptitudes: "Fait peur jusque dans nos rêves",
            infosComplementaires: "C'est le chef des Wendigos, le premier rempart vers le royaume d'Asher",
            etat: "Mort"
        },
        {
            nom: "Erydin",
            categorie: "2. Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Le Grand Maître",
            categorie: "2. Personnages secondaires",
            image: "",
            age: "56 ans",
            descriptionPhysique: "Homme d'âge mûr, légèrement embompoint, toujours très bien habillé et se tient parfaitement droit en permanence",
            aptitudes: "Manipulation de l'esprit, télékinésie",
            infosComplementaires: "Il était le grand chef de la cité depuis des décennies jusqu'à sa chute, provoqué par nos amis terriens et accompagné de son fils Thayri. Est le père de Thayri. A tué son fils thayri peu de temps avant la bataille de la cité car il avait tou t découvert de ses intentions et menaçait ses plans.",
            etat: "Mort"
        },
        {
            nom: "Ortylia",
            categorie: "2. Personnages secondaires",
            image: "images/persos/Ortylia.jpg",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Saphira",
            categorie: "2. Personnages secondaires",
            image: "images/persos/Saphira.jpg",
            age: "300 ans",
            descriptionPhysique: "Femme qui en jette, cheveux noirs et longs, visage fin, séduisante mais mortelle",
            aptitudes: "Rapidité, maniement des armes et redoutable au combat",
            infosComplementaires: "Fille d'Asher, elle a maudit le monde de Lymphea",
            etat: "Mort"
        },
        {
            nom: "Scalia",
            categorie: "2. Personnages secondaires",
            image: "images/persos/Scalia.jpg",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        }
    ],

    // ==========================================
    // 2. LIEUX
    // ==========================================
    lieux: [
        {
            nom: "Terraria",
            categorie: "Lieux importants",
            sousTitre: "La cité",
            image: "",
            description: "La cité où vivent nos héros, sous le règne du Roi Thayri",
            details: ""
        }
    ],

    // ==========================================
    // 3. FAUNE (Prénom, Description, Photo)
    // ==========================================
    faune: [
        {
            nom: "Dragon Blanc aux Yeux bleus de Celes",
            description: "Description à compléter.",
            image: "images/faune/Dragonblanc.jpg",
            infosComplementaires: "À compléter.",
        },
        {
            nom: "Astro",
            description: "Description à compléter.",
            image: "images/faune/Astro.jpg",
            infosComplementaires: "À compléter.",
        }
    ],

    // ==========================================
    // 4. GALERIE
    // ==========================================
    galerie: [
        {
            titre: "Titre de la scène",
            scene: "Arc / Chapitre",
            image: "https://placehold.co/600x400/1c1c1f/8b5cf6?text=Illustration",
            description: "Contexte de l'illustration."
        }
    ]
};
