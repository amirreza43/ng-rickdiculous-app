import { Component, OnInit } from '@angular/core';
import { ApiDataService  } from 'src/app/services/api-data.service'
import { EpisodeData } from 'src/app/models/EpisodeData';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-ep-container',
  templateUrl: './ep-container.component.html',
  styleUrls: ['./ep-container.component.css']
})
export class EpContainerComponent implements OnInit {

  constructor(private apiDataService: ApiDataService,
    private userService: UserServiceService) { }

  activeUser: User;
  favourited: boolean = false;

  data: EpisodeData[] = []

  ngOnInit(): void {
    if(this.data.length === 0){
      this.apiDataService.getAllEpisodes().subscribe(data => this.data = data)
      this.userService.getActiveUser().subscribe(res => {
        this.activeUser = res;
        console.log(this.activeUser, 'THis is the active user in the homepage');
        if(res.favourites.length > 0){
          console.log('inside if');

          res.favourites.map((favouriteId)=>{
            console.log('inside res map', this.data);
            this.data.map((episode)=>{
              if(favouriteId.id === episode.id){
                episode.favourited = true;
                console.log('inside episode map');

              }
            })


          })
        }

      })
    }
    console.log(this.data);


  }



}
