// Return to Ravnica Block
// Sets: Return to Ravnica, Gatecrash, Dragon's Maze
// All 10 bicolored guild-centric intro packs; alphabetized
// By RMS

// Reference: skeleton of each deck object
// {
//   name: 'name of deck',
//   version: 'version name',
//   cards: [
// 	{number: 1,  name: 'card name'},
// 	{number: 2,  name: 'card name'},
// 	{number: 10, name: 'card name'}
//   ],
//   sideboard: [
// 	{number: 3,  name: 'card name'}
//   ]
// }

// Azorius
var deckAzorius = {
  name: 'Azorius',
  version: 'original',
  cards: [
    // Creatures (23)
    {number: 1,  name: 'Archon of the Triumvirate'},
    {number: 2,  name: 'Azorius Arrester'},
    {number: 1,  name: 'Azorius Justiciar'},
    {number: 2,  name: 'Battleflight Eagle'},
    {number: 2,  name: 'Bazaar Krovod'},
    {number: 2,  name: 'Concordia Pegasus'},
    {number: 1,  name: 'Lyev Skyknight'},
    {number: 1,  name: 'New Prahv Guildmage'},
    {number: 3,  name: 'Silvercoat Lion'},
    {number: 1,  name: 'Skyline Predator'},
    {number: 1,  name: 'Soulsworn Spirit'},
    {number: 2,  name: 'Stealer of Secrets'},
    {number: 2,  name: 'Trained Caracal'},
    {number: 2,  name: 'Vassal Soul'},
    // Instants (5)
    {number: 1,  name: 'Angel\'s Mercy'},
    {number: 1,  name: 'Dramatic Rescue'},
    {number: 2,  name: 'Show of Valor'},
    {number: 1,  name: 'Swift Justice'},
    //Sorceries (1)
    {number: 1,  name: 'Inaction Injunction'},
    // Artifacts (2)
    {number: 2,  name: 'Azorius Keyrune'},
    {number: 1,  name: 'Tablet of the Guilds'},
    // Enchantments (3)
    {number: 2,  name: 'Arrest'},
    {number: 1,  name: 'Righteous Authority'},
    // Lands (25)
    {number: 12, name: 'Island'},
    {number: 12, name: 'Plains'},
    {number: 1,  name: 'Azorius Guildgate'}
  ],
  sideboard: [

  ]
}

// Boros
var deckBoros = {
  name: 'Boros',
  version: 'original',
  cards: [
    // Creatures (25)
    {number: 1,  name: 'Armored Transport'},
    {number: 1,  name: 'Bomber Corps'},
    {number: 1,  name: 'Boros Elite'},
    {number: 2,  name: 'Canyon Minotaur'},
    {number: 1,  name: 'Court Street Denizen'},
    {number: 2,  name: 'Daring Skyjek'},
    {number: 1,  name: 'Ember Beast'},
    {number: 1,  name: 'Firefist Striker'},
    {number: 1,  name: 'Firemane Avenger'},
    {number: 2,  name: 'Fortress Cyclops'},
    {number: 1,  name: 'Foundry Champion'},
    {number: 1,  name: 'Ordruun Veteran'},
    {number: 2,  name: 'Skyknight Legionnaire'},
    {number: 1,  name: 'Sunhome Guildmage'},
    {number: 2,  name: 'Warclamp Mastiff'},
    {number: 2,  name: 'Warmind Infantry'},
    {number: 3,  name: 'Wojek Halberdiers'},
    // Instants (5)
    {number: 1,  name: 'Aerial Maneuver'},
    {number: 2,  name: 'Arrows of Justice'},
    {number: 1,  name: 'Righteous Charge'},
    {number: 1,  name: 'Shielded Passage'},
    // Sorceries (3)
    {number: 1,  name: 'Act of Treason'},
    {number: 1,  name: 'Mark for Death'},
    {number: 1,  name: 'Mugging'},
    // Artifacts (2)
    {number: 2,  name: 'Boros Keyrune'},
    // Lands (25)
    {number: 1,  name: 'Boros Guildgate'},
    {number: 12, name: 'Mountain'},
    {number: 12, name: 'Plains'}
  ],
  sideboard: [
  ]
}

// Dimir
var deckDimir = {
  name: 'Dimir',
  version: 'original',
  cards: [
    // Creatures (20)
    {number: 2,  name: 'Balustrade Spy'},
    {number: 1,  name: 'Consuming Aberration'},
    {number: 2,  name: 'Deathcult Rogue'},
    {number: 2,  name: 'Dinrova Horror'},
    {number: 1,  name: 'Duskmantle Guildmage'},
    {number: 3,  name: 'Gutter Skulk'},
    {number: 1,  name: 'Incursion Specialist'},
    {number: 1,  name: 'Jace\'s Phantasm'},
    {number: 1,  name: 'Mindeye Drake'},
    {number: 1,  name: 'Mortus Strider'},
    {number: 1,  name: 'Sage\'s Row Denizen'},
    {number: 1,  name: 'Vedalken Entrancer'},
    {number: 1,  name: 'Welkin Tern'},
    {number: 2,  name: 'Wight of Precinct Six'},
    // Instants (3)
    {number: 2,  name: 'Grisly Spectacle'},
    {number: 1,  name: 'Totally Lost'},
    // Sorceries (7)
    {number: 1,  name: 'Coerced Confession'},
    {number: 1,  name: 'Last Thoughts'},
    {number: 1,  name: 'Midnight Recovery'},
    {number: 1,  name: 'Paranoid Delusions'},
    {number: 1,  name: 'Rise from the Grave'},
    {number: 1,  name: 'Shadow Slice'},
    {number: 1,  name: 'Whispering Madness'},
    // Artifacts (2)
    {number: 2,  name: 'Dimir Keyrune'},
    // Enchantments (2)
    {number: 2,  name: 'Death\'s Approach'},
    // Lands (26)
    {number: 1,  name: 'Dimir Guildgate'},
    {number: 12, name: 'Island'},
    {number: 13, name: 'Swamp'}
  ],
  sideboard: [
  ]
}

// Golgari
var deckGolgari = {
  name: 'Golgari',
  version: 'original',
  cards: [
    // Creatures (24)
    {number: 1,  name: 'Acidic Slime'},
    {number: 1,  name: 'Corpsejack Menace'},
    {number: 2,  name: 'Daggerdrome Imp'},
    {number: 1,  name: 'Dreg Mangler'},
    {number: 2,  name: 'Drudge Beetle'},
    {number: 1,  name: 'Gobbling Ooze'},
    {number: 2,  name: 'Golgari Longlegs'},
    {number: 1,  name: 'Korozda Guildmage'},
    {number: 2,  name: 'Korozda Monitor'},
    {number: 2,  name: 'Slitherhead'},
    {number: 1,  name: 'Sluiceway Scorpion'},
    {number: 1,  name: 'Slum Reaper'},
    {number: 1,  name: 'Stonefare Crocodile'},
    {number: 1,  name: 'Terrus Wurm'},
    {number: 1,  name: 'Veilborn Ghoul'},
    {number: 3,  name: 'Walking Corpse'},
    {number: 1,  name: 'Wild Beastmaster'},
    // Instants (6)
    {number: 1,  name: 'Aerial Predation'},
    {number: 1,  name: 'Grisly Salvage'},
    {number: 2,  name: 'Launch Party'},
    {number: 1,  name: 'Murder'},
    {number: 1,  name: 'Serpent\'s Gift'},
    // Sorceries (2)
    {number: 1,  name: 'Rites of Reaping'},
    {number: 1,  name: 'Treasured Find'},
    // Artifacts (2)
    {number: 2,  name: 'Golgari Keyrune'},
    // Enchantments (1)
    {number: 1,  name: 'Disentomb'},
    // Lands (25)
    {number: 12, name: 'Forest'},
    {number: 12, name: 'Swamp'},
    {number: 1,  name: 'Golgari Guildgate'}
  ],
  sideboard: [
  ]
}

// Gruul
var deckGruul = {
  name: 'Gruul',
  version: 'original',
  cards: [
    // Creatures (24)
    {number: 1,  name: 'Arbor Elf'},
    {number: 2,  name: 'Centaur Courser'},
    {number: 2,  name: 'Disciple of the Old Ways'},
    {number: 1,  name: 'Duskdale Wurm'},
    {number: 2,  name: 'Fire Elemental'},
    {number: 1,  name: 'Foundry Street Denizen'},
    {number: 1,  name: 'Ghor-Clan Rampager'},
    {number: 1,  name: 'Gruul Ragebeast'},
    {number: 1,  name: 'Primal Huntbeast'},
    {number: 1,  name: 'Ripscale Predator'},
    {number: 1,  name: 'Rubblehulk'},
    {number: 2,  name: 'Ruination Wurm'},
    {number: 1,  name: 'Scab-Clan Charger'},
    {number: 1,  name: 'Skarrg Guildmage'},
    {number: 1,  name: 'Skinbrand Goblin'},
    {number: 1,  name: 'Slaughterhorn'},
    {number: 2,  name: 'Viashino Shanktail'},
    {number: 2,  name: 'Zhur-Taa Swine'},
    // Instants (3)
    {number: 1,  name: 'Pit Fight'},
    {number: 1,  name: 'Predator\'s Rapport'},
    {number: 1,  name: 'Volcanic Geyser'},
    // Sorceries (3)
    {number: 2,  name: 'Ground Assault'},
    {number: 1,  name: 'Ranger\'s Path'},
    // Artifacts (2)
    {number: 2,  name: 'Gruul Keyrune'},
    // Enchantments (2)
    {number: 1,  name: 'Alpha Authority'},
    {number: 1,  name: 'Verdant Haven'},
    // Lands (26)
    {number: 13, name: 'Forest'},
    {number: 1,  name: 'Gruul Guildgate'},
    {number: 12, name: 'Mountain'}
  ],
  sideboard: [
  ]
}

// Izzet
var deckIzzet = {
  name: 'Izzet',
  version: 'original',
  cards: [
    // Creatures (16)
    {number: 2,  name: 'Blistercoil Weird'},
    {number: 3,  name: 'Cobblebrute'},
    {number: 2,  name: 'Goblin Electromancer'},
    {number: 2,  name: 'Guttersnipe'},
    {number: 1,  name: 'Hypersonic Dragon'},
    {number: 1,  name: 'Nivix Guildmage'},
    {number: 3,  name: 'Runewing'},
    {number: 1,  name: 'Tenement Crasher'},
    {number: 1,  name: 'Welkin Tern'},
    // Instants (9)
    {number: 2,  name: 'Annihilating Fire'},
    {number: 1,  name: 'Blustersquall'},
    {number: 1,  name: 'Chandra\'s Fury'},
    {number: 1,  name: 'Downsize'},
    {number: 2,  name: 'Electrickery'},
    {number: 1,  name: 'Explosive Impact'},
    {number: 1,  name: 'Thoughtflare'},
    // Sorceries (7)
    {number: 2,  name: 'Goblin Rally'},
    {number: 2,  name: 'Krenko\'s Command'},
    {number: 1,  name: 'Mizzium Mortars'},
    {number: 1,  name: 'Teleportal'},
    {number: 1,  name: 'Wild Guess'},
    // Artifacts (2)
    {number: 2,  name: 'Izzet Keyrune'},
    // Enchantments (1)
    {number: 1,  name: 'Pursuit of Flight'},
    // Lands (25)
    {number: 12, name: 'Island'},
    {number: 12, name: 'Mountain'},
    {number: 1,  name: 'Izzet Guildgate'}
  ],
  sideboard: [
  ]
}

// Orzhov
var deckOrzhov = {
  name: 'Orzhov',
  version: 'original',
  cards: [
    // Creatures (20)
    {number: 2,  name: 'Basilica Guards'},
    {number: 3,  name: 'Basilica Screecher'},
    {number: 1,  name: 'Guardian Lions'},
    {number: 1,  name: 'High Priest of Penance'},
    {number: 2,  name: 'Kingpin\'s Pet'},
    {number: 1,  name: 'Knight of Obligation'},
    {number: 1,  name: 'Shadow Alley Denizen'},
    {number: 2,  name: 'Silvercoat Lion'},
    {number: 1,  name: 'Smog Elemental'},
    {number: 2,  name: 'Syndicate Enforcer'},
    {number: 1,  name: 'Tormented Soul'},
    {number: 1,  name: 'Treasury Thrull'},
    {number: 1,  name: 'Vizkopa Guildmage'},
    {number: 1,  name: 'Zombie Goliath'},
    // Instants (4)
    {number: 2,  name: 'Angelic Edict'},
    {number: 1,  name: 'Murder'},
    {number: 1,  name: 'Rain of Blades'},
    // Sorceries (2)
    {number: 1,  name: 'Executioner\'s Swing'},
    {number: 1,  name: 'Purge the Profane'},
    // Artifacts (3)
    {number: 1,  name: 'Jayemdae Tome'},
    {number: 2,  name: 'Orzhov Keyrune'},
    // Enchantments (5)
    {number: 1,  name: 'Blood Reckoning'},
    {number: 2,  name: 'Dying Wish'},
    {number: 1,  name: 'Gift of Orzhova'},
    {number: 1,  name: 'One Thousand Lashes'},
    // Lands (26)
    {number: 1,  name: 'Orzhov Guildgate'},
    {number: 12, name: 'Plains'},
    {number: 13, name: 'Swamp'}
  ],
  sideboard: [
  ]
}

// Rakdos
var deckRakdos = {
  name: 'Rakdos',
  version: 'original',
  cards: [
    // Creatures (23)
    {number: 1,  name: 'Bellows Lizard'},
    {number: 1,  name: 'Bloodfray Giant'},
    {number: 2,  name: 'Canyon Minotaur'},
    {number: 1,  name: 'Carnival Hellsteed'},
    {number: 1,  name: 'Cryptborn Horror'},
    {number: 2,  name: 'Gore-House Chainwalker'},
    {number: 1,  name: 'Hellhole Flailer'},
    {number: 1,  name: 'Minotaur Aggressor'},
    {number: 2,  name: 'Rakdos Cackler'},
    {number: 2,  name: 'Rakdos Shred-Freak'},
    {number: 1,  name: 'Ravenous Rats'},
    {number: 1,  name: 'Rix Maadi Guildmage'},
    {number: 1,  name: 'Sewer Shambler'},
    {number: 1,  name: 'Spawn of Rix Maadi'},
    {number: 3,  name: 'Tormented Soul'},
    {number: 2,  name: 'Zombie Goliath'},
    // Instants (2)
    {number: 1,  name: 'Auger Spree'},
    {number: 1,  name: 'Cower in Fear'},
    // Sorceries (3)
    {number: 1,  name: 'Assassin\'s Strike'},
    {number: 1,  name: 'Mind Rot'},
    {number: 1,  name: 'Traitorous Instinct'},
    // Artifacts (2)
    {number: 2,  name: 'Rakdos Keyrune'},
    // Enchantments (5)
    {number: 1,  name: 'Blood Reckoning'},
    {number: 2,  name: 'Crippling Blight'},
    {number: 1,  name: 'Deviant Glee'},
    {number: 1,  name: 'Shrieking Affliction'},
    // Lands (25)
    {number: 12, name: 'Mountain'},
    {number: 12, name: 'Swamp'},
    {number: 1,  name: 'Rakdos Guildgate'}
  ],
  sideboard: [
  ]
}

// Selesnya
var deckSelesnya = {
  name: 'Selesnya',
  version: 'original',
  cards: [
    // Creatures (17)
    {number: 1,  name: 'Arbor Elf'},
    {number: 1,  name: 'Axebane Stag'},
    {number: 1,  name: 'Brushstrider'},
    {number: 3,  name: 'Centaur Courser'},
    {number: 1,  name: 'Centaur Healer'},
    {number: 2,  name: 'Centaur\'s Herald'},
    {number: 1,  name: 'Healer of the Pride'},
    {number: 1,  name: 'Phantom General'},
    {number: 1,  name: 'Risen Sanctuary'},
    {number: 3,  name: 'Seller of Songbirds'},
    {number: 1,  name: 'Vitu-Ghazi Guildmage'},
    {number: 1,  name: 'Wayfaring Temple'},
    // Instants (11)
    {number: 2,  name: 'Chorus of Might'},
    {number: 1,  name: 'Druid\'s Deliverance'},
    {number: 2,  name: 'Eyes in the Skies'},
    {number: 1,  name: 'Heroes\' Reunion'},
    {number: 1,  name: 'Rootborn Defenses'},
    {number: 2,  name: 'Savage Surge'},
    {number: 2,  name: 'Trostani\'s Judgment'},
    // Sorceries (5)
    {number: 2,  name: 'Bountiful Harvest'},
    {number: 2,  name: 'Call of the Conclave'},
    {number: 1,  name: 'Coursers\' Accord'},
    // Artifacts (2)
    {number: 2,  name: 'Selesnya Keyrune'},
    // Lands (25)
    {number: 12, name: 'Forest'},
    {number: 11, name: 'Plains'},
    {number: 1,  name: 'Grove of the Guardian'},
    {number: 1,  name: 'Selesnya Guildgate'}
  ],
  sideboard: [
  ]
}

// Simic
var deckSimic = {
  name: 'Simic',
  version: 'original',
  cards: [
    // Creatures (22)
    {number: 2,  name: 'Adaptive Snapjaw'},
    {number: 1,  name: 'Chronomaton'},
    {number: 1,  name: 'Cloudfin Raptor'},
    {number: 2,  name: 'Crocanura'},
    {number: 1,  name: 'Crowned Ceratok'},
    {number: 2,  name: 'Drakewing Krasis'},
    {number: 1,  name: 'Elusive Krasis'},
    {number: 1,  name: 'Fathom Mage'},
    {number: 1,  name: 'Frilled Oculus'},
    {number: 1,  name: 'Ivy Lane Denizen'},
    {number: 2,  name: 'Kraken Hatchling'},
    {number: 1,  name: 'Leyline Phantom'},
    {number: 1,  name: 'Merfolk of the Depths'},
    {number: 1,  name: 'Sapphire Drake'},
    {number: 2,  name: 'Shambleshark'},
    {number: 1,  name: 'Zameck Guildmage'},
    // Instants (4)
    {number: 2,  name: 'Bioshift'},
    {number: 1,  name: 'Hindervines'},
    {number: 1,  name: 'Tower Defense'},
    // Sorceries (3)
    {number: 1,  name: 'Sleep'},
    {number: 1,  name: 'Unexpected Results'},
    {number: 1,  name: 'Urban Evolution'},
    // Artifacts (2)
    {number: 2,  name: 'Simic Keyrune'},
    // Enchantments (4)
    {number: 2,  name: 'Encrust'},
    {number: 2,  name: 'Forced Adaptation'},
    // Lands (26)
    {number: 12, name: 'Forest'},
    {number: 13, name: 'Island'},
    {number: 1,  name: 'Simic Guildgate'}
  ],
  sideboard: [
  ]
}

var myFunction = function(){
    // var node = document.createTextNode(deckAzorius.name);
    for(var i = 0; i < deckAzorius.cards.length; i++) {
      for(var k = 0; k < deckAzorius.cards[i].number; k++) {
        var para = document.createElement("p");
        var node = document.createTextNode(deckAzorius.cards[i].name);
        para.appendChild(node);
        var deck = document.getElementById("deck1");
        deck.appendChild(para);
      }
    }

    // deck.appendChild(deckAzorius)
}





