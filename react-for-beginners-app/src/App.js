import { useState, useEffect } from "react";

function App() {
    const [input, setInput] = useState("");
    const [inputs, setInputs] = useState([]);
    const onChange = (event) => setInput(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        if (input === "") {
            return;
        }
        setInput("");
        setInputs((currArray) => [input, ...currArray]);
    };
    console.log(inputs);

    return (
        <div>
            <h1>My To-Do's {inputs.length}</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={input}
                    onChange={onChange}
                    type="text"
                    placeholder="Write your To-do"
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {inputs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
