import React from 'react';

const cards = [
  '4 credit production, 3 credit',
  '1 ocean, 2 energy production, -3 credit',
  'energy and plant production, 2 plants',
  'plant production, 3 cards',
  '-1 credit production, 2 plant production',
  '6 credit production, -6 credits',
  '2 credit production, 1 plant production',
  '21 credits',
  '1 plant production, 1 city',
  '1 plant production, play a card from hand ignoring global requirements',
  'play a card from hand with a 25 credit reduction',
  '1 grenery, reveal cards until you get 2 cards with plant tags. Take both.',
  '2 titanium production, -5 credit',
  '2 ocean tiles',
  'raise temp 3, -5 credit',
  '1 titanium production, 1 card',
  '-2 credit production, 30 credits',
  'energy and steel production, 6 credits',
  'raise temp, 4 titanium and 4 steel',
  'credit, steel and titanium production',
  '2 steel production, 4 steel',
  '3 heat production, 3 heat',
  '1 steel and 2 heat production, 2 heat',
  '1 plant production, 1 TR, 5 credit',
  '1 titanium production, 4 titanium',
  '2 heat production, 1 ocean',
  '3 energy production',
  '1 credit production, 3 cards',
  '2 credit production, 1 city',
  'raise oxygen 2, 5 steel',
  '(-1 credit, 1 plant, 1 energy, 1 heat) production',
  '2 energy production, 4 steel',
  '3 titanium, 8 steel, 3 plants',
  '3 TR, 1 card',
  '6 titanium, reveal cards until you get 2 space tags, take both'
];

function App() {
  const idxs = new Set()
  while (idxs.size < 4) {
    const newIdx = Math.floor(Math.random() * cards.length);
    if (!idxs.has(newIdx)) {
      idxs.add(newIdx)
    }
  }

  const cardEls = [...idxs].map(idx => (
    <p key={idx}>
      {cards[idx]}
    </p>
  ))
  console.log(cardEls);
  console.log(idxs)
  return (
    <div>
      {cardEls}
    </div>
  );
}

export default App;
