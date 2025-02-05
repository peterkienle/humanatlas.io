import { Component, HostListener, Input, OnInit } from '@angular/core';
import { YoutubeModel } from './youtube-model';


let apiLoaded = false;

@Component({
  selector: 'youtube-model',
  templateUrl: './youtube-model.component.html',
  styleUrls: ['./youtube-model.component.scss']
})
export class YoutubeModelComponent implements OnInit {
  @Input() playerData: YoutubeModel;
  isMobile = false;

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }

    this.isMobile = document.body.getBoundingClientRect().width <= 428;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.playerSize();
  }

  playerSize() {
    this.playerData.width = window.innerWidth * 0.8;
    this.playerData.height = this.playerData.width * 0.5625;
  }
}
