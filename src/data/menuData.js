// src/data/menuData.js
// ** Ensure these files exist in src/assets/images/ **
import pizzaImg from '../assets/images/pizza.jpg';
import saladImg from '../assets/images/salad.jpg';
import salmonImg from '../assets/images/salmon.jpg';
import spaghettiImg from '../assets/images/spaghetti.jpg';

export const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic delight with mozzarella, tomatoes, fresh basil.', price: 350, image: pizzaImg, type: 'veg', rating: 4.5, isBestSeller: true },
  { id: 2, name: 'Caesar Salad (Veg)', description: 'Crisp romaine, parmesan, croutons, creamy dressing.', price: 280, image: saladImg, type: 'veg', rating: 4.2, isBestSeller: false },
  { id: 3, name: 'Grilled Salmon Steak', description: 'Served with sauteed vegetables and lemon butter sauce.', price: 650, image: salmonImg, type: 'non-veg', rating: 4.7, isBestSeller: true },
  { id: 4, name: 'Spaghetti Aglio Olio (Veg)', description: 'Classic pasta with garlic, olive oil, chili flakes.', price: 420, image: spaghettiImg, type: 'veg', rating: 4.0, isBestSeller: false },
  { id: 5, name: 'Chicken Alfredo Pasta', description: 'Creamy white sauce pasta with grilled chicken.', price: 550, image: spaghettiImg, type: 'non-veg', rating: 4.6, isBestSeller: true },
];