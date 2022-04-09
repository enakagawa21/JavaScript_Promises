console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let watching = new Promise ((resolve, reject) => {
     let userWatching = Math.round(Math.random())


if(userWatching){
     resolve("Thumbs up and Sub")
}else {
     reject("User left")
}
})


watching
     .then ((value) => {
          console.log(value)
     })
     .catch((error) => {
          console.log(error)
     })