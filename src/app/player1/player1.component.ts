import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControllerfuncService } from '../controllerfunc.service';


@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {
  constructor(private t : ControllerfuncService){}
  public pi : number = 9;
  public pj : number = 0;
  public r : number =1;
  public pnts : number =1;
  public rand : number=0;
  public crand : number=0; 
  @Output() public valEve= new EventEmitter();
  @Output() public valEvetwo= new EventEmitter();
  
  onPlay(){
    while(this.rand==0){
    this.rand=Math.floor(Math.random() * 6);
    }
    console.log("The random value:"+this.rand);
    this.t.onfun(this.pi,this.pj,this.rand,this.r,this.pnts);
    //this.t.onfun(this.pi,this.pj,this.r,this.pnts);
       this.pi=this.t.pi;
       this.pj=this.t.pj;
       this.r=this.t.row;
       this.pnts=this.t.points;
       this.crand=this.t.rdnum;
    console.log("THe changed values")
    console.log(this.pi)
    console.log(this.pj)
    this.rand=0;
    if(this.pi==7 && this.pj==2){
      this.pi=3;
      this.pj=6;
      this.r=7;
      this.pnts=67;
    }

    if(this.pi==2 && this.pj==4){
      this.pi=5;
      this.pj=5;
      this.r=5;
      this.pnts=46;
    }
    this.valEve.emit(this.pi);
    this.valEvetwo.emit(this.pj);
  }
  ngOnInit(){
    this.valEve.emit(this.pi);
    this.valEvetwo.emit(this.pj);
  }
}
  
 

