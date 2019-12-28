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
  console.info(e);
  console.info("Form is submitted");
}
