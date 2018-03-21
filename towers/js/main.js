const HanoiGame = require('../lib/game');
const HanoiView = require('../lib/view');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
