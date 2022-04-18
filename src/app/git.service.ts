import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';



@Injectable({
  providedIn: 'root'
})
export class GitService {
 
  constructor(private http: HttpClient) { }
  async getUser(userName:string) {
    const promise = this.http.get(`${environment.githubUrl}/users/${userName}`);
    return await lastValueFrom(promise)
      .then((result) => result)
      .catch((error) => console.log(error));
  }
}
  
  


