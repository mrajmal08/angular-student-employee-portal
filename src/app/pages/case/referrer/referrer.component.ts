import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrer',
  templateUrl: './referrer.component.html',
  styleUrls: ['./referrer.component.scss']
})
export class ReferrerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }

}
