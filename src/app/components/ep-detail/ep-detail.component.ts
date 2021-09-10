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
  isLiked: boolean = false

  constructor(private route: ActivatedRoute,
    private apiDataService: ApiDataService,
    private characterApi: CharacterdataService,
    private userService: UserServiceService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idFromRoute = params['episodeId'];
      this.resetComponentState();
    });




  }

  resetComponentState = () =>{
    console.log(this.idFromRoute);
    if(!this.idFromRoute) this.idFromRoute=1;


    this.apiDataService.getById(this.idFromRoute).subscribe(data => {
      this.info = data;

      this.setCharacterInfo();

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
    });
      // to check if the episode is already liked
      for(let favourite in this.activeUser.favourites){
        if(this.activeUser.favourites[favourite].id === this.info.id){
          this.favourited = false;
          this.activeUser.favourites.splice(parseInt(favourite), 1);
          console.log('unlike runs', favourite);

          return
        }
      }

        //if not liked we add it to the user's favourites array
      console.log('this should not run on unlike');

      this.favourited = true
      this.activeUser.favourites.push({id: this.info.id});

    console.log(this.activeUser);

  }
}
