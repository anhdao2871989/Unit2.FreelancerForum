const freeLancesWriters = [
  {
    name: "Alice",
    occupation: "Writer",
    StartingPrice: 30
  },
  {
    name: "Bob",
    occupation: "Teacher",
    StartingPrice: 50
  },
  {
    name: "Carol",
    occupation: "Programmer",
    StartingPrice: 70
  },
];

render();
function render() {
  // Render the squares
  const freeLancesWritersEL = document.querySelector("tbody");
  const template = freeLancesWriters.map(Writer => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = Writer.name;
    const td2 = document.createElement("td");
    td2.textContent = Writer.occupation;
    const td3 = document.createElement("td");
    td3.textContent = `$${Writer.StartingPrice}`;
    tr.append(td1, td2, td3);
    return tr;
  });
/* State */
const freeLancesWriters = [
  {
    name: "Alice",
    occupation: "Writer",
    StartingPrice: 30
  },
  {
    name: "Bob",
    occupation: "Teacher",
    StartingPrice: 50
  },
  {
    name: "Carol",
    occupation: "Programmer",
    StartingPrice: 70
  },
];

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const freeLancesWritersEL = document.querySelector("tbody");
  const template = freeLancesWriters.map(Writer => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = Writer.name;
    const td2 = document.createElement("td");
    td2.textContent = Writer.occupation;
    const td3 = document.createElement("td");
    td3.textContent = `$${Writer.StartingPrice}`;
    tr.append(td1, td2, td3);
    return tr;
  });
  freeLancesWritersEL.replaceChildren(...tempate);
}

/**
 * Add a random shape to the `shapes` array
 */
function addShape() {
  // If you're not using shapes, you can remove this function or define the `shapes` array.
}

// TODO: Define the `shapes` array and implement shape-related functionality if needed.

}

function addShape() {
  
}

// TODO: Define the `shapes` array and implement shape-related functionality if needed.
