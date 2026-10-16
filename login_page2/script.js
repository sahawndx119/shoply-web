// //in the name of God
// //@ts-check

// /**
//  * @param {string} id
//  */
// function changeDivToInput(id) {
//   let div = document.getElementById(id);
//   let input = document.createElement("input");

//   if (id.includes("email")) {
//     input.setAttribute("type", "email");
//   } else {
//     input.setAttribute("type", "password");
//   }

//   // @ts-ignore
//   div.addEventListener("click", () => {
//     let parent = div?.parentElement;

//     div?.remove();

//     parent?.appendChild(input);

//     input.focus();
//   });

//   input.addEventListener("blur", () => {
//     let parent = input.parentElement;

//     input.remove();

//     // @ts-ignore
//     parent?.appendChild(div);
//   });
// }


// changeDivToInput("emailalt");
// changeDivToInput("passalt");