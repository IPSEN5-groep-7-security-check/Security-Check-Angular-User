import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.css'],
})
export class ScanResultComponent implements OnInit {
  result: any;
  color: any;

  constructor() {}

  ngOnInit(): void {}
}
