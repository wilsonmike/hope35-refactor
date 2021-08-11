import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

import { ViewChild } from "@angular/core";
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-hopehome",
  templateUrl: "./hopehome.component.html",
  styleUrls: ["./hopehome.component.css"],
})
export class HopehomeComponent implements OnInit {
  images = [
    {
      image: "../../../assets/img/broswer1.png",
    },
    {
      image: "../../../assets/img/browser5.png",
    },
    {
      image: "../../../assets/img/browser2.png",
    },
    {
      image: "../../../assets/img/browser6.png",
    },
    {
      image: "../../../assets/img/browser3.png",
    },
    {
      image: "../../../assets/img/browser4.png",
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 3500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
