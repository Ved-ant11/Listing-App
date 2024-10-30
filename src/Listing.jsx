import  {useState} from "react"

const Listing = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <input type="text" placeholder="Items" onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => setItems([...items, inputValue])}>Add Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Listing