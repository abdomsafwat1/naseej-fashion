import tshirtBlack from '../assets/tshirt-black.jpg';
import tshirtWhite from '../assets/tshirt-white.jpg';
import hoodieBlack from '../assets/hoodie-black.webp';
import hoodieWhite from '../assets/hoodie-white.jpg';
import jacketBlack from '../assets/jacket-black-hooded.jpg';
import jacketNavy from '../assets/jacket-navy-hooded.jpg';
import dressBlack from '../assets/dress-black.jpg';
import pantsBeige from '../assets/pants-beige.jpg';
import shoeLeather from '../assets/shoe-leather.webp';
import shoeSuede from '../assets/shoe-suede.jpg';

export const categories = ['T-Shirts', 'Hoodies', 'Jackets', 'Pants', 'Dresses', 'Accessories'];

export const categoryImages = {
  'T-Shirts': tshirtBlack,
  Hoodies: hoodieBlack,
  Jackets: jacketBlack,
  Pants: pantsBeige,
  Dresses: dressBlack,
  Accessories: shoeLeather,
};

export const products = [
  {
    id: 1,
    name: 'Classic Black Tee',
    category: 'T-Shirts',
    price: 300,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 96,
    image: tshirtBlack,
    description:
      'A no-fuss essential cut from heavyweight combed cotton. Clean lines, a true-to-size fit, and a deep, fade-resistant black.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#1C1C1C'],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Essential White Tee',
    category: 'T-Shirts',
    price: 300,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 71,
    image: tshirtWhite,
    description:
      'A crisp, true white essential tee in soft combed cotton. A clean base layer that pairs with everything in the collection.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#F8F6F2'],
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 3,
    name: 'Essential Pullover Hoodie',
    category: 'Hoodies',
    price: 590,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 152,
    image: hoodieBlack,
    description:
      'Heavyweight fleece pullover hoodie with a kangaroo pocket and adjustable drawstring hood, in classic black. Built for comfort that lasts all season.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#1C1C1C'],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 4,
    name: 'Cloud White Pullover Hoodie',
    category: 'Hoodies',
    price: 610,
    oldPrice: 680,
    discount: 10,
    rating: 4.5,
    reviews: 47,
    image: hoodieWhite,
    description:
      'A clean, brushed-back fleece pullover hoodie in off-white, with a roomy kangaroo pocket and ribbed hem and cuffs for an easy, relaxed fit.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#F8F6F2'],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: 'Utility Hooded Softshell',
    category: 'Jackets',
    price: 890,
    oldPrice: 990,
    discount: 10,
    rating: 4.5,
    reviews: 71,
    image: jacketBlack,
    description:
      'A structured softshell jacket with a zip-away hood, dual chest zip pockets and a durable water-resistant finish. Built for city days and unpredictable weather.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#1C1C1C'],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 6,
    name: 'Navy Hooded Softshell',
    category: 'Jackets',
    price: 950,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 39,
    image: jacketNavy,
    description:
      'The same technical softshell silhouette in deep navy, with a mesh-lined hood, angled hand pockets and reflective trim at the cuffs for low-light visibility.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#1C1C1C'],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 7,
    name: 'Wide Leg Beige Trousers',
    category: 'Pants',
    price: 560,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 66,
    image: pantsBeige,
    description:
      'Relaxed, wide-leg trousers in a soft beige twill with an elasticated drawstring waist. Effortless movement with a clean, elevated look.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#D9C4A8'],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 8,
    name: 'Draped Evening Gown',
    category: 'Dresses',
    price: 980,
    oldPrice: 1100,
    discount: 11,
    rating: 4.8,
    reviews: 97,
    image: dressBlack,
    description:
      'A dramatic off-shoulder evening gown in black satin with an embellished neckline and full ball-gown skirt. Made for statement occasions.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#1C1C1C'],
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 9,
    name: 'Suede Low-Top Sneakers',
    category: 'Accessories',
    price: 540,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 61,
    image: shoeLeather,
    description:
      'Black suede low-top sneakers with contrast white laces and a chunky treaded sole. A versatile everyday pair.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['#1C1C1C'],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 10,
    name: 'Leather Low-Top Sneakers',
    category: 'Accessories',
    price: 590,
    oldPrice: 650,
    discount: 9,
    rating: 4.9,
    reviews: 38,
    image: shoeSuede,
    description:
      'Minimalist black leather sneakers with a crisp white midsole. Clean lines built for all-day comfort.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['#1C1C1C'],
    isNew: true,
    isBestSeller: false,
  },
];

export const getProductById = (id) =>
  products.find((product) => product.id === Number(id));

export const getRelatedProducts = (product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
