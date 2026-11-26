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
            nom: "Liam/Timio",
            categorie: "Personnages principaux",
            image: "images/persos/Liam.jpg",
            age: "18 ans",
            descriptionPhysique: "Jeune homme, grand de 1.8m, cheveux blonds. Un peu musclé mais pas gringalet pour autant.",
            aptitudes: "Liam choisi, à son arrivée sur Terraria un objet rare, une pierre magique, une pierre de l'esprit. Celle-ci lui permet de manipuler l'environnement qui l'entoure par la pensée et de jouer avec l'esprit de manière générale. Il appelle cela : Manipulation de la trame. Elle lui permet de manipuler son environnement, les éléments, et même de parler aux animaux. Liam n'a pas encore découvert l'entièreté des pouvoirs de cette pierre. Elle a fusionnée avec lui ce qui permet d'user de ses pouvoirs à volonté et ne peut jamais en être défait.",
            infosComplementaires: "Fait parti du trio d'origine avec Céles et Galathéa. Il avait un frère jumeau, Timio, qui est décédé très jeune, lors d'un grave accident à la fête foraine, dont il s'est senti responsable longtemps. A tel point qu'il avait pris l'identité de son frère jumeau Timio en se faisant passer pour lui. Il a fait croire que c'était Liam qui était mort, ne pouvant se remettre de l'avoir perdu. Ce n'est que lors de la récupération du troisième codex, en entrant dans son propre esprit, qu'il comprit que Timio n'était pas mort de sa faute et il reprit alors sa véritable identité : Liam. Il aida à sauver la cité avec l'aide de ses amis et s'attacha tellement à Thayri, le fils du grand maître, qu'il fit tout pour le retrouver et le sauver quand son père décida de le tuer. A ce jour, il est le conjoint de Thayri, est le bras droit du roi et prend le commandement de la cité en l'absence de Thayri.",
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
            aptitudes: "Roublarde, camouflage, espionnage, crochetage, détection et désamorçage de pièges",
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
            nom: "Brutus",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "Grosse brute semi-humaine très imposante, armée d'un gourdin",
            aptitudes: "Force brute colossale, sensibilité à la lumière vive",
            infosComplementaires: "Gardien habituel de la cité de Terraria. Le trio le croise dès son arrivée dans une grotte souterraine alors qu'il prenait quelques vacances",
            etat: "Vivant"
        },
        {
            nom: "Caleb",
            categorie: "Personnages secondaires",
            image: "images/persos/Caleb 2.jpg",
            age: "mort à 7 ans",
            descriptionPhysique: "Garçon d’1m20 au cheveux et aux yeux bruns. Il a une apparence transparente de part sa nature.",
            aptitudes: "Télékinésie",
            infosComplementaires: "Est un fantome. À été enlevé sous les yeux de Celes puis tué par un psychopathe déguisé en clown. Très proche de Celes, il apparaît souvent sans qu’elle ne l’invoque pour l’aider.",
            etat: "Mort"
        },
        {
            nom: "Catalina",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "Jeune femme d'une grande beauté résidant au palais de Terraria",
            aptitudes: "Magie des artefacts et de l'esprit",
            infosComplementaires: "L'une des trois mages du palais. Elle fusionne directement la Pierre de l'Esprit dans le front de Liam/Timio avant le départ de sa première quête",
            etat: "Vivant"
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
            nom: "Griffin",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "Jeune femme d'une beauté divine résidant au palais de Terraria",
            aptitudes: "Experte en magie, en survie et en connaissance des secrets de Terraria",
            infosComplementaires: "L'une des trois mages du palais. Elle confie à Galathea le collier en roche de Terraria et plumes de plumards permettant de comprendre la faune et la flore",
            etat: "Vivant"
        },
        {
            nom: "Icy",
            categorie: "Personnages secondaires",
            image: "",
            age: "Plusieurs siècles",
            descriptionPhysique: "Apparence jeune malgré ses centaines d'années (son corps et son esprit ne vieillissent pas)",
            aptitudes: "Maîtrise du pouvoir de la glace",
            infosComplementaires: "Cheffe des hors-la-loi bannis sur Omega. Assoiffée de vengeance envers Terraria, elle a envoyé ses sbires dérober le Cristal d'Obsidienne et enfermer la cité sous un dôme magique",
            etat: "Vivant"
        },
        {
            nom: "Iseult",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "Jeune femme d'une grande beauté résidant au palais de Terraria",
            aptitudes: "Spécialiste de la magie de l'âme et de l'esprit",
            infosComplementaires: "L'une des trois mages du palais. Elle remet à Celes le Bracelet de l'Esprit permettant la projection astrale (« Spiritus evasio » / « Spiritus redeo »)",
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
            descriptionPhysique: "Garçon de 5 ans cheveux châtains et yeux verts",
            aptitudes: "Inconnu",
            infosComplementaires: "Futur enfant de Dolios et Celes. Une entité a pris son apparence lors d’une épreuve. Elle s’est sacrifiée pour leurs permettre de s’échapper.",
            etat: "pas né"
        },
        {
            nom: "Octavius",
            categorie: "Personnages secondaires",
            image: "",
            age: "Âgé",
            descriptionPhysique: "Petit vieillard habillé de vert, semblant porter une carapace",
            aptitudes: "Parle le langage des coccinelles géantes, grande vivacité malgré son âge",
            infosComplementaires: "Messager fidèle du Grand Maître. Il accueille le trio à la sortie de la grotte sur le dos de sa coccinelle Esibela et sauve Timio d'une chute mortelle",
            etat: "Vivant"
        },
        {
            nom: "Ortylia",
            categorie: "Personnages secondaires",
            image: "images/persos/Ortylia2.jpg",
            age: "Plus de 600 ans",
            descriptionPhysique: "Ortylia possède une longue chevelure argentée, des yeux dorés lumineux et une peau aux reflets légèrement bleutés. Ses majestueuses ailes translucides scintillent de nuances dorées et violettes. Elle porte une élégante tenue argentée ornée de motifs dorés et de pierres précieuses.",
            aptitudes: "Inconnu",
            infosComplementaires: "Sage, mystérieuse, bienveillante, majestueuse et profondément attachée à son royaume. Fondatrice de Limphea il y a plus de six siècles, Ortylia est une figure légendaire, respectée comme la mère spirituelle de son peuple.",
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
        }
    ],

    // ==========================================
    // 2. LIEUX (Ordre alphabétique)
    // ==========================================
    lieux: [
        // --- 1. Lieux principaux ---
        {
            nom: "La cité",
            categorie: "Lieux principaux",
            sousTitre: "La cité principale de Terraria",
            image: "",
            description: "La cité où vivent nos héros, sous le règne du Roi Thayri.",
            details: "La cité est vivante, elle possède un coeur, un moteur qui la maintient en état de fonctionner et est étroitement lié à Thayri depuis qu'il s'est fait aspirer à l'intérieur de celui-ci."
        },

        // --- 2. Lieux secondaires ---
        {
            nom: "Domaine d'Asher",
            categorie: "Lieux secondaires",
            sousTitre: "Château du vampire Asher",
            image: "",
            description: "Lieu gouverné par Asher et sa fille Saphira, et abritant des vampires.",
            details: "Il y fait sombre et la lune rouge donne à ce lieu une allure ensanglantée."
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
            nom: "La Tour Nuage",
            categorie: "Lieux secondaires",
            sousTitre: "1er lieu où se cachait un codex",
            image: "images/lieux/Tournuage.jpg",
            description: "C'est un chateau volant dans les nuages qui abritent des sorcieres",
            details: "La tour est vivante, elle possède un coeur comme un être humain."
        },
        {
            nom: "Le Bois Brisé",
