import { genreCreationDTO } from './../genres.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  model: genreCreationDTO = {
    name: 'Drama'
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    });
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    
    this.router.navigate(['/genres']);
  }
}
