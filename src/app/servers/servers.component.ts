import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName = "ddddd";

  constructor() {
    setTimeout(()=> this.allowNewServer = true  ,2000)
   }


   onCreateServer(){
     this.serverCreationStatus= "Server was created again";
   }


onUpdateServerName(e:Event){
  this.serverName = (<HTMLInputElement>e.target).value;

}

  ngOnInit() { }


  }


