import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from 'src/app/services/api-data.service';
import { EpisodeData } from 'src/app/models/EpisodeData';
import {CharacterdataService} from '../../services/characterdata.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-ep-detail',
  templateUrl: './ep-detail.component.html',
  styleUrls: ['./ep-detail.component.css']
})
export class EpDetailComponent implements OnInit {

  idFromRoute ;
  info: EpisodeData;
  characterInfo: any[]=[];
  activeUser: User;
  favourited: boolean = false;

  constructor(private route: ActivatedRoute,
    private apiDataService: ApiDataService,
    private characterApi: CharacterdataService,
    private userService: UserServiceService) { }

  ngOnInit(): void {
    console.log(this.activeUser);

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
      this.userService.getActiveUser().subscribe(data => {

        if(data.favourites.length > 0 && this.info){
          data.favourites.map((favouriteId)=>{
            if(favouriteId.id === this.info.id){
              this.favourited = true
            }
          })
        }
      })
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

  favourite(){
    this.userService.getActiveUser().subscribe(data => {
      this.activeUser = data;
      // to check if the episode is already liked
      if(this.activeUser.favourites.length > 0){
        this.activeUser.favourites.map((favouriteId)=>{
          if(favouriteId.id === this.info.id){
            this.favourited = true
          } else {
            this.activeUser.favourites.push({id: this.info.id});
            this.favourited = true
          }
        })
      } else {
        //if not liked we add it to the user's favourites array
        console.log('push favs runs');

      this.favourited = true
      this.activeUser.favourites.push({id: this.info.id});
      }
    });
    console.log(this.activeUser);

  }
}
