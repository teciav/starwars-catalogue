// ------------------------------
// images of people (not on api)
// ------------------------------
const portraits = {
  'Luke Skywalker': 'https://imgix.bustle.com/inverse/1e/c0/22/d8/8ce9/4d63/8217/658d316403a0/mark-hamill-has-a-sexy-theory-about-luke-skywalker-returning-to-star-wars.jpeg?w=350&h=298&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal',
  'C-3PO': 'https://images.immediate.co.uk/production/volatile/sites/3/2019/10/EP9-FF-001686-336e75b.jpg?quality=90&resize=768,574',
  'R2-D2': 'https://i1.wp.com/gamehall.com.br/wp-content/uploads/2016/09/star-wars-r2-d2-life-size-figure-400277-06.jpg',
  'Darth Vader': 'https://styles.redditmedia.com/t5_2ueqg/styles/communityIcon_xg71qqnqlgl51.png',
  'Leia Organa': 'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F07%2Fleia-crop.jpeg',
  'Owen Lars': 'https://cdn1-www.superherohype.com/assets/uploads/2014/10/Joel2.jpg',
  'Beru Whitesun lars': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVnAq5cfOVbYqpzoJP4pFSSqU0Ft2FtJMnMF242wMwjU8GiC6lEbA_fgzoodUE0RVU-g&usqp=CAU',
  'R5-D4': 'https://static.turbosquid.com/Preview/2020/11/06__17_03_12/Product1.jpgAC5FE421-A3B4-4DD0-B811-AEAA5642D041Large.jpg',
  'Biggs Darklighter': 'https://comicvine.gamespot.com/a/uploads/scale_medium/14/145984/4902632-8136336329-biggs.jpg',
  'Obi-Wan Kenobi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDsX-Y4ABWAPa4HPvwYstQlpS13TCsPtBlqsr4bVZjqq6wSPoekJ9-sCWpVPI3iXfHiI&usqp=CAU',
  'Anakin Skywalker': 'https://i2.wp.com/judao.com.br/wp-content/uploads/2014/11/Vader_03.jpg',
  'Wilhuff Tarkin': 'https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png',
  'Chewbacca': 'https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png/revision/latest?cb=20171231005834',
  'Han Solo': 'https://fr.web.img3.acsta.net/r_1280_720/pictures/18/01/12/12/25/4629484.jpg',
  'Greedo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8eFGp3ZJ6iIRQskCFTtbYceKBWTOQhcWQtDp_9G53VbH7Iwlesta6-s8hQt4clDAqVE&usqp=CAU',
  'Jabba Desilijic Tiure': 'https://imperialtalker.files.wordpress.com/2016/06/gardulla1.jpeg?w=620',
  'Wedge Antilles': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg/220px-Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg',
  'Jek Tono Porkins': 'https://i.redd.it/kfvbjz2ootu41.jpg',
  'Yoda': 'https://www.raaskalderij.be/wp-content/uploads/dR_Yoda-300x288.jpg',
  'Palpatine': 'https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png',
  'Boba Fett': 'https://i.pinimg.com/originals/95/c3/93/95c3934ed2614c25ee4f8a10122c3aef.jpg',
  'IG-88': 'https://www.slashfilm.com/wp/wp-content/images/ig-11-e1579022857780.jpg',
  'Bossk': 'https://bbts1.azureedge.net/images/p/full/2020/03/ee35caf7-861a-4b03-9002-ce8bfe644b13.jpg',
  'Lando Calrissian': 'https://images.immediate.co.uk/production/volatile/sites/3/2018/07/Episode_V_Empire_Williams02-8b1652f.jpg?quality=90&resize=620,413',
  'Lobot': 'http://jedinet.com/wp-content/uploads/2017/03/FeaturedImage-3.png',
  'Ackbar': 'https://i.insider.com/5703cb0d9105842a008babcf?width=600&format=jpeg&auto=webp',
  'Mon Mothma': 'https://i.pinimg.com/originals/a5/ec/10/a5ec10a8bc0635f1fac0aa4b24de4e0b.jpg',
  'Arvel Crynyd': 'https://swrpggm.com/wp-content/uploads/2020/01/feature60-390x205-1.png',
  'Wicket Systri Warrick': 'https://www.simplemost.com/wp-content/uploads/2016/04/414.png',
  'Nien Nunb': 'https://i1.sndcdn.com/artworks-000137986692-zjtqs3-t500x500.jpg',
  'Qui-Gon Jinn': 'https://sm.ign.com/ign_nl/news/s/star-wars-/star-wars-liam-neeson-hasnt-been-approached-to-reprise-his-r_x8n7.jpg',
  'Nute Gunray': 'https://i.pinimg.com/originals/57/70/2b/57702b3d418b2c6142f85dbb925e5d9b.jpg',
  'Finis Valorum': 'https://pbs.twimg.com/profile_images/1273714675071561734/LOWwnK9D.jpg',
  'Padmé Amidala': 'https://www.theplace2.ru/archive/natalie_portman/img/fg-queen10-1000x1335.jpg',
  'Jar Jar Binks': 'https://i.guim.co.uk/img/media/47483aa712ebb9d482e9bd6ec46f2e8baad9df01/68_17_2254_1352/master/2254.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f6a102ac756571aedc28199a72b3c623',
  'Roos Tarpals': 'https://pbs.twimg.com/profile_images/1336016310862569477/rAOdcDBu_400x400.jpg',
  'Rugor Nass': 'https://i.pinimg.com/originals/dc/e5/93/dce593d573b424a4fd94bbf4f5e8496a.jpg',
  'Ric Olié': 'http://pm1.narvii.com/6456/dd241a6d2e3df03354e10a94885d02e442215601_00.jpg',
  'Watto': 'https://preview.redd.it/x8khygd3g1541.png?width=400&format=png&auto=webp&s=ce8ca70ab7ba09c96db791b4884b1507a43827e8',
  'Sebulba': 'https://i.pinimg.com/originals/3c/16/64/3c1664751906effb42fc0ecb9deafc75.jpg',
  'Quarsh Panaka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-IOAieqshe_CqgO0Vqg6RCA0l6u7gaUKujszbFxO3nJdpDV9nAXjtIc9P0tUXjfLPMg&usqp=CAU',
  'Shmi Skywalker': 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/anakin-skywalker-mi-vida-en-fotos/mama/7336274-1-esl-ES/Mama.jpg?resize=480:*',
  'Darth Maul': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3amm3SGHXLXkJS262yDUzb7zmrfh2a4BkuCV3Rjj1YQ5mOFEXc2GxxQBbqkL23k8hOI&usqp=CAU',
  'Bib Fortuna': 'https://upload.wikimedia.org/wikipedia/en/6/65/Bib_Fortuna_%28screenshot%29.jpg',
  'Ayla Secura': 'http://4.bp.blogspot.com/_wIW55V-xC00/SsVAyK2MCuI/AAAAAAAACeM/ueC3cHW_0A4/s400/aayla4.jpg',
  'Ratts Tyerel': 'https://www.giantbomb.com/a/uploads/scale_small/1/15405/453921-250px_rattshs.jpg',
  'Dud Bolt': 'https://live.staticflickr.com/4189/34620862606_6b154b90cc_b.jpg',
  'Gasgano': 'https://www.giantbomb.com/a/uploads/square_small/1/15405/453292-289px_gasganp.jpg',
  'Ben Quadinaros': 'https://jedibusiness.com/images/actionFigures/The-Vintage-Collection/The-Vintage-Collection-Ben-Quadinaros_Big_2.jpg',
  'Mace Windu': 'https://i.pinimg.com/originals/7e/16/66/7e1666ee797032b1ec652b0aad768d5b.png',
  'Ki-Adi-Mundi': 'https://pbs.twimg.com/profile_images/1263240441148956679/-Ohpkk1F_400x400.jpg',
  'Kit Fisto': 'https://www.skaditoys.com/wp-content/uploads/2020/10/668522ed-68cb-4b54-ab47-612eb79432ec.jpg',
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