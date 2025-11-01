const card = [{
  image: src = "/static/compass.jpeg",
  quote: "<strong>Find</strong> your passion and figure out how to get paid for it.",
  stars: 4
}, {
  image: src = "/static/ali.webp",
  quote: "<strong>Never</strong> hit anyone unless they are an immediete threat.",

}, {
  image: src = "/static/decision.webp",
  quote: "<strong>Go</strong> with the decision that will make for a good story",

}, {
  image: src = "/static/don.png",
  quote: "<strong>Lower </strong>your standards for no one."
}, {
  image: src = "/static/compassion.jpeg",
  quote: "<strong>Manliness</strong> is not only being able to take care of yourself, but others as well.."
}, {
  image: src = "/static/stages_of_life.jpg",
  quote: "<strong>You</strong> are not immortal. You don't have forever. Time is precious and will run out."
}, {
  image: src = "/static/anaD.jpeg",
  quote: "<strong>Go </strong>for women out of your leauge. You may end up surprised"
}, {
  image: src = "/static/coolWalk.gif",
  quote: "<strong>Walk</strong> like the king, or walk like you don't care who the king is."
}, {
  image: src = "/static/burningMoney.jpeg",
  quote: "<strong>Never</strong> lend anything you can't afford to lose."
}, {
  image: src = "/static/fake_it.gif",
  quote: "<strong>If</strong> you aren't confident, fake it. It will come around.."
}, {
  image: src = "/static/eye.gif",
  quote: "<strong>Always </strong>look a person in the eye when you talk to them."
}, {
  image: src = "/static/tools.webp",
  quote: "<strong>Buy</strong> high quality tools, so you only have to buy them once."
}, {
  image: src = "/static/neverGiveUp.jpeg",
  quote: "<strong>Don't</strong> quit! Life can pile on but only you can quit."
}];

let cardHTML = '';

card.forEach((card) => {
  cardHTML += `
 <div class="cardBody">
 <div><img src="${card.image}" /></div> 
   <div class="cardName">${card.quote}</div>
   <button>Share</button>
   <span>&#10084</span>
 </div>
 `;
});


document.querySelector('.frame').innerHTML = cardHTML