import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // header: string = "Default"
  isRenameCountEnabled: boolean = false;

  @ViewChild(IonSlides) slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoHeight : true,
  }
  slideIndex: number = 0;
  headerInput : any;
  isNew = true;

  tabs = [{
    name: "counter",
    header: "Default"
  }, {
    name: "count_list",
    header: "Saved"
  }]

  countBaseObject = {
    name: "",
    count: 0,
    start: "",
    end: ""

  };

  countData: any[] = [
    
  ];

  count: number = this.getBaseCount();



  constructor() { }

  increment(value) {
    if (value == undefined)
      value = 1;
    this.count = this.count + value;
  }

  reset() {
    if (this.count > 0)
      this.count = 0;
  }

  getBaseCount(): number {
    return 0;
  }

  slideChanged() {
    let index = this.slides.getActiveIndex()
    index.then((value) => {
      this.slideIndex = value;
    });
  }

  renameCountName() {
    this.isRenameCountEnabled = true;
  }

  closeRenameCountName() {
    this.isRenameCountEnabled = false;
  }

  gotoCountList() {
    this.slideIndex = 1;
    this.slideTo(this.slideIndex);
  }

  gotoMainCount() {
    this.slideIndex = 0;
    this.slideTo(this.slideIndex)
  }


  slideTo(index) {
    this.slides.slideTo(index, 400);
  }


  getTabName() {
    return this.tabs[this.slideIndex].name;
  }

  saveCountData(){
    if(this.isNew){
      let object= Object.assign({},this.countBaseObject);
      object.name = this.headerInput;
      object.count = this.count;
      this.countData.push(object);
      
    }
  
    this.tabs[0].header = this.headerInput;
    this.headerInput = "";
    this.isRenameCountEnabled = false;
  }

}
