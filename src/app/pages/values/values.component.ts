import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';

import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  studentDetails:any = {};
  imageSrc: any;
  constructor(private data:DataService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.data.castUser.subscribe(user => this.studentDetails = user);
    debugger
  console.log("studentDetails:" + JSON.stringify(this.studentDetails),"santizied:"+this.imageSrc);
  }

}
