import { Component } from '@angular/core';

@Component({

  //can work by tag, class. or attribute[]
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  //external style
  //styleUrls: ['./app.component.css']
  //inline style
  styles:[`
  h3{
    color: red;
  }
  
  `]
})

//data-binding
export class AppComponent {
  name="fish"
}

//definition of the component