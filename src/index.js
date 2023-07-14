// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
// import cars from "./practice";
import animals, { useAnimals } from "./data";

const [cat, dog] = animals;

console.log(cat);

//Destructuring a function which is similar to how useState works
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//Default custom name:
// const [cat: Top, dog: Jerry] = animals;

//Default custom values:
// const { name  = "Fluffy", sound = "Purr"} = cat;

//Destructuring obj within obj
// const {
//   feedingRequirements: { food, water }
// } = cat;
// console.log(water);

// const [tesla, honda] = cars;

// const {
//   coloursByPopularity: [teslaTopColour],
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;

// const {
//   coloursByPopularity: [hondaTopColour],
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//       <th>Top Colour</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
