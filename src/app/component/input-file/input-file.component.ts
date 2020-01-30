import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.sass']
})
export class InputFileComponent implements OnInit {
  result: string;
  constructor() { }

  ngOnInit() {
    console.log(csv)
  }

  onFileChange(event: Event) {
    // const reader = new FileReader();
    const target = event.target as EventTarget;
    const files = target.files;

    const reader = new FileReader();

    reader.readAsText(files[0]);

    reader.onload = (e: any) => {
      console.log(e);
      this.result = e.target.result;
      console.log(this.csvToJson(this.result));
    };

  }

  csvToJson(csv) {
    var lines=csv.split("\n");

    var result = [];

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);

    }

    return result; //JavaScript object
  }
}
