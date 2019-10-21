import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myobj:any = {
    title:"",
    url:"",
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
    this.getOneObject();
  }
  getOneObject(){
    let obs = this.httpService.findOne(this.route.snapshot.params.id)
    obs.subscribe(data=> {
      this.myobj = data;
    })
  }
  submitForm(){
    let obs = this.httpService.edit(this.myobj)
    obs.subscribe(data => {
      this.myobj = data;
      //this.router.navigate(['/']);
    })
  }
} 
