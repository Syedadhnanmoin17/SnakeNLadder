import { Component, OnInit } from '@angular/core';
import { ControllerfuncService } from './controllerfunc.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(){}
  title = 'snakenladder';
  val :  number=1;
  r : number = 1;
  b : number = 9;
  public mess !: number;
  // public newarr:boolean[] = [false,true];
  public messtwo !: number;
  public ptwoone !: number;
  public ptwotwo !: number;
  public disone : boolean=false;
  public distwo : boolean=true;

  // console.log(mess);
  // console.log(messtwo);
  
  tryfun(arr : boolean[]){
      this.disone=arr[0];
      this.disone=arr[1];
  }
  //val : number = 0;
  /*board : string[][] =[['0','0','0','0','0', '0','0', '0','0', '0'],
  ['0','0','0','0','0', '0','0', '0','0', '0'],
  ['0','0','0','Sh','0', '0','0', '0','Lh', '0'],
  ['0','0','0','0','0', '0','0', '0','0', '0'],
  ['0','0','0','0','0', '0','0', '0','0', '0'],
  ['0','0','0','0','0', '0','0', '0','0', 'Lt'],
  ['0','0','0','0','0', '0','0', '0','0', '0'],
  ['0','0','0','0','0', '0','St', '0','0', '0'],
  ['0','0','0','0','0', 'a','k', 'g','0', '0'],
  ['0','0','0','0','0', '0','0', '0','i', '0']
];*/
//testarr= ['hi','bye'];

arr =new Array();
board(){
  let num=100; 
      // creating two dimensional array
      for (let i = 0; i< 10; i++) {
          for(let j = 0; j< 10; j++) {
              this.arr[i] = [];
          }
      }
      for (let i = 0; i< 10; i++) {
        if(i%2!=0){
          for(let j =9; j>=0; j--) {
            this.arr[i][j] = num;
            num--;
        }
        }
        else{
          for(let j = 0; j< 10; j++) {
            this.arr[i][j] = num;
            num--;
        }
        }
    }
    console.log(this.arr);
  }
    //public issn : boolean = false;
    snakecheck(it : number) : boolean{
      if(it==76 || it==46){
        //this.issn=true;
        return true;
      }
      return false;
    }

    laddercheck(l : number) : boolean{
      if(l==23 || l==67){
        //this.issn=true;
        return true;
      }
      return false;

    }

    playercheckone(p : number) : boolean{
      if(p==this.arr[this.mess][this.messtwo]){
        return true;
      }
      return false;
    }

    playerchecktwo(k : number) : boolean{
      if(k==this.arr[this.ptwoone][this.ptwotwo]){
        return true;
      }
      return false;
    }

    ngOnInit(){
      this.board();
    }
   
/*board : ind[][] =[[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}],
[{id:1,name:'0'},{id:2,name:'0'},{id:3,name:'0'},{id:4,name:'0'},{id:5,name:'0'}, {id:6,name:'0'},{id:7,name:'0'}, {id:8,name:'0'},{id:9,name:'0'}, {id:10,name:'0'}]
];*/

}

/*onfun(){
for (let i = 0; i < 12; i++) {
  //console.log ("Block statement execution no." + i);
  if(this.r%2!=0 && this.pj<=this.b){
    this.pj=this.pj+1;
    //console.log("iteration "+this.pj);
  }
  if(this.r%2!=0 && this.pj>this.b){
    this.r=this.r+1;
    this.pi=this.pi-1;
    this.pj=this.pj-1;
    continue;
  }
  if(this.r%2==0 && this.pj>=0){
    this.pj=this.pj-1;
    //console.log("Even Iteration :"+this.pj);
  }
  if(this.r%2==0 && this.pj<0){
    this.r=this.r+1;
    this.pi=this.pi-1;
    this.pj=0;
    continue;
  }
  
  console.log("Iteration :"+i);
  console.log(this.pi);
  console.log(this.pj);
}*/





