import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) { }
  async getRepo(reponame: any) {
    const promise = this.http.get(`${environment.githubUrl}/repo/${reponame}`)
  }
}
