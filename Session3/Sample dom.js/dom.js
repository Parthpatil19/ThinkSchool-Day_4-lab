/*--- DOM Selection Methods ---*/

const title = document.getElementById("title"); // by ID
const paragraphs = document.getElementsByClassName("info"); // by class
const allParas = document.getElementsByTagName("p"); // by tag
const changeTitleBtn = document.querySelector("#btn-change-title"); // querySelector
const allButtons = document.querySelectorAll("button"); // querySelectorAll
const toggleClassBtn = document.querySelector("#btn-toggle-class");
const showUrlBtn = document.querySelector("#btn-show-url");
const bodyBgBtn = document.querySelector("#btn-body-bg");
const message = document.querySelector("#message");


console.log("Paragraphs by className:", paragraphs);
console.log("All paragraphs by tagName:", allParas);
console.log("All buttons by querySelectorAll:", allButtons);

/*--------------- Event Listeners -----------*/

// 1. Click event
changeTitleBtn.addEventListener("click", () => {
  title.textContent = "Let's  begin to become a thinker at thinkbridge.";
  message.textContent = "Title Channged !";
});

// 2. Double click event
toggleClassBtn.addEventListener("click", () => {
  title.classList.toggle("Highlight");
  message.textContent = title.classList.contains("Highlight")
    ? "Highlight ON"
    : "Highlight OFF";
});


// 3. Mouseover / Mouseout
showUrlBtn.addEventListener("mouseover", () => {
  message.textContent = `Current URL is: ${document.URL}`;
});
showUrlBtn.addEventListener("mouseout", () => {
  message.textContent = "Mouse left the Show URL button";
});

// 4. Mouse down / up
bodyBgBtn.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "blue";
  message.textContent = "Mouse button pressed on Change Background";
});
bodyBgBtn.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
  message.textContent = "Mouse button released on Change Background";
});
