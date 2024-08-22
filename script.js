let businesses = ["gardening", "school", "nursing home", "college", "hospital", "animal shelter", "dog daycare", "zoo", "daycare"];
const answer = document.getElementById("result");

function randomise() {
    let length = businesses.length;

    let randomNumber = Math.floor((Math.random() * length));
    answer.innerHTML = businesses[randomNumber];
}