// src/data/restaurantData.js
// ** Ensure these files exist in src/assets/images/ **
import gallery1 from '../assets/images/restaurant-photo-1.jpg';
import gallery2 from '../assets/images/restaurant-photo-2.jpg';
import gallery3 from '../assets/images/pizza.jpg';

export const restaurantInfo = {
  name: "Urban Spoon Eatery", cuisine: "Italian, Continental", rating: 4.3, reviewCount: 185,
  address: "123, MG Road, Camp, Pune, Maharashtra 411001", phone: "+91 98765 43210",
  location: { lat: 18.5196, lng: 73.8756 }, timing: "11:00 AM - 11:00 PM",
  photos: [
    { id: 'p1', url: gallery1, caption: 'Cozy Ambiance' }, { id: 'p2', url: gallery2, caption: 'Outdoor Seating' },
    { id: 'p3', url: gallery3, caption: 'Our Famous Pizza!' },
  ],
  reviews: [
    { id: 'r1', user: 'Priya S.', rating: 5, comment: 'Amazing pizza and great service! Loved the ambiance.' },
    { id: 'r2', user: 'Rohan M.', rating: 4, comment: 'Good food, especially the pasta. Can get crowded.' },
    { id: 'r3', user: 'Amit K.', rating: 4, comment: 'Decent place for continental food.' },
  ]
};