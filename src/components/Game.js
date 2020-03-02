import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerTurn: true,
            stepNumber: 0,
            pastMoves: [
                { squares: Array(9).fill(null) }
            ]
        }
    }
    jumpTo(move){
        this.setState({
            stepNumber: move,
            playerTurn: (move%2)===0
        })
    }

    handleClick(i) {
        const history = this.state.pastMoves.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = checkWinner(squares);
        if(winner || squares[i]){
            return;
        }
        squares[i] = this.state.playerTurn?'X':'O';
        this.setState({
            pastMoves: history.concat({
                squares: squares
            }),
            playerTurn: !this.state.playerTurn,
            stepNumber: history.length
        });

    }
    render() {
        const history = this.state.pastMoves;
        const current = history[this.state.stepNumber];
        const winner = checkWinner(current.squares);
        const moves = history.map((step, move)=>{
            const desc = move?'Go to move #' + move:'Start of the Game';
            return (
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>
                        {desc};
                    </button>
                </li>
            )
        });
        let status;
        if(winner){
            status = "Winner is " + winner;
        } else if (this.state.stepNumber == 9) {
            status = "Tie!"
        } else {
            status = "Next player is " + (this.state.playerTurn?'X':'O');
        }
        return (
            <div className="game">
                <div className="gameBoard">
                    <Board onClick={(i) => this.handleClick(i)}
                    squares={current.squares} />
                </div>
                <div className="gameInfo">
                    <div>{status}</div>
                    <div>{moves}</div>
                </div>
            </div>
        );
    }
}

function checkWinner(squares){
    const path = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < path.length; i++){
        const [a,b,c] = path[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Game;