import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repository: Repository;
  repoData = [];
  newUserData: any = [];
 

  constructor(private http: HttpClient) {
    this.repository = new Repository("", "", "", new Date(), "", "", "", new Date())
  }
  getUserData(username: string) {

    
    
    // async getRepo(reponame: any) {
    //   const promise = this.http.get(`${environment.githubUrl}/repo/${reponame}`)
    //   return await lastValueFrom(promise)
    //   .then((result) => result)
    //     .catch((error) => console.log(error));
    // }
  }
  getRepo(reponame: any, any: any) {
    throw new Error('Function not implemented.');
  }
}

