/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./style.css"
import { useEffect } from "react";

export default function RandomColor() {

    const [typeofColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("0000000");

    function randomColorUtiltiy(length) {
        return Math.floor(Math.random() *length);
    }

    function handleCreateRandomHexColor() {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i=0; i<6; i++) {
            hexColor += hex[randomColorUtiltiy(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtiltiy(256);
        const g = randomColorUtiltiy(256);
        const b = randomColorUtiltiy(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if(typeofColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeofColor])

    return (
    <div className="container">
        <h3>#2 Random Color</h3>
        <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeofColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

        <div className="" style={{
            width:"50vw",
            height:"50vh",
            margin: '10px',
            padding: '10px',
            background: color,
            borderRadius: '20px',
            justifyContent: "space-between",
            alignContent: "center",
            gap: '10px',
        }}>
            <div className="inside">
                <h4>{typeofColor === 'rgb' ? 'RGB Color : ' : 'HEX Color : '}</h4>
                <h4> {color}</h4>
            </div>
        </div>
    </div>
    )
}