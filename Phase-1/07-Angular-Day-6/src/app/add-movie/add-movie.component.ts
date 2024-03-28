import { Component }     from '@angular/core';
import { MoviesInfo }    from '../moviesInfo';        // include the MoviesList interface
import { FormsModule }   from '@angular/forms';
import { MoviesService } from '../movies.service';
import { CommonModule }  from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
// uses Dependency Injection to define the variable MoviesService, 
//      creates an instance of moviesService and assign that to the moviesService
//      also uses Dependency Injects the Router into the router variable (so we can go to different page)

constructor(private movieService  : MoviesService, 
                  private router  : Router) {}

// Define a place to hold a new movie when entered by the user
// Data from the web page will be used to fill in the values a new 
//      variable : data-type  (using the interface as a data-type)
public newMovie : MoviesInfo =  {
                                  title : "",
                                  releaseYear: new Date().getFullYear(),
                                  director: ""
                                };

// this method is called when the submit is clicked in the html form
// it receives a new movie object with values entered on the form from the user
        // then it tells the ...
// funcName(parameter : data-type) - using interface as a data-type
addMovie(newMovie : MoviesInfo) {
  console.table(newMovie);
  this.movieService.addMovies(newMovie)   // call the service to add the newMovie to the data source
  this.router.navigate(['/movies'])       // tell the router to go to the /movies page
}
cancelButtonClicked() {
  this.router.navigate(['/movies'])       // tell the router to go to the /movies page
}
}


