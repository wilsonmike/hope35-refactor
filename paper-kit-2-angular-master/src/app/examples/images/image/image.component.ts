import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"],
})
export class ImageComponent implements OnInit {
  imgSrc = "../../../../assets/img/photouploader.svg";
  selectedImage: any = null;
  formTemplate = new FormGroup({
    caption: new FormControl(""),
    category: new FormControl(""),
    imageUrl: new FormControl(""),
  });

  constructor() {}

  ngOnInit(): void {}

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = "../../../../assets/img/photouploader.svg";
      this.selectedImage = null;
    }
  }
}
