import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two-child-one',
  templateUrl: './page-two-child-one.component.html',
  styleUrls: ['./page-two-child-one.component.scss']
})
export class PageTwoChildOneComponent implements OnInit {

  public str: string = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"

  constructor() { }

  ngOnInit(): void {
  }

}
