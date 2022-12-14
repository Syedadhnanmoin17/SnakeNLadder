import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerfuncService {
  constructor() { }
  b :number =9;
  row!: number;
  pi !: number;
  pj !:number;
  fl : number=0;
  points !:number;
  rdnum !:number;
  public blk1 : boolean = false;
  public blk2 : boolean = true;
  //valarray !:number[];
  
  onfun(pi:number,pj:number,rd : number,r :number,p : number,pid : number){
    //onfun(pi:number,pj: number,r :number,p : number){
    // console.log("pi"+pi);
    // console.log("pj"+pj);
    this.row=r;
    this.points=p;
    this.rdnum=rd;
    if(pi==0 && (pj-rd)<0){
      this.fl=1;
      //return;
    }
    else{
    for (let i = 0; i < rd; i++) {
      //console.log ("Block statement execution no." + i);
      // if(pi==0 && pj==0){
      //   break;
      // }
      if(this.row%2!=0 && pj<=this.b){
        pj=pj+1;
        //console.log("iteration "+this.pj);
        this.points=this.points+1;
        this.pj=pj;
        this.pi=pi;
        //this.row=r;
      }

      if(this.row%2!=0 && pj>this.b){
        this.row=this.row+1;
        pi=pi-1;
        pj=pj-1;
        this.pi=pi;
        this.pj=pj;
        //this.row=r;
        continue;
      }
      if(this.row%2==0 && pj>=0){
        pj=pj-1;
        this.pj=pj;
        this.pi=pi;
        this.points=this.points+1;
        //this.row=r;
        //console.log("Even Iteration :"+this.pj);
      }
      if(this.row%2==0 && pj<0){
        this.row=this.row+1;
        pi=pi-1;
        pj=0;
        this.pi=pi;
        this.pj=pj;
        //this.row=r;
        continue;
      }
      
      console.log("Iteration :"+i);
      console.log(pi);
      console.log(pj);
    }
      //console.log(r);
    }
    //this.valarray.push(pi);
    //this.valarray.push(pj);
    //return this.valarray;
  }
}
