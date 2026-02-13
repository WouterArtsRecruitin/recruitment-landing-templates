# Deployment Instructies

## 🚀 Snel Deployen

### Vercel (Aanbevolen)

1. **Via Vercel Dashboard:**
   ```bash
   # Build het project lokaal om te testen
   npm run build
   ```
   - Ga naar [vercel.com](https://vercel.com)
   - Klik op "Add New Project"
   - Importeer `WouterArtsRecruitin/recruitment-landing-templates`
   - Deploy!

2. **Via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Netlify

1. **Via Netlify Dashboard:**
   - Ga naar [netlify.com](https://netlify.com)
   - "Add new site" → "Import existing project"
   - Selecteer de GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

2. **Via Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

## 📋 Pre-Deployment Checklist

Voor elke nieuwe klant deployment:

- [ ] **Update `src/data/config.ts`** met klantgegevens
- [ ] **Verwijder VersionSwitcher** (optioneel - voor productie zonder template keuze)
- [ ] **Kies definitieve template** (A, B, of C)
- [ ] **Voeg bedrijfslogo toe** in `public/`
- [ ] **Update meta tags** in `index.html`:
  - Title
  - Description  
  - OG tags voor social media
- [ ] **Test responsive design** op mobile
- [ ] **Test alle links** en formulieren
- [ ] **Optimaliseer afbeeldingen** (gebruik WebP)
- [ ] **Google Analytics** toevoegen (indien gewenst)

## 🎯 Template-Specifieke Deployment

Als je maar **1 template** wilt gebruiken in productie:

### Optie 1: VersionSwitcher verbergen

In `src/pages/Index.tsx`:
```typescript
// Verwijder of comment uit:
// import VersionSwitcher from '@/components/VersionSwitcher';
// <VersionSwitcher current={version} onChange={setVersion} />
```

### Optie 2: Hardcode één template

In `src/pages/Index.tsx`:
```typescript
// Kies één template (A, B of C)
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroB /> {/* Gebruik alleen Template B bijvoorbeeld */}
        {/* Rest van de pagina... */}
      </main>
      <Footer />
    </div>
  );
};
```

## 🔧 Environment Variables (Optioneel)

Voor gevoelige data kun je environment variables gebruiken:

1. In Vercel/Netlify dashboard → Settings → Environment Variables
2. Voeg toe:
   - `VITE_COMPANY_EMAIL`
   - `VITE_COMPANY_PHONE`
   - etc.

3. Gebruik in code:
```typescript
const email = import.meta.env.VITE_COMPANY_EMAIL || companyConfig.email;
```

## 🌐 Custom Domain

### Vercel
1. Project Settings → Domains
2. Voeg custom domain toe
3. Update DNS records bij je domain provider

### Netlify  
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## 📊 Analytics Setup

### Google Analytics

Voeg toe aan `index.html`:
```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

## 🔄 Updates Pushen

Na wijzigingen:
```bash
git add .
git commit -m "Update voor [Klant Naam]"
git push origin main
```

Vercel/Netlify deployt automatisch bij elke push naar main!

## 🎨 Per-Klant Branches (Optioneel)

Voor meerdere klanten:
```bash
# Nieuwe branch per klant
git checkout -b client-bedrijfsnaam
# Pas config aan
# Commit en push
git push origin client-bedrijfsnaam
```

Deploy elke branch als aparte site in Vercel/Netlify.
