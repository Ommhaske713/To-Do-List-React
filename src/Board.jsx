import { useState } from "react";

export default function Board() {
    let [moves, setMoves] = useState({ red: 0, blue: 0, green: 0, yellow: 0 })
    let updateRed = () => {
        setMoves({ ...moves, red: moves.red + 1 })  // ...moves is spread that creates an copy and make change due to which we can use states 
    }
    let updateBlue = () => {
        setMoves({ ...moves, blue: moves.blue + 1 })
    }

    let updateYellow = () => {
        setMoves({ ...moves, yellow: moves.yellow + 1 })
    }
    let updateGreen = () => {
        setMoves({ ...moves, green: moves.green + 1 })
    }
    return (
        <div>
            <h2>Let's the game Begins</h2>
            <div className="Board">
                <p>Red moves ={moves.red}</p>
                <button style={{ backgroundColor: "red", color: "white" }} onClick={updateRed}>+1</button>
                <p>Blue moves ={moves.blue}</p>
                <button style={{ backgroundColor: "blue", color: "white" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves ={moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                <p>Green moves ={moves.green}</p>
                <button style={{ backgroundColor: "green", color: "white" }} onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}
