// All things array based

const gameBoard = (() => {
    const _Gameboard = {
        gameboard : ['', '', '', '', '', '', '', '', '']
    }

    
    const _boardContainer = document.querySelector('.board-container');

    function createBoard() {
        let array = _Gameboard["gameboard"];
        array.forEach((element, index) => {
            let div = document.createElement('div');
            div.classList.add('square');
            div.textContent = element;
            _boardContainer.appendChild(div);
            div.dataset.square = index;
        });
    }

    //How to add to specific index of the array
    function addToGameboard(index, marker){
        let array = _Gameboard["gameboard"];
        array.splice(index, 1, marker);
        createBoard();
    }

    const squares = document.querySelectorAll('.square');

    // squares.forEach((square) => {
    //     square.addEventListener('click', addToGameboard(square.dataset, 'x'));
    // });

    function addToBoard(event) {
        event.textContent = "XX";
    }

        squares.forEach((square) => {
        square.addEventListener('click', addToBoard(square));
    });

    return { createBoard, addToGameboard };
})();

//All things DOM based
const displayController = (() => {





})();

//All things player based 
const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
}

const player1 = Player('jj', 'X');
const player2 = Player('comp', 'O');

//displayController.createBoard();
//gameBoard.createBoard();
//gameBoard.addToGameboard(1, 'X');
gameBoard.createBoard();