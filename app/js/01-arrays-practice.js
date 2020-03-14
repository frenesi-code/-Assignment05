//STEP 1
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

var favoriteMovies = ['The Seven Samurai', 'Bonnie and Clyde', 'Reservoir Dogs', 'Airplane!', 'Pan\'s Labyrinth'];
//console.log(favoriteMovies[1]);

//STEP 2
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
// Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

/*
let movies = new Array(5);
movies = favoriteMovies;
console.log(movies[0]);
*/

//STEP 3
// Copy your code from step 2. Add a new movie into the 5th position within your array. Then, use the console to display the length of the array. 
// You should now have 6 total movies stored in the array.

/*
let movies = new Array(5);
favoriteMovies.push('Doctor Zhivago');
movies = favoriteMovies;
console.log(movies.length);
*/

//STEP 4
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
// Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

/*
let movies = [];

for (const [index, movie] of favoriteMovies.entries()) {
    movies[index] = movie;
}

movies.shift()
console.log(movies);
*/

//STEP 5
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
// Now, use a for loop to iterate through the array and display each movie within the console window.

/*
let movies = [];

movies[0] = 'The Seven Samurai';
movies[1] = 'Bonnie and Clyde';
movies[2] = 'Reservoir Dogs';
movies[3] = 'Airplane!';
movies[4] = 'Pan\'s Labyrinth';
movies[5] = 'Doctor Zhivago';
movies[6] = 'The Deer Hunter';

for (const movie of movies) {
    console.log(movie);
}
*/

//STEP 6
// Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within the console window.

let movies = [];

movies[0] = 'The Seven Samurai';
movies[1] = 'Bonnie and Clyde';
movies[2] = 'Reservoir Dogs';
movies[3] = 'Airplane!';
movies[4] = 'Pan\'s Labyrinth';
movies[5] = 'Doctor Zhivago';
movies[6] = 'The Deer Hunter';

for (const movie in movies) {
    console.log(movies[movie]);
} 

//STEP 7

//STEP 8

//STEP 9

//STEP 10

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17

//STEP 18

//STEP 19

//STEP 20