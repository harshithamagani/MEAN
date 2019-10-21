import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  myobj:any = {
    title:"",
    url:"",
    reviews:[{
        comment:"",
        rating:1
    }]}
  reviewobj:any = {
    comment:"",
    rating:1
  }
  constructor(
    private httpService:HttpService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

ngOnInit() {
  this.getOneObject();
}
getOneObject(){
  let obs = this.httpService.findOne(this.route.snapshot.params.id)
  obs.subscribe(data=> {
    this.myobj = data;
  })
}
submitForm(){
  this.myobj.reviews.push(this.reviewobj);
  let obs = this.httpService.edit(this.myobj)
  obs.subscribe(data => {
    this.myobj = data;
    this.router.navigate(['/show',this.route.snapshot.params.id]);
  })
}
}
