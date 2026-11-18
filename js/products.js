/*
 * Données de la boutique — UNE SEULE SOURCE POUR CHAQUE PRODUIT
 * ------------------------------------------------------------------
 * POUR AJOUTER UN PRODUIT : copiez un objet dans PRODUCTS et remplissez-le.
 *   id        : identifiant unique (ex. "monProduit")
 *   category  : ID d'une catégorie définie dans CATEGORIES
 *   image     : chemin vers la photo (une seule image par carte)
 *   name/desc/alt : textes FR et EN
 *   badge     : 'badgeNew' ou 'badgePopular' dans js/i18n.js, ou null
 *   price     : prix affiché (ex. "1 500 F")
 *   specs     : caractéristiques de la fiche détaillée, en FR et en EN
 *
 * Aucune autre modification n'est nécessaire : les cartes, les prix,
 * les fiches détaillées et les boutons sont générés automatiquement.
 */

const CATEGORIES = [
  {
    id: "boissons",
    nameKey: "catDrinks"
  },
  {
    id: "alimentation",
    nameKey: "catFood"
  },
  {
    id: "emballage",
    nameKey: "catPackaging"
  },
  {
    id: "mode",
    nameKey: "catFashion"
  },
  {
    id: "maison",
    nameKey: "catHome"
  },
  {
    id: "electromenager",
    nameKey: "catAppliances"
  },
  {
    id: "papeterie",
    nameKey: "catStationery"
  }
];

/* Contenu SVG des icônes de catégories (sans la balise <svg>) */
const CATEGORY_ICONS = {
  all: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
  boissons: "<path d=\"M5 4h14l-2 16H7L5 4z\"/><path d=\"M7 10h10\"/>",
  alimentation: "<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><path d=\"M3 6h18\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/>",
  emballage: "<path d=\"M21 8l-9-5-9 5 9 5 9-5z\"/><path d=\"M3 8v8l9 5 9-5V8\"/><path d=\"M12 13v8\"/>",
  mode: "<path d=\"M20 6l-4-2-4 2-4-2-4 2 2 4 2-1v11h8V9l2 1 2-4z\"/>",
  maison: "<path d=\"M3 10l9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z\"/><path d=\"M9 21v-7h6v7\"/>",
  electromenager: "<path d=\"M4 4h16v12H4z\"/><path d=\"M8 20h8\"/><path d=\"M12 16v4\"/><path d=\"M9 8h6\"/>",
  papeterie: "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><path d=\"M14 2v6h6\"/><path d=\"M8 13h8M8 17h6\"/>"
};

const PRODUCTS = [
  {
    id: "pureWater",
    category: "boissons",
    image: "images/eaux/1.jpg",
    name: {
      fr: "Pure Water",
      en: "Pure Water"
    },
    desc: {
      fr: "Eau pure, fraîche et abordable.",
      en: "Pure, fresh and affordable water."
    },
    alt: {
      fr: "Pure Water",
      en: "Pure Water"
    },
    badge: null,
    price: "500 F",
    specs: {
      fr: [
        [
          "Format",
          "500 ml / 1,5 L"
        ],
        [
          "Type",
          "Eau purifiée"
        ],
        [
          "Usage",
          "Boisson quotidienne"
        ]
      ],
      en: [
        [
          "Size",
          "500 ml / 1.5 L"
        ],
        [
          "Type",
          "Purified water"
        ],
        [
          "Use",
          "Everyday drink"
        ]
      ]
    }
  },
  {
    id: "wines",
    category: "boissons",
    image: "images/vins/1.jpg",
    name: {
      fr: "Vins",
      en: "Wines"
    },
    desc: {
      fr: "Rouges, blancs et rosés pour toutes les célébrations.",
      en: "Reds, whites and rosés for all celebrations."
    },
    alt: {
      fr: "Vins",
      en: "Wines"
    },
    badge: null,
    price: "4 500 F",
    specs: {
      fr: [
        [
          "Types",
          "Rouge, blanc, rosé"
        ],
        [
          "Occasion",
          "Célébrations"
        ],
        [
          "Sélection",
          "PamPam"
        ]
      ],
      en: [
        [
          "Types",
          "Red, white, rosé"
        ],
        [
          "Occasion",
          "Celebrations"
        ],
        [
          "Selection",
          "PamPam"
        ]
      ]
    }
  },
  {
    id: "energy",
    category: "boissons",
    image: "images/boissonsenergisantes/1.jpg",
    name: {
      fr: "Boissons Énergisantes",
      en: "Energy Drinks"
    },
    desc: {
      fr: "Pour vous revitaliser et rester actif toute la journée.",
      en: "To revitalize you and stay active all day long."
    },
    alt: {
      fr: "Boissons Énergisantes",
      en: "Energy Drinks"
    },
    badge: null,
    price: "800 F",
    specs: {
      fr: [
        [
          "Effet",
          "Énergie et vitalité"
        ],
        [
          "Format",
          "Canette"
        ],
        [
          "Usage",
          "Toute la journée"
        ]
      ],
      en: [
        [
          "Effect",
          "Energy and vitality"
        ],
        [
          "Format",
          "Can"
        ],
        [
          "Use",
          "All day long"
        ]
      ]
    }
  },
  {
    id: "food",
    category: "alimentation",
    image: "images/aliments/1.jpg",
    name: {
      fr: "Aliments",
      en: "Food"
    },
    desc: {
      fr: "Garri, sucre et produits de première nécessité.",
      en: "Garri, sugar and everyday essentials."
    },
    alt: {
      fr: "Aliments",
      en: "Food"
    },
    badge: null,
    price: "1 200 F",
    specs: {
      fr: [
        [
          "Produits",
          "Garri, sucre, riz"
        ],
        [
          "Usage",
          "Cuisine quotidienne"
        ],
        [
          "Qualité",
          "Sélectionnée"
        ]
      ],
      en: [
        [
          "Products",
          "Garri, sugar, rice"
        ],
        [
          "Use",
          "Everyday cooking"
        ],
        [
          "Quality",
          "Carefully selected"
        ]
      ]
    }
  },
  {
    id: "mayonnaise",
    category: "alimentation",
    image: "images/mayonaises/1.jpg",
    name: {
      fr: "Mayonnaises",
      en: "Mayonnaise"
    },
    desc: {
      fr: "Mayonnaises et sauces pour accompagner vos plats.",
      en: "Mayonnaise and sauces to accompany your dishes."
    },
    alt: {
      fr: "Mayonnaises",
      en: "Mayonnaise"
    },
    badge: null,
    price: "1 000 F",
    specs: {
      fr: [
        [
          "Types",
          "Mayonnaise et sauces"
        ],
        [
          "Usage",
          "Accompagnement"
        ],
        [
          "Format",
          "Pot"
        ]
      ],
      en: [
        [
          "Types",
          "Mayonnaise and sauces"
        ],
        [
          "Use",
          "Side dish"
        ],
        [
          "Format",
          "Jar"
        ]
      ]
    }
  },
  {
    id: "sachets",
    category: "emballage",
    image: "images/sachets/1.jpg",
    name: {
      fr: "Sachets",
      en: "Sachets"
    },
    desc: {
      fr: "Sachets pratiques et solides pour l'emballage et la conservation.",
      en: "Practical and sturdy pouches for packaging and storage."
    },
    alt: {
      fr: "Boissons en Sachet",
      en: "Sachet Drinks"
    },
    badge: "badgePopular",
    price: "300 F",
    specs: {
      fr: [
        [
          "Contenance",
          "1 litre"
        ],
        [
          "Usage",
          "Emballage & conservation"
        ],
        [
          "Qualité",
          "Solide et pratique"
        ]
      ],
      en: [
        [
          "Capacity",
          "1 litre"
        ],
        [
          "Use",
          "Packaging & storage"
        ],
        [
          "Quality",
          "Sturdy and practical"
        ]
      ]
    }
  },
  {
    id: "cups",
    category: "emballage",
    image: "images/jetables/1.jpg",
    name: {
      fr: "Gobelets & Jetables",
      en: "Cups & Disposables"
    },
    desc: {
      fr: "Gobelets, cuillères et couverts jetables pour vos événements.",
      en: "Cups, spoons and disposable cutlery for your events."
    },
    alt: {
      fr: "Jetables",
      en: "Disposables"
    },
    badge: null,
    price: "1 500 F",
    specs: {
      fr: [
        [
          "Articles",
          "Gobelets, cuillères, couverts"
        ],
        [
          "Usage",
          "Événements"
        ],
        [
          "Type",
          "Jetable"
        ]
      ],
      en: [
        [
          "Items",
          "Cups, spoons, cutlery"
        ],
        [
          "Use",
          "Events"
        ],
        [
          "Type",
          "Disposable"
        ]
      ]
    }
  },
  {
    id: "shoes",
    category: "mode",
    image: "images/chaussures/1.jpg",
    name: {
      fr: "Chaussures",
      en: "Shoes"
    },
    desc: {
      fr: "Hommes, femmes, enfants — style et confort au quotidien.",
      en: "Men, women, children — everyday style and comfort."
    },
    alt: {
      fr: "Chaussures",
      en: "Shoes"
    },
    badge: null,
    price: "12 000 F",
    specs: {
      fr: [
        [
          "Public",
          "Hommes, femmes, enfants"
        ],
        [
          "Confort",
          "Semelle souple"
        ],
        [
          "Style",
          "Quotidien"
        ]
      ],
      en: [
        [
          "For",
          "Men, women, children"
        ],
        [
          "Comfort",
          "Flexible sole"
        ],
        [
          "Style",
          "Everyday"
        ]
      ]
    }
  },
  {
    id: "polish",
    category: "maison",
    image: "images/cirages_alumettes/1.jpg",
    name: {
      fr: "Cirage & Alumettes",
      en: "Polish & Matches"
    },
    desc: {
      fr: "Cirage pour chaussures et alumettes pour la maison.",
      en: "Shoe polish and matches for the home."
    },
    alt: {
      fr: "Cirage et Alumettes",
      en: "Shoe Polish and Matches"
    },
    badge: null,
    price: "500 F",
    specs: {
      fr: [
        [
          "Articles",
          "Cirage et alumettes"
        ],
        [
          "Usage",
          "Chaussures et maison"
        ],
        [
          "Format",
          "Petit conditionnement"
        ]
      ],
      en: [
        [
          "Items",
          "Polish and matches"
        ],
        [
          "Use",
          "Shoes and home"
        ],
        [
          "Format",
          "Small pack"
        ]
      ]
    }
  },
  {
    id: "toothpaste",
    category: "maison",
    image: "images/dentifrices/1.jpg",
    name: {
      fr: "Dentifrices",
      en: "Toothpaste"
    },
    desc: {
      fr: "Pâtes dentifrices pour toute la famille, au meilleur prix.",
      en: "Toothpaste for the whole family, at the best price."
    },
    alt: {
      fr: "Dentifrices",
      en: "Toothpaste"
    },
    badge: null,
    price: "800 F",
    specs: {
      fr: [
        [
          "Public",
          "Toute la famille"
        ],
        [
          "Format",
          "Tube"
        ],
        [
          "Atout",
          "Prix abordable"
        ]
      ],
      en: [
        [
          "For",
          "The whole family"
        ],
        [
          "Format",
          "Tube"
        ],
        [
          "Benefit",
          "Affordable price"
        ]
      ]
    }
  },
  {
    id: "termousse",
    category: "electromenager",
    image: "images/electromenagers/1.jpg",
    name: {
      fr: "Termousse",
      en: "Thermos"
    },
    desc: {
      fr: "Bouteille isotherme pour garder vos boissons chaudes ou fraîches toute la journée.",
      en: "Insulated bottle to keep your drinks hot or cold all day long."
    },
    alt: {
      fr: "Termousse",
      en: "Thermos flask"
    },
    badge: null,
    price: "15 000 F",
    specs: {
      fr: [
        [
          "Type",
          "Bouteille isotherme"
        ],
        [
          "Usage",
          "Boissons chaudes ou froides"
        ],
        [
          "Atout",
          "Conserve la température"
        ]
      ],
      en: [
        [
          "Type",
          "Insulated bottle"
        ],
        [
          "Use",
          "Hot or cold drinks"
        ],
        [
          "Benefit",
          "Keeps the temperature"
        ]
      ]
    }
  },
  {
    id: "mosquito",
    category: "maison",
    image: "images/moustiques/1.jpg",
    name: {
      fr: "Anti-Moustiques",
      en: "Mosquito Repellent"
    },
    desc: {
      fr: "Produits anti-moustiques pour vous protéger toute l'année.",
      en: "Mosquito repellent products to protect you year-round."
    },
    alt: {
      fr: "Anti-Moustiques",
      en: "Mosquito Repellent"
    },
    badge: null,
    price: "2 500 F",
    specs: {
      fr: [
        [
          "Types",
          "Sprays, spirales"
        ],
        [
          "Protection",
          "Toute l’année"
        ],
        [
          "Usage",
          "Intérieur et extérieur"
        ]
      ],
      en: [
        [
          "Types",
          "Sprays, coils"
        ],
        [
          "Protection",
          "Year-round"
        ],
        [
          "Use",
          "Indoors and outdoors"
        ]
      ]
    }
  },
  {
    id: "stationery",
    category: "papeterie",
    image: "images/bureautiques/1.jpg",
    name: {
      fr: "Tirage de Plan & Papeterie",
      en: "Plan Printing & Stationery"
    },
    desc: {
      fr: "Impression, photocopies, calques, chemises et fournitures de bureau.",
      en: "Printing, photocopies, tracing paper, folders and office supplies."
    },
    alt: {
      fr: "Tirage de plan et papeterie",
      en: "Plan printing and stationery"
    },
    badge: null,
    price: "200 F",
    specs: {
      fr: [
        [
          "Services",
          "Tirage de plan, photocopie"
        ],
        [
          "Fournitures",
          "Calques, chemises"
        ],
        [
          "Bonus",
          "Recharge WiFi"
        ]
      ],
      en: [
        [
          "Services",
          "Plan printing, photocopies"
        ],
        [
          "Supplies",
          "Tracing paper, folders"
        ],
        [
          "Bonus",
          "WiFi top-ups"
        ]
      ]
    }
  },
  {
    id: "wifi",
    category: "papeterie",
    image: "images/wifi/1.jpg",
    name: {
      fr: "Recharge WiFi",
      en: "WiFi Recharge"
    },
    desc: {
      fr: "Recharges internet et forfaits pour rester connecté.",
      en: "Internet top-ups and plans to stay connected."
    },
    alt: {
      fr: "Recharge WiFi",
      en: "WiFi Recharge"
    },
    badge: null,
    price: "500 F",
    specs: {
      fr: [
        [
          "Types",
          "Recharges et forfaits"
        ],
        [
          "Réseau",
          "Internet mobile"
        ],
        [
          "Usage",
          "Rester connecté"
        ]
      ],
      en: [
        [
          "Types",
          "Top-ups and plans"
        ],
        [
          "Network",
          "Mobile internet"
        ],
        [
          "Use",
          "Stay connected"
        ]
      ]
    }
  },
];
