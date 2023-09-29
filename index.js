const ratingEls = document.querySelectorAll(".rating");   /*when same class is used in multiple times then quearyselsctorAll is used*/
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";     /*initially(by default) no rating is selected */

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive(); /*it is a basically a function when it will call then it will remove other  active functionality hence when we click on one emoji and then on 2nd emoji then all hover effect move to second emoji from the first emoji */ 
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;  /*suppose we have a parent(image)and a child(text) they both are in same div then by using this property we can target both at a time*/ 
    event.target.classList.add("active");           /*  basically to make change(hover) static for a while */ 
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>   
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}