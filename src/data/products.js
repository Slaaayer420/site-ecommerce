import smartphoneImg from '../assets/smartphone.jpeg';
import casqueImg from '../assets/casque.jpg';
import montreImg from '../assets/montre.jpeg';
import sacImg from '../assets/sac.jpg';
import chaussureImg from '../assets/chaussure.jpeg';
import bookImg from '../assets/book.jpeg';
import cafeImg from '../assets/cafe.jpeg';
import enceinteImg from '../assets/enceinte.jpg';

const products = [
  {
    id: 1,
    name: 'Smartphone Premium',
    category: 'Électronique',
    price: 799.99,
    rating: 4.5,
    reviews: 124,
    image: smartphoneImg,
    description: 'Smartphone haut de gamme avec écran AMOLED et triple caméra.',
    longDescription: 'Ce smartphone premium offre des performances exceptionnelles avec son processeur dernier cri. L\'écran AMOLED de 6.7 pouces offre des couleurs vibrantes et des noirs profonds. Le système de triple caméra permet des photos professionnelles en toutes circonstances.'
  },
  {
    id: 2,
    name: 'Casque Audio Sans Fil',
    category: 'Électronique',
    price: 199.99,
    rating: 4.2,
    reviews: 89,
    image: casqueImg,
    description: 'Casque audio sans fil avec réduction de bruit active.',
    longDescription: 'Profitez d\'une expérience audio immersive avec ces écouteurs sans fil dotés de la technologie de réduction de bruit active. Jusqu\'à 30 heures d\'autonomie et compatibles avec l\'assistance vocale.'
  },
  {
    id: 3,
    name: 'Montre Connectée',
    category: 'Électronique',
    price: 249.99,
    rating: 4.0,
    reviews: 56,
    image: montreImg,
    description: 'Montre connectée avec suivi d\'activité et notifications.',
    longDescription: 'Cette montre connectée suit votre activité physique, votre sommeil et votre fréquence cardiaque. Recevez des notifications de votre smartphone directement sur votre poignet. Résistante à l\'eau jusqu\'à 50m.'
  },
  {
    id: 4,
    name: 'Sac à Dos Urbain',
    category: 'Mode',
    price: 59.99,
    rating: 4.7,
    reviews: 203,
    image: sacImg,
    description: 'Sac à dos élégant et fonctionnel pour la ville.',
    longDescription: 'Ce sac à dos urbain allie style et fonctionnalité avec ses multiples compartiments, sa poche pour ordinateur portable et ses matériaux résistants à l\'eau. Parfait pour le travail ou les études.'
  },
  {
    id: 5,
    name: 'Chaussures de Sport',
    category: 'Mode',
    price: 89.99,
    rating: 4.3,
    reviews: 147,
    image: chaussureImg,
    description: 'Cette chaussure de basket dynamise chacun de nos pas sans oublier de protéger nos pieds des impacts lors de frappes agressives',
    longDescription: 'Conçues pour les performances, ces chaussures de sport offrent un excellent amorti et un soutien optimal. Semelle extérieure durable pour une bonne adhérence sur toutes les surfaces.'
  },
  {
    id: 6,
    name: 'Livre de Cuisine',
    category: 'Livres',
    price: 24.99,
    rating: 4.8,
    reviews: 312,
    image: bookImg,
    description: 'Recettes gourmandes pour tous les jours.',
    longDescription: 'Ce livre de cuisine propose 100 recettes savoureuses et faciles à réaliser au quotidien. Des plats équilibrés, des astuces de chef et des photos appétissantes pour vous inspirer en cuisine.'
  },
  {
    id: 7,
    name: 'Cafetière Programmable',
    category: 'Maison',
    price: 49.99,
    rating: 4.1,
    reviews: 78,
    image: cafeImg ,
    description: 'Cafetière programmable avec minuterie.',
    longDescription: 'Préparez votre café préféré dès votre réveil avec cette cafetière programmable. Fonction minuterie, arrêt automatique et système anti-goutte. Capacité de 12 tasses.'
  },
  {
    id: 8,
    name: 'Enceinte Bluetooth',
    category: 'Électronique',
    price: 129.99,
    rating: 4.4,
    reviews: 95,
    image: enceinteImg ,
    description: 'Enceinte portable avec son puissant et clair.',
    longDescription: 'Cette enceinte Bluetooth portable offre un son riche et puissant avec des basses profondes. Résistante à l\'eau et à la poussière, elle vous suit partout avec jusqu\'à 20 heures d\'autonomie.'
  }
];

export default products;