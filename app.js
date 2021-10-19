// COLOR PALETTE
function makePalette() {
    const PALETTE = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'white',
        'gray',
        'black'
    ]

    for(let i = 0; i < PALETTE.length; i++) {
        const color = PALETTE[i];
        const nextColor = PALETTE[i + 1];

        $('.palette').append('<button>')
            .find('button:last')
            .css('background-color', color);
    }

    $('.palette button').first().addClass('active');
}

makePalette();

// GRID
function makeGrid() {
    for(let i = 0; i < 64; i++) {
        let newDiv = $('<div class="cell"></div>');
        $('.grid').append(newDiv);
    }
}

makeGrid();

// CLICK COLOR CLICK GRID
function onPaletteClick() {
    $('.palette button.active').removeClass('active').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
}

$('.palette button').click(onPaletteClick);

function onGridClick(event) {
    let moveColor = $('.palette button.active').css('background-color');

    if($(event.target).css('background-color') === moveColor) {
        $(event.target).css('background-color', '');
    } else {
        $(event.target).css('background-color', moveColor) 
    }
}

$('.grid .cell').click(onGridClick);

// APP BUTTONS
function onClearClick() {
    $('.grid .cell').css('background-color', '')
}

$('.controls .clear').click(onClearClick);

function onFillAllClick() {
    let fillColor = $('.palette button.active').css('background-color');
    $('.grid .cell').css('background-color', fillColor);
}

$('.controls .fill-all').click(onFillAllClick);

function onFillEmptyClick() {
    let useColor = $('.palette button.active').css('background-color');
    const emptyCells = $('.grid .cell');

    for (let i = 0; i < emptyCells.length; i = i + 1) {
        let nextEmptyCell = $(emptyCells[i]);

        if (nextEmptyCell.css('background-color') === 'rgba(0, 0, 0, 0)') {
            $(nextEmptyCell).css('background-color', useColor);
        }
    }
}

$('.controls .fill-empty').click(onFillEmptyClick);