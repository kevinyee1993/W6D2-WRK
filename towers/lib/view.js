
class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupTowers();
  }

  setupTowers() {
    // const $ul = $('<ul></ul>');
    // this.$el.append($ul);

    for(let i = 0; i < 3; i++) {
      this.$el.append($(`<ul class='towers${i}'></ul>`));
    }

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        $('ul').eq(j).append($(`<li class=''></li>`));
      }
    }

    const $ul = $('ul');
    const $hanoi = $('hanoi');
    const $allLi = $('li');

    $ul.css({
      'float': 'left',
      'border-bottom': '10px solid red',
      'width': '20%',
      'list-style': 'none',
      'margin': '15px',
      'padding': '0px',

    });

    $hanoi.css({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-between'
    });

    for(let i = 0; i < 3; i++) {
      $('.towers0').children().eq(i).addClass(`disc${i}`);
    }

    setInterval( () => {
      const $li = $('li').eq(Math.floor(Math.random() * 9));
      const disc = `disc${Math.floor(Math.random() * 3)}`;
      $li.removeClass();
      $li.addClass(disc);
    }, 100);
  }



}

module.exports = View;
