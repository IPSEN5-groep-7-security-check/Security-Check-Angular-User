import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.css']
})
export class ScanResultComponent implements OnInit {
  result: number = 0;
  color: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.result = Math.floor(Math.random() * 100);
    this.setResultColor(this.result)
  }

  setResultColor(result: number) {
    if (result > 80) {
      this.color = "green-color"
    } else if (result > 60) {
      this.color = "light-green-color"
    } else if (result > 40) {
      this.color = "yellow-color"
    } else if (result > 20) {
      this.color = "orange-color"
    } else {
      this.color = "red-color"
    }
  }

}
