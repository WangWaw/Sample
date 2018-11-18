import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
  myVariable = 'app';
  myDisabledValue = false;

  textC = 'initial';
  textS = 'initial';

  records = [
    {
      name: 'Zhang San',
      online: true
    },
    {
      name: 'Li Si',
      online: false
    },
    {
      name: 'Wang Er',
      online: true
    },
    {
      name: 'Zhang San',
      online: true
    },
    {
      name: 'Li Si',
      online: false
    },
    {
      name: 'Wang Er',
      online: true
    },    {
      name: 'Zhang San',
      online: true
    },
    {
      name: 'Li Si',
      online: false
    },
    {
      name: 'Wang Er',
      online: true
    }
  ];

  constructor() {
    setInterval(() => {
      this.myVariable = Math.random().toString();
      // this.myDisabledValue = Math.random() > 0.5;
    }, 1000);
   }
// one-way binding
   callMyFunction() {
    this.myDisabledValue = !this.myDisabledValue;
    window.alert('Disable Input2? ' + this.myDisabledValue + ' !');
   }

   updateValue(e) {
    console.log(e.target.value);
    this.textC = e.target.value;
   }

   ngOnInit() {
  }
}
