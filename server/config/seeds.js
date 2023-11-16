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
      image: 'Iron-Miden-FFE-Best-Of.jpg',
      genre: genres[0]._id,
      price: 49.99,
      quantity: 5
    },
    {
      title: 'Blackened',
      artist:'Metallica',
      image: 'Metallica-Blackened.jpg',
      genre: genres[0]._id,
      price: 24.99,
      quantity: 10
    },
    {
      title: 'Master of Puppets',
      artist:'Metallica',
      image: 'Metallica-Master.jpg',
      genre: genres[0]._id,
      price: 24.99,
      quantity: 11
    },
    {
      title: 'The Now Now',
      artist:'Gorillaz',
      image: 'Gorillaz-The-Now-Now.jpg',
      genre: genres[1]._id,
      price: 25.99,
      quantity: 5
    },
    {
      title: 'G-Sides',
      artist:'Gorillaz',
      image: 'Gorillaz-Gsides.jpeg',
      genre: genres[1]._id,
      price: 27.99,
      quantity: 5
    },
    {
      title: 'Demon Days',
      artist:'Gorillaz',
      image: 'Demon-Days-Gorillaz.jpeg',
      genre: genres[1]._id,
      price: 39.99,
      quantity: 17
    },
    {
      title: 'Gorillaz',
      artist:'Gorillaz',
      image: 'Gorillaz.jpg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 15
    },
    {
      title: 'Choose Your Weapon',
      artist:'Hiatus Kaiyote',
      image: 'CYW-Hiatus.jpeg',
      genre: genres[4]._id,
      price: 45.99,
      quantity: 20
    },
    {
      title: 'Tawk Tomahawk',
      artist:'Hiatus Kaiyote',
      image: 'Tomahawk-Hiatus.jpeg',
      genre: genres[4]._id,
      price: 55.99,
      quantity: 10
    },
    {
      title: 'Rumours',
      artist:'Fleetwood Mac',
      image: 'Rumours-Fleetwood.jpeg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 9
    },
    {
      title: 'Mm Food',
      artist:'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      genre: genres[2]._id,
      price: 40.00,
      quantity: 5
    },
    {
      title: 'Dream in Colour',
      artist:'Franc Moody',
      image: 'Franc-Moody-Dream-in-Colour.png',
      genre: genres[4]._id,
      price: 29.99,
      quantity: 11
    },
    {
      title: 'Hello Nasty',
      artist:'Beastie Boys',
      image: 'Beastie-Boys_hello-Nasty.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 5
    },
    {
      title: 'Solid Gold Hits',
      artist:'Beastie Boys',
      image: 'Beastie-Boys-Solid-Gold.jpg',
      genre: genres[2]._id,
      price: 35.99,
      quantity: 12
    },
    {
      title: 'Equal Strain On All Parts',
      artist:'Jimmy Buffett',
      image: 'Jimmy-Buffet.jpg',
      genre: genres[5]._id,
      price: 29.99,
      quantity: 5
    },
    {
      title: 'Malibu',
      artist:'Anderson .Paak',
      image: 'Malibu.jpeg',
      genre: genres[2]._id,
      price: 31.99,
      quantity: 3
    },
    {
      title: 'The Best Of Sinatra',
      artist:'Frank Sinatra',
      image: 'Best-Of-Sinatra.jpg',
      genre: genres[3]._id,
      price: 24.99,
      quantity: 10
    },
    {
      title: 'Nice N Easy',
      artist:'Frank Sinatra',
      image: 'Nice-n-Easy.jpg',
      genre: genres[3]._id,
      price: 24.99,
      quantity: 5
    },
    {
      title: 'The Very Best of the Rat Pack',
      artist:'The Rat Pack',
      image: 'Rat.jpeg',
      genre: genres[3]._id,
      price: 24.99,
      quantity: 2
    },
    {
      title: 'Endless Summer',
      artist:'The Midnight',
      image: 'Endless-Summer.jpg',
      genre: genres[6]._id,
      price: 34.99,
      quantity: 5
    },
    {
      title: 'Days of Thunder',
      artist:'The Midnight',
      image: 'Days-of-Thunder.jpg',
      genre: genres[6]._id,
      price: 32.99,
      quantity: 19
    },
    {
      title: 'Dark All Day',
      artist:'Gunship',
      image: 'Dark-All-Day.jpeg',
      genre: genres[6]._id,
      price: 35.95,
      quantity: 16
    },
    {
      title: 'GUNSHIP',
      artist:'Gunship',
      image: 'GUNSHIP.jpg',
      genre: genres[6]._id,
      price: 31.99,
      quantity: 5
    },
    {
      title: 'Black Blood Red Kiss',
      artist:'Gunship',
      image: 'Black-Blood-Red-Kiss.jpeg',
      genre: genres[6]._id,
      price: 25.99,
      quantity: 13
    },
    {
      title: 'Fox On the Run',
      artist:'The Sweet',
      image: 'Fox-on-the-Run.jpeg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 2
    },
    {
      title: 'Cherry Bomb',
      artist:'The Runaways',
      image: 'Cherry-Bomb.jpg',
      genre: genres[1]._id,
      price: 29.96,
      quantity: 3
    },
    {
      title: 'Goodbye Yellow Brick Road',
      artist:'Elton John',
      image: 'Goodbye-Yellow-Brick-Road.jpg',
      genre: genres[1]._id,
      price: 34.99,
      quantity: 5
    },
    {
      title: 'Elton John',
      artist:'Elton John',
      image: 'Elton-John.jpeg',
      genre: genres[1]._id,
      price: 27.99,
      quantity: 12
    },
    {
      title: 'Reg Strike Back',
      artist:'Elton',
      image: 'Reg-Strikes-Back.jpeg',
      genre: genres[1]._id,
      price: 24.97,
      quantity: 5
    },
    {
      title: 'Aladdin Sane',
      artist:'David Bowie',
      image: 'Aladinn-Sane.jpeg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 5
    },
    {
      title: 'Space Oddity',
      artist:'David Bowie',
      image: 'Space.jpg',
      genre: genres[1]._id,
      price: 29.99,
      quantity: 11
    },
    {
      title: 'Low',
      artist:'David Bowie',
      image: 'Low.jpg',
      genre: genres[1]._id,
      price: 29.99,
      quantity: 9
    },
    {
      title: 'The Colour and the Shape',
      artist:'Foo Fighters',
      image: 'The-Colour-and-the-Shape.jpg',
      genre: genres[1]._id,
      price: 29.99,
      quantity: 5
    },
    {
      title: 'Medicine At Midnight',
      artist:'Foo Fighters',
      image: 'Medicine-At-Midnight.jpg',
      genre: genres[1]._id,
      price: 24.99,
      quantity: 10
    },
    {
      title: 'Pablo Honey',
      artist:'Radiohead',
      image: 'Pablo-Honey.jpg',
      genre: genres[1]._id,
      price: 29.99,
      quantity: 8
    },
    {
      title: 'Goat',
      artist:'The Jesus Lizard',
      image: 'Goat.png',
      genre: genres[1]._id,
      price: 28.99,
      quantity: 5
    },
    {
      title: 'Liar',
      artist:'The Jesus Lizard',
      image: 'Liar.jpg',
      genre: genres[2]._id,
      price: 24.99,
      quantity: 7
    },
    {
      title: 'Enter (36 Chambers)',
      artist:'Wu-Tang Clan',
      image: 'Enter.jpg',
      genre: genres[2]._id,
      price: 29.99,
      quantity: 13
    },
    {
      title: 'Tougher Than Leather',
      artist:'Run DMC',
      image: 'Tougher-Than-Leather.jpeg',
      genre: genres[2]._id,
      price: 31.99,
      quantity: 15
    },
    {
      title: 'Live at the Apollo',
      artist:'Run DMC',
      image: 'Live-at-the-Apollo.jpg',
      genre: genres[2]._id,
      price: 25.99,
      quantity: 2
    },
    {
      title: 'Reachin (a new refutation of time and space)',
      artist:'Digable Planets',
      image: 'Reachin.jpg',
      genre: genres[2]._id,
      price: 27.99,
      quantity: 8
    },
    {
      title: 'Blowout Comb',
      artist:'Digable Planets',
      image: 'Blowout-Comb.jpg',
      genre: genres[2]._id,
      price: 34.99,
      quantity: 5
    },
    {
      title: 'Madvillain',
      artist:'MF Doom',
      image: 'Madvillain.jpg',
      genre: genres[2]._id,
      price: 49.99,
      quantity: 2
    },
    {
      title: 'Operation Doomsday',
      artist:'MF Doom',
      image: 'Operation-Doomsday.jpeg',
      genre: genres[2]._id,
      price: 44.99,
      quantity: 4
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
