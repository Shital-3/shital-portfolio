import toriiImg from '../assets/images/torii.jpg';
import storeRatingImg from '../assets/images/store-rating-app.jpg';
import pathfinderImg from '../assets/images/pathfinder.jpg';
import darshanImg from '../assets/images/darshan-production.jpg';

export const projectsData = [
  {
    id: 1,
    title: "Torii — Learn Japanese",
    description: "Portfolio-grade Japanese learning platform with Hiragana, Katakana, Kanji, and vocabulary modules, interactive flashcards, multiple quiz modes, and a progress dashboard with streak tracking — all persisted locally via localStorage.",
    image: toriiImg,
    tags: ["React 18", "Vite", "React Router v6", "Context API", "CSS Modules"],
    liveDemo: "https://torii-learn.vercel.app/",
    github: "https://github.com/Shital-3/torii-learn"
  },
    {
    id: 2,
    title: "Store Rating App",
    description: "Full-stack, role-based store rating platform with separate Admin, User, and Store Owner experiences behind a single JWT-secured login. Admins manage users/stores, users search and rate stores, and owners view their store's average rating and customer feedback.",
    image: storeRatingImg,
    tags: ["React 19", "Vite", "Node.js", "Express.js", "MySQL", "JWT"],
    liveDemo: "https://store-rating-app-rho-one.vercel.app/",
    github: "https://github.com/Shital-3/store-rating-app"
  },
  {
    id: 3,
    title: "Pathfinder — Student Career & Academic Dilemma Platform",
    description: "Solo-architected platform for students to share and browse career/academic dilemmas. React + Vite frontend organized by domain (dilemmas, experiences, contributors) with a relational MySQL schema designed for the planned Node.js/Express/Prisma backend with JWT auth. In active development.",
    image: pathfinderImg,
    tags: ["React.js", "Vite", "Node.js", "Express", "MySQL", "Prisma", "JWT"],
    liveDemo: "https://pathfinder-murex-seven.vercel.app/",
    github: "https://github.com/Shital-3/pathfinder",
    status: "In Development"
  },

  {
    id: 4,
    title: "Darshan Productions",
    description: "Cinematic, fully responsive website built for Darshan Productions, a real film/production house client — a bold, dark editorial aesthetic with Playfair Display headings, animated hero entrance, and full mobile-to-desktop responsiveness, delivered as freelance frontend work under a tight timeline.",
    image: darshanImg,
    tags: ["React.js", "Vite", "CSS3", "Responsive Design"],
    liveDemo: "https://darshan-production.vercel.app/",
    github: "https://github.com/Shital-3/Darshan_Production"
  }
];