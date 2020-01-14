import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GithubUser {
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data: GithubUser[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<GithubUser[]>('https://api.github.com/users')
      .toPromise()
      .then(data => {
        this.data = data;
      }).catch(error => {
        console.log(error);
        this.data = [];
      });
  }

}
