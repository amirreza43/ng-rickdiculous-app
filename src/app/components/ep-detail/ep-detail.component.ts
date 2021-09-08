import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';
import { EpisodeData } from 'src/app/models/EpisodeData';
import {CharacterdataService} from '../../services/characterdata.service'
@Component({
  selector: 'app-ep-detail',
  templateUrl: './ep-detail.component.html',
  styleUrls: ['./ep-detail.component.css']
})
export class EpDetailComponent implements OnInit {

  idFromRoute ;
  info: EpisodeData;
  characterInfo: any[]=[];

  constructor(private route: ActivatedRoute, private apiDataService: ApiDataService, private characterApi: CharacterdataService) { }

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
      this.setCharacterInfo();
      console.log('character info',this.characterInfo);
      for(let character of this.characterInfo){
        console.log(character);

      }
    })

    //console.log('character info', this.characterInfo);
  }
  setCharacterInfo(){
    if(this.info){
      for(let character of this.info.characters){
        this.characterApi.getCharacter(character).subscribe(data=> {
          this.characterInfo.push(data)
        })

      }
    }
  }
}
