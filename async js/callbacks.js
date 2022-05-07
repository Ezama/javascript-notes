
//JS callbacks 
//- a function passed as an argument to another function
//- can run after another function has finished
//- when you pass a function as an argument, remember not to use parenthesis.
//Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished:
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

//example - posts array - traversy media
const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
];

//get posts 
function getPosts() {
    setTimeout( () => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//create post using getPosts as a callback
function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: "Post Three", body: "This is post three"}, getPosts);
