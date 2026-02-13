# Recruitment Landing Page Templates

3 professionele, herbruikbare landingspagina templates voor recruitment doeleinden.

## 📋 Templates

### Template A - Professional & Modern
- **Stijl**: Donker, modern, professioneel
- **Beste voor**: Tech bedrijven, innovatieve organisaties
- **Kleuren**: Slate grijs met blauwe accenten

### Template B - Bold & Dynamic  
- **Stijl**: Kleurrijk, energiek, visueel aantrekkelijk
- **Beste voor**: Creatieve bedrijven, dynamic teams
- **Kleuren**: Groene en teal gradients

### Template C - Classic & Corporate
- **Stijl**: Klassiek, clean, corporate
- **Beste voor**: Traditionele bedrijven, corporate organisaties  
- **Kleuren**: Wit met indigo accenten

## 🚀 Snelstart

### Installatie

```bash
# Clone de repository
git clone <jouw-repo-url>
cd recruitment-landing-templates

# Installeer dependencies
npm install

# Start development server
npm run dev
```

### Configuratie

Pas de configuratie aan in `src/data/config.ts`:

```typescript
export const companyConfig = {
  name: "Jouw Bedrijf",
  tagline: "Jouw tagline",
  description: "Jouw beschrijving",
  email: "info@jouwebedrijf.nl",
  phone: "+31 6 12345678",
  website: "https://www.jouwebedrijf.nl",
  address: "Jouw adres",
};
```

## 📁 Project Structuur

```
src/
├── components/
│   ├── templates/
│   │   ├── a/          # Template A componenten
│   │   ├── b/          # Template B componenten
│   │   └── c/          # Template C componenten
│   ├── ui/             # Herbruikbare UI componenten
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── VersionSwitcher.tsx
├── data/
│   └── config.ts       # Configuratie bestand
├── pages/
│   └── Index.tsx       # Hoofdpagina
└── lib/
    └── utils.ts        # Utility functies
```

## 🎨 Aanpassen

### Een template uitbreiden

Elke template kan uitgebreid worden met extra secties:

1. Maak een nieuw component in de template folder (bijv. `src/components/templates/a/AboutA.tsx`)
2. Importeer en gebruik het in `src/pages/Index.tsx`

### Kleuren aanpassen

Pas de kleuren aan in `tailwind.config.ts` of gebruik CSS variabelen in `src/index.css`.

### Nieuwe template toevoegen

1. Maak een nieuwe folder in `src/components/templates/`
2. Voeg de template toe aan `VersionSwitcher.tsx`
3. Importeer en gebruik in `Index.tsx`

## 🔧 Technologie Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animaties
- **Lucide React** - Icons

## 📦 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy de dist folder naar Vercel
```

### Netlify

```bash
npm run build
# Deploy de dist folder naar Netlify
```

## 🎯 Best Practices

1. **Configuratie eerst**: Begin altijd met het aanpassen van `config.ts`
2. **Test alle templates**: Controleer alle 3 templates voordat je live gaat
3. **Optimaliseer afbeeldingen**: Gebruik WebP formaat voor betere performance
4. **Mobile first**: Test op mobile devices
5. **SEO**: Vergeet meta tags niet toe te voegen

## 📝 To Do voor nieuwe klant

- [ ] Update `config.ts` met klantgegevens
- [ ] Voeg vacatures toe aan `defaultVacancies`
- [ ] Upload bedrijfslogo naar `public/`
- [ ] Voeg bedrijfsafbeeldingen toe
- [ ] Test alle 3 templates
- [ ] Kies beste template voor klant
- [ ] Verwijder template switcher voor productie (optioneel)
- [ ] Update meta tags in `index.html`
- [ ] Deploy naar productie

## 🤝 Contributing

Dit is een intern project. Voor vragen of verbeteringen, neem contact op.

## 📄 License

Proprietary - Alle rechten voorbehouden
