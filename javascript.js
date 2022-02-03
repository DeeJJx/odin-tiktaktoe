// All things array based and display board in DOM

const Gameboard = (() => {

    let gameBoardArray = ['', '', '','', '', '','', '', ''];
    const _boardContainer = document.querySelector('.board-container');

    gameBoardArray.forEach((element, index) => {
        let div = document.createElement('div');
        div.classList.add('square');
        _boardContainer.appendChild(div);
        div.dataset.square = index;
    });

    const squares = document.querySelectorAll('.square');

    squares.forEach(function(square) {
        square.addEventListener('click', handleSquare)
    })

    //How to add to specific index of the array - clear board & regen with additional marker
    function addToGameboardArray(index, marker){
        gameBoardArray.splice(index, 1, marker);
        console.log(gameBoardArray);
    }

    //How to resetGameboardArray for end of game
    function resetGameboardArray(){
        gameBoardArray = new Array(9).fill("");
    }

    //Return gameBoardArray COPY for use in other modules

    function getGameboardArray(){
        //should return copy of the board
        let gameBoardArrayCopy = gameBoardArray;
        return gameBoardArrayCopy;
    }

    function handleSquare(event){
        console.log(event.target.dataset.square);
        addToGameboardArray(event.target.dataset.square, player1.getMarker());
        let newArray = getGameboardArray();
      //  squares.remove();
        updateDOM(event);
     }

    function updateDOM(event){
        event.target.textContent = player1.getMarker();
    }

    /*onclick for squares should activate
    1.addtogameboard
    2.getgameboardarray
    3.createboardinDOM
    */

    return { addToGameboardArray, resetGameboardArray, getGameboardArray, handleSquare };
})();

//Flow of the game
const displayController = (() => {
    
    function flow() {

    }


    
    return { }

})();

//All things player based 
const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker};
}

const player1 = Player('jj', 'X');
const player2 = Player('comp', 'O');


//Gameboard.addToGameboardArray(1, player1.getMarker());
//Gameboard.resetGameboardArray();
Gameboard.getGameboardArray();
