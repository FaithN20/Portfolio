faith-nabwire.dev
A single-file portfolio site I threw together to show what I’m about.
Dark theme, neon accents, no frameworks—just HTML, CSS, and a few lines of vanilla JS.
what’s inside
index.html – the whole page
style.css – color palette & responsive grid
main.js – mobile nav toggle + smooth scroll
Faith Nabwire CV.pdf – my résumé (drop it in the root or an assets/ folder)
run it locally
clone or unzip the repo
open a terminal in the folder
bash
Copy
python -m http.server 8000   # or any static server
visit http://localhost:8000
tweak it
name / links / colors → edit style.css root variables
projects → swap the cards in index.html
contact form → replace the Formspree URL with your own
deploy
drag the folder to Netlify, Vercel, GitHub Pages—done.