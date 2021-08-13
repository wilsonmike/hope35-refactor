import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"],
})
export class ImageComponent implements OnInit {
  imgSrc = "../../../../assets/img/photouploader.svg";
  selectedImage: any = null;
  isSubmitted: boolean = false;
  formTemplate = new FormGroup({
    caption: new FormControl("", Validators.required),
    category: new FormControl(""),
    imageUrl: new FormControl("", Validators.required),
  });

  constructor(private storage: AngularFireStorage) {}

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

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      const filePath = `newHope/${
        this.selectedImage.name
      }_${new Date().getTime()}`;
      this.storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .subscribe();
    }
  }

  get formControls() {
    return this.formTemplate["controls"];
  }
}
