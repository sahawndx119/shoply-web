// in the name of God


/**
 * @param {string} id
 */
function changeDivToInput(id) {
  let div = document.getElementById(id);
  let input = document.createElement("input");

  input.setAttribute("type" , "text");

  // @ts-ignore
  div.addEventListener("click", () => {
    let parent = div?.parentElement;

    div?.remove();

    parent?.appendChild(input);
    input.focus();
  });

  input.addEventListener("blur", () => {
    let parent = input.parentElement;

    input.remove();

    // @ts-ignore
    parent?.appendChild(div);
  });
}


changeDivToInput("search-box");
