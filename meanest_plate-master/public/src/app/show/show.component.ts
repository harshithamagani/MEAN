import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  myobj:any = {
    title:"",
    url:"",
    average:"",
    reviews:[{
        comment:"",
        rating:1
    }]}
  constructor(
    private httpService:HttpService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.getOneObject()
  }
  getOneObject(){
    let obs = this.httpService.findOne(this.route.snapshot.params.id)
    obs.subscribe(data=> {
      console.log(data);
      this.myobj = data;
      let counter = 0
      for(let x of this.myobj.reviews){
        counter += x.rating
      }
      this.myobj.average = counter/this.myobj.reviews.length
    })
  }
}
