import {Component} from "@angular/core";

//decorators are typescript feature to enhance a class 
@Component({
selector: "app-server",
templateUrl: "./server.component.html"
})

 export class ServerComponent{
 serverId:number = 10;
 serverStatus: string = "offdline";

 
 getServerStatus(){

  return this.serverStatus + "DD";
 }

}
//component is a typescript class


