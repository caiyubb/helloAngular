import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',//指出使用哪个dom元素
  templateUrl: './hello-world.component.html',//从中加载模版
  styleUrls: ['./hello-world.component.css']//css样式
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
