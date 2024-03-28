import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoviesInfo } from '../moviesInfo';         // access the MoviesList interface
import { MoviesService } from '../movies.service';  // access the code for MovieServices
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

// This will hold the data for the movies to be displayed
// the data wil come from a call to a service
// it starts out as an empty array
//    var-name    :  data-type
public moviesList : MoviesInfo [] ; // This is an array of MoviesInfo objects

// constructor is used to initialize data in the component
// 
// This style of constructor will define the variable, create a MoviesService object, and assign that object to the variable -
// using DEPENDENCY INJECTION
// 
// Dependency injection is the automatic creation of variables and objects required
// 
// Dependency injection decoupled the service from the code
//    (makes it much easier to change the service)
// 
// without Dependency injection the code would look like this:
//
//    private movieService;   // define a variable to hold the service
// 
//    constructor() {
//                      movieService = new MoviesServices;  // create the Service
//                                                          // and assign it to the new variable
//

}
constructor(private movieService  : MoviesService ) {
// Call the service method to send back the current list of movies from the data source
  this.moviesList = movieService.getMoviesList();  // Initialize our moviesList from the service

}
}
