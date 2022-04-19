import { Component, OnInit, } from '@angular/core';
import { GitService } from '../git.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userInput: string = "";
  user: any;
  

  constructor(private gitservice:GitService) { }

  ngOnInit(): void { }
  getUsername(userName: string) {
    this.gitservice
      .getUser(userName)
      .then((result) => (this.user = result));
  }
    
}



