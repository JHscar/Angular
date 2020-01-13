import { Component, OnInit, Inject } from '@angular/core';
import { GithubService, GithubUser } from '../github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: GithubUser[];

  constructor(private githubService: GithubService) { }

  async ngOnInit() {
    try {
      this.data = await this.githubService.getUser();
    } catch (error) {
      console.log(error);
    }
  }

}
