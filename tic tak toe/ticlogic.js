let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let display=document.querySelector(".win-dis");
let win=document.querySelector(".win");
let newgame=document.querySelector(".newgame");

let turn="t";

const winners=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 count=0;
 flag=0;
boxes.forEach((box) =>{
    count=0;
    box.addEventListener("click",()=>{
       if(turn==="t"){
        turn="f";
        box.innerText="X";
       }
       else
       {
        turn="t";
        box.innerText="O";
       }
       box.disabled=true;
      count++;
      if(count==9)
      {
        win.innerText=`It's a Draw Game...`;
        display.classList.remove("hide");
      }
      checkwinner();
    });
    
});
let fun=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        count=0;
    })
}
reset.addEventListener("click",fun);

let newfun=()=>{
    fun();
    display.classList.add("hide");
    count=0;
}

newgame.addEventListener("click",newfun);

let printwinner=(val)=>{
   win.innerText=`Congratulations Winner is player of ${val}...`;
   display.classList.remove("hide");
}
const checkwinner=()=>{
    for(let winner of winners)
    {
       let  val1=boxes[winner[0]].innerText;
       let val2=boxes[winner[1]].innerText;
       let  val3=boxes[winner[2]].innerText;
        if(val1!=""&&val2!=""&&val3!="")
        {
            if(val1==val2&&val3==val2)
            { 
            printwinner(val1);
            }
        }
    }
}