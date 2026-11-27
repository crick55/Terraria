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
            etat: "Vivant",
            apparition: { chapitre: 2, recherche: "Je m'appelle Dolios et toi tu dois être Celès" }
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
            infosComplementaires: "Fait parti du trio d'origine avec Celes et Galathea. Il avait un frère jumeau, Timio, qui est décédé très jeune, lors d'un grave accident à la fête foraine, dont il s'est senti responsable longtemps. A tel point qu'il avait pris l'identité de son frère jumeau Timio en se faisant passer pour lui. Il a fait croire que c'était Liam qui était mort, ne pouvant se remettre de l'avoir perdu. Ce n'est que lors de la récupération du troisième codex, en entrant dans son propre esprit, qu'il comprit que Timio n'était pas mort de sa faute et il reprit alors sa véritable identité : Liam. Il aida à sauver la cité avec l'aide de ses amis et s'attacha tellement à Thayri, le fils du grand maître, qu'il fit tout pour le retrouver et le sauver quand son père décida de le tuer. A ce jour, il est le conjoint de Thayri, est le bras droit du roi et prend le commandement de la cité en l'absence de Thayri.",
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
            etat: "Vivant",
            apparition: { chapitre: 2, recherche: "Thayri, je m'appelle Thayri" }
        },
        {
            nom: "Valtor",
            categorie: "Personnages principaux",
            image: "images/persos/Valtor2.jpg",
            age: "Age inconnu",
            descriptionPhysique: "Cheveux mi-longs vert emeraude, barbe noire épaisse, yeu verts perçants, silhouette athlétique et musculature prononcée. Il privilégie les tenues sombres et élégantes.",
            aptitudes: "maîtrise de la magie ancienne, création de sceaux et de runes ancestrales, manipulation de l'énergie magique, création de barrières de protection, connaissance des rituels et des anciennes incantations.",
            infosComplementaires: "Ancien disciple d'Erydin, Valtor a longtemps été victime d'une malédiction dont il a été libéré grâce à Galathea. Il tient également le refuge animalier de Terraria où il a confié le bestiaire de la cité à Galathea. Il entretien désormais une relation amoureuse avec elle et s'apprête à devenir père.",
            etat: "Vivant",
            apparition: { chapitre: 2, recherche: "Bonjour je me prénomme Valtor" }
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
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "grosse brute épaisse" }
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
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "La troisième femme, du nom de Catalina" }
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
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "Les enfants je vous présente Griffin" }
        },
        {
            nom: "Icy",
            categorie: "Personnages secondaires",
            image: "",
            age: "Plusieurs siècles",
            descriptionPhysique: "Apparence jeune malgré ses centaines d'années (son corps et son esprit ne vieillissent pas)",
            aptitudes: "Maîtrise du pouvoir de la glace",
            infosComplementaires: "Cheffe des hors-la-loi bannis sur Omega. Assoiffée de vengeance envers Terraria, elle a envoyé ses sbires dérober le Cristal d'Obsidienne et enfermer la cité sous un dôme magique",
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "La cheffe de Omega se prénomme Icy" }
        },
        {
            nom: "Iseult",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "Jeune femme d'une grande beauté résidant au palais de Terraria",
            aptitudes: "Spécialiste de la magie de l'âme et de l'esprit",
            infosComplementaires: "L'une des trois mages du palais. Elle remet à Celes le Bracelet de l'Esprit permettant la projection astrale (« Spiritus evasio » / « Spiritus redeo »)",
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "Voici Iseult" }
        },
        {
            nom: "Le Grand Maître",
            categorie: "Personnages secondaires",
            image: "images/persos/Grandmaitre.jpg",
            age: "65 ans",
            descriptionPhysique: "Homme d'âge mûr, légèrement embompoint, toujours très bien habillé et se tient parfaitement droit en permanence",
            aptitudes: "Manipulation de l'esprit, télékinésie",
            infosComplementaires: "Il était le grand chef de la cité depuis des décennies jusqu'à sa chute, provoqué par nos amis terriens et accompagné de son fils Thayri. Est le père de Thayri. A tué son fils Thayri peu de temps avant la bataille de la cité car il avait tout découvert de ses intentions et menaçait ses plans.",
            etat: "Mort",
            apparition: { chapitre: 1, recherche: "longue barbe blanche tout de bleu vêtu" }
        },
        {
            nom: "Morla",
            categorie: "Personnages secondaires",
            image: "",
            age: "Âgée",
            descriptionPhysique: "Sorcière âgée aux cheveux blancs et au regard perçant, portant un médaillon orné d'une citrine et un anneau runique",
            aptitudes: "Surveillance et protection magique de la Tour Nuage depuis son portrait enchanté",
            infosComplementaires: "Véritable gardienne de la Tour Nuage, dont l'identité avait été usurpée par une imposteuse. Ancienne alliée de Vanessa Wheeler, la grand-mère de Celes, qui lui avait jadis sauvé la vie. Elle remet le premier fragment du Codex au trio.",
            etat: "Vivant",
            apparition: { chapitre: 2, recherche: "la sorcière nommée Morla" }
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
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "Je m'appelle Octavius" }
        },
        {
            nom: "Oritel et Marion",
            categorie: "Personnages secondaires",
            image: "",
            age: "À compléter",
            descriptionPhysique: "Parents biologiques de Galathea",
            aptitudes: "Défenseurs de Terraria",
            infosComplementaires: "Parents biologiques de Galathea. Marion est retournée sur Terre pour mettre Galathea au monde en sécurité et la confier à des amis proches. Tous deux sont ensuite partis en expédition dans les Terres Oubliées pour combattre les invasions ennemies et ne sont jamais revenus.",
            etat: "Disparus",
            apparition: { chapitre: 2, recherche: "Tes parents se nomment Oritel et Marion" }
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
        },
        {
            nom: "Vanessa Wheeler",
            categorie: "Personnages secondaires",
            image: "",
            age: "Décédée",
            descriptionPhysique: "Grand-mère maternelle de Celes, apparue sous forme de brume spectrale",
            aptitudes: "Ancienne voyageuse entre la Terre et Terraria, communication depuis l'au-delà via sa croix",
            infosComplementaires: "Elle a élevé Celes et l'appelait affectueusement « ma petite sirène ». Jadis venue à Terraria au même âge que le trio, elle a sauvé la vie de Morla et œuvré comme conseillère auprès du Grand Maître. Depuis l'au-delà, elle guide Celes dans les moments critiques.",
            etat: "Mort",
            apparition: { chapitre: 2, recherche: "Célestine Wheeler, petite-fille de Vanessa Wheeler" }
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
            details: "La cité est vivante, elle possède un coeur, un moteur qui la maintient en état de fonctionner et est étroitement lié à Thayri depuis qu'il s'est fait aspirer à l'intérieur de celui-ci.",
            apparition: { chapitre: 1, recherche: "Vous êtes à la cité de Terraria" }
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
            details: "La tour est vivante, elle possède un coeur comme un être humain.",
            apparition: { chapitre: 1, recherche: "se trouve à la Tour Nuage" }
        },
        {
            nom: "Le Bois Brisé",
            categorie: "Lieux secondaires",
            sousTitre: "Forêt périlleuse menant à la Tour Nuage",
            image: "",
            description: "Forêt semée d'embûches que le trio doit traverser pour atteindre la Tour Nuage.",
            details: "Lieu dangereux où rôdent des manipulateurs d'esprit.",
            apparition: { chapitre: 1, recherche: "traverser le Bois Brisé" }
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
        },
        {
            nom: "Les Terres Noires",
            categorie: "Lieux secondaires",
            sousTitre: "Territoire des pillards menaçant Terraria",
            image: "",
            description: "Contrée hostile d'où proviennent des pillards qui attaquent régulièrement la cité de Terraria.",
            details: "Mentionnées par le Grand Maître comme l'une des menaces extérieures contre lesquelles il protège la cité.",
            apparition: { chapitre: 1, recherche: "pillards des Terres Noires" }
        },
        {
            nom: "Les Terres Oubliées",
            categorie: "Lieux secondaires",
            sousTitre: "Contrée dangereuse où ont disparu les parents de Galathea",
            image: "",
            description: "Région reculée et périlleuse située au-delà des frontières habituelles de Terraria.",
            details: "Oritel et Marion, les parents biologiques de Galathea, y sont partis en expédition pour lutter contre les invasions ennemies et n'en sont jamais revenus.",
            apparition: { chapitre: 2, recherche: "expédition dans les Terres Oubliées" }
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
            nom: "Omega",
            categorie: "Lieux secondaires",
            sousTitre: "Monde glacial d'exil dirigé par Icy",
            image: "",
            description: "Univers glacial à l'atmosphère rude où un ancêtre du Grand Maître a banni tous les hors-la-loi ayant causé du tort à Terraria.",
            details: "Gouverné par Icy, qui maîtrise la glace. C'est là que le Cristal d'Obsidienne a été emporté.",
            apparition: { chapitre: 1, recherche: "un univers nommé Omega" }
        },
        {
            nom: "Tunnel des Wendigos",
            categorie: "Lieux secondaires",
            sousTitre: "Tunnels et grottes souterraines abritant les Wendigos",
            image: "",
            description: "Lieu gouverné par Darch, abritant la colonnies des Wendigos.",
            details: "Ce sont des tunnels où l'on peut s'y perdre, cachant des wendigos capables de vous manger si vous vous y aventurez."
        }
    ],

    // ==========================================
    // 3. FAUNE (Ordre alphabétique)
    // ==========================================
    faune: [
        {
            nom: "Aether",
            description: "Dragon blanc aux yeux bleus de Celes",
            image: "images/faune/Aether.jpg",
            infosComplementaires: "Probablement volé a Kaïba, mais on ne dira rien...",
            etat: "Vivant"
        },
        {
            nom: "Artax",
            description: "Grand rapace vert de Celes (Thunder Bird)",
            image: "images/faune/Artax.jpg",
            infosComplementaires: "Puissant et rapide, il a choisi Celes dans la salle du trône du palais de Terraria pour l'accompagner dans sa quête",
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "Il semblerait qu'Artax t'apprécie beaucoup" }
        },
        {
            nom: "Astro",
            description: "Renard à neuf queues au pelage vert emeraude et blanc. Agile, affectueux et loyal, il ne possède aucune aptitude particulière.",
            image: "images/faune/Astro2.jpg",
            infosComplementaires: "Rencontré par Galathea dans le refuge de Valtor (alors appelé Loup Épineux à Crinière Verte dont la famille avait été tuée par des braconniers) puis sauvé de la mort par cette dernière grâce à la sève du saule pleureur de Lymphea. Depuis il est devenu son fidèle compagnon.",
            etat: "Vivant",
            apparition: { chapitre: 2, recherche: "Mit navn er Astro" }
        },
        {
            nom: "Azzuria",
            description: "Rapace gigantesque au plumage bleu saphir et aux reflets dorés, parcourus d'éclairs. Rapide comme la foudre, il possède une agilité exceptionnelle et des serres redoutables.",
            image: "images/faune/Azzuria2.jpg",
            infosComplementaires: "Fidèle compagnon de Galathea, Azzuria lui sert de monture aérienne et peut parcourir de grande distances en un temps record. Elle est très gourmande et raffole des cacahuètes et graines de tournesol.",
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "Azzuria se déplace en furtivité" }
        },
        {
            nom: "Completer avec le nom des 3 loups",
            description: "Loups",
            image: "",
            infosComplementaires: "Ce sont les loups qui vont permettre à nos héros de se déplacer rapidement par voix terrestre",
            etat: "Vivant"
        },
        {
            nom: "Condor",
            description: "Griffon de Liam (Thunder Bird)",
            image: "images/faune/Condor.jpg",
            infosComplementaires: "Condor est le premier animal de Liam. Il a su devenir ami et en phase avec cet animal alors que Liam déteste la hauteur. Condor a été blessé à l'aile lors d'une mission vers tour nuage, mais Galathea a réalisé un remède pour le soigner.",
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "Tu as été choisi par Condor" }
        },
        {
            nom: "Esibela",
            description: "Coccinelle géante verte et orange",
            image: "",
            infosComplementaires: "Monture végétarienne d'Octavius, capable de voler sur de longues distances et d'attraper quelqu'un en plein vol",
            etat: "Vivant",
            apparition: { chapitre: 1, recherche: "Esibela est végétarienne" }
        },
        {
            nom: "Vax",
            description: "Animal de compagnie",
            image: "images/faune/Vax.jpg",
            age: "3 ans",
            infosComplementaires: "Corbeau noir, Veille et protège sur Tamara",
            etat: "Vivant"
        }
    ],

    // ==========================================
    // 4. OBJETS & ARTEFACTS (Ordre alphabétique)
    // ==========================================
    objets: [
        {
            nom: "Armes du trio (Palais de Terraria)",
            categorie: "Équipement",
            image: "",
            description: "Armes choisies dans l'armurerie du palais avant la première mission : deux pointes serties de rubis verts reliées par une fine chaîne pour Timio, une arbalète pour Galathea et une dague pour Celes.",
            infosComplementaires: "Les pointes de Timio se portent discrètement au bas du dos grâce à un harnais.",
            apparition: { chapitre: 1, recherche: "s'équipa d'une dague en attendant ses amis" }
        },
        {
            nom: "Bestiaire de la cité",
            categorie: "Grimoire",
            image: "",
            description: "Manuscrit ancien répertoriant toutes les créatures de Terraria, leurs fiches descriptives et les remèdes permettant de les soigner.",
            infosComplementaires: "Rédigé dans une langue ancestrale proche du sanskrit que seul le collier de Galathea permet de déchiffrer. Confié par Valtor, il a permis de concocter la potion de guérison pour l'aile de Condor.",
            apparition: { chapitre: 2, recherche: "Dans ma bibliothèque se trouve un bestiaire" }
        },
        {
            nom: "Bracelet de l'Esprit",
            categorie: "Artefact magique",
            image: "",
            description: "Bracelet orné d'une pierre lumineuse remis à Celes par Iseult.",
            infosComplementaires: "Permet à son porteur de projeter son esprit hors de son corps via la formule « Spiritus evasio » et de revenir via « Spiritus redeo ». La pierre s'éteint tant que le corps reste inerte. Son port a blanchi les cheveux de Celes.",
            apparition: { chapitre: 1, recherche: "Voici maintenant le Bracelet de l'Esprit" }
        },
        {
            nom: "Bracelet holographique",
            categorie: "Objet technologique",
            image: "",
            description: "Bracelet de communication remis à Galathea par Valtor.",
            infosComplementaires: "En appuyant sur une zone précise du bracelet, le visage de Valtor apparaît en hologramme pour communiquer à distance à travers Terraria.",
            apparition: { chapitre: 2, recherche: "Valtor lui donna alors un bracelet holographique" }
        },
        {
            nom: "Carte de Terraria",
            categorie: "Artefact magique",
            image: "",
            description: "Carte ancienne en bois bordée d'inscriptions méconnues, sertie de rubis.",
            infosComplementaires: "Trouvée dans un coffre de la cabane en Bretagne par Timio, elle a ouvert le portail vers Terraria. Une version géante dans la bibliothèque du Grand Maître évolue en temps réel selon l'avancée de l'armée de l'Ombre.",
            apparition: { chapitre: 0, recherche: "Une sorte de carte en bois" }
        },
        {
            nom: "Codex (4 fragments)",
            categorie: "Artefact magique",
            image: "",
            description: "Livre ancien aux pages dorées et ornées d'or, divisé en quatre fragments dissimulés à travers Terraria.",
            infosComplementaires: "Renferme des incantations de magie blanche que seul le Grand Maître peut déchiffrer pour affaiblir le dôme magique. Le premier fragment a été récupéré à la Tour Nuage auprès de Morla.",
            apparition: { chapitre: 1, recherche: "récupérer 4 fragments d'un codex" }
        },
        {
            nom: "Collier de la faune et de la flore",
            categorie: "Artefact magique",
            image: "",
            description: "Collier façonné à partir de la roche de Terraria et orné de plumes de plumards, remis à Galathea par Griffin.",
            infosComplementaires: "Permet à celle qui le porte de comprendre et parler le langage des animaux et des plantes, ainsi que de déchiffrer des langues anciennes liées à la nature.",
            apparition: { chapitre: 1, recherche: "un collier fabriqué à partir de la roche de Terraria" }
        },
        {
            nom: "Cristal d'Obsidienne",
            categorie: "Relique majeure",
            image: "",
            description: "Cristal énergétique constituant le cœur même de la cité de Terraria.",
            infosComplementaires: "Alimente les portails entre mondes ainsi que les systèmes de défense, d'armement et les boucliers de la cité. Dérobé par les sbires d'Icy.",
            apparition: { chapitre: 1, recherche: "Le Cristal d'Obsidienne qui donne l'énergie" }
        },
        {
            nom: "Croix de Vanessa Wheeler",
            categorie: "Relique familiale",
            image: "",
            description: "Chaîne ornée d'une croix léguée à Celes par sa grand-mère Vanessa Wheeler.",
            infosComplementaires: "Sert d'ancrage spirituel permettant à Celes d'entendre la voix de sa grand-mère depuis l'au-delà lorsqu'elle la porte.",
            apparition: { chapitre: 2, recherche: "La croix qu'elle ne quittait jamais se mit à luire" }
        },
        {
            nom: "Encre d'Ingaoué",
            categorie: "Substance magique",
            image: "",
            description: "Liquide légèrement brillant qui tournoie de lui-même, conservé dans la salle des artefacts du palais.",
            infosComplementaires: "Trempée au contact du Cristal d'Obsidienne, elle offre une protection accrue contre les blessures physiques, accélère la récupération contre la fatigue et la faim et peut parfois éviter la mort.",
            apparition: { chapitre: 1, recherche: "C'est l'encre d'Ingaoué" }
        },
        {
            nom: "Pierre de l'Esprit",
            categorie: "Artefact magique",
            image: "",
            description: "Petite pierre brillante pas plus grande qu'une noisette remise à Timio/Liam par Catalina.",
            infosComplementaires: "Fusionnée directement dans le front de Timio. Elle permet de percevoir et de contrôler son environnement et les esprits (« Manipulation de la trame »).",
            apparition: { chapitre: 1, recherche: "La Pierre de l'Esprit, dit-elle" }
        },
        {
            nom: "Rubis d'alerte",
            categorie: "Objet magique",
            image: "",
            description: "Pierres précieuses confiées au trio par le Grand Maître avant leur départ pour la Tour Nuage.",
            infosComplementaires: "Elles luisent automatiquement lorsque des ennemis approchent.",
            apparition: { chapitre: 1, recherche: "je vous fournis des rubis qui luiront" }
        }
    ],

    // ==========================================
    // 5. GALERIE
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
