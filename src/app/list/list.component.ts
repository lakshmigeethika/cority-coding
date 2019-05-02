import { Component, OnInit } from '@angular/core';
import {List} from '../list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor() { }
  border: boolean;
  badge = 0;
  total = 3;
  badge: number;
  buttonString: string = "Load more"
  toAdd1: List = {
    imgURL: '',
    heading: this.generateRandomString(),
    desc1: 'this is description line1',
    desc2: 'this is description line 2',
    todayDate: new Date()
  };
  toAdd2: List = {
    imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
    heading: this.generateRandomString(),
    desc1: 'this is description line1',
    desc2: 'this is description line 2',
    todayDate: new Date()
  };
  lists: List[] = [
    {
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
      heading: this.generateRandomString(),
      desc1: 'this is description line1',
      desc2: 'this is description line 2',
      todayDate: new Date()

    },
    {
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
      heading: this.generateRandomString(),
      desc1: 'this is description line1',
      desc2: 'this is description line 2',
      todayDate: new Date()

    },
    {
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
      heading: this.generateRandomString(),
      desc1: 'this is description line1',
      desc2: 'this is description line 2',
      todayDate: new Date()

    },
    {
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Farm_barn_scenic_landscape.jpg',
      heading: this.generateRandomString(),
      desc1: 'this is description line1',
      desc2: 'this is description line 2',
      todayDate: new Date()

    }
  ];
  generateRandomString(): string {
    const string1: string = Math.random().toString(36).substring(9);
    const string2: string = Math.random().toString(36).substring(3);
    const string3: string = Math.random().toString(36).substring(6);
    return(string1 + ' ' + string2 + ' ' + string3 );

  }
  addListItem(): void {
    this.border = true;
    this.total++ ;
    this.badge++;
    this.lists.unshift(this.toAdd1);

  }
  loadMore(): void{
    if(this.lists.length <= 4 ){
      this.addListItem();
      this.buttonString = 'Collapse';
    }
    if(this.lists.length > 4){
      this.lists.splice(0,2);
      this.buttonString = 'Load more';
    }
  }

  ngOnInit() {


  }

}
