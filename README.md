# ARyze Website

Landing page per ARyze — joint venture Levery S.r.l. + Exvirience S.r.l.

## Struttura

```
├── index.html          # Pagina di ingresso / selezione segmento
├── cantiere.html       # Landing page segmento Cantiere
├── om.html             # Landing page segmento O&M
├── grazie.html         # Pagina di conferma post-form
├── logo-scritta-small.png
├── logo.jpg
├── XR-01.jpg
├── XR-02.jpg
├── XR-03.jpg
├── XR-04.jpg
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions — deploy automatico su push
```

## Deploy su GitHub Pages

### Prima volta

1. Crea la repository `levery-srl/aryze-website` su GitHub
2. Carica tutti i file (HTML + immagini)
3. Vai su **Settings → Pages**
4. In **Source** seleziona **GitHub Actions**
5. Fai un push sul branch `main` — il deploy parte automaticamente
6. Il sito sarà live su `https://levery-srl.github.io/aryze-website/`

### Aggiornamenti successivi

Qualsiasi push su `main` trigghera il re-deploy automatico (~1-2 minuti).

## Configurazione dominio custom (aryze.it)

Una volta che il sito è live su GitHub Pages:

1. Su **Aruba** (o il nuovo registrar), imposta i DNS di aryze.it:
   - Record `A` → `185.199.108.153`
   - Record `A` → `185.199.109.153`
   - Record `A` → `185.199.110.153`
   - Record `A` → `185.199.111.153`
   - Record `CNAME` per `www` → `levery-srl.github.io`

2. Su GitHub → **Settings → Pages → Custom domain**:
   - Inserisci `aryze.it`
   - Spunta **Enforce HTTPS**

3. Crea un file `CNAME` nella root della repo con contenuto:
   ```
   aryze.it
   ```

La propagazione DNS può richiedere fino a 48 ore, ma solitamente è attiva entro 1-2 ore.

## FormSubmit — prima attivazione

Il form usa [FormSubmit](https://formsubmit.co) senza account.  
La **prima submission** invia un'email di attivazione a `info@aryze.it` — confermala per abilitare la ricezione dei lead.

## Google Analytics

GA4 configurato con ID `G-3KMV018LXB` su tutte le pagine.  
La pagina `grazie.html` registra un evento `conversion` di tipo `lead` per tracciare le demo requests.

## Note tecniche

- Nessuna dipendenza da framework o bundler — HTML/CSS/JS puri
- Font: Syne (titoli) + DM Sans (corpo) da Google Fonts
- Colore primario: `#00B5A3` (teal ARyze)
- Responsive: breakpoint a 900px
