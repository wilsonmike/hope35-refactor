import { Component, OnInit } from "@angular/core";
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
      imageURL: "../../../assets/img/ilya-yakover.jpg",
    },
    {
      imageURL: "../../../assets/img/bruno-abatti.jpg",
    },
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild("carousel", { static: true }) carousel: NgbCarousel;

  constructor() {}

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
