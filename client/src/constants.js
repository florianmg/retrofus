const dev = false;

export const ENDPOINT = dev
  ? "http://localhost:5050"
  : "https://retro-match.herokuapp.com/";

export const ROUTES = {
  HOME: "/",
  NEW: "/new",
  ROOM: "/room/:roomName",
  PROFILE: "/profile/:last?",
  ZONES: "/zones",
  DONJON: "/dj",
};

export const TEXTES = {
  FORM: {
    TITLE_CREATE: "Créer votre personnage",
    TITLE_UPDATE: "Modifier votre personnage",
    SUBTITLE_CREATE:
      "Merci de rentrer des informations valide pour aider les autres joueurs a vous retrouver dans le jeux.",
    SUBTITLE_UPDATE: "",
    PSEUDO: "Pseudo",
  },
  BUTTONS: {
    GO_DONJON: "Faire un donjon",
    GO_ZONE: "Xp / Drop dans une zone",
    JOIN: "Rejoindre",
  },
  NAVBAR: {
    NEW_CHARACTER: "Créer un personnage",
    DONJONS: "Donjons",
    ZONES: "Zones",
  },
  LIST: {
    NAME: "Nom",
    LEVEL: "Niveau recommendé",
    ACTION: "Actions",
  },
  UPDATE_MESSAGE: "Modifier mon message",
  ELEMENTS: "Éléments",
  ALERT_MESSAGE: "Vérifier mes informations",
};

export const CLASSES = {
  1: "Crâ",
  2: "Écaflip",
  3: "Éniripsa",
  4: "Énutrof",
  5: "Féca",
  6: "Iop",
  7: "Osamodas",
  8: "Pandawa",
  9: "Sacrieur",
  10: "Sadida",
  11: "Sram",
  12: "Xelor",
};

export const ELEMENTS = {
  1: "Terre",
  2: "Feu",
  3: "Air",
  4: "Eau",
  5: "Sagesse",
};

export const SERVERS = {
  1: "Server 1",
  2: "Server 2",
  3: "Server 3",
  4: "Server 4",
};

export const DONJONS = [
  {
    name: "Donjon Incarnam",
    position: "Incarnam 0/5",
    level: 10,
  },
  {
    name: "Donjon Ensablé",
    position: "13/-28",
    level: 20,
  },
  {
    name: "Donjon des Champs",
    position: "13/-28",
    level: 20,
  },
  {
    name: "Donjon des Bouftous",
    position: "Tainéla 2/-34",
    level: 25,
  },
  {
    name: "Donjon des Tofus",
    position: "5/6",
    level: 40,
  },
  {
    name: "Donjon des Squelettes",
    position: "Marcher sur dalle 10/15",
    level: 40,
  },
  {
    name: "Donjon des Forgerons",
    position: "Vers zaap sufokia 13/21",
    level: 40,
  },
  {
    name: "Caverne des bubles",
    position: "19/-22",
    level: 40,
  },
  {
    name: "Donjon des Craqueleurs",
    position: "-3/-7",
    level: 50,
  },
  {
    name: "Donjon des Scarafeuille",
    position: "1/26",
    level: 50,
  },
  {
    name: "Donjon des bwork",
    position: "-5/10",
    level: 50,
  },
  {
    name: "Donjon des Gelées",
    position: "Dans un autre monde",
    level: 40,
  },
  {
    name: "Donjon des Larves",
    position: "-2/-5",
    level: 60,
  },
  {
    name: "Donjon des Blops",
    position: "-25/-17",
    level: 60,
  },
  {
    name: "Grotte Hesque",
    position: "-59/15",
    level: 60,
  },
  {
    name: "Donjon de Nowel",
    position: "-63/-100",
    level: 60,
  },
  {
    name: "Donjon des Abraknydes",
    position: "-9/-14",
    level: 90,
  },
  {
    name: "Arche d'Otomaï",
    position: "-55/-4",
    level: 90,
  },
  {
    name: "Antre du Dragon Cochon",
    position: "-1/33",
    level: 100,
  },
  {
    name: "Donjon des Canidés",
    position: "-24/1",
    level: 100,
  },
  {
    name: "Donjon du Koulosse",
    position: "-17/8",
    level: 100,
  },
  {
    name: "Donjon du Maitre Corbac",
    position: "-20/-62",
    level: 100,
  },
  {
    name: "Donjon de Moon",
    position: "31/8",
    level: 60,
  },
  {
    name: "Donjon des Rats de Brâkmar",
    position: "-26/31",
    level: 110,
  },
  {
    name: "Donjon des Rats de Bonta",
    position: "-35/-59",
    level: 110,
  },
  {
    name: "Goulet du Rasboul",
    position: "-51/9",
    level: 110,
  },
  {
    name: "Donjon du Tofu Royal",
    position: "5/6",
    level: 120,
  },
  {
    name: "Sanctuaire des Dragoeufs",
    position: "-3/24",
    level: 120,
  },
  {
    name: "Repaire de Skeunk",
    position: "-30/10",
    level: 120,
  },
  {
    name: "Labyrinthe du Minotoror",
    position: "-42/17",
    level: 120,
  },
  {
    name: "Repaire des Pandikazes",
    position: "18/-36",
    level: 120,
  },
  {
    name: "Laboratoire de Tyrnil",
    position: "-53/20",
    level: 140,
  },
  {
    name: "Donjon du Chêne Mou",
    position: "-9/-14",
    level: 160,
  },
  {
    name: "Donjon Kitsoune",
    position: "32/-38",
    level: 150,
  },
  {
    name: "Donjon des Rats du Château d'Amakna",
    position: "6/-9",
    level: 160,
  },
  {
    name: "Donjon Wabbits",
    position: "24/-13",
    level: 160,
  },
  {
    name: "Donjon des Pandikaze",
    position: "18/-36",
    level: 70,
  },
  {
    name: "Canopée du Kimbo",
    position: "-54/16",
    level: 180,
  },
  {
    name: "Labyrinthe du Minotot",
    position: "-42/-17",
    level: 180,
  },
  {
    name: "Donjon du Fungus",
    position: "-18/28",
    level: 190,
  },
  {
    name: "Donjon du Bworker",
    position: "-21/12",
    level: 190,
  },
  {
    name: "Antre du Kralamoure Géant",
    position: "-60/-8",
    level: 190,
  },
  {
    name: "Donjon des Firefoux",
    position: "28/-52",
    level: 190,
  },
];

export const ZONES = [
  {
    name: "Calanques d'astrub",
    mobs: ["Pichons", "Étoile de Mer D'asse"],
    level: "1-20",
  },
  {
    name: "Tainéla",
    mobs: ["Bouftous", "Bouftons", "Chef de guerre Bouftou"],
    level: "1-20",
  },
  { name: "Territoire des Porcos", mobs: ["Cochon de lait"], level: "1-20" },
  {
    name: "Zone Orée de la forêt des Abraknydes",
    mobs: ["Abraknydes"],
    level: "1-20",
  },
  { name: "Coin des Boo", mobs: ["Boo"], level: "20-40" },
  { name: "Plaine des scarafeuille", mobs: ["Scarafeuille"], level: "20-40" },
  {
    name: "Campement des Bworks",
    mobs: ["Bworks", "Bworks archer", "Bworks Mages"],
    level: "20-40",
  },
  {
    name: "Plage d'Otomaï",
    mobs: ["Crustorail", "Palmifleur", "Corailleur"],
    level: "20-40",
  },
  {
    name: "Massif de Cania",
    mobs: ["Blops"],
    level: "40-60",
  },
  { name: "Plaine de Kania", mobs: ["Kanigrous", "Serpentin"], level: "40-60" },
  {
    name: "Plaine Herbeuse",
    mobs: [
      "Bitouf des plaines",
      "Creaqueboule Poli",
      "Craqueleur poli",
      "Kido",
      "Kilibriss",
      "Mufafah",
    ],
    level: "40-60",
  },
  { name: "Presqu'île des Dragoeufs", mobs: ["Dragoeufs"], level: "60-80" },
  {
    name: "Forêt Sombre des Abraknydes",
    mobs: ["Abraknydes sombres"],
    level: "80-100",
  },
  {
    name: "Egouts de brakmar",
    mobs: ["Milirat d'Egoutant malade", "Chaman d'Egoutant", "Rat d'Egoutant"],
    level: "80-100",
  },
  {
    name: "Ile du minotoror",
    level: "100-150",
  },
  {
    name: "Ile de Grobe",
    level: "100-150",
  },
  {
    name: "Forêt sombre des abraknydes",
    level: "100-150",
  },
  {
    name: "Territoire des Funguns",
    level: "150-200",
  },
];
