# portfolio-sleek

A clean, premium portfolio built with Vite + React + Tailwind CSS following a Samsung/Apple product-page aesthetic.

Quick start (PowerShell):

```powershell
cd 'C:\DATA-BASE.SMBK4\DB.LOCAL\PROJECTS\portfolios\portfolio-sleek'
npm install
npm run dev
```

Build for production:

```powershell
npm run build
```

Where to put your profile image:
- Replace `src/assets/profile.jpg` with your actual JPEG/PNG image named `profile.jpg`.

Deploy:
- Vercel: Connect this repo and set build command `npm run build` and output directory `dist`.
- Netlify: Connect repo, set build command `npm run build` and publish directory `dist`, or drag-and-drop the `dist/` folder.

Notes:
- This project uses `lucide-react` and `framer-motion` for icons and animations.
- The demo `resume.pdf` link in the header is a placeholder; add your resume at the project root if desired.
