import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders!: Leader[];
  leadErrMess!: string;

  constructor(private LeaderService: LeaderService, @Inject('BaseURL') private BaseURL: string) { }

  ngOnInit(): void {
     this.LeaderService.getLeaders().subscribe(leaders => this.leaders = leaders, errmess => this.leadErrMess = <any>errmess);
  }

}
