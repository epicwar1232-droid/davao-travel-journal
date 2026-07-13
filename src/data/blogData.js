import eagle1 from '../assets/eagle1.jfif'
import eagle2 from '../assets/eagle2.jfif'
import eagle3 from '../assets/eagle3.jfif'
import eden1 from '../assets/eden1.jfif'
import eden2 from '../assets/eden2.jpg'
import eden3 from '../assets/eden3.jpg'
import park1 from '../assets/park1.jpg'
import park2 from '../assets/park2.webp'
import park3 from '../assets/park3.jpg'
import samal1 from '../assets/samal1.avif'
import samal2 from '../assets/samal2.jpg'
import samal3 from '../assets/samal3.jfif'
import apo1 from '../assets/apo1.JPG'
import apo2 from '../assets/apo2.jfif'
import apo3 from '../assets/apo3.jfif'
import malagos1 from '../assets/malagos1.webp'
import malagos2 from '../assets/malagos2.webp'
import malagos3 from '../assets/malagos3.webp'
import roxas1 from '../assets/roxas1.jpg'
import roxas2 from '../assets/roxas2.jfif'
import roxas3 from '../assets/roxas3.jpg'
import crocodile1 from '../assets/crocodile1.jfif'
import crocodile2 from '../assets/crocodile2.jpg'
import crocodile3 from '../assets/crocodile3.jfif'
import ridge1 from '../assets/ridge1.jpg'
import ridge2 from '../assets/ridge2.webp'
import ridge3 from '../assets/ridge3.jpg'
import museum1 from '../assets/museum1.jfif'
import museum2 from '../assets/museum2.jfif'
import museum3 from '../assets/museum3.jfif'

const destinationEntries = [
  {
    id: 1,
    title: 'Philippine Eagle Center',
    location: 'Malagos, Davao City',
    image: eagle1,
    gallery: [eagle1, eagle2, eagle3],
    category: 'Wildlife',
    description: 'A conservation haven known for the endangered Philippine eagle and eco-tourism programs.',
    history:
      'The center was established to support the conservation of the Philippine eagle and other native wildlife species in Davao.',
    entranceFee: '₱150',
    bestTime: 'Morning',
    tips: 'Bring a camera, wear comfortable shoes, and arrive early for cooler weather and better viewing.',
    nearbyAttractions: 'Eden Nature Park, Malagos Garden Resort',
  },
  {
    id: 2,
    title: 'Eden Nature Park',
    location: 'Toril, Davao City',
    image: eden1,
    gallery: [eden1, eden2, eden3],
    category: 'Nature',
    description: 'A cool mountain park offering scenic gardens, zipline adventures, and refreshing air.',
    history:
      'Eden Nature Park has become one of Davao’s signature eco-destinations for day trips and family leisure.',
    entranceFee: '₱650',
    bestTime: 'Weekday mornings',
    tips: 'Pack a light jacket, bring your own water, and set aside time for the garden trails.',
    nearbyAttractions: 'Philippine Eagle Center, Mount Apo',
  },
  {
    id: 3,
    title: 'People’s Park',
    location: 'Davao City Proper',
    image: park1,
    gallery: [park1, park2, park3],
    category: 'City Park',
    description: 'An urban green space filled with sculptures, pathways, and a relaxed city vibe.',
    history:
      'People’s Park is one of Davao’s most beloved public spaces, celebrated for its landscaped design and family-friendly atmosphere.',
    entranceFee: 'Free',
    bestTime: 'Late afternoon',
    tips: 'Take a slow stroll, enjoy the gardens, and visit during sunset for the best photo spots.',
    nearbyAttractions: 'Roxas Night Market, Davao Museum',
  },
  {
    id: 4,
    title: 'Samal Island',
    location: 'Island Garden City of Samal',
    image: samal1,
    gallery: [samal1, samal2, samal3],
    category: 'Beach',
    description: 'A nearby island getaway boasting powdery beaches, island resorts, and marine adventures.',
    history:
      'Samal has long attracted nature lovers and beachgoers for its pristine coastlines and easy access from Davao.',
    entranceFee: '₱50–₱150',
    bestTime: 'Dry season',
    tips: 'Book a ferry early, bring sun protection, and choose beachfront activities for a full island experience.',
    nearbyAttractions: 'Davao City, Malagos Garden Resort',
  },
  {
    id: 5,
    title: 'Mount Apo',
    location: 'North Cotabato / Davao Region',
    image: apo1,
    gallery: [apo1, apo2, apo3],
    category: 'Adventure',
    description: 'The highest peak in the Philippines, perfect for hikers seeking a rewarding climb.',
    history:
      'Mount Apo is a major landmark in the southern Philippines and a symbol of the region’s natural grandeur.',
    entranceFee: '₱1,000',
    bestTime: 'March to May',
    tips: 'Secure permits in advance, get a local guide, and prepare for cooler temperatures at higher elevations.',
    nearbyAttractions: 'Eden Nature Park, Samal Island',
  },
  {
    id: 6,
    title: 'Malagos Garden Resort',
    location: 'Baguio District, Davao City',
    image: malagos1,
    gallery: [malagos1, malagos2, malagos3],
    category: 'Family',
    description: 'A scenic resort with gardens, horseback riding, and a peaceful countryside feel.',
    history:
      'Malagos Garden Resort blends family recreation with the beauty of Davao’s greenery and agricultural charm.',
    entranceFee: '₱300',
    bestTime: 'Weekends',
    tips: 'Take the garden walk, carry cash for food stalls, and visit during cooler hours.',
    nearbyAttractions: 'Philippine Eagle Center, People’s Park',
  },
  {
    id: 7,
    title: 'Roxas Night Market',
    location: 'Roxas Avenue, Davao City',
    image: roxas1,
    gallery: [roxas1, roxas2, roxas3],
    category: 'Food',
    description: 'The city’s iconic night market where food lovers can sample local flavors and street treats.',
    history:
      'Roxas Night Market has become a signature destination for food and nightlife in Davao City.',
    entranceFee: 'Free',
    bestTime: 'Night',
    tips: 'Bring cash, explore in small groups, and try grilled specialties for the full experience.',
    nearbyAttractions: 'People’s Park, Davao Museum',
  },
  {
    id: 8,
    title: 'Crocodile Park',
    location: 'Barangay Maa, Davao City',
    image: crocodile1,
    gallery: [crocodile1, crocodile2, crocodile3],
    category: 'Wildlife',
    description: 'A family-friendly attraction that introduces visitors to Davao’s reptile conservation scene.',
    history:
      'Crocodile Park serves both educational and entertainment purposes, offering insight into these fascinating animals.',
    entranceFee: '₱120',
    bestTime: 'Daytime',
    tips: 'Visit during daylight, keep hands off railings, and ask staff about the animal feeding time.',
    nearbyAttractions: 'People’s Park, Davao Museum',
  },
  {
    id: 9,
    title: 'Jack’s Ridge',
    location: 'Matina, Davao City',
    image: ridge1,
    gallery: [ridge1, ridge2, ridge3],
    category: 'Scenic',
    description: 'A highland viewpoint known for panoramic city views and an easy, scenic outing.',
    history:
      'Jack’s Ridge remains a popular stop for travelers wanting a quick but memorable view of Davao City.',
    entranceFee: '₱150',
    bestTime: 'Late afternoon',
    tips: 'Bring your camera, time your visit around sunset, and enjoy the breeze.',
    nearbyAttractions: 'People’s Park, Samal Island',
  },
  {
    id: 10,
    title: 'Davao Museum',
    location: 'Davao City',
    image: museum1,
    gallery: [museum1, museum2, museum3],
    category: 'Culture',
    description: 'A cultural landmark that introduces visitors to the heritage and identity of Davao.',
    history:
      'The museum highlights the local heritage, traditions, and development of Davao through curated exhibits.',
    entranceFee: '₱50',
    bestTime: 'Morning',
    tips: 'Take your time with the exhibits and pair the visit with nearby cultural stops.',
    nearbyAttractions: 'People’s Park, Roxas Night Market',
  },
]

export const featuredDestinations = destinationEntries.slice(0, 6)
export const blogData = destinationEntries
