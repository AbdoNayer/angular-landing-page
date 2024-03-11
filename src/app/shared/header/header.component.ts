import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  constructor(private scroller: ViewportScroller) {}

  ngOnInit() {}

  goDown(val: any) {
    document.getElementById(val)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
