import { Component, OnInit } from '@angular/core';
import { ApiDataService  } from 'src/app/services/api-data.service'
@Component({
  selector: 'app-ep-container',
  templateUrl: './ep-container.component.html',
  styleUrls: ['./ep-container.component.css']
})
export class EpContainerComponent implements OnInit {

  constructor(private apiDataService: ApiDataService) { }


  data: any[] = []

  ngOnInit(): void {
    console.log(this.data);
    this.getEpisodesByPage()
  }

  getEpisodesByPage(){
    this.apiDataService.getAllEpisodes(1).subscribe((res)=>{

      this.data.push(res.results)
      console.log(res);

    }, (err)=>{
      console.log(err);
    })
    this.apiDataService.getAllEpisodes(2).subscribe((res)=>{

      this.data.push(res.results)
      console.log(res);


    }, (err)=>{
      console.log(err);
    })
    this.apiDataService.getAllEpisodes(3).subscribe((res)=>{

      this.data.push(res.results)
      console.log(res);


    }, (err)=>{
      console.log(err);
    })
  }



}
