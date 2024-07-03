import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{

  model:any={};

  onSubmit(){
    alert('SUCCESSS!! :-)' + JSON.stringify(this.model, null,3))
  }
  constructor(){}
  ngOnInit() {
  }


}
