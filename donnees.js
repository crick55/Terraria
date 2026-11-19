const CODEX_DATA = {
    titre: "Terraria",

    // ==========================================
    // 1. PERSONNAGES (Ordre alphabétique)
    // ==========================================
    personnages: [
        // --- 1. Personnages principaux ---
        {
            nom: "Azelion",
            categorie: "Personnages principaux",
            image: "images/persos/Azelion.jpg",
            age: "Inconnu",
            descriptionPhysique: "A compléter.",
            aptitudes: "Contrôle des ombres.",
            infosComplementaires: "Démon des ombres et des ténèbres.",
            etat: "Vivant"
        },
        {
            nom: "Celes",
            categorie: "Personnages principaux",
            image: "images/persos/Celes.jpg",
            age: "À compléter",
            descriptionPhysique: "Humaine - A compléter",
            aptitudes: "Medium qui peut contacter les morts. Contrôle la glace. Peut respirer sous l'eau, contrôler les animaux et créatures aquatiques et contrôle de l'eau",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Dolios",
            categorie: "Personnages principaux",
            image: "images/persos/Dolios.jpg",
            age: "À compléter",
            descriptionPhysique: "Homme Sirène.",
            aptitudes: "Contrôle de l'eau et des créatures marines.",
            infosComplementaires: "Est surnommé « l'homme poisson » par Azelion.",
            etat: "Vivant"
        },
        {
            nom: "Galathéa",
            categorie: "Personnages principaux",
            image: "images/persos/Galathea.png",
            age: "17 ans",
            descriptionPhysique: "À compléter.",
            aptitudes: "Contrôle la nature",
            infosComplementaires: "Parents décédés",
            etat: "Vivant"
        },
        {
            nom: "Kael",
            categorie: "Personnages principaux",
            image: "images/persos/Kael.jpg",
            age: "7,5 ans",
            descriptionPhysique: "Petit garçon haut d'à peine 1 mètre aux cheveux blonds",
            aptitudes: "Inconnu",
            infosComplementaires: "Terrarien - A été adopté par Liam et Thayri, juste après la bataille contre le Grand Maître. Fils d'Arden, mort au combat. Possède une très forte empathie. Intelligent et très débrouillard, n'a pas froid aux yeux... ce qui peut déplaire à Liam ou Thayri.",
            etat: "Vivant"
        },
        {
            nom: "Liam",
            categorie: "Personnages principaux",
            image: "images/persos/Liam.jpg",
            age: "18 ans",
            descriptionPhysique: "Jeune homme, grand de 1.8m, cheveux blonds. Pas musclé mais pas gringalet pour autant.",
            aptitudes: "Manipule la trame, ce qui lui permet de jouer sur la matière et sur tout ce qui l'entoure.",
            infosComplementaires: "Conjoint de Thayri, prend le commandement de la cité en l'absence de Thayri.",
            etat: "Vivant"
        },
        {
            nom: "Nyssara",
            categorie: "Personnages principaux",
            image: "images/persos/Nyssara.png",
            age: "17 ans",
            descriptionPhysique: "À compléter.",
            aptitudes: "Manipule les astres",
            infosComplementaires: "Née de la convergence Astrale, (même si on sait pas ce que ça veut dire...)",
            etat: "Vivant"
        },
        {
            nom: "Tamara",
            categorie: "Personnages principaux",
            image: "images/persos/Tamara.jpg",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Thayri",
            categorie: "Personnages principaux",
            image: "images/persos/Thayri.jpg",
            age: "19 ans",
            descriptionPhysique: "Grand, cheveux bruns, belle ossature et relativement bien musclé.",
            aptitudes: "Aptutides non dévoilées à ce jour, on sait cependant que depuis sa fusion avec la cité, il peut ressentir ce qui s'y passe, la manipuler, entrer en phase avec elle et bien d'autres choses. Ses pouvoirs persos ne sont pas encore dévoilés à ce jour.",
            infosComplementaires: "Fils du Grand Maître, il a aidé Liam, Celes et Galathéa à le vaincre, celui-ci ayant décidé de prendre le contrôle de la cité et de tuer ses amis. Il finira d'ailleurs par tuer Thayri, son propre fils en le faisant absorber dans le moteur de la cité.",
            etat: "Vivant"
        },
        {
            nom: "Valtor",
            categorie: "Personnages principaux",
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
            categorie: "Personnages secondaires",
            image: "images/persos/Asher.jpg",
            age: "500 ans environ",
            descriptionPhysique: "Vampire, habillé d'une tunique toujours noire et sombre",
            aptitudes: "Rapide, hypnotise ses proies, très bon combattant",
            infosComplementaires: "Est le père de Saphira",
            etat: "Vivant"
        },
        {
            nom: "Darch",
            categorie: "Personnages secondaires",
            image: "images/persos/Darch.jpg",
            age: "Iconnu",
            descriptionPhysique: "Imposant, grand, décharné, dangereux",
            aptitudes: "Fait peur jusque dans nos rêves",
            infosComplementaires: "C'est le chef des Wendigos, le premier rempart vers le royaume d'Asher",
            etat: "Mort"
        },
        {
            nom: "Erydin",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Le Grand Maître",
            categorie: "Personnages secondaires",
            image: "",
            age: "56 ans",
            descriptionPhysique: "Homme d'âge mûr, légèrement embompoint, toujours très bien habillé et se tient parfaitement droit en permanence",
            aptitudes: "Manipulation de l'esprit, télékinésie",
            infosComplementaires: "Il était le grand chef de la cité depuis des décennies jusqu'à sa chute, provoqué par nos amis terriens et accompagné de son fils Thayri. Est le père de Thayri. A tué son fils thayri peu de temps avant la bataille de la cité car il avait tou t découvert de ses intentions et menaçait ses plans.",
            etat: "Mort"
        },
        {
            nom: "Ortylia",
            categorie: "Personnages secondaires",
            image: "images/persos/Ortylia.jpg",
            age: "À compléter",
            descriptionPhysique: "À compléter.",
            aptitudes: "À compléter.",
            infosComplementaires: "À compléter.",
            etat: "Vivant"
        },
        {
            nom: "Saphira",
            categorie: "Personnages secondaires",
            image: "images/persos/Saphira.jpg",
            age: "300 ans",
            descriptionPhysique: "Femme qui en jette, cheveux noirs et longs, visage fin, séduisante mais mortelle",
            aptitudes: "Rapidité, maniement des armes et redoutable au combat",
            infosComplementaires: "Fille d'Asher, elle a maudit le monde de Lymphea",
            etat: "Mort"
        },
        {
            nom: "Scalia",
            categorie: "Personnages secondaires",
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
            categorie: "Lieux secondaires",
            sousTitre: "Berceau de la nature",
            image: "",
            description: "Lieu gouverné par la lymphe Ortylia et peuplée de créatures de la nature en tout genre",
            details: "Un saule pleureur est caché au coeur de Lymphea et provoque parfois des miracles de la vie"
        },
 {
            nom: "La Tour Nuage",
            categorie: "Lieux secondaires",
            sousTitre: "1er lieu où se cachait un codex",
            image: "",
            description: "C'est un chateau volant dans les nuages qui abritent des sorcieres",
            details: "La tour est vivante, elle possède un coeur comme un être humain."
        },
{
            nom: "Le Temple de la Vie",
            categorie: "Lieux secondaires",
            sousTitre: "A son centre se trouve le Temple Pyramide protégeant le coeur de verre, qui servira de coeur de substitution pour Thayri",
            image: "images/lieux/Le Temple de la Vie.jpg",
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
            infosComplementaires: "Probablement volé a Kaïba, mais on ne dira rien...",
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
        "images/galerie/Scene1.jpg",
        "images/galerie/Scene2.jpg",
        "images/galerie/Scene3.jpg",
        "images/galerie/Scene4.jpg",
        "images/galerie/Scene5.jpg",
        "images/galerie/Scene6.jpg",
        "images/galerie/Scene7.png",
        "images/galerie/Scene8.png",
        "images/galerie/Scene9.png",
        "images/galerie/Scene10.png",
        "images/galerie/Scene11.png",
        "images/galerie/Scene13.png",
        "images/galerie/Scene14.png",
        "images/galerie/Scene15.jpg",
        "images/galerie/Scene16.jpeg",
        "images/galerie/Scene17.jpeg",
        "images/galerie/Scene18.png",
        "images/galerie/Scene19.png",
        "images/galerie/Scene20.png",
        "images/galerie/Scene21.png",
        "images/galerie/Scene22.png",
        "images/galerie/Scene23.mp4",
        "images/galerie/Scène24.jpg",
        "images/galerie/Scene25.jpg",
        "images/galerie/Scene26.jpg",
        "images/galerie/Scene27.jpg",
        "images/galerie/Scene29.png",
        "images/galerie/Scene30.jpg",
        "images/galerie/Scene31.jpg",
        "images/galerie/Scene32.png",
        "images/galerie/Scene33.png",
        "images/galerie/Scene34.jpg"
    ]
};
