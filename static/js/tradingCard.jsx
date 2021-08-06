"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  }
]

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

ReactDOM.render(
  (
    <TradingCard
      name="Balloonicorn"
      skill="video games"
      imgUrl="/static/img/balloonicorn.jpg"
    />
  ),
  document.querySelector('#balloonicorn') //from cards.html divs
);

ReactDOM.render(
  (
    <TradingCard
      name="Float"
      skill="baking pretzels"
      imgUrl="/static/img/float.jpg"
    />
  ),
  document.querySelector('#float') //from cards.html divs
);

ReactDOM.render(
  (
    <TradingCard
      name="Llambda"
      skill="knitting scarves"
      imgUrl="/static/img/llambda.jpg"
    />
  ),
  document.querySelector('#llambda')  //from cards.html divs
);
//////
ReactDOM.render(
  (
    <TradingCard
      name="Pollo"
      skill="Eating chips"
      imgUrl="/static/img/polymorphism.jpeg"
    />
  ),
  document.querySelector('#pollo')  //from cards.html divs
);

  ReactDOM.render(
    (
      <TradingCard
      name="pancake bebe"
      skill="sleeping"
      imgUrl="static/img/shortstack-overflow.jpeg"
      />
    ), 
  document.querySelector('#pancake-bebe')
);