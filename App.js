const parent = (
    React.createElement('div', { id: "parent" },
        React.createElement('div', { id: "children"},
            [
                React.createElement('h1', { key: 1 }, "I am H1 tag"),
                React.createElement('h2', {key:2}, "I am H2 tag")
            ]
        )))
console.log(parent);

ReactDOM.createRoot(document.getElementById('root')).render(parent);