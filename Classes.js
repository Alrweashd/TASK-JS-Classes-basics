/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  // continue the code here
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }
  printName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  calculateAge() {
    let year = new Date().getFullYear();
    return year - this.birthYear;
  }
}
let personA = new Person("Turki", "Alazemi", "M", "1998");
personA.printName();
console.log(personA.calculateAge());

let personB = new Person("Ahmed", "B", "M", "1993");
personB.printName();
console.log(personB.calculateAge());

let personC = new Person("Jonh", "R", "M", "1990");
personC.printName();
console.log(personC.calculateAge());
/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here

  constructor(title, duration, genre, ratings = []) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
    this.ratings = ratings;
  }

  rate(rating) {
    if (rating >= 0 && rating <= 10) {
      this.ratings.push(rating);
    } else {
      console.log("rating must be between 0 and 10\n");
    }
  }
  averageRating() {
    let sum = this.ratings.reduce((rate1, rate2) => {
      return rate1 + rate2;
    }, 0);
    return sum / this.ratings.length;
  }
}
let movie1 = new Movie("Fargo", 1.5, "Crime", [10, 8, 7, 4, 2]);
console.log(movie1.ratings);
movie1.rate(5);
console.log(movie1.ratings);
console.log(movie1.averageRating());
/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  constructor(movies = []) {
    super();
    this.movies = movies;
  }

  addMovie(movie) {
    if (!this.movies.includes(movie)) {
      this.movies.push(movie);
      console.log(`movie ${movie} has been added`);
    } else console.log(`movie ${movie} already exist`);
  }
}
let actorA = new Actor(["Fargo", "Toy story", "Batman"]);
console.log(actorA.movies);

actorA.addMovie("Fargo");
console.log(actorA.movies);

actorA.addMovie("Superman");
console.log(actorA.movies);
