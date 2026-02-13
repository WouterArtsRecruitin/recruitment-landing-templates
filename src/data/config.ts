// Configuratie bestand voor template data
// Pas deze waarden aan per klant

export const companyConfig = {
  name: "Jouw Bedrijf",
  tagline: "Slogan of tagline van je bedrijf",
  description: "Korte beschrijving van je bedrijf en wat jullie doen.",
  email: "info@jouwebedrijf.nl",
  phone: "+31 6 12345678",
  website: "https://www.jouwebedrijf.nl",
  address: "Straatnaam 123, 1234 AB Amsterdam",
};

export const templateConfig = {
  a: {
    name: "Template A",
    description: "Professional & Modern",
    primaryColor: "#3B82F6",
    style: "modern",
  },
  b: {
    name: "Template B", 
    description: "Bold & Dynamic",
    primaryColor: "#10B981",
    style: "bold",
  },
  c: {
    name: "Template C",
    description: "Classic & Corporate",
    primaryColor: "#6366F1",
    style: "corporate",
  },
};

export const defaultVacancies = [
  {
    id: "1",
    title: "Voorbeeld Functie 1",
    slug: "voorbeeld-functie-1",
    location: "Amsterdam",
    type: "Fulltime",
    urgent: true,
    tags: ["Tag 1", "Tag 2"],
    intro: "Dit is een voorbeeldfunctie. Pas deze aan naar jouw specifieke vacature.",
    responsibilities: [
      "Verantwoordelijkheid 1",
      "Verantwoordelijkheid 2",
      "Verantwoordelijkheid 3",
    ],
    requirements: [
      "Eis 1",
      "Eis 2",
      "Eis 3",
    ],
    niceToHave: [
      "Nice to have 1",
      "Nice to have 2",
    ],
    benefits: [
      "Voordeel 1",
      "Voordeel 2",
      "Voordeel 3",
    ],
    team: "Beschrijving van het team waar de kandidaat in komt te werken.",
    process: [
      "Stap 1: Kennismaking",
      "Stap 2: Interview",
      "Stap 3: Aanbieding",
    ],
  },
];
