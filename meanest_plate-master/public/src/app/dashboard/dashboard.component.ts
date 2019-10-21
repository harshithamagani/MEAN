import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myobjects = []
  constructor(
    private httpService:HttpService,
    private route:ActivatedRoute,
    private router:Router
  ) { }
  ngOnInit() {
    this.getAllObjects();
  }
  getAllObjects(){
    let obs = this.httpService.findAll();
    obs.subscribe(data => {
      if(data['errorMsg']){
        console.log(data["data"])
        //other logic
      } else {
        this.myobjects = data['data'];
        for(let x of this.myobjects){
          let counter = 0
          for(let y of x.reviews){
            counter += y.rating
          }
          x.average = counter / x.reviews.length
        }
      }
    })
  }
  deleteObj(id){
    let obs = this.httpService.delete(id);
    obs.subscribe(data => {
      this.getAllObjects();
    })
  }
}
