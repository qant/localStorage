const twitslist = document.getElementById("twitslist");
document.addEventListener("DOMContentLoaded", showTweetsFromLS);

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
  showTweet(tweet);
  document.querySelector("#tweet").value = "";
  addTweetToLS(tweet);
}

function removeTweet(e) {
  e.preventDefault();
  console.log(e.target.parentElement);
  console.log(e.target.classList.value);
  if (e.target.className === "borrar-tweet") {
    let tweet_tmp,
      tweetDel = "";
    tweet_tmp = e.target.parentElement.textContent;
    tweetDel = tweet_tmp.substring(0, tweet_tmp.length - 1);
    removeTweetFromLS(tweetDel);
    e.target.parentElement.remove();
  }
}

function addTweetToLS(tweet) {
  let tweets = getTweetsFromLS();
  tweets.push(tweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function removeTweetFromLS(tweet) {
  let tweets = getTweetsFromLS();

  tweets.forEach((element, i) => {
    console.log(element);
    console.log(tweet);
    if (element === tweet) {
      tweets.splice(i, 1);
      console.log(i);
      console.log("Removed");
    }
  });
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsFromLS() {
  let tweets;
  if (localStorage.getItem("tweets") === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
  return tweets;
}

function showTweetsFromLS() {
  tweets = getTweetsFromLS();
  if (tweets.length != 0) {
    tweets.forEach(element => {
      showTweet(element);
    });
  }
}

function showTweet(element) {
  const tweet = element;
  const removeBtn = document.createElement("a");
  removeBtn.classList = "borrar-tweet";
  removeBtn.innerText = "X";

  const li = document.createElement("li");
  li.innerText = tweet;

  twitslist.appendChild(li);
  li.appendChild(removeBtn);
}
