import { Component, OnInit } from '@angular/core';
import {List} from '../list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  names: string[] = ['geeta', 'deepu'];
  lists: List[]= [
    {
      imgURL: "empty string",
      heading: "heading1",
      desc1: "this is description line1",
      desc2: "this is description line 2",
      todayDate: new Date().getDate()

    },
    {
      imgURL: "",
      heading: "heading2",
      desc1: "this is description line1",
      desc2: "this is description line 2",
      todayDate: new Date().getDate()

    },
    {
      imgURL: "",
      heading: "heading3",
      desc1: "this is description line1",
      desc2: "this is description line 2",
      todayDate: new Date().getDate()

    },
    {
      imgURL: "",
      heading: "heading4",
      desc1: "this is description line1",
      desc2: "this is description line 2",
      todayDate: new Date().getDate()

    }



  ]
  constructor() { }

  ngOnInit() {
  }

}
