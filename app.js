const question=[{
    'que':'which of the following markup languages',
    'a':'html',
    'b':'css',
    'c':'javascript',
    'd':'json',
    'correct':'a'
},
    {'que' : 'what is your name ',
    'a':'ram',
    'b':'rohan',
    'c':'ramesh',
    'd':'rahul',
    'correct':'b'
    },
    {'que':'what is the full form of sql',
        'a':'structured query language',
        'b':'structured query manipulation language',
        'c':'structured query language',
        'd':'structured query interface',
        'correct':'a'




    }




]

let indx=0;
let total=question.length;
let right=0;
let wrong=0;

const quebox =document.getElementById("quebox");
const optionInput = document.querySelectorAll(".option");
console.log(optionInput)
const cc=optionInput[1].nextElementSibling
console.log(cc)
console.log(cc.innerText)
const loadqustion =()=>{
    if(indx==total){
       
        return endQuize();
    }else{
    resetQustion();
    const data=question[indx]
    // console.log("
    console.log(data)
  const bb=  quebox.innerText=`${indx+1+")"} ${data.que}`;
    console.log(bb)
    console.log(data.que)
    const dd=optionInput[0].nextElementSibling.innerText=data.a
    console.log(dd)
    const ee=optionInput[1].nextElementSibling.innerText=data.b
    console.log(ee)
    const ff=optionInput[2].nextElementSibling.innerText=data.c
    console.log(ff)
    const gg=optionInput[3].nextElementSibling.innerText=data.d
    console.log(gg)
}
}

const submitQuiz=()=>{
   
    const data =question[indx]
    const ans=getAnswer()
    console.log(ans,data.correct)
    if(ans==data.correct){
        right++
    }
    wrong++
    indx++
    loadqustion()
    return;
}


const getAnswer=()=>{
    let answerss;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answerss=input.value
                // return input.value
               
                // console.log("yes")
                // console.log(input.value,"yes")
                // return input.value
            }
        }
        // return answerss;
    )
    
    return answerss;
    
}


const resetQustion=()=>{
    optionInput.forEach(
        (input)=>{
            input.checked=false
        }
    )
}
const endQuize=()=>{
    const boxx=document.getElementById("box").innerHTML =
    `
    <h1>you have done quize:</h1>
    <h3>${right}/${total}</h3>
    `

}


loadqustion();
