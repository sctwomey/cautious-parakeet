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
      image: 'Maiden.jpg',
      description: `Track Listing:

      1 The Wicker Man 4:35
      2 Holy Smoke 3:48
      3 El Dorado [Album Version] 6:49
      4 Paschendale 8:28
      5 Different World [Album Version] 4:17
      6 Man on the Edge [Live] 4:28
      7 The Reincarnation of Benjamin.Breeg [Album Version] 7:21
      8 Blood Brothers 7:14
      9 Rainmaker 3:48
      10 Sign of the Cross [Live] 10:50
      11 Brave New World 6:18
      12 Fear of the Dark [Live] 7:50
      13 Be Quick or Be Dead 3:24
      14 Tailgunner 4:13
      15 No More Lies 7:21
      16 Coming Home [Album Version] 5:52
      17 The Clansman [Live] 9:33
      18 For the Greater Good of God [Album Version] 9:24
      19 These Colours Don't Run [Album Version] 6:52
      20 Bring Your Daughter... to the Slaughter 4:42
      21 Afraid to Shoot Strangers 6:56
      22 Dance of Death 8:36
      23 When the Wild Wind Blows [Album Version] 10:59
      
      _________________
      
      Triple vinyl picture disc LP presing. 2011 collection from the Heavy Metal heroes containing their finest recordings from 1990-2010. From Fear to Eternity is a chance for new fans to explore the group's rich history, with the highlights of their last eight studio albums distilled into this handy collection, which follows 2009's Somewhere Back in Time compilation of their earlier work from 1980-1990. Perennial favorites found on this album include songs also featured on Maiden's current the Final Frontier World Tour set list; tracks such as "Fear of the Dark," "The Wicker Man," "Blood Brothers" and "Dance of Death" sit alongside recent classics "El Dorado" and the hauntingly evocative "When the Wild Wind Blows." It also includes singles like "Holy Smoke" and "Be Quick Or Be Dead" together with more progressive thought-provoking album tracks like "Afraid to Shoot Strangers" and "For the Greater Good of God."`,
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
      description: `Side A

      1.Blackened
      
      2.Welcome Home (Sanitarium)
      
      3.Leper Messiah
      
      4.Harvester Of Sorrow
      
       
      
      Side B
      
      1.For Whom The Bell Tolls
      
      2.Eye Of The Beholder
      
      3.To Live Is To Die
      
      4.Master Of Puppets
      
      5.One
      Live from the Dallas Arena.`,
      genre: genres[0]._id,
      price: 24.99,
      quantity: 11
    },
    {
      title: 'The Now Now',
      artist:'Gorillaz',
      image: 'Gorillaz-The-Now-Now.jpg',
      description: `1. Humility (feat. George Benson)
      2. Tranz
      3. Hollywood (feat. Snoop Dogg & Jamie Principle)
      4. Kansas
      5. Sorcererz
      6. Idaho
      7. Lake Zurich
      8. Magic City
      9. Fire Flies
      10. One Percent
      11. Souk Eye
      
      Gorillaz' sixth studio album is The Now Now, from Warner Bros. Records. The album was produced by Simian Mobile Disco's James Ford, who most recently worked with Arctic Monkeys on Tranquility Base Hotel & Casino. Unlike its guest-heavy predecessor, last year's Humanz, The Now Now features only three additional contributors: George Benson, Jamie Principle, and Snoop Dogg, the latter two guesting on "Hollywood." Recording took place at London's Studio 13 in February.`,
      genre: genres[2]._id,
      price: 25.99,
      quantity: 5
    },
    {
      title: 'G-Sides',
      artist:'Gorillaz',
      image: 'Gorillaz-Gsides.jpeg',
      description: `Originally released on CD in Japan 2001, and in 2002 in Europe and the U.S., this is the first time the album is available on vinyl. The album is a collection of 10 B-sides and remixes from their debut album, Gorillaz, and the Tomorrow Comes Today EP. The audio has been remastered and is pressed on 180-gram vinyl.

      As the ultimate experiment in manufactured image, the Gorillaz are a virtual cartoon-character-based hip-hop band who bring together witty, silly lyrics and talented musicians.
      
      
      
      Side A
      1. 19-2000 (Soulchild Remix)
      2. Dracula
      3. Rock the House (Radio Edit)
      4. The Sounder (Edit)
      5. Faust
      
      Side B
      1. Clint Eastwood (Phi Life Cypher Version)
      2. Ghost Train
      3. Hip Albatross
      4. Left Hand Suzuki Method
      5. 12D3
      `,
      genre: genres[2]._id,
      price: 27.99,
      quantity: 5
    },
    {
      title: 'Demon Days',
      artist:'Gorillaz',
      image: 'Demon-Days-Gorillaz.jpeg',
      description: `Track Listings
      Disc: 1
      1	Intro
      2	Last Living Souls
      3	Kids with Guns
      4	O Green World
      Disc: 2
      1	Dirty Harry
      2	Feel Good Inc.
      3	El Mañana
      Disc: 3
      1	Every Planet We Reach Is Dead
      2	November Has Come
      3	All Alone
      4	White Light
      Disc: 4
      1	DARE
      2	Fire Coming out of the Monkey's Head
      3	Don't Get Lost in Heaven
      4	Demon Days
      Editorial Reviews
      Demon Days is the second studio album by Gorillaz. The album features the hit singles "Feel Good Inc.", "DARE", "Kids With Guns", and "El Mañana", with contributions from de la Soul, Neneh Cherry, Martina Topley-Bird, Roots Manuva, MF DOOM, Ike Turner, Bootie Brown of the Pharcyde, Shaun Ryder, Dennis Hopper, the London Community Gospel Choir, and the Children's Choir of San Fernandez.`,
      genre: genres[2]._id,
      price: 39.99,
      quantity: 17
    },
    {
      title: 'Gorillaz',
      artist:'Gorillaz',
      image: 'Gorillaz.jpg',
      description: `1. Re-Hash
      2. 5/4
      3. Tomorrow Comes Today
      4. New Genius (Brother)
      5. Clint Eastwood
      6. Man Research (Clapper)
      7. Punk
      8. Sound Check (Gravity)
      9. Double Bass
      10. Rock The House
      11. 19-2000
      12. Latin Simone
      13. Starshine
      14. Slow Country
      15. M1 A1
      16. Clint Eastwood
      
      
      The Gorillaz claim to have found their motley crew of cartoon characters sleeping in Leicester Square, but Blur's Damon Albarn (a.k.a. 2-D) and cult cartoonist Jamie Hewlett (Murdoc) aren't fooling anyone. As the ultimate experiment in manufactured image, the Gorillaz are a virtual cartoon-character-based hip-hop band who bring together witty, silly lyrics and talented musicians.`,
      genre: genres[2]._id,
      price: 24.99,
      quantity: 15
    },
    {
      title: 'Choose Your Weapon',
      artist:'Hiatus Kaiyote',
      image: 'CYW-Hiatus.jpeg',
      description: `Track Listings
      Disc: 1
      1	Choose Your Weapon
      2	Shaolin Monk Motherfunk
      3	Laputa
      4	Creations Part One
      5	Borderline with My Atoms
      Disc: 2
      1	Breathing Underwater
      2	Cicada
      3	Swamp Thing
      4	Fingerprints
      5	Jekyll
      Disc: 3
      1	Prince Minikid
      2	Atari
      3	By Fire
      4	Creations Part Two
      Disc: 4
      1	The Lung
      2	Only Time All the Time: Making Friends with Studio Owl
      3	Molasses
      4	Building a Ladder

      
      Editorial Reviews
      Double vinyl LP pressing. Choose Your Weapon is the second studio album by Australian neo-soul quartet Hiatus Kaiyote, first released in 1 May 2015. Following the release of the band's debut album Tawk Tomahawk (2012) and their first Grammy nomination, Hiatus Kaiyote went on to tour throughout 2014. Over the span of two years, recording sessions took place in Australia and the United States.`,
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
      image: 'Beastie-Boys-Hello-Nasty.png',
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
      image: 'Jimmy-Buffett.jpg',
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
      image: 'GUNSHIP.jpeg',
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
      image: 'Aladdin-Sane.jpeg',
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
