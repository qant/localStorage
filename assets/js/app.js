const twitslist = document.getElementById("twitslist");

console.log(twitslist);

//Events
eventListener();

function eventListener(e) {
  //when form is submitted
  document.querySelector("#form").addEventListener("submit", addTweet);
  twitslist.addEventListener("click", removeTweet);
}

//Functions

function addTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector("#tweet").value;
  const removeBtn = document.createElement("a");
  removeBtn.classList = "borrar-tweet";
  removeBtn.innerText = "X";

  const li = document.createElement("li");
  li.innerText = tweet;

  twitslist.appendChild(li);
  li.appendChild(removeBtn);
  document.querySelector("#tweet").value = "";
}

function removeTweet(e) {
  e.preventDefault();
  /*console.log(e.target.classList);
    console.log(e.target.parentElement);
    console.log(e.target.classList.value);*/
  if (e.target.className === "borrar-tweet") {
    //console.log("Removing!");
    e.target.parentElement.remove();
  }
}
