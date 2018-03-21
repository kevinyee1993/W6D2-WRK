class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.currentPlayer = 0;
  }

  bindEvents() {
    const $ul = $('ul');

    $ul.on('mouseover', (event) => {
      const $li = $(event.target);
      $li.css({
        'backgroundColor': 'yellow'
      });
    });

    $ul.on('click', (event) => {
      const $li = $(event.target);
      if ($li.text() === "") {
        this.makeMove($li);
      } else {
        alert("INVALID MOVE");
      }
    });


    $ul.on('mouseout', (event) => {
      const $li = $(event.target);
      $li.css({
        'backgroundColor': 'grey'
      });
    });


  }


  makeMove($square) {
    if (this.currentPlayer === 0) {
      $square.text('X');
      this.currentPlayer = 1;
    } else {
      $square.text('O');
      this.currentPlayer = 0;
    }
    let pos = $square.attr('id');
    let x = parseInt(pos[0]);
    let y = parseInt(pos[1]);
    this.game.playMove([x, y]);
    if(this.game.isOver()) {
      window.setInterval( () => {
        this.crazyWinner();
      }, 50)
    }
  }

  setupBoard() {
    const $ul = $('<ul></ul>');

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        $ul.append($(`<li id=${rowIdx}${colIdx} class="box"></li>`));
      }
    }

    this.$el.append($ul);

    $ul.css( {
      'width': '600px',
      'height': '600px',
      'padding': '0px'
    });

    const $arrOfLi = $('.box');

    $arrOfLi.css( {
      'backgroundColor': 'grey',
      'border': '1px solid black',
      'listStyle': 'none',
      // 'width': '32%',
      // 'height': '32%',
      'width': '33%',
      'height': '33%',
      'float': 'left',
      'font-family': 'Sans-Serif',
      'font-size': '175px',
      'display': 'block',
      'text-align': 'center'
    });

    $('body').css({
      'display': 'flex',
      'flex-direction': 'column',
      'position': 'relative',
      'top': '50%',
      'left': '30%'
    });

  }

  randomColor() {
    const HEX_DIGITS = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  }

  crazyWinner() {
    const $ul = $('ul');
    const $arrOfLi = $('li');

    for (let i = 0; i < $arrOfLi.length; i++) {
      let color = this.randomColor();
      $arrOfLi.eq(i).css( {
        'backgroundColor': color
      });
    }

    const $body = $('body');

    let color2 = this.randomColor();
    $body.css({
      'backgroundColor': color2
    });

    cornify_add();
  }
}

module.exports = View;
