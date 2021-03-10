import {Component} from "@angular/core";

//decorators are typescript feature to enhance a class 
@Component({
selector: "app-server",
templateUrl: "./server.component.html"
})

export class ServerComponent{
serverId:number = 10;
serverStatus: string = "offline";



getServerStatus(){
    return this.serverStatus;
}

}
//component is a typescript class


