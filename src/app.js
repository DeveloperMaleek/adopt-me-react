// you code is going to be here , for now
const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havannes",
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Hungary",
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Fish",
            breed: "Japaneese",
        })
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
