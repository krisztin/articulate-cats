const cats = [
  {
      breed:'Scottish fold',
      description:'The Scottish Fold is a breed of domestic cat with a natural dominant-gene mutation that affects cartilage throughout the body, causing the ears to “fold, ” bending forward and down towards the front of the head, which gives the cat what is often described as an “owl-like” appearance',
      pros:'Owl ears, perfectly round face, will fit inside any box',
      cons:'None',
      imgurl:'https://ichef.bbci.co.uk/news/624/cpsprodpb/5D01/production/_95790832_gettyimages-516700094.jpg'
  }, 
  {
      breed:'Persian',
      description:'The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the “Persian Longhair” in the English-speaking countries',
      pros:'Makes you look like a criminal mastermind',
      cons:'Will cover your trousers in hair',
      imgurl:'http://britishlibrary.typepad.co.uk/.a/6a00d8341c464853ef01b7c7e529e2970b-pi'
  }, 
  {
      breed:'Sphynx',
      description:'The Sphynx cat is a breed of cat known for its lack of coat. It was developed through selective breeding, starting in the 1960s. The skin should have the texture of chamois, as it has fine hairs, or they may be completely hairless',
      pros:'Feels like warm suede, if you like that sort of thing',
      cons:'Not enough fluff, low cuddle rating',
      imgurl:'http://www.freeportvet.com/sites/default/files/styles/large/adaptive-image/public/sphynx-cat-breed-info_0.jpg?itok=W_4tBMxD'
  }, 
  {
      breed:'British shorthair',
      description:'The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively chunky body, dense coat and broad face',
      pros:'Endearing teddy bear face',
      cons:'Intense and disquieting gaze',
      imgurl:'https://dailystory.me/wp-content/uploads/2018/05/1-77.jpg'
  },
  {
      breed:'Bengal',
      description:'The Bengal is a domestic cat breed developed to look like exotic wild cats such as leopards, ocelots, margays and clouded leopards',
      pros:'Exotic appearance',
      cons:'Will not sit still for a second',
      imgurl:'https://d32xvgr96w2oxp.cloudfront.net/2017/01/chat-bengal2.jpg'
  },
      {
      breed:'Labrador',
      description:'The Labrador Retriever, or just Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United States',
      pros:'A very good boy',
      cons:'Not actually a cat',
      imgurl:'https://static1.squarespace.com/static/573b62e9746fb941c1458dcd/t/58bf1f27d1758e5d0c580379/1488921550603/who-we-are.jpg',
      imgurlFake: 'https://catzone-tcwebsites.netdna-ssl.com/wp-content/uploads/2017/10/orange-cat-names-2.jpg'
  },

]
const main = document.getElementById('content');
let dog
console.log("Hi there fellow dev! Click it to win it!")

cats.forEach(cat => {
  let baseOutput = `
        </div>
      <section class="meta-wrapper">
        <p>${cat.description}</p>
        <div class="row nowrap align-centre">
          <h3 class="pro" aria-label="Pros">+</h3>
          <p><small>${cat.pros}</small></p>
        </div>
        <div class="row nowrap align-centre">
          <h3 class="con" aria-label="Cons">-</h3>
          <p><small>${cat.cons}</small></p>
        </div>
      </section>
    </article>
  `
  let catOutput = `
    <article class="card">
      <div class="img-wrapper">
        <h2 class="breed">${cat.breed}</h2>
        <img src="${cat.imgurl}" alt="${cat.breed}">
    `
  let dogOutput = `
    <article class="card dog">
      <div class="img-wrapper">
        <h2 class="breed">${cat.breed}<span class="hidden"> - Meow?</span></h2>
        <img class="hidden" src="${cat.imgurl}" alt="${cat.breed}">
        <img class="fake" src="${cat.imgurlFake}" alt="${cat.breed}">
    `

  if (cat.breed == 'Labrador') {
    main.innerHTML += dogOutput + baseOutput
    dog = document.querySelector('.dog')
  } else {
    main.innerHTML += catOutput + baseOutput 
  }
});

dog.addEventListener('click', function(){
  const catImg = document.querySelector('.fake')
  const dogImg = document.querySelectorAll('.hidden')
  dogImg.forEach(hidden => hidden.classList.remove('hidden'))
  catImg.classList.add('hidden')

  console.log("Congrats you've won!")
})