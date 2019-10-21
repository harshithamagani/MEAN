import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  findAll(){
    return this.http.get('/api/findAll')
  }
  create(myobj){
    return this.http.post('/api/create', myobj)
  }
  findOne(id){
    return this.http.get(`/api/findOne/${id}`)
  }
  edit(myobj){
    return this.http.put(`/api/edit/${myobj._id}`,myobj)
  }
  delete(id){
    return this.http.delete(`/api/delete/${id}`)
  }


}
