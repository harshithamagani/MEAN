import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  myobj = {
    title:"",
    url:"",
    reviews:[{
        comment:"",
        rating:1
    }]}
  titleMessage = false
  constructor(
    private httpService:HttpService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
  }

  submitForm(){
    if(this.myobj.title.length < 3) {
      this.titleMessage = true;
    } else {
      let obs = this.httpService.create(this.myobj);
      obs.subscribe(data=>{
        console.log(data)
        this.router.navigate(['/'])
      })
    }
  }
}
