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
            image: "images/persos/Azelion2.jpg",
            age: "450 ans",
            descriptionPhysique: "Apparence humaine, masculin, mesure 1,90m. A des yeux rouges, de longs cheveux noirs et des mains griffues. Il possède des ailes noires semblables à celles des chauves-souris qu'il peut rétracter",
            aptitudes: "Contrôle des ombres et manipule l'energie maléfique",
            infosComplementaires: "Démon des ombres et des ténèbres. Il éprouve de forts sentiments envers Tamara pour qui il a massacré plusieurs membres d'une secte pour la sauver",
            etat: "Vivant"
        },
        {
            nom: "Celestine (dit Celes)",
            categorie: "Personnages principaux",
            image: "images/persos/Celestine.jpg",
            age: "17 ans",
            descriptionPhysique: "Jeune fille humaine d'1,65m. Elle a de longs cheveux blancs et des yeux bleus lumineux. Elle a un tatouage représentant un orque sur le poignet gauche",
            aptitudes: "Elle peut voir et invoquer les esprits, possède le pouvoir de manipuler la glace et la neige. Peut respirer sous l'eau, communiquer avec les créatures aquatiques et manipuler l'eau",
            infosComplementaires: "Fiancée à Dolios, princesse des mers et reine du pays de glace. Elle porte toujours autour du cou une chaine avec une croix qui lui a été léguée par sa grand mère et porte un anneau offert par Dolios lui conférant le même pouvoir que lui. Possède un dragon. Sa grand mère, qui l'a pratiquement élevée est décédée",
            etat: "Vivant"
        },
        {
            nom: "Dolios",
            categorie: "Personnages principaux",
            image: "images/persos/Dolios2.jpg",
            age: "18 ans",
            descriptionPhysique: "Jeune homme d'1,80m, au cheveux bruns courts et yeux marrons. Sous sa forme triton il a une queue de poisson de couleur bleue",
            aptitudes: "Contrôle de l'eau et communique avec les créatures marines.",
            infosComplementaires: "Prince des mers et oceans. Fiancé à Celes. Est surnommé « le poisson » par Azelion. Sa mère est morte quand il était enfant. Son passe temps favoris est la peinture.",
            etat: "Vivant"
        },
        {
            nom: "Galathea",
            categorie: "Personnages principaux",
            image: "images/persos/Galathea2.jpg",
            age: "17 ans",
            descriptionPhysique: "Longue chevelure ondulée et violette aux mèches roses et blanches, yeux verts emeraude, visage délicat et légères tâches de rousseur.",
            aptitudes: "Manipulation de la faune et de la flore, métamorphose animale, invocations de créatures magique, manipulation des racines de bois de fer, guérison animale, création de protections végétales.",
            infosComplementaires: "Parents décédés. Galathea entretient une relation amoureuse avec Valtor et attend son premier enfant.",
            etat: "Vivant"
        },
        {
            nom: "Kael",
            categorie: "Personnages principaux",
            image: "images/persos/Kael.jpg",
            age: "7,5 ans",
            descriptionPhysique: "Petit garçon haut d'à peine 1 mètre aux cheveux blonds. Mince et très agile",
            aptitudes: "Inconnu",
            infosComplementaires: "Terrarien - A été adopté par Liam et Thayri, juste après la bataille contre le Grand Maître. Fils d'Arden, mort au combat. Possède une très forte empathie. Intelligent et très débrouillard, n'a pas froid aux yeux... ce qui peut déplaire à Liam ou Thayri.",
            etat: "Vivant"
        },
        {
            nom: "Liam",
            categorie: "Personnages principaux",
            image: "images/persos/Liam.jpg",
            age: "18 ans",
            descriptionPhysique: "Jeune homme, grand de 1.8m, cheveux blonds. Un peu musclé mais pas gringalet pour autant.",
            aptitudes: "Manipule la trame, ce qui lui permet de jouer sur la matière et sur tout ce qui l'entoure.",
            infosComplementaires: "Fait parti du trio d'origine avec Céles et Galathéa. Il avait un frère jumeau, Timio, qui est décédé lors d'un grave accident à la fête foraine, dont il s'est senti responsable longtemps. A tel point qu'il avait pris l'identité de son frère jumeau, ne pouvant se remettre de l'avoir perdu. Ce n'est que lors de la récupération du troisième codex, en entrant dans son propre esprit, qu'il comprit que Timio n'était pas mort de sa faute et il reprit alors sa véritable identité : Liam. Il aida à sauver la cité avec l'aide de ses amis et s'attacha telelment à Thayri, le fils du grand maître, qu'il fit tout pour le retrouver et le sauver quand son père décida de le tuer. A ce jour, il est le conjoint de Thayri, est le bras droit du roi et prend le commandement de la cité en l'absence de Thayri.",
            etat: "Vivant"
        },
        {
            nom: "Nyssara",
            categorie: "Personnages principaux",
            image: "images/persos/Nyssara2.jpg",
            age: "17 ans",
            descriptionPhysique: "Humaine, longue chevelure ondulée bleu cyan aux mèches bleu nuit, yeux bleus profonds, teint clair, visage fin et élégant, lèvres rouges.",
            aptitudes: "Manipulation de l'energie astrale et cosmique, divination et visions prémonitoires, utilisation de cartes divinatoires et magiques",
            infosComplementaires: "Nyssara entretient un lien spirituel avec les astres et les constellations. Elle porte constamment un collier orné d'une pierre de lune et considère Galathea comme sa soeur de coeur.",
            etat: "Vivant"
        },
        {
            nom: "Tamara",
            categorie: "Personnages principaux",
            image: "images/persos/Tamara2.jpg",
            age: "160 ans",
            descriptionPhysique: "Demi-elfe d'1,60m, avec des cheveux violets et des yeux verts. Elle a des oreilles pointues. Sur son abdomen elle a une brûlure d'un sceau qui lui a été marqué au fer rouge",
            aptitudes: " Roublarde, camouflage, espionnage, crochetage, détection et désamorçage de pièges",
            infosComplementaires: "Née d'un père humain et d'une mère elfe, a été torturée et battue par une secte puis devait être sacrifiée au démon Azélion qui l'a sauvé par amour. Est toujours accompagnée de Vax son corbeau. Son sceau sur l'abdomen chauffe quand Azelion s'approche d'elle. Pendant longtemps elle n'a eu que Dolios pour ami.",
            etat: "Vivant"
        },
        {
            nom: "Thayri",
            categorie: "Personnages principaux",
            image: "images/persos/Thayri.jpg",
            age: "19 ans",
            descriptionPhysique: "Grand, cheveux bruns, belle ossature et relativement bien musclé.",
            aptitudes: "Aptutides non dévoilées à ce jour, on sait cependant que depuis sa fusion avec la cité, il peut ressentir ce qui s'y passe, la manipuler, entrer en phase avec elle et bien d'autres choses. Ses pouvoirs persos ne sont pas encore dévoilés à ce jour.",
            infosComplementaires: "Fils du Grand Maître, il a aidé Liam, Celes et Galathéa à le vaincre, celui-ci ayant décidé de prendre le contrôle de la cité et de tuer ses amis. Il finira d'ailleurs par tuer Thayri, son propre fils en le faisant absorber dans le moteur de la cité. Il est à ce jour le souverain de la cité et est reconnu par les habitants comme l'un roi le plus bienfaiteur qu'ils aient connus. Thayri est la personne ayant le sens moral le plus juste et cherchera à trouver systématiquement des solutions à tous celles et ceux qui en auront besoin. Il s'appuie beaucoup sur ses amis et a toute confiance en Liam, Celes ou Galathéa, quitte à leur déléguer des tâches importantes pour la survie de la cité, malgré qu'ils n'y sont pas originaires.",
            etat: "Vivant"
        },
        {
            nom: "Valtor",
            categorie: "Personnages principaux",
            image: "images/persos/Valtor2.jpg",
            age: "Age inconnu",
            descriptionPhysique: "Cheveux mi-longs vert emeraude, barbe noire épaisse, yeu verts perçants, silhouette athlétique et musculature prononcée. Il privilégie les tenues sombres et élégantes.",
            aptitudes: "maîtrise de la magie ancienne, création de sceaux et de runes ancestrales, manipulation de l'énergie magique, création de barrières de protection, connaissance des rituels et des anciennes incantations.",
            infosComplementaires: "Ancien disciple d'Erydin, Valtor a longtemps été victime d'une malédiction dont il a été libéré grâce à Galathea. Il entretien désormais une relation amoureuse avec elle et s'apprête à devenir père.",
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
            nom: "Caleb",
            categorie: "Personnages secondaires",
            image: "images/persos/Caleb 2.jpg",
            age: "mort à X ans",
            descriptionPhysique: "Petit enfant sous forme de fantôme",
            aptitudes: "aucune",
            infosComplementaires: "A compléter",
            etat: "Mort"
        },
        {
            nom: "Darch",
            categorie: "Personnages secondaires",
            image: "images/persos/Darch.jpg",
            age: "Age Iconnu",
            descriptionPhysique: "Imposant, grand, décharné, dangereux",
            aptitudes: "Fait peur jusque dans nos rêves",
            infosComplementaires: "C'est le chef des Wendigos, le premier rempart vers le royaume d'Asher",
            etat: "Mort"
        },
        {
            nom: "Erydin",
            categorie: "Personnages secondaires",
            image: "images/persos/Erydin.jpg",
            age: "À compléter",
            descriptionPhysique: "De longs cheveux blancs et un bâton magique",
            aptitudes: "À compléter.",
            infosComplementaires: "Mentor de Galathea et Valtor",
            etat: "Vivant"
        },
        {
            nom: "Le Grand Maître",
            categorie: "Personnages secondaires",
            image: "images/persos/Grandmaitre.jpg",
            age: "65 ans",
            descriptionPhysique: "Homme d'âge mûr, légèrement embompoint, toujours très bien habillé et se tient parfaitement droit en permanence",
            aptitudes: "Manipulation de l'esprit, télékinésie",
            infosComplementaires: "Il était le grand chef de la cité depuis des décennies jusqu'à sa chute, provoqué par nos amis terriens et accompagné de son fils Thayri. Est le père de Thayri. A tué son fils Thayri peu de temps avant la bataille de la cité car il avait tout découvert de ses intentions et menaçait ses plans.",
            etat: "Mort"
        },
        {
            nom: "Naelis",
            categorie: "Personnages secondaires",
            image: "images/persos/Naelis.jpg",
            age: "-9 mois",
            descriptionPhysique: "Enfant de Céles et Dolios, vu lors d'une vision futuriste",
            aptitudes: "A compléter",
            infosComplementaires: "A compléter",
            etat: "pas né"
        },
        {
            nom: "Ortylia",
            categorie: "Personnages secondaires",
            image: "images/persos/Ortylia.jpg",
            age: "Plus de 600 ans",
            descriptionPhysique: "Ortylia possède une longue chevelure argentée, des yeux dorés lumineux et une peau aux reflets légèrement bleutés. Ses majestueuses ailes translucides scintillent de nuances dorées et violettes. Elle porte une élégante tenue argentée ornée de motifs dorés et de pierres précieuses.",
            aptitudes: "Iconnu",
            infosComplementaires: "Sage, mystérieuse, bienveillante, majestueuse et profondément attachée à son royaume.Fondatrice de Limphea il y a plus de six siècles, Ortylia est une figure légendaire, respectée comme la mère spirituelle de son peuple.",
            etat: "Vivant"
        },
        {
            nom: "Percy",
            categorie: "Personnages secondaires",
            image: "images/persos/Percy.jpg",
            age: "À compléter",
            descriptionPhysique: "Ressemble à un mort vivant.",
            aptitudes: "Inconnu",
            infosComplementaires: "Gouverne sur le Royaume des glaces avec Sansa, en l'absence de Celes",
            etat: "Mort-Vivant"
        },
        {
            nom: "Sansa",
            categorie: "Personnages secondaires",
            image: "images/persos/Sansa.jpg",
            age: "À compléter",
            descriptionPhysique: "Ressemble à un mort vivant.",
            aptitudes: "inconnu",
            infosComplementaires: "Gouverne sur le Royaume des glaces avec Percy, en l'absence de Celes",
            etat: "Mort-Vivant"
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
            image: "images/persos/Scalia2.jpg",
            age: "45 ans",
            descriptionPhysique: "Longue chevelure brune et bouclée, yeux verts, visage mature aux traits prononcés. Elle porte une tenue d'aventurière aux couleurs naturelles, une couronne de bois de cerf et une sceptre orné d'un cristal émeraude.",
            aptitudes: "Manipulation de la terre et de la roche, contrôle des minéraux et des cristaux, utilisation d'un sceptre magique.",
            infosComplementaires: "Scalia possède une profonde connexion avec les entrailles de Terraria, elle canalise son energie élémentaire au travers de son sceptre.",
            etat: "Vivant"
        },
        {
            nom: "Triton",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "A compléter",
            aptitudes: "Vis sous l'eau",
            infosComplementaires: "Est le père de Dolios",
            etat: "Vivant"
        },
    ],

    // ==========================================
    // 2. LIEUX
    // ==========================================
    lieux: [
        {
            nom: "La cité",
            categorie: "Lieux principaux",
            sousTitre: "La cité principale de Terraria",
            image: "",
            description: "La cité où vivent nos héros, sous le règne du Roi Thayri.",
            details: "La cité est vivante, elle possède un coeur, un moteur qui la maintient en état de fonctionner et est étroitement lié à Thayri depuis qu'il s'est fait aspirer à l'intérieur de celui-ci."
        },
        {
            nom: "Esprit de Liam",
            categorie: "Lieux secondaires",
            sousTitre: "3eme lieu où se cachait un codex. Voyage dans les cauchemars du trio",
            image: "images/lieux/Esprit de Liam.jpg",
            description: "3eme lieu abritant un codex.",
            details: "Dans un état de faiblesse avancé, malade et evanouit, Liam incite ses amies à pénétrer dans son esprot par le biais de la magie. Tous les 3 doivent alors affronter leurs plus grandes peurs pour trouver un indice leur permettant de récupérer le 3eme codex. En parallèle, ils reçoivent des visions de Thayri, qui leur envoie des visions afin de l'aider à le retrouver et le sauver. En effet, Thayri avait disparu depuis un moment sans laisser de traces."
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
            image: "images/lieux/Tournuage.jpg",
            description: "C'est un chateau volant dans les nuages qui abritent des sorcieres",
            details: "La tour est vivante, elle possède un coeur comme un être humain."
        },
        {
            nom: "Le Royaume des Glaces",
            categorie: "Lieux secondaires",
            sousTitre: "2eme lieu où se cachait un codex",
            image: "",
            description: "lieu de glace, gouverné par Celes",
            details: "C'est à cet endroit qu'apparaît pour la premiere fois le Dragon blanc aux yeux bleus de Celes"
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
            nom: "Aether",
            description: "Dragon blanc aux yeux bleus de Celes",
            image: "images/faune/Aether.jpg",
            infosComplementaires: "Probablement volé a Kaïba, mais on ne dira rien...",
        },
        {
            nom: "Artax",
            description: "Griffon de Celes",
            image: "images/faune/Artax.jpg",
            infosComplementaires: "à compléter",
        },
        {
            nom: "Astro",
            description: "Loup de Galathéa",
            image: "images/faune/Astro.jpg",
            infosComplementaires: "À compléter.",
        },
        {
            nom: "Azzuria",
            description: "Griffon de Galathéa",
            image: "images/faune/Azzuria.jpg",
            infosComplementaires: "à compléter",
        },
        {
            nom: "Condor",
            description: "Griffon de Liam",
            image: "images/faune/Condor.jpg",
            infosComplementaires: "à compléter",
        },
        {
            nom: "Completer avec le nom des 3 loups",
            description: "Loups",
            image: "",
            infosComplementaires: "Ce sont les loups qui vont permettre à nos héros de se déplacer rapidement par voix terrestre",
        },
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
