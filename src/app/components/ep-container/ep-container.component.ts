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


  activeUser: User;
  favourited: boolean = false;
  dataAdded: boolean = false
  epData: any[] = [];
  dummyData: any[] = []
  constructor(private apiDataService: ApiDataService,
    private userService: UserServiceService) { }

ngOnInit(): void {
  // this.apiDataService.getAllEpisodes()
  // this.apiDataService.getEpisodeByPage(1)

  // this.apiDataService.getAll().subscribe(async(data)=>{
  //   await this.epData.push(data)

  //  this.userService.getActiveUser().subscribe(async(res) => {
  //     this.activeUser = await res ;
  //     if(this.activeUser.favourites.length > 0){

  //       this.activeUser.favourites.map((favouriteId)=>{

  //         this.epData[0].map((episode)=>{

  //           if(favouriteId.id === episode.id){
  //             episode.favourited = true;
  //           }
  //         })
  //       })
  //     }
  //   })
  // })

  this.containerFunctions()

}
// create an async func =< have awaits for our subscribes
//** make sure to do some error handling in the services
async containerFunctions(){
  const data = await this.apiDataService.getAll().toPromise()
  await this.epData.push(data)

  const res = await this.userService.getActiveUser().toPromise()
  this.activeUser = await res;
  if(this.activeUser.favourites.length > 0){
    console.log('when map kinda happens');

    this.activeUser.favourites.map((favouriteId)=>{

      this.epData[0].map((episode)=>{

        if(favouriteId.id === episode.id){
          episode.favourited = true;
        }
      })
    })
  }
}

}
