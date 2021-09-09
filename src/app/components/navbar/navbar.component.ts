import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiDataService } from 'src/app/services/api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm: FormGroup;


  constructor(private fb: FormBuilder,
    private apiDataService: ApiDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchInput: ['']
    })
  }

  onSubmit(){
    console.log(this.searchForm.controls.searchInput.value);
    this.apiDataService.getByName(this.searchForm.controls.searchInput.value).subscribe(data => {
      console.log('our getbyName response', data);

      if(data.results[0].id){
        this.router.navigate(['episodes', data.results[0].id])
      }
    })

    this.searchForm.reset();
  }

}
