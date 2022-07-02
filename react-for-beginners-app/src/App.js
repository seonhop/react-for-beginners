import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("I run all the time");
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("Called The API...");
        }
    }, [keyword]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."
            ></input>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me!</button>
        </div>
    );
}

export default App;
