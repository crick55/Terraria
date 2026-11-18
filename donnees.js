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
            aptitudes: "Inconnu",
            infosComplementaires: "Terrarien - A été adopté par Liam et Thayri, juste après la bataille contre le Grand Maître. Fils d'Arden, mort au combat. Possède une très forte empathie. Intelligent et très débrouillard, n'a pas froid aux yeux... ce qui peut déplaire à Liam ou Thayri.",
            etat: "Vivant"
        },
        {
            nom: "Liam",
            categorie: "1. Personnages principaux",
            image: "images/persos/Liam.jpg",
            age: "18 ans",
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
            age: "19 ans",
            descriptionPhysique: "Grand, cheveux bruns, belle ossature et relativement bien musclé.",
            aptitudes: "Aptutides non dévoilées à ce jour, on sait cependant que depuis sa fusion avec la cité, il peut ressentir ce qui s'y passe, la manipuler, entrer en phase avec elle et bien d'autres choses. Ses pouvoirs persos ne sont pas encore dévoilés à ce jour.",
            infosComplementaires: "Fils du Grand Maître, il a aidé Liam, Celes et Galathéa à le vaincre, celui-ci ayant décidé de prendre le contrôle de la cité et de tuer ses amis. Il finira d'ailleurs par tuer Thayri, son propre fils en le faisant absorber dans le moteur de la cité.",
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
            nom: "La cité",
            categorie: "Lieux importants",
            sousTitre: "La cité principale de Terraria",
            image: "",
            description: "La cité où vivent nos héros, sous le règne du Roi Thayri.",
            details: "La cité est vivante, elle possède un coeur, un moteur qui la maintient en état de fonctionner et est étroitement lié à Thayri depuis qu'il s'est fait aspirer à l'intérieur de celui-ci."
        },
{ 
            nom: "Lymphea",
            categorie: "Lieux secondaire",
            sousTitre: "Berceau de la nature",
            image: "",
            description: "Lieu gouverné par la lymphe Ortylia et peuplée de créatures de la nature en tout genre",
            details: "Un saule pleureur est caché au coeur de Lymphea et provoque parfois des miracles de la vie"
        },
 {
            nom: "La Tour Nuage",
            categorie: "Lieux importants",
            sousTitre: "1er lieu où se cachait un codex",
            image: "",
            description: "C'est un chateau volant dans les nuages qui abritent des sorcieres",
            details: "La tour est vivante, elle possède un coeur comme un être humain."
        },
{
            nom: "Le Temple de la Vie",
            categorie: "Lieux importants",
            sousTitre: "A son centre se trouve le Temple Pyramide protégeant le coeur de verre, qui servira de coeur de substitution pour Thayri",
            image: "",
            description: "Lieu sous terre, à de grandes profondeurs abritant une vie disparue depuis des millénaires à la surface : des dinosaures. Un golem de glace protège le coeur de verre, qui se trouve dans le temple Pyramide.",
            details: "En récupérant le coeur de verre, l'écosystème tout entier de ce lieu a été... détruit."
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
