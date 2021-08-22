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
  'Kit Fisto': 'https://pbs.twimg.com/media/EN3VjSGX0AYD7mD.jpg',
  'Eeth Koth': 'https://pm1.narvii.com/6126/5d2eb337b58e91cdc33319a745ef66c127eb4d69_hq.jpg',
  'Adi Gallia': 'http://vignette1.wikia.nocookie.net/starwars/images/c/c8/AdiGallia2-SWE.jpg/revision/latest?cb=20111115045121',
  'Saesee Tiin': 'http://4.bp.blogspot.com/_Ql-01uFvGJM/TJAe7QjEhoI/AAAAAAAACLI/9wrBZ4tSeGc/s1600/saesee_face2.jpg',
  'Yarael Poof': 'https://i.pinimg.com/originals/54/4c/fd/544cfd937ac06b403688acd3bd4e162e.jpg',
  'Mas Amedda': 'https://www.starwars-universe.com/images/encyclopedie/especes/avatars_v6/chagrian_avv6.jpg',
  'Gregar Typho': 'https://lumiere-a.akamaihd.net/v1/images/captain-typho_f9e8d7bd.jpeg?region=0%2C0%2C1186%2C668&width=960',
  'Cordé': 'https://i.pinimg.com/originals/d8/bc/36/d8bc36174acdf28f7bad003e1d029050.jpg',
  'Cliegg Lars': 'https://images-na.ssl-images-amazon.com/images/I/51iKq7WmwTL._AC_SX466_.jpg',
  'Poggle the Lesser': 'https://i.pinimg.com/736x/cd/51/20/cd5120a0a89f33bf2c2f54dcb8944c02.jpg',
  'Luminara Unduli': 'https://i.pinimg.com/originals/be/50/d9/be50d966ba399a8da1577d402a28c95b.jpg',
  'Barriss Offee': 'http://image.space.rakuten.co.jp/lg01/92/0000411792/44/img49b48eb2xnujke.jpeg',
  'Dormé': 'https://pbs.twimg.com/media/EdsZorfXoAE7M5e.jpg',
  'Dooku': 'https://i.pinimg.com/236x/b1/b2/0a/b1b20a1f3d6af868556666ac984c1477--count-dooku-star-wars.jpg',
  'Bail Prestor Organa': 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/08/Bail_Organa.jpeg',
  'Jango Fett': 'https://www.twilight-zone.nl/WebRoot/Pins/Shops/Twilightzone/5F8E/FFC9/5D90/D2F8/057B/0A0C/05B8/B88C/SSHOT903741_0_ml.jpg',
  'Zam Wesell': 'https://i.pinimg.com/originals/bb/d7/44/bbd744db73d429e05c60d87643d1b6fe.jpg',
  'Dexter Jettster': 'https://pbs.twimg.com/profile_images/808418219731996672/iFgUn3zn_400x400.jpg',
  'Lama Su': 'https://farm8.staticflickr.com/7032/13765287514_70068e3971.jpg',
  'Taun We': 'https://pbs.twimg.com/media/D_xpDGGXYAAH04D.jpg',
  'Jocasta Nu': 'https://rebellegion.com/wp-content/uploads/2014/02/jocasta-240x240.jpg',
  'R4-P17': 'https://jedibusiness.com/images/actionFigures/Saga-Legends/Saga-Legends-R4-P17_Big_2.jpg',
  'Wat Tambor': 'https://i.pinimg.com/736x/ff/02/ed/ff02eda1686d23d053773f122827739b.jpg',
  'San Hill': 'http://starwarsreadingorder.com/images/characters/san_hill.jpg',
  'Shaak Ti': 'https://live.staticflickr.com/7304/9303195193_76aac44e8d_b.jpg',
  'Grievous': 'https://lumiere-a.akamaihd.net/v1/images/grievous-meets-anakin_f17a5f58.jpeg?region=300%2C109%2C1613%2C806&width=960',
  'Tarfful': 'https://pbs.twimg.com/profile_images/686344047099686912/IuNqRnSj_400x400.jpg',
  'Raymus Antilles': 'https://pbs.twimg.com/profile_images/620167640141574145/QDA11zHw_400x400.jpg',
  'Sly Moore': 'https://pm1.narvii.com/6087/7a053912d29058cf3b4375517b0020fd6c41dd05_hq.jpg',
  'Tion Medon': 'https://i.pinimg.com/originals/13/95/dd/1395dd510a01f40e6061c3fa65452b6d.jpg',
  'Plo Koon': 'https://vignette.wikia.nocookie.net/jedipedia/images/6/6e/PloKoonPortr%C3%A4t.jpg/revision/latest/top-crop/width/360/height/360?cb=20100425120213&path-prefix=de',
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