// ------------------------------
// images of people (not on api)
// ------------------------------
const portraits = {
  'Luke Skywalker': 'https://static.wikia.nocookie.net/shaniverse/images/b/bc/LukeKnight.jpg/revision/latest/scale-to-width-down/350?cb=20201222172625',
  'C-3PO': 'https://static.wikia.nocookie.net/disney/images/c/cc/Profile_-_C-3PO.jpg/revision/latest?cb=20200418144012',
  'R2-D2': 'https://i1.wp.com/gamehall.com.br/wp-content/uploads/2016/09/star-wars-r2-d2-life-size-figure-400277-06.jpg',
  'Darth Vader': 'https://styles.redditmedia.com/t5_2ueqg/styles/communityIcon_xg71qqnqlgl51.png',
  'Leia Organa': 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F07%2Fleia-crop.jpeg',
  'Owen Lars': 'https://cdn1-www.superherohype.com/assets/uploads/2014/10/Joel2.jpg',
  'Beru Whitesun lars': 'https://static.wikia.nocookie.net/starwars/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20070625220148',
  'R5-D4': 'https://static.turbosquid.com/Preview/2020/11/06__17_03_12/Product1.jpgAC5FE421-A3B4-4DD0-B811-AEAA5642D041Large.jpg',
  'Biggs Darklighter': 'https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
  'Obi-Wan Kenobi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDsX-Y4ABWAPa4HPvwYstQlpS13TCsPtBlqsr4bVZjqq6wSPoekJ9-sCWpVPI3iXfHiI&usqp=CAU',
  'Anakin Skywalker': 'https://static.wikia.nocookie.net/star-wars-canon/images/7/7e/Anakinskywalker_rots_promo.jpg/revision/latest?cb=20210510133806',
  'Wilhuff Tarkin': 'https://static.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg/revision/latest?cb=20100620213033',
  'Chewbacca': 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834',
  'Han Solo': 'https://fr.web.img3.acsta.net/r_1280_720/pictures/18/01/12/12/25/4629484.jpg',
  'Greedo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8eFGp3ZJ6iIRQskCFTtbYceKBWTOQhcWQtDp_9G53VbH7Iwlesta6-s8hQt4clDAqVE&usqp=CAU',
  'Jabba Desilijic Tiure': 'https://imperialtalker.files.wordpress.com/2016/06/gardulla1.jpeg?w=620',
  'Wedge Antilles': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg/220px-Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg',
  'Jek Tono Porkins': 'https://i.redd.it/kfvbjz2ootu41.jpg',
  'Yoda': 'https://static.wikia.nocookie.net/starwars/images/8/89/Yoda_TPM.jpg/revision/latest/scale-to-width-down/250?cb=20070331184857&path-prefix=nl',
  'Palpatine': 'https://static.wikia.nocookie.net/awakening-of-the-rebellion/images/1/15/Battlefront_Palpatine.png/revision/latest?cb=20181019022059',
  'Boba Fett': 'https://i.pinimg.com/originals/95/c3/93/95c3934ed2614c25ee4f8a10122c3aef.jpg',
  'IG-88': 'https://static.wikia.nocookie.net/starwars/images/a/aa/IG-88B-ESB.jpg/revision/latest?cb=20151130035541',
  'Bossk': 'https://static.wikia.nocookie.net/starwars/images/1/1d/Bossk.png/revision/latest?cb=20130219044712',
  'Lando Calrissian': 'https://static.wikia.nocookie.net/ptstarwars/images/7/7d/Lando_WoSW.jpg/revision/latest/top-crop/width/360/height/450?cb=20160426234010',
  'Lobot': 'http://jedinet.com/wp-content/uploads/2017/03/FeaturedImage-3.png',
  'Ackbar': 'https://i.insider.com/5703cb0d9105842a008babcf?width=600&format=jpeg&auto=webp',
  'Mon Mothma': 'https://static.wikia.nocookie.net/disney/images/5/53/Rogue_One_photography_10.png/revision/latest?cb=20161107143007',
  'Arvel Crynyd': 'https://static.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20120113223349',
  'Wicket Systri Warrick': 'https://www.simplemost.com/wp-content/uploads/2016/04/414.png',
  'Nien Nunb': 'https://i1.sndcdn.com/artworks-000137986692-zjtqs3-t500x500.jpg',
  'Qui-Gon Jinn': 'https://static.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg/revision/latest?cb=20180430174809',
  'Nute Gunray': 'https://static.wikia.nocookie.net/starwars/images/5/5f/Nute_Gunray.jpg/revision/latest?cb=20070123071930&path-prefix=nl',
  'Finis Valorum': 'https://pbs.twimg.com/profile_images/1273714675071561734/LOWwnK9D.jpg',
  'Padmé Amidala': 'https://www.theplace2.ru/archive/natalie_portman/img/fg-queen10-1000x1335.jpg',
  'Jar Jar Binks': 'https://static.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg/revision/latest/top-crop/width/360/height/360?cb=20080303052132',
  'Roos Tarpals': 'https://static.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg/revision/latest?cb=20180218034913',
  'Rugor Nass': 'https://i.pinimg.com/originals/dc/e5/93/dce593d573b424a4fd94bbf4f5e8496a.jpg',
  'Ric Olié': 'http://pm1.narvii.com/6456/dd241a6d2e3df03354e10a94885d02e442215601_00.jpg',
  'Watto': 'https://static.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg/revision/latest?cb=20081222024729',
  'Sebulba': 'https://i.pinimg.com/originals/3c/16/64/3c1664751906effb42fc0ecb9deafc75.jpg',
  'Quarsh Panaka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-IOAieqshe_CqgO0Vqg6RCA0l6u7gaUKujszbFxO3nJdpDV9nAXjtIc9P0tUXjfLPMg&usqp=CAU',
  'Shmi Skywalker': 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/anakin-skywalker-mi-vida-en-fotos/mama/7336274-1-esl-ES/Mama.jpg?resize=480:*',
  'Darth Maul': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3amm3SGHXLXkJS262yDUzb7zmrfh2a4BkuCV3Rjj1YQ5mOFEXc2GxxQBbqkL23k8hOI&usqp=CAU',
  'Bib Fortuna': 'https://upload.wikimedia.org/wikipedia/en/6/65/Bib_Fortuna_%28screenshot%29.jpg',
  'Ayla Secura': 'https://static.wikia.nocookie.net/starwars/images/4/4d/Aayla_Secura_SWE.png/revision/latest?cb=20180121065247',
  'Ratts Tyerel': 'https://static.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg/revision/latest?cb=20111117040905',
  'Dud Bolt': 'https://static.wikia.nocookie.net/starwars/images/b/b0/Dud_Bolt.jpg/revision/latest/top-crop/width/360/height/360?cb=20061130092516',
  'Gasgano': 'https://static.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg/revision/latest?cb=20120112024006',
  'Ben Quadinaros': 'https://static.wikia.nocookie.net/forcecast/images/4/4d/BenQuadinaros.jpg/revision/latest?cb=20110206053554',
  'Mace Windu': 'https://static.wikia.nocookie.net/starwars/images/f/fc/Mace_Windu.jpg/revision/latest?cb=20071230055326',
  'Ki-Adi-Mundi': 'https://static.wikia.nocookie.net/headhuntersholosuite/images/7/79/Ki-Adi-Mundi.jpg/revision/latest?cb=20190223224114',
  'Kit Fisto': 'https://static.wikia.nocookie.net/starwars/images/d/db/Kit_Fisto.jpg/revision/latest?cb=20160830100312&path-prefix=nl',
  'Eeth Koth': 'https://static.wikia.nocookie.net/tgr-discord-server/images/c/c3/EethKothRPPFP.png/revision/latest?cb=20201018213907',
  'Adi Gallia': 'https://static.wikia.nocookie.net/starwars/images/b/ba/AdiGallia.jpg/revision/latest?cb=20080126123820',
  'Saesee Tiin': 'https://static.wikia.nocookie.net/ptstarwars/images/6/68/Saesee_Tiin_Card_Trader.jpg/revision/latest/top-crop/width/360/height/450?cb=20200129210959',
  'Yarael Poof': 'https://static.wikia.nocookie.net/starwars/images/b/b2/YaraelPoof-SWCT.png/revision/latest?cb=20200810053344',
  'Mas Amedda': 'https://static.wikia.nocookie.net/starwars/images/3/3f/Mas12432.jpg/revision/latest?cb=20130913002346',
  'Gregar Typho': 'https://static.wikia.nocookie.net/starwars/images/d/d3/CaptainTypho-SWCT.png/revision/latest/scale-to-width-down/250?cb=20200810045622',
  'Cordé': 'https://static.wikia.nocookie.net/starwars/images/d/de/Cord%C3%A9.jpg/revision/latest?cb=20130225181527',
  'Cliegg Lars': 'https://static.wikia.nocookie.net/esstarwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest/top-crop/width/360/height/450?cb=20160209173800',
  'Poggle the Lesser': 'https://static.wikia.nocookie.net/greatmultiverse/images/2/26/Poggle_HS.jpg/revision/latest?cb=20141114003000',
  'Luminara Unduli': 'https://i.pinimg.com/originals/be/50/d9/be50d966ba399a8da1577d402a28c95b.jpg',
  'Barriss Offee': 'https://static.wikia.nocookie.net/starwars/images/3/37/Barrisprofile2.jpg/revision/latest?cb=20070728014608',
  'Dormé': 'https://static.wikia.nocookie.net/starwars/images/8/8a/Dorme-SWCT.png/revision/latest?cb=20200810005633',
  'Dooku': 'https://static.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg/revision/latest?cb=20090515142150&path-prefix=nl',
  'Bail Prestor Organa': 'https://static.wikia.nocookie.net/starwars/images/5/50/Bail_Organa_Mug.jpg/revision/latest?cb=20080823033853',
  'Jango Fett': 'https://static.wikia.nocookie.net/starwars/images/c/cc/JangoFett-OP.jpg/revision/latest?cb=20100202215525',
  'Zam Wesell': 'https://static.wikia.nocookie.net/starwarsofthecaribbean/images/3/30/Zam-4.jpg/revision/latest?cb=20121231090546',
  'Dexter Jettster': 'https://static.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg/revision/latest?cb=20111106014007',
  'Lama Su': 'https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest?cb=20080117165735',
  'Taun We': 'https://pbs.twimg.com/media/D_xpDGGXYAAH04D.jpg',
  'Jocasta Nu': 'https://static.wikia.nocookie.net/starwars/images/4/44/Jocasta_Nu.jpg/revision/latest?cb=20090909121527',
  'R4-P17': 'https://jedibusiness.com/images/actionFigures/Saga-Legends/Saga-Legends-R4-P17_Big_2.jpg',
  'Wat Tambor': 'https://i.pinimg.com/736x/ff/02/ed/ff02eda1686d23d053773f122827739b.jpg',
  'San Hill': 'https://static.wikia.nocookie.net/swfanon/images/8/8a/3429_plageuis.jpg/revision/latest/top-crop/width/360/height/450?cb=20110308151336',
  'Shaak Ti': 'https://static.wikia.nocookie.net/starwars/images/0/0e/ShaakTiGOH.jpg/revision/latest?cb=20190612230423',
  'Grievous': 'https://static.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg/revision/latest?cb=20100630082056',
  'Tarfful': 'https://static.wikia.nocookie.net/starwars/images/d/d9/Tarfful-TSWB.png/revision/latest?cb=20201025195948',
  'Raymus Antilles': 'https://pbs.twimg.com/profile_images/620167640141574145/QDA11zHw_400x400.jpg',
  'Sly Moore': 'https://pm1.narvii.com/6087/7a053912d29058cf3b4375517b0020fd6c41dd05_hq.jpg',
  'Tion Medon': 'https://static.wikia.nocookie.net/headhuntersholosuite/images/9/9a/Tion_Medon_002.jpg/revision/latest?cb=20190206143127',
  'Plo Koon': 'https://static.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png/revision/latest?cb=20180213154354',
}


// ------------------------------
// retrieving data
// ------------------------------
// one object
function fetchData(url) {
  return fetch(url).then(res => res.json())
}

//  all people (multiple pages) from api
async function getPeople(url) {
  const results = [];

  // go over all pages and add to array of results
  do {
   const res = await fetch(url, { mode: 'cors' });
   const data = await res.json();
   url = data.next;
   results.push(...data.results);
  } while(url)

  return results;
}


// ------------------------------
// create the cards
// ------------------------------
const printPortraits = (card, person) => {
  const personPortrait = document.createElement("div");
  personPortrait.setAttribute('class', 'portrait');
  card.appendChild(personPortrait);
  personPortrait.style.background = `url(${portraits[person.name]}) top / cover no-repeat`;
}

const printInfo = (card, person) => {
  const cardContent = [
    `Name: ${person.name}`,
    `Year of birth: ${person.birth_year}`,
    `Gender: ${person.gender}`,
    `Hair color: ${person.hair_color}`,
    `Skin color: ${person.skin_color}`,
    `Height: ${person.height}cm`,
  ]

  cardContent.forEach(function(el) {
    const par = document.createElement("p");
    par.innerHTML = el;
    card.appendChild(par);
  });
}

const printHomeworld = (card, person) => {
  (async () => {
    const planet = await fetchData(person.homeworld);
    const planetEl = document.createElement("p");
    planetEl.innerHTML = `Homeworld: ${planet.name}`;
    card.appendChild(planetEl);
  })()
}

const setAttributes = (el, attrs) => {
  for(const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const createCardLink = (person, container) => {
  let personNumber = person.url.split('/')[5];
  const cardLink = document.createElement("a");

  setAttributes(cardLink, {"href": `./details.html?${personNumber}`, "target": "_blank", "class": "card-link"});
  createCard(person, cardLink);
  container.appendChild(cardLink);
}

const createCard = (person, container) => {
  // create card element
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  printPortraits(card, person);
  printInfo(card, person);
  printHomeworld(card, person);
  container.appendChild(card);
}


// -------------------
// change document title
// -------------------
const changeDocTitle = (person) => document.title = `${person.name}`;


// ------------
// search
// ------------
const search = () => {
  let input = document.getElementById('search-box').value.toUpperCase();
  const card = document.getElementsByClassName("card");

  for (i = 0; i < card.length; i++) {
    if (card[i].textContent.toUpperCase().includes(input)) {
      card[i].parentElement.style.display = "";
    } else {
      card[i].parentElement.style.display = "none";
    }
  }
}



// -----------------------------------
// calling the functions in each page
// -----------------------------------
const cataloguePage = document.getElementById('catalogue-page');
const detailPage = document.getElementById('detail-page');

// catalogue page
if (typeof(cataloguePage) != 'undefined' && cataloguePage != null) {
  const cardsContainer = document.getElementsByClassName("cards-container")[0];

  (async () => {
    const people = await getPeople('https://swapi.dev/api/people/');

    people.forEach((person) => {
      createCardLink(person, cardsContainer);
    });
  })()

  // add search functionality
  document.getElementById("search-box").addEventListener("keyup", search);
}


// details page
if (typeof(detailPage) != 'undefined' && detailPage != null) {

  const apiNumber =  window.location.href.split('?')[1];
  const infoContainer = document.getElementsByClassName("info-container")[0];

  (async () => {
    const person = await fetchData(`https://swapi.dev/api/people/${apiNumber}/`);
    createCard(person, infoContainer);
    changeDocTitle(person);
  })()
}