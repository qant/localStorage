const twitslist = document.getElementById("twitslist");

console.log(twitslist);

//Events
eventListener();

function eventListener(e) {
  //when form is submitted
  document.querySelector("#form").addEventListener("submit", addTweet);
}

//Functions

function addTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector("#tweet").value;
  const removeBtn = document.createElement("botton");
  removeBtn.classList = "borrar-tweet";
  removeBtn.innerText = "X";

  const li = document.createElement("li");
  li.innerText = tweet;

  twitslist.appendChild(li);
  li.appendChild(removeBtn);
  document.querySelector("#tweet").value = "";
}
