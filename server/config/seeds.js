const db = require('./connection');
const { User, Product, Genre } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Genre', 'genres');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const genres = await Genre.insertMany([
    { name: 'Heavy Metal' },
    { name: 'Rock' },
    { name: 'Hip-Hop' },
    { name: 'Jazz' },
    { name: 'Funk' },
    { name: 'Folk' },
    { name: 'Synthwave' }
  ]);

  console.log('genres seeded');

  const products = await Product.insertMany([
    {
      title: 'From Fear to Eternity',
      artist:'Iron Maiden',
      image: '',
      genre: genres[0]._id,
      price: 49.99,
      quantity: 500
    },
    {
      title: 'Blackened',
      artist:'Metallica',
      image: 'Metallica-Blackened.jpg',
      genre: genres[0]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Master of Puppets',
      artist:'Metallica',
      image: 'Metallica-Master.jpg',
      genre: genres[0]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'The Now Now',
      artist:'Gorillaz',
      image: 'Gorillaz-The-Now-Now.jpg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'G-Sides',
      artist:'Gorillaz',
      image: 'Gorillaz-Gsides.jpg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Demon Days',
      artist:'Gorillaz',
      image: 'Demon-Days-Gorillaz.jpg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Gorillaz',
      artist:'Gorillaz',
      image: 'Gorillaz.jpg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Choose Your Weapon',
      artist:'Hiatus Kaiyote',
      image: 'CYW-Hiatus.jpg',
      genre: genres[4]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Tawk Tomahawk',
      artist:'Hiatus Kaiyote',
      image: 'Tomahawk-Hiatus.jpg',
      genre: genres[4]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Rumours',
      artist:'Fleetwood Mac',
      image: 'Rumours-Fleetwood.jpg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Dream in Colour',
      artist:'Franc Moody',
      image: 'Franc-Moody-Dream-in-Colour.jpg',
      genre: genres[4]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Hello Nasty',
      artist:'Beastie Boys',
      image: 'Beastie-Boys_hello-Nasty.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Solid Gold Hits',
      artist:'Beastie Boys',
      image: 'Beastie-Boys-Solid-Gold.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Equal Strain On All Parts',
      artist:'Jimmy Buffett',
      image: 'Jimmy-Buffet.jpg',
      genre: genres[5]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Malibu',
      artist:'Anderson .Paak',
      image: 'Malibu.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'The Best Of Sinatra',
      artist:'Frank Sinatra',
      image: 'Best-Of-Sinatra.jpg',
      genre: genres[3]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Nice N Easy',
      artist:'Frank Sinatra',
      image: 'Nice-n-Easy.jpg',
      genre: genres[3]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'The Very Best of the Rat Pack',
      artist:'The Rat Pack',
      image: 'Rat.jpg',
      genre: genres[3]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Endless Summer',
      artist:'The Midnight',
      image: 'Endless-Summer.jpg',
      genre: genres[6]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Days of Thunder',
      artist:'The Midnight',
      image: '.jpg',
      genre: genres[6]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 500
    },
  ]);

  console.log('products seeded');

  await User.create({
    userName: 'pam',
    email: 'pam@email.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    userName: 'eli',
    email: 'eli@email.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
