import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit, OnDestroy {

  constructor() { }


  ngOnDestroy(): void {
    document.querySelector('html').style.background = 'none';
  }

  ngOnInit(): void {
     document.querySelector('html').style.background ='#7159c1'; 
    //  'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(65,65,236,1) 0%, rgba(0,212,255,1) 100%)';
  }

}
