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
  public pid : number=1; 
  public mess ="Player 1 Wins"
  @Output() public valEve= new EventEmitter();
  @Output() public valEvetwo= new EventEmitter();
  // @Output() public fromplayone= new EventEmitter();
  // @Input() public parvalone !: boolean;
  // @Input() public parvaltwo !: boolean;

  isblk(){
    return this.t.blk1;
  }
  onPlay(){
    while(this.rand==0){
    this.rand=Math.floor(Math.random() * 7);
    }
    console.log("The random value:"+this.rand);
    this.t.onfun(this.pi,this.pj,this.rand,this.r,this.pnts,this.pid);
    //this.t.onfun(this.pi,this.pj,this.r,this.pnts);
    if(this.t.fl==1){
      this.t.fl=0;
      this.crand=this.rand;
      this.rand=0;
      console.log("Welcome Back to Player 1");
      this.t.blk1=true;
      this.t.blk2=false;
    }
    else{
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
      if(this.pi==0 && this.pj==0){
        this.t.blk1=true;
        this.t.blk2=true;
        alert(this.mess);
      }
      else{
        this.t.blk1=true;
        this.t.blk2=false;
      }
    }
    this.valEve.emit(this.pi);
    this.valEvetwo.emit(this.pj);
   
    // this.parvalone=true;
    // this.parvaltwo=false;

    // this.fromplayone.emit([this.parvalone,this.parvaltwo]);

  }
  
  // clicked(): boolean{
  //   this.parvaltwo=false;
  //   this.parvalone=true;
  //   this.topar.emit(this.parvaltwo);
  //   return false;
  // }
  ngOnInit(){
    this.valEve.emit(this.pi);
    this.valEvetwo.emit(this.pj);
    
  }
}
  
 

