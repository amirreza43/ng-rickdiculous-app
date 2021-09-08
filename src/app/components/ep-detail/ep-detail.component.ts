import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';
import { EpisodeData } from 'src/app/models/EpisodeData';
@Component({
  selector: 'app-ep-detail',
  templateUrl: './ep-detail.component.html',
  styleUrls: ['./ep-detail.component.css']
})
export class EpDetailComponent implements OnInit {

  idFromRoute ;
  info: EpisodeData;

  constructor(private route: ActivatedRoute, private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idFromRoute = params['episodeId'];
      this.resetComponentState();
    });




  }

  resetComponentState = () =>{
    console.log(this.idFromRoute);
    if(!this.idFromRoute) this.idFromRoute=1;
    console.log('check for idFromRoute', this.apiDataService);

    this.apiDataService.getById(this.idFromRoute).subscribe(data => {
      this.info = data;
      console.log(this.info);

    })
  }

}
