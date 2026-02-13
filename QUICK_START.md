# 🚀 Quick Start Guide

## Voor nieuwe klant in 5 minuten

### 1️⃣ Clone & Install (1 min)
```bash
git clone https://github.com/WouterArtsRecruitin/recruitment-landing-templates.git
cd recruitment-landing-templates
npm install
```

### 2️⃣ Configureer Klantgegevens (2 min)

Open `src/data/config.ts` en pas aan:

```typescript
export const companyConfig = {
  name: "Klant Bedrijfsnaam",
  tagline: "Hun slogan of tagline",
  description: "Korte pitch over het bedrijf",
  email: "contact@klant.nl",
  phone: "+31 20 123 4567",
  website: "https://www.klant.nl",
  address: "Bedrijfsadres 123, 1234 AB Stad",
};
```

### 3️⃣ Preview Templates (1 min)

```bash
npm run dev
```

Open http://localhost:5173 en switch tussen A, B, C templates rechts bovenin.

### 4️⃣ Kies Template & Deploy (1 min)

**Optie A: Houd switcher** (laat klant kiezen)
- Direct deployen zoals het is

**Optie B: Kies één template** 
- Verwijder VersionSwitcher uit `src/pages/Index.tsx`
- Hardcode gekozen template (A, B of C)

**Deploy:**
```bash
# Vercel
vercel

# Of Netlify  
netlify deploy --prod
```

## 🎯 Welke Template?

| Template | Stijl | Beste voor |
|----------|-------|------------|
| **A** | Dark, Modern, Tech | IT, Tech, Innovatieve bedrijven |
| **B** | Groen, Dynamisch, Bold | Creatief, Energie, Duurzaam |
| **C** | Wit, Corporate, Klassiek | Finance, Legal, Traditioneel |

## 📝 Volgende Stappen

1. Voeg logo toe aan `public/`
2. Voeg vacatures toe in `config.ts` → `defaultVacancies`
3. Voeg bedrijfsfoto's toe
4. Update meta tags in `index.html`
5. Test op mobile
6. Deploy! 🚀

## 🆘 Hulp Nodig?

- **Full README**: Zie `README.md`
- **Deployment Guide**: Zie `DEPLOYMENT.md`
- **Issues**: https://github.com/WouterArtsRecruitin/recruitment-landing-templates/issues
