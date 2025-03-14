
import { useState } from "react"
import data from "./data";
import "./style.css"

// single selection
// multiple selection


export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
        else copyMultiple.splice(findIndexOfCurrentId, 1); // rremove
        setMultiple(copyMultiple);
    }

    return (
    <div className="wrapper">
        <h3>#1 Accordian</h3>
        <button onClick={() =>  setMultiSelection(!multiSelection)}>Enable Mutli-Selection</button>
        <div className="accordian">
            {data && data.length > 0 ?
                data.map(dataItem => <div className="item">
                    <div className="title" onClick={multiSelection 
                        ? () => handleMultiSelection(dataItem.id) 
                        : () => handleSingleSelection(dataItem.id)}>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="content">{dataItem.answer}</div> : null}
                </div>
                )
                : <div className="">No data found!</div> }
        </div>
    </div>)
} 