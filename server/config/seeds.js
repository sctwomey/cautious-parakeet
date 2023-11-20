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
      artist: 'Iron Maiden',
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
      23 When the Wild Wind Blows [Album Version] 10:59.
      

      
      Triple vinyl picture disc LP presing. 2011 collection from the Heavy Metal heroes containing their finest recordings from 1990-2010. From Fear to Eternity is a chance for new fans to explore the group's rich history, with the highlights of their last eight studio albums distilled into this handy collection, which follows 2009's Somewhere Back in Time compilation of their earlier work from 1980-1990. Perennial favorites found on this album include songs also featured on Maiden's current the Final Frontier World Tour set list; tracks such as "Fear of the Dark," "The Wicker Man," "Blood Brothers" and "Dance of Death" sit alongside recent classics "El Dorado" and the hauntingly evocative "When the Wild Wind Blows." It also includes singles like "Holy Smoke" and "Be Quick Or Be Dead" together with more progressive thought-provoking album tracks like "Afraid to Shoot Strangers" and "For the Greater Good of God."`,
      genre: genres[0]._id,
      price: 49.99,
      quantity: 5
    },
    {
      title: 'Blackened',
      artist: 'Metallica',
      image: 'Metallica-Blackened.jpg',
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
      quantity: 10
    },
    {
      title: 'Master of Puppets',
      artist: 'Metallica',
      image: 'Metallica-Master.jpg',
      description: `Tracks
      1.1 Battery 1.2 Master of Puppets 1.3 The Thing That Should Not Be 1.4 Welcome Home (Sanitarium) 2.1 Disposable Heroes 2.2 Leper Messiah 2.3 Orion 2.4 Damage, Inc. Vinyl LP pressing. Digitally remastered edition. Master of Puppets was originally released on March 3rd, 1986, on Elektra Records and went on to become the first Metallica album to be certified Platinum by the RIAA. The album has been certified six-times Platinum in the United States and has sold over 10 million copies worldwide. In 2016, the album became the first metal album to be added to the National Recording Registry of the Library of Congress, an honor granted to works deemed "culturally, historically, or aesthetically significant". Recorded at the Sweet Silence Studios with producer Flemming Rasmussen, it was their third album overall. Master of Puppets was the band's last album to feature bassist Cliff Burton, who died in a bus accident in Sweden during the album's promotional tour.`,
      genre: genres[0]._id,
      price: 24.99,
      quantity: 11
    },
    {
      title: 'The Now Now',
      artist: 'Gorillaz',
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
      11. Souk Eye.
      
      Gorillaz' sixth studio album is The Now Now, from Warner Bros. Records. The album was produced by Simian Mobile Disco's James Ford, who most recently worked with Arctic Monkeys on Tranquility Base Hotel & Casino. Unlike its guest-heavy predecessor, last year's Humanz, The Now Now features only three additional contributors: George Benson, Jamie Principle, and Snoop Dogg, the latter two guesting on "Hollywood." Recording took place at London's Studio 13 in February.`,
      genre: genres[2]._id,
      price: 25.99,
      quantity: 5
    },
    {
      title: 'G-Sides',
      artist: 'Gorillaz',
      image: 'gsides.jpeg',
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
      artist: 'Gorillaz',
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
      4	Demon Days.
      
      Demon Days is the second studio album by Gorillaz. The album features the hit singles "Feel Good Inc.", "DARE", "Kids With Guns", and "El Mañana", with contributions from de la Soul, Neneh Cherry, Martina Topley-Bird, Roots Manuva, MF DOOM, Ike Turner, Bootie Brown of the Pharcyde, Shaun Ryder, Dennis Hopper, the London Community Gospel Choir, and the Children's Choir of San Fernandez.`,
      genre: genres[2]._id,
      price: 39.99,
      quantity: 17
    },
    {
      title: 'Gorillaz',
      artist: 'Gorillaz',
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
      16. Clint Eastwood.
      
      
      The Gorillaz claim to have found their motley crew of cartoon characters sleeping in Leicester Square, but Blur's Damon Albarn (a.k.a. 2-D) and cult cartoonist Jamie Hewlett (Murdoc) aren't fooling anyone. As the ultimate experiment in manufactured image, the Gorillaz are a virtual cartoon-character-based hip-hop band who bring together witty, silly lyrics and talented musicians.`,
      genre: genres[2]._id,
      price: 24.99,
      quantity: 15
    },
    {
      title: 'Choose Your Weapon',
      artist: 'Hiatus Kaiyote',
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
      4	Building a Ladder.

      
      
      Double vinyl LP pressing. Choose Your Weapon is the second studio album by Australian neo-soul quartet Hiatus Kaiyote, first released in 1 May 2015. Following the release of the band's debut album Tawk Tomahawk (2012) and their first Grammy nomination, Hiatus Kaiyote went on to tour throughout 2014. Over the span of two years, recording sessions took place in Australia and the United States.`,
      genre: genres[4]._id,
      price: 45.99,
      quantity: 20
    },
    {
      title: 'Tawk Tomahawk',
      artist: 'Hiatus Kaiyote',
      image: 'Tomahawk-Hiatus.jpeg',
      description: `Side A
      A1. Mobius Streak
      A2. The World It Softly Lulls
      A3. Leap Frog
      A4. Malika
      A5. Ocelot
      A6. Boom Child
      
      Side B
      B1. Lace Skull
      B2. Rainbow Rhodes
      B3. Sphynx Gate
      B4. Nakamarra
      
      Bonus 7”
      A1. Nakamarra feat. Q-Tip
      B1. Boom Child (Clever Austin Remix).
      
      KALEIDESCOPIC AUSSIE BAND'S DEBUT ALBUM, WIDELY AVAILABLE ON VINYL FOR THE FIRST TIME EVER. Hiatus Kaiyote's 2012 full-length takes cues from jazz, soul, hip hop, funk + more and primed them for the breakthrough success they would later achieve with 2015's Choose Your Weapon. There's no shortage of impressive moments, with tracks like "Mobius Streak," "Leap Frog," "Sphynx Gate" and "Nakamarra" providing a wide range of undeniable grooves informed equally by broken beat, Los Angeles' beat scene (the album was destined to be reissued by Brainfeeder) and the dusty Australian desert they launched from. This expanded reissue includes a bonus 7-inch with a remix of "Nakamarra" featuring Q-Tip (!!) and a remix of "Boom Child" by Clever Austin.`,
      genre: genres[4]._id,
      price: 55.99,
      quantity: 10
    },
    {
      title: 'Rumours',
      artist: 'Fleetwood Mac',
      image: 'Rumours-Fleetwood.jpeg',
      description: `A1Second Hand News Written-By – Lindsey Buckingham 4:43 A2Dreams Written-By – Stevie Nicks 4:14 A3Never Going Back Again Written-By – Lindsey Buckingham 2:02 A4Don't Stop Written-By – Christine McVie 3:11 A5Go Your Own Way Written-By – Lindsey Buckingham 3:38 A6Songbird Written-By – Christine McVie 3:20 B1The Chain Written-By – C. McVie*, J. McVie*, L. Buckingham*, M. Fleetwood*, S. Nicks* 4:28 B2You Make Loving Fun Written-By – Christine McVie 3:31 B3I Don't Want To Know Written-By – Stevie Nicks 3:11 B4Oh Daddy Written-By – Christine McVie 3:54 B5Gold Dust Woman Written-By – Stevie Nicks 4:51`,
      genre: genres[1]._id,
      price: 24.99,
      quantity: 9
    },
    {
      title: 'Mm Food',
      artist: 'MF Doom',
      image: 'Mf-Doom-Mm-food.jpg',
      description: `MM..Food - Exclusive Limited Edition Pink & Green Colored 2x Vinyl LP

      -Tracklist-
      A1 Beef Rapp 4:39
      A2 Hoe Cakes 3:54
      A3 Potholderz 3:20
      B4 One Beer 4:18
      B5 Deep Fried Frenz 4:59
      B6 Poo-Putt Platter 1:13
      B7 Fillet-O-Rapper 1:03
      B8 Gumbo 0:49
      C9 Fig Leaf Bi-Carbonate 3:19
      C10 Kon Karne 2:51
      C11 Guinnesses 4:41
      D12 Kon Queso 4:00
      D13 Rapp Snitch Knishes 2:52
      D14 Vomitspit 2:48
      D15 Kookies 4:02`,
      genre: genres[2]._id,
      price: 40.00,
      quantity: 5
    },
    {
      title: 'Dream in Colour',
      artist: 'Franc Moody',
      image: 'Franc-Moody-Dream-in-Colour.png',
      description: `Track Listings
      1	Dream In Colour
      2	Terra Firma
      3	Skin On Skin
      4	Charge Me Up
      5	Flesh And Blood
      6	Night Flight
      7	She's Too Good For Me
      8	Grin And Bear It
      9	Night Flight Reprise
      10	This Is A Mood
      11	A Little Something For The Weekend.

      
   
      Like a Franc Moody live show, Dream in Colour is a life-affirming experience. As a band who came up via the tight-knit warehouse rave scene of London, their performances are all about community and chaos. Each gig feels like a gigantic house party, packed with scenes of crowd surfing, mosh pits, mass sing-alongs and chants of "MOODY! MOODY!" This is where the band feel most at home and it informs one of the many themes running through their debut album, 'Dream in Colour': the experience of letting loose together. Dream in Colour also explores the way in which modern life constantly oscillates between online and offline realities; from the world we navigate inside our phones to the one we explore each day with our physiological senses. What separates our emotional experience of things like friendship, love and community online versus those we experience IRL? "Sometimes," explains Ned, "that experience of switching between those two worlds can feel like changing from black & white to colour. We wanted to explore that phenomenon on this record." A truly feel-good DIY success story, 'Dream in Colour' also perfectly encapsulates the phenomenon that is Franc Moody themselves.`,
      genre: genres[4]._id,
      price: 29.99,
      quantity: 11
    },
    {
      title: 'Hello Nasty',
      artist: 'Beastie Boys',
      image: 'Beastie-Boys-Hello-Nasty.png',
      description: `1.1 Super Disco Breakin' 1.2 The Move 1.3 Remote Control 1.4 Song for the Man 1.5 Just a Test 1.6 Body Movin' 1.7 Intergalactic 1.8 Sneakin' Out the Hospital 1.9 Putting Shame in Your Game 1.10 Flowin' Prose 1.11 And Me 1.12 Three MC's and One DJ 2.1 The Grasshopper Unit (Keep Movin') 2.2 Song for Junior 2.3 I Don't Know 2.4 The Negotiation Limerick File 2.5 Electrify 2.6 Picture This 2.7 Unite 2.8 Dedication 2.9 Dr. Lee, PHD 2.10 Instant Death. A startlingly diverse effort, the Beasties' fifth LP saw the welcome addition of a new DJ, the abundantly skilled Mix Master Mike of the Invizibl Skratch Picklz. A quirky but effective combination of old school fundamentals ("Three MC's and One DJ") and futuristic trickery ("Intergalactic"), this album successfully conveys their energy, originality, and spark. This 2 LP set is pressed on 180 gram vinyl.`,
      genre: genres[2]._id,
      price: 24.99,
      quantity: 5
    },
    {
      title: 'Ill Communication',
      artist: 'Beastie Boys',
      image: 'ill.jpg',
      description: `Track Listings
      Disc: 1
      1	Sure Shot
      2	Tough Guy
      3	B-Boys Makin' with the Freak Freak
      4	Bobo on the Corner
      5	Root Down
      6	Sabotage
      7	Get It Together
      8	Sabrosa
      9	Update
      10	Futterman's Rule
      Disc: 2
      1	Alright Hear This
      2	Eugene's Lament
      3	Flute Loop
      4	Do It
      5	Ricky's Theme
      6	Heart Attack Man
      7	Scoop
      8	Shambala
      9	Bodhisattva Vow
      10	Transitions.


     
      Remastered for the first time, and oversean by the band, the Beastie Boy's Ill Communication makes it's return to the vinyl format. It comes as a 180 gram double gatefold 2 LP set. The second disc comes with 12 tracks, one which is previously unreleased, 3 remixes and one live track.`,
      genre: genres[2]._id,
      price: 24.99,
      quantity: 5
    },
    {
      title: 'Solid Gold Hits',
      artist: 'Beastie Boys',
      image: 'Beastie-Boys-Solid-Gold.jpg',
      description: `Track Listings
      1	So What'cha Want
      2	Brass Monkey
      3	Ch-Check It Out
      4	No Sleep Till Brooklyn
      5	Hey Ladies
      6	Pass the Mic
      7	Open Letter to NYC
      8	Root Down
      9	Shake Your Rump
      10	Intergalactic
      11	Sure Shot
      12	Body Movin' [Mix]
      13	Triple Trouble
      14	Sabotage
      15	Fight for Your Right
      16	[CD-ROM Track] [Multimedia].

      
      2005 double vinyl LP compilation. Check it. The Beastie Boys fight for their right to party on 15 of their biggest hits. Spanning their career from rap to rock and other musical nuggets, this vinyl record set features only their best loved hits such as "Fight for Your Right," "Brass Monkey," "So What'cha Want," "Hey Ladies," "Shake Your Rump," "Intergalactic," "Sure Shot" and more! Innovators of rap and a party staple for Generation X, The Beastie Boys will be sure to shake your rump. They sound even better now that they are on vinyl once again. Capitol.
      
      `,
      genre: genres[2]._id,
      price: 35.99,
      quantity: 12
    },
    {
      title: 'Equal Strain On All Parts',
      artist: 'Jimmy Buffett',
      image: 'Jimmy-Buffett.jpg',
      description: `Side A
      1. University of Bourbon Street (feat. Preservation Hall Jazz Band)
      2. Bubbles Up
      3. Audience of One
      Side B
      1. My Gummie Just Kicked In
      2. Close Calls
      3. Equal Strain On All Parts
      4. Like My Dog
      Side C
      1. Ti Punch Café (feat. Angelique Kidjo)
      2. Portugul or PEI (feat. Lennie Gallant, Will Kimbrough)
      3. Nobody Works On Friday
      4. Fish Porn
      Side D
      1. Johnny's Rhum
      2. Columbus
      3. Mozambique (feat. Emmylou Harris)
      
      Wouldn't you know it. He had one more ship in the harbor left to sail. And long-time fans of Jimmy Buffett can raise their glasses to toast his send-off.

      The album Buffett completed before the "Margaritaville" singer's death on Sept. 1, 2023 will be released on the Sun label November 3, with three songs "Bubbles Up," "My Gummie Just Kicked In" and "Like My Dog" dropping ahead of the debut of the album — Equal Strain on All Parts. Among its 14 songs are collaborations with Paul McCartney, Emmylou Harris, Angelique Kidjo and the Preservation Hall Jazz Band.`,
      genre: genres[5]._id,
      price: 29.99,
      quantity: 5
    },
    {
      title: 'Malibu',
      artist: 'Anderson .Paak',
      image: 'Malibu.jpeg',
      description: `TracksCredits 1 The Bird 2 Heart Don't Stand a Chance 3 The Waters (Feat. BJ the Chicago Kid) 4 The Season / Carry Me 5 Put Me Thru 6 Am I Wrong (Feat. Schoolboy Q) 7 Without You (Feat. Rapsody) 8 Parking Lot 9 Lite Weight (Feat. the Free Nationals United Fellowship Choir) 10 Room in Here (Feat. the Game & Sonyae Elise) 11 Water Fall (Interlude) 12 Your Prime 13 Come Down 14 Silicon Valley 15 Celebrate 16 The Dreamer (Feat. Talib Kweli & Timan Family Choir)`,
      genre: genres[2]._id,
      price: 31.99,
      quantity: 3
    },
    {
      title: 'The Best Of Sinatra',
      artist: 'Frank Sinatra',
      image: 'Best-Of-Sinatra.jpg',
      description: `THE BEST OF SINATRA (180G BLUE VINYL LP) Artist: FRANK SINATRA Format: LP Bar-code: 5060348583400 Cat No: NOTLP340£9.99 Between 1955 and 1961 Sinatra recorded a string of hit albums for Capitol Records, collaborating with conductor and arranger Nelson Riddle and covering songs that were just superb. Though he’d produce numerous great records later on, it’s Sinatra’s Capitol years that people most associate with him, and which are generally conceded to contain his best work. This collection of wonderful recordings features; I’ve Got You Under My Skin, Just One Of Those Things, I Get A Kick Out Of You and Night And Day – all classics penned by Cole Porter. Come Fly With Me, (Love Is) The Tender Trap and Love And Marriage – written by Van Heusen & Cahn. Nice Work If You Can Get It – by George & Ira Gershwin. Plus, Nice ‘n’ Easy, Young At Heart, You Make Me Feel So Young, Witchcraft, Three Coins in the Fountain and The Lady Is A Tramp. THE BEST OF SINATRA (180G BLUE VINYL LP) quantity Add to basket SKU: NOTLP340 Categories: 12" LPs, Blue Vinyl, Easy, Frank Sinatra, Jazz, Not Now Music SIDE ONE 1. Come Fly With Me 2. I’ve Got You Under My Skin 3. Just One Of Those Things 4. (Love Is) The Tender Trap 5. Nice ‘n’ Easy 6. Young At Heart 7. Love And Marriage SIDE TWO 1. I Get A Kick Out Of You 2. You Make Me Feel So Young 3. Night And Day 4. Nice Work If You Can Get It 5. Witchcraft 6. Three Coins in the Fountain 7. The Lady Is A Tramp`,
      genre: genres[3]._id,
      price: 24.99,
      quantity: 10
    },
    {
      title: 'Nice N Easy',
      artist: 'Frank Sinatra',
      image: 'Nice-n-Easy.jpg',
      description: `Track Listings
      Disc: 1
      1	Nice 'N' Easy
      2	That Old Feeling
      3	How Deep Is the Ocean?
      4	I've Got a Crush on You
      5	You Go to My Head
      6	Fools Rush in
      Disc: 2
      1	Nevertheless (I'm in Love with You)
      2	She's Funny That Way
      3	Try a Little Tenderness
      4	Embraceable You
      5	Mam'selle
      6	Dream.

      
      In celebration of the 60th Anniversary of Frank Sinatra's Nice 'n' Easy, the album will be remastered and released on vinyl on June 5th. Features the original 12 tracks like "The Nearness of You", as well as full sessions of "I've Got A Crush on You" and "Nice 'n' Easy" that include previously unreleased alternate takes and reveals Sinatra studio chatter.`,
      genre: genres[3]._id,
      price: 24.99,
      quantity: 5
    },
    {
      title: 'The Very Best of the Rat Pack',
      artist: 'The Rat Pack',
      image: 'Rat.jpeg',
      description: `Long before today s rebellious pop idols, singers Frank Sinatra, Dean Martin and Sammy Davis Jr plus actor Peter Lawford and comedian Joey Bishop had entered showbiz legend as the genuinely hellraising Rat Pack. Enjoy an album that captures three great entertainers, separately and in combination, performing at their best.

      Track List:
      Disc 1 – Side A
      1. Volare (Nel Blu Dipinto Di Blu) (Dean Martin)
      2. I've Got You Under My Skin (Frank Sinatra)
      3. Frankie and Johnny (Sammy Davis Jr.)
      4. That's Amore (Dean Martin)
      5. I Get a Kick Out of You (Frank Sinatra)
      6. Something's Gotta Give (Sammy Davis Jr.)
      7. Memories Are Made of This (Dean Martin)
      8. Love and Marriage (Frank Sinatra)
      
      Disc 1 – Side B
      9. That Old Black Magic (Sammy Davis Jr.)
      10. Sway (Dean Martin)
      11. Come Fly With Me (Frank Sinatra)
      12. Love Me Or Leave Me (Sammy Davis Jr.)
      13. The Naughty Lady of Shady Lane (Dean Martin)
      14. Young at Heart (Frank Sinatra)
      15. Too Close for Comfort (Sammy Davis Jr.)
      16. Return to Me (Dean Martin)
      
      Disc 2 – Side C
      1. Mambo Italiano (Dean Martin)
      2. Old Devil Moon (Frank Sinatra)
      3. Me and My Shadow (Frank Sinatra & Sammy Davis Jr.)
      4. Ain't That a Kick in the Head (Dean Martin)
      5. Nice 'N' Easy (Frank Sinatra)
      6. All of You (Sammy Davis Jr.)
      7. Let Me Go Lover (Dean Martin)
      8. South of the Border (Frank Sinatra)
      
      Disc 2 – Side D
      9. You Make Me Feel So Young (Frank Sinatra)
      10. When You're Smiling (Dean Martin)
      11. You Do Something to Me (Sammy Davis Jr.)
      12. Buona Sera (Dean Martin)
      13. Three Coins in the Fountain (Frank Sinatra)
      14. Sam's Song (Sammy Davis Jr. & Dean Martin)
      15. Too Marvellous for Words (Frank Sinatra)
      16. Come Back to Sorrento (Dean Martin)`,
      genre: genres[3]._id,
      price: 24.99,
      quantity: 2
    },
    {
      title: 'Endless Summer',
      artist: 'The Midnight',
      image: 'Endless-Summer.jpg',
      description: `Remastered for vinyl. Double gatefold pink & blue swirled vinyl. 

      Record 1
      Side A:
      1. Endless Summer 
      2. Sunset 
      3. Daytona
      Side B: 
      1. Jason (feat. Nikki Flores)
      2. Synthetic 
      3. The Equalizer (Not Alone)
      
      Record 2
      Side A: 
      1. The Comeback Kid 
      2. Vampires
      3. Crockett’s Revenge 
      Side B: 
      1. Nighthawks
      2. Lonely City
      3. Memories`,
      genre: genres[6]._id,
      price: 34.99,
      quantity: 5
    },
    {
      title: 'Days of Thunder',
      artist: 'The Midnight',
      image: 'Days-of-Thunder.jpg',
      description: `Remastered for vinyl. Pressed on 140g transparent red vinyl. 
      
      Side A: 
      1. The Years (Prologue) 
      2. Gloria 
      3. WeMoveForward 
      Side B: 
      1. Days of Thunder
      2. Kick Drums & Red Wine 
      3. Los Angeles
      4. Lost and Found (Bonus Track) `,
      genre: genres[6]._id,
      price: 32.99,
      quantity: 19
    },
    {
      title: 'Dark All Day',
      artist: 'Gunship',
      image: 'Dark-All-Day.jpeg',
      description: `Dark All Day', the bands sophomore album, sees them build on the success of their 2015 eponymous long player, furthering their reputation as pioneers of the synthwave scene and continuing the 80's retro revival theme popularised by films and series such as Drive, Stranger Things, Ready Player One and every arcade game.`,
      genre: genres[6]._id,
      price: 35.95,
      quantity: 16
    },
    {
      title: 'GUNSHIP',
      artist: 'Gunship',
      image: 'GUNSHIP.jpeg',
      description: `GUNSHIP is more of a story than a soundtrack, written large across an eighties action cinema screen, where the narrative interweaves romance, hope, fear, technology, the threat of nuclear obliteration, and ultimately the need to celebrate life. Both bleak and dystopian at times but also progressive, uplifting and danceable.`,
      genre: genres[6]._id,
      price: 31.99,
      quantity: 5
    },
    {
      title: 'Black Blood Red Kiss',
      artist: 'Gunship',
      image: 'Black-Blood-Red-Kiss.jpeg',
      description: `Limited seven inch white vinyl with red splatter colored vinyl pressing. Taken from their second full-length Dark All Day, "Black Blood Red Kiss" takes the "cyberpunk noir" (Xpress Mag) band into a seductive and sensual dreamlike realm, exploring the intriguing relationship between pain and pleasure. The song features musician, tattoo artist and entrepreneur Kat Von D on vocals.`,
      genre: genres[6]._id,
      price: 25.99,
      quantity: 13
    },
    {
      title: 'Fox On the Run',
      artist: 'The Sweet',
      image: 'Fox-on-the-Run.jpeg',
      description: `Tracks
      1.1 Ballroom Blitz 1.2 Love Is Like Oxygen 1.3 Little Willy 1.4 Fox on the Run 1.5 Action 1.6 Blockbuster! 1.7 Hellraiser 1.8 Sweet F.A 1.9 Lost Angels 1.10 Fever of Love. A spectacular greatest hits collection from proto-glam rockers Sweet!Includes alternate mixes and rare versions of the band's biggest singles including "Ballroom Blitz," "Little Willy," "Blockbuster!" and more!Gorgeous SILVER/RED SPLATTER vinyl!`,
      genre: genres[1]._id,
      price: 24.99,
      quantity: 2
    },
    {
      title: 'Cherry Bomb',
      artist: 'The Runaways',
      image: 'Cherry-Bomb.jpg',
      description: `THE RUNAWAYS Cherry Bomb (Rare 1976 Japanese first issue wide centre 7"" single on the silver & blue Mercury label and pressed on Translucent Vinyl `,
      genre: genres[1]._id,
      price: 29.96,
      quantity: 3
    },
    {
      title: 'Goodbye Yellow Brick Road',
      artist: 'Elton John',
      image: 'Goodbye-Yellow-Brick-Road.jpg',
      description: `Original 1973 US pressing with Trifold Jacket (VG+). Labels (EX) black with rainbow, MCA2-10003. Vinyl (VG++) plays excellent. Pressing Matrix: MCA-354-W11/W2/W9/W9 Groversville pressing plant symbol (stamped). Jacket shows signs of handling. Light cover and some edge wear. Solid spine & seams. No writing.`,
      genre: genres[1]._id,
      price: 34.99,
      quantity: 5
    },
    {
      title: 'Elton John',
      artist: 'Elton John',
      image: 'Elton-John.jpeg',
      description: `Side A
      1. Your Song
      2. I Need You To Turn To
      3. Take Me To The Pilot
      4. No Shoe Strings On Louise
      5. First Episode Hienton
      
      Side B
      1. Sixty Years On
      2. Border Song
      3. The Greatest Discovery
      4. The Cage
      5. The King Must Die
      
      Side C (Bonus Tracks)
      1. Your Song (Piano Demo)
      2. I Need You To Turn To (Piano Demo)
      3. Take Me To The Pilot (Piano Demo)
      4. Sixty Years On (Piano Demo)
      5. Border Song (Piano Demo)
      6. Bad Side Of The Moon (Piano Demo)
      
      Side D (Bonus Tracks)
      1. Thank You Mama (Piano Demo)
      2. All The Way Down To El Paso (Piano Demo)
      3. I'm Going Home (Piano Demo)
      4. Bad Side Of The Moon
      5. Grey Seal
      6. Rock And Roll Madonna.
      Elton John launched his name into the stratosphere that night, on Aug. 25, 1970, his gravity-defying feats at the piano memorably captured in the 2019 Rocketman biopic.

      To celebrate the occasion, a limited-edition release of the pop superstar's self-titled album, his U.S. debut, is here on 180-gram transparent purple vinyl.`,
      genre: genres[1]._id,
      price: 27.99,
      quantity: 12
    },
    {
      title: 'Reg Strike Back',
      artist: 'Elton',
      image: 'Reg-Strikes-Back.jpeg',
      description: `Reissue on vinyl of the 21st Elton John studio album, Reg Strikes Back, remastered at the world-renowned Lurssen Mastering studio. Originally released in June 1988, the album was certified gold. It features the No. 2 hit "I Don't Wanna Go On With You Like That," plus the singles "A Word In Spanish," "Town Of Plenty," and "Mona Lisas and Mad Hatters (Part Two)." This 180-gram vinyl reissue is faithful to the original tracklisting, packaging and cut at Abbey Road Studios.



      Side A
      Town Of Plenty
      A Word In Spanish
      Mona Lisas And Mad Hatters (Part Two)
      I Don't Wanna Go On With You Like That
      Japanese Hands
      Side B
      Goodbye Marlon Brando
      The Camera Never Lies
      Heavy Traffic
      Poor Cow
      Since God Invented Girls
      `,
      genre: genres[1]._id,
      price: 24.97,
      quantity: 5
    },
    {
      title: 'Aladdin Sane',
      artist: 'David Bowie',
      image: 'Aladdin-Sane.jpeg',
      description: `Track Listings
      Disc: 1
      1	Watch That Man (2013 Remaster)
      2	Aladdin Sane (2013 Remaster)
      3	Drive-In Saturday (2013 Remaster)
      4	Panic in Detroit (2013 Remaster)
      5	Cracked Actor (2013 Remaster)
      Disc: 2
      1	Time (2013 Remaster)
      2	The Prettiest Star (2013 Remaster)
      3	Let's Spend the Night Together (2013 Remaster)
      4	The Jean Genie (2013 Remaster)
      5	Lady Grinning Soul (2013 Remaster).
      
      “Originally released on 13th April 1973 Aladdin Sane will mark it’s 50th anniversary this year and to celebrate we will be releasing a Half Speed Master version of this iconic album.” The album was preceded by two singles ‘The Jean Genie’ and ‘Drive-In Saturday’, peaking in the U.K. singles chart at numbers 2 and 3 respectively, and was the first time he topped the U.K. album charts. It also marked his debut on the U.S. charts reaching the top 20 album chart there, where an edited version of ‘Time’ was released as a single.`,
      genre: genres[1]._id,
      price: 24.99,
      quantity: 5
    },
    {
      title: 'Space Oddity',
      artist: 'David Bowie',
      image: 'Space.jpg',
      description: `Track Listings
      Disc: 1
      1	Space Oddity (2009 Remaster)
      2	Unwashed And Somewhat Slightly Dazed (inc. Don't Sit Down) [2009 Remaster]
      3	Letter To Hermione (2009 Remaster)
      4	Cygnet Committee (2009 Remaster)
      Disc: 2
      1	Janine (2009 Remaster)
      2	An Occasional Dream (2009 Remaster)
      3	Wild Eyed Boy From Freecloud (2009 Remaster)
      4	God Knows I'm Good (2009 Remaster)
      5	Memory Of A Free Festival (2009 Remaster).
      
      Limited picture disc version of the 1972 edition of the DAVID BOWIE album retitled as SPACE ODDITY. The picture disc features the iconic Ziggy Stardust era artwork and comes with a replica of the poster which was part of the package at the time. The picture disc will feature the 2009 40th anniversary remaster of the album which was undertaken to match as closely as possible the original vinyl issue.`,
      genre: genres[1]._id,
      price: 29.99,
      quantity: 11
    },
    {
      title: 'Low',
      artist: 'David Bowie',
      image: 'Low.jpg',
      description: `Side A:
      1. Speed of Life
      2. Breaking Glass
      3. What In the World
      4. Sound and Vision
      5. Always Crashing In the Same Car
      6. Be My Wife
      7. A New Career In A New Town
      
      Side B:
      1. Warszawa
      2. Art Decade
      3. Weeping Wall
      4. Subterraneans.
      
      180-gram vinyl.

      After the release of 2017's acclaimed A New Career In A New Town (1977-1982) box set, breakouts of five selected albums from the set as stand-alone releases are now available. The five — Low, Heroes, Stage (2017 version 3LP), Lodger, and Scary Monsters (And Super Creeps) — haven't been available on vinyl officially for more than a quarter of a century.`,
      genre: genres[1]._id,
      price: 29.99,
      quantity: 9
    },
    {
      title: 'The Colour and the Shape',
      artist: 'Foo Fighters',
      image: 'The-Colour-and-the-Shape.jpg',
      description: `Track Listings
      Disc: 1
      1	Doll
      2	Monkey Wrench
      3	Hey, Johnny Park!
      4	My Poor Brain
      Disc: 2
      1	Wind Up
      2	Up In Arms
      3	My Hero
      4	See You
      Disc: 3
      1	Enough Space
      2	February Stars
      3	Everlong
      Disc: 4
      1	Walking After You
      2	New Way Home.
    
      The Colour and The Shape is the second Foo Fighter album, and followed the band's multi-platinum debut Foo Fighters. Despite the first album's success, few people at the time thought that drummer-turned-frontman Dave Grohl could possibly have a second great album in him. Nonetheless, The Colour and The Shape exceeded all artistic and commerical expectations and established Foo Fighters as one of the most vital bands of our era. With hits like Everlong, Monkey Wrench and My Hero, Foo Fighters became a cornerstone of modern rock radio and a perennial MTV favorite.`,
      genre: genres[1]._id,
      price: 29.99,
      quantity: 5
    },
    {
      title: 'Medicine At Midnight',
      artist: 'Foo Fighters',
      image: 'Medicine-At-Midnight.jpg',
      description: `Track Listings
      Disc: 1
      1	Making A Fire
      2	Shame Shame
      3	Cloudspotter
      4	Waiting On A War
      5	Medicine At Midnight
      Disc: 2
      1	No Son Of Mine
      2	Holding Poison
      3	Chasing Birds
      4	Love Dies Young.
      
       Medicine at Midnight is the 2021 album from Foo Fighters, and packs nine new songs into a tight-ass 37 minutes. This collection includes the smoldering single, "Shame Shame." Medicine at Midnight is produced by Greg Kurstin and Foo Fighters, and is the band's 10th album. Foo Fighters are Dave Grohl, Taylor Hawkins, Nate Mendel, Chris Shiflett, Pat Smear, and Rami Jaffee.`,
      genre: genres[1]._id,
      price: 24.99,
      quantity: 10
    },
    {
      title: 'Pablo Honey',
      artist: 'Radiohead',
      image: 'Pablo-Honey.jpg',
      description: `Track Listings
      Disc: 1
      1	You
      2	Creep
      3	How Do You?
      4	Stop Whispering
      5	Thinking About You
      6	Anyone Can Play Guitar
      Disc: 2
      1	Ripcord
      2	Vegetable
      3	Prove Yourself
      4	I Can't
      5	Lurgee
      6	Blow Out.
     
      Released in 1993, Pablo Honey was the debut studio album from Radiohead. Produced by Sean Slade and Paul Kolderie, the album was recorded at Chipping Norton Recording Studios and Courtyard Studio, Oxfordshire. The album features three charting singles, "Anyone Can Play Guitar", "Stop Whispering", and "Creep". - The standout single "Creep" was the international hit that helped propel Radiohead and Pablo Honey to popular acclaim. Released several months before the album itself, "Creep" went on to define the band's early career. Also included on Pablo Honey are ethereal rocker "You", fan favorite "Thinking About You", and "Blow Out", all of which point to the band's future sonic manipulations.`,
      genre: genres[1]._id,
      price: 29.99,
      quantity: 8
    },
    {
      title: 'Goat',
      artist: 'The Jesus Lizard',
      image: 'Goat.png',
      description: `Track Listings
      1	Then Comes Dudley
      2	Mouth Breather
      3	Nub
      4	Seasick
      5	Monkey Trick
      6	Karpis
      7	South Mouth
      8	Lady Shoes
      9	Rodeo in Joliet
      10	[Untitled]
      11	Sunday You Need Love
      12	Pop Song
      13	Seasick [Live]
      14	Lady Shoes [Live]
      15	Monkey Trick [Live].
      
      Re-mastered in 2009 by Steve Albini and Bob Weston. Vinyl packaged in deluxe gatefold album jacket with 12" x 24" double sided color insert including never before seen photos & extensive liner notes by the band & by journalists who were there. Vinyl also includes a digital download coupon for the LP, plus 5 bonus tracks not included on the LP itself. HQ-120 virgin vinyl pressing made at RTI. CD in deluxe Digipak with 14" x 20" double sided color folder including never before seen photos & extensive liner notes by the band & by journalists who were there. CD also includes 4 bonus tracks.`,
      genre: genres[1]._id,
      price: 28.99,
      quantity: 5
    },
    {
      title: 'Liar',
      artist: 'The Jesus Lizard',
      image: 'Liar.jpg',
      description: `Album Tracks

      1. Boilermaker
      2. Gladiator
      3. The Art of Self-Defense
      4. Slave Ship
      5. Puss
      6. Whirl
      7. Rope
      8. Perk
      9. Zachariah
      10. Dancing Naked Ladies
      11. [Untitled]
      12. Wheelchair Epidemic
      13. Dancing Naked Ladies [Single Version]
      14. Gladiator [Idful Studios Sesssions Demo] [Demo Version]
      15. Boilermaker [Idful Studios Sessions Demo] [Demo Version].
      
      Remastered in 2009 by Steve Albini and Bob Weston. Vinyl packaged in deluxe gatefold album jacket with 12"x24" double sided color insert including never before seen photos, & extensive liner notes by the band & by journalists who were there. Vinyl also includes a digital download coupon for entire LP, plus 4 bonus tracks not included on the LP. HQ-120 virgin vinyl pressing made at RTI. CD in deluxe Digipak with 14"x20" double sided color folder including never before seen photos & extensive liner notes by the band & by journalists who were there. CD also includes 4 bonus tracks.`,
      genre: genres[2]._id,
      price: 24.99,
      quantity: 7
    },
    {
      title: 'Enter (36 Chambers)',
      artist: 'Wu-Tang Clan',
      image: 'Enter.jpg',
      description: `Track Listings
      Disc: 1
      1	Bring Da Ruckus
      2	Shame on a Nigga
      3	Clan in Da Front
      4	Wu-Tang: 7th Chamber
      5	Can It Be All So Simple / Intermission - Wu-Tang Clan
      6	Protect Ya Neck
      Disc: 2
      1	Da Mystery of Chessboxin'
      2	Wu-Tang Clan Aint Nuthing Ta F' Wit
      3	C.R.E.A.M. - Wu-Tang Clan
      4	Method Man
      5	Tearz - Wu-Tang Clan / Wendy Rene
      6	Wu-Tang: 7th Chamber - Part II.
      
      Enter The Wu-Tang (36 Chambers) the pioneering Hip Hop album form the Wu-Tang Clan re-issued on heavyweight 180 gram black vinyl`,
      genre: genres[2]._id,
      price: 29.99,
      quantity: 13
    },
    {
      title: 'Tougher Than Leather',
      artist: 'Run DMC',
      image: 'Tougher-Than-Leather.jpeg',
      description: `Track Listings
      Disc: 1
      1	Run's House
      2	Mary, Mary
      3	They Call Us Run-D.M.C.
      4	Beats to the Rhyme
      5	Radio Station
      6	Papa Crazy
      Disc: 2
      1	Tougher Than Leather
      2	I'm Not Going Out Like That
      3	How'd Ya Do It Dee
      4	Miss Elaine
      5	Soul To Rock And Roll
      6	Ragtime.
      
      Released in 1988, Tougher Than Leather followed Run-DMC’s massively successful third album Raising Hell and furthered their innovative, aggressive, and hard-hitting sound that defined the hip-hop scene of the 1980s. From the incredible lead single, “Run’s House” to their cover of The Monkee’s “Mary, Mary,” Tougher Than Leather features a slew of incredible hits and is essential listening for any fan of classic hip-hop. Tougher Than Leather blends Run-DMC’s infectious, charismatic flows and heavily sample-based production with hard-hitting raps, soaring choruses, and rapid-fire delivery. Stand out tracks include “Run’s House,” “I’m Not Going Out Like That,” as well as “Beats to the Rhyme,” a story-based cut that stands as an anthem to hip-hop.`,
      genre: genres[2]._id,
      price: 31.99,
      quantity: 15
    },
    {
      title: 'Reachin (a new refutation of time and space)',
      artist: 'Digable Planets',
      image: 'Reachin.jpg',
      description: `Track Listings
      1	It's Good to Be Here
      2	Pacifics
      3	Where I'm from
      4	What Cool Breezes Do
      5	Time & Space (A New Refutation of)
      6	Rebirth of Slick (Cool Like Dat)
      7	Last of the Spiddyocks
      8	Jimmi Diggin Cats
      9	La Femme Fétal
      10	Escapism (Gettin' Free)
      11	Appointment at the Fat Clinic
      12	Nickel Bags
      13	Swoon Units
      14	Examination of What.
      
    At a time when hip-hop was determined to snap your neck, a young, hip trio from Brooklyn (by way of Seattle, Philly, and Brazil) conspired on an uncommonly smooth new sound and freaky way of speak, a titanically chill expression of Black bohemia loaded with jazz idiom and a subversive Marxist bent-and pushed it worldwide via an undeniable crossover hit. Digable Planets' 1993 debut, Reachin' (A New Refutation of Time and Space), unexpected to all involved, produced a massive radio hit in "Rebirth Of Slick (Cool Like Dat)", which won the 1994 Grammy for Best Rap Performance by Duo or Group. Unduly lumped into an "alternative rap" subgenre they chafed at, the Dig Plans were dismissed by some as one-hit wonders, coming out of nowhere; but the Digable Planets concept, and what became Reachin', had been in the works for close to five years, as group leader Ishmael "Butterfly" Butler wrote music and soaked up game in multiple cities, navigating the industry of hip-hop's golden age. In the end, Butler, Mary Anne "Ladybug Mecca" Vieira, and Craig "Doodlebug" Irving came together to create a seamlessly articulated vision of urbane hip hop cool with an uncommonly literary bent that subtly pushed the hip hop genre's frames of reference and added breadth to rap music's burgeoning political philosophy. Drawing on inspiration from Butler's jazzbo father, the Black Panthers, Jose Luis-Borges, the Last Poets, and Jimi Hendrix, Reachin' posited a theory of "universal beats", narrated by three unearthly MC's that had "split to Earth to resurrect the funk", assuming curious, arthropodic aliases - a nod to the natural collective action of the insect world. In just four years the crew would record two beloved and ambitious LPs before disbanding. Out of print on wax domestically since 1993, Reachin' captures one of the last gasps of rap music's jazzy, upbeat adolescence in the early 90's - those warm, blissed-out grooves every bit as slick as when they were laid way back when. Put this on, roll up with your crew and bug out again with the insect tribe.`,
      genre: genres[2]._id,
      price: 27.99,
      quantity: 8
    },
    {
      title: 'Operation Doomsday',
      artist: 'MF Doom',
      image: 'Operation-Doomsday.jpeg',
      description: `Track Listings
      Disc: 1
      1	The Time We Faced Doom
      2	Doomsday
      3	Rhymes Like Dimes (Feat. DJ Cucumber Slice)
      4	The Finest (Feat. Tommy Gunn)
      5	Back in the Days
      6	Go with the Flow
      7	Tick Tock (Feat. MF Grimm)
      8	Red & Gold
      9	The Hands of Doom
      Disc: 2
      1	Doom, Are You Awake
      2	Hey
      3	Operation Greenbacks (Feat. Megalon & King Geedoarh)
      4	The Mic
      5	The Mystery of Doom
      6	Dead Bent
      7	Gas Drawls
      8	Question Mark (Feat. Kurious Jorge)
      9	Hero Vs Villain.
     
      Personnel includes: M.F. Doom, Kurious, Megalon, Rodan, Tommy Gunn, Cucumber Slice, E. Mason, MF Grimm, King Ghidra, X-Ray, K.D., Kong. Daniel Dumile aka MF Doom unleashed his debut LP in early 1999. Doom's flow is warm, rough-hewn, and definitely charming--standing in stark contrast to the alienating, intimidating man in the mask--while the production sounds like a smoother, jazzier take on the early-'90s sampling era. This starting point has enough substance to warrant repeated listens while foreshadowing MF Doom's strengths on future releases.`,
      genre: genres[2]._id,
      price: 44.99,
      quantity: 4
    },
    {
      title: 'Live at the Apollo',
      artist: 'Run DMC',
      image: 'Live-at-the-Apollo.jpg',
      description: `LP Vinyl Album, Live, 12 Tracks, 2015, pressage Europe, Sealed, label Egg Raid, reference EGG-341, Limited Edition 500 ex., Live at the Apollo, New York City, April 19th, 1986.
      Broadcast on WBLS 107,5 FM Radio for Rap Attack.
      
      Tracklist
      A1	Jam Master Jay Intro	
      A2	Tougher Than Leather                           
      A3	My Adidas	
      A4	Rock Box	
      A5	Darryl & Joe	
      A6	Jam Master Jay	
      B1	Here We Go	
      B2	It's Like That	
      B3	Raising Hell	
      B4	Hit It Run	
      B5	Peter Piper	
      B6	King Of Rock`,
      genre: genres[2]._id,
      price: 25.99,
      quantity: 2
    },

    {
      title: 'Blowout Comb',
      artist: 'Digable Planets',
      image: 'Blowout-Comb.jpg',
      description: `Track Listings
      1	The May 4th Movement Starring Doodlebug
      2	Black Ego
      3	Dog It
      4	Jettin'
      5	Borough Check (Feat. Guru)
      6	Highing Fly
      7	Dial 7 (Axioms of Creamy Spies) / NY 21 Theme (Feat. Sarah Anne Webb)
      8	The Art of Easing
      9	K.B.'s Alley (Mood Dudes Groove)
      10	Graffiti (Feat. Jeru the Damaja)
      11	Blowing Down
      12	9th Wonder (Blackitolism) (Feat. DJ Jazzy Joyce)
      13	For Corners (Feat. Monica Payne and Sulaiman).
      
      Double translucent purple vinyl LP pressing. Blowout Comb is the second studio album by Digable Planets, originally released in 1994. The album was written and recorded in Brooklyn, New York, where the group moved, with recording sessions beginning in 1993 and finishing in 1994. On Blowout Comb, Digable Planets abandoned the radio friendly style of their debut album and worked with a more ambitious, stripped-down sound. The album features a diverse range of samples and live instruments, and contains lyrical themes of the inner city and black nationalism. It also features guest appearances from Guru of Gang Starr, Jeru the Damaja, and DJ Jazzy Joyce.`,
      genre: genres[2]._id,
      price: 34.99,
      quantity: 5
    },
    {
      title: 'Madvillainy',
      artist: 'MF Doom',
      image: 'Madvillain.jpg',
      description: `Track Listings
      1	The Illest Villains
      2	Accordion
      3	Meat Grinder
      4	Bistro
      5	Raid
      6	America's Most Blunted
      7	Sickfit
      8	Rainbows
      9	Curls
      10	Do Not Fire!
      11	Money Folder
      12	Shadows of Tomorrow
      13	Operation Lifesaver Aka Mint Test
      14	Figaro
      15	Hardcore Hustler
      16	Strange Ways
      17	Fancy Clown
      18	Eye
      19	Supervillain Theme
      20	All Caps
      21	Great Day
      22	Rhinestone Cowboy.
      
      Madvillain: Madlib, MF Doom. Additional personnel includes: Lord Quas, M. E. D. , Wildchild, Viktor Vaughn, Stacy Epps. Two years in the making, and combining two of the best underground hip-hop artists of the early 2000s, this collaboration between MF Doom and Madlib has been appropriately dubbed MADVILLAINY. With both men known for their stunning soundscapes, rhyming skills, and schizophrenic personalities, the duo decided to have Madlib concentrate on the beats and let Doom handle the lyrics. In mixing their comic-book-like personas, Madlib and Doom play to their nearly superhuman strengths; while some other collaborations of this caliber seems forced and lop-sided, there is absolutely no filler here-just undiluted beats and rhymes, best exemplified by the singles "America's Most Blunted" and "All Caps. " Lib's inventive production leans towards the jazzy side of his repertoire, and Doom unleashes outrageous lyrics on par with his solo efforts (and even his work as Zevlove X in his stint with K. M. D. ). Never flashy or glamorous, MADVILLAINY is served straight up, the way hip-hop was meant to be.`,
      genre: genres[2]._id,
      price: 49.99,
      quantity: 2
    },
    {
      title: 'The Best of Earth, Wind, & Fire Vol. 1',
      artist: 'Earth, Wind, & Fire',
      image: 'Madvillain.jpg',
      description:`Track Listings
      Disc: 1
      1	Got to Get You Into My Life
      2	Fantasy
      3	Can't Hide Love
      4	Love Music
      5	Getaway
      Disc: 2
      1	That's the Way of the World
      2	September
      3	Shining Star
      4	Reasons
      5	Sing a Song.
    
      The Best of Earth, Wind & Fire, Vol. 1 is a 1978 compilation album collecting the charting singles of Earth, Wind & Fire. In addition to collecting previously charting songs, the album also included three new tracks for the band: a cover of The Beatles' song "Got to Get You Into My Life" and the original track "September", both of which also became charting singles, the former also winning a Grammy Award, and "Love Music." Love Music was sampled by Ghostface Killah on his track Good featured on his 2006 album More Fish. "September" has been sampled by Crystal Waters on her track "Say... If You Feel Alright" from her 1996 album Crystal Waters.`,
      genre: genres[4]._id,
      price: 19.96,
      quantity: 10
    },
    {
      title:'Spirit',
      artist:'Earth, Wind, & Fire',
      image:'',
      description:`1. Getaway
      2. On Your Face
      3. Imagination
      4. Spirit
      5. Saturday Nite
      6. Earth, Wind & Fire
      7. Departure
      8. Biyo
      9. Burnin' Bush.
      180-gram vinyl

      The wise saying "spiritus ubi vult spirat" ("the spirit blows where it wills") is interpreted by Earth, Wind & Fire with impressive clarity. Gentle sounds and modest gestures are foreign to the colourful Afro group, who in their live performances welded together ancient Egyptian Pharaonic mysticism with urban street life. That this spirit, which is found in the LP title and blows all the way through it, was guaranteed not only by the exuberant wind section in the group’s early years.`,
      genre: genres[4]._id,
      price: 41.99,
      quantity: 5,
    },
    {
      title:'Spirit',
      artist:'Earth, Wind, & Fire',
      image:'',
      description:``,
      genre: genres[4]._id,
      price: 41.99,
      quantity: 5,
    },
    {
      title:'Spirit',
      artist:'Earth, Wind, & Fire',
      image:'',
      description:``,
      genre: genres[4]._id,
      price: 41.99,
      quantity: 5,
    },
    {
      title:'Spirit',
      artist:'Earth, Wind, & Fire',
      image:'',
      description:``,
      genre: genres[4]._id,
      price: 41.99,
      quantity: 5,
    },
    {
      title:'Spirit',
      artist:'Earth, Wind, & Fire',
      image:'',
      description:``,
      genre: genres[4]._id,
      price: 41.99,
      quantity: 5,
    },
    {
      title:'Spirit',
      artist:'Earth, Wind, & Fire',
      image:'',
      description:``,
      genre: genres[4]._id,
      price: 41.99,
      quantity: 5,
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
