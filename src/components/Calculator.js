import React, {useState}  from "react";

const Calculator =()=>{

    let [coins, setCoins]= useState(0);
   
   function increaseNo(){
    if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()!="")){
        document.getElementById("false").innerText="Error : Num1 cannot be empty";
        document.getElementById("false").style.display="block";
        document.getElementById("true").style.display="none";
        document.getElementById("result").style.display="none"
        return;
    }
    if((document.getElementById("one").value.trim()!="") && (document.getElementById("two").value.trim()=="")){
        document.getElementById("false").innerText="Error : Num2 cannot be empty";
        document.getElementById("false").style.display="block";
        document.getElementById("true").style.display="none";
        document.getElementById("result").style.display="none"
        return;
    }
    if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()=="")){
        document.getElementById("false").innerText="Error : Num1 & Num2 cannot be empty";
        document.getElementById("false").style.display="block";
        document.getElementById("true").style.display="none";
        document.getElementById("result").style.display="none"
        return;
    }
   
    if(document.getElementById("one").value && document.getElementById("two").value ){

    setCoins(Number(document.getElementById("one").value) + Number(document.getElementById("two").value))
   
   
    document.getElementById("true").style.display="block";
    document.getElementById("false").style.display="none";
    document.getElementById("result").style.display="block" 

   
   }
   else{
    document.getElementById("false").style.display="block";
    document.getElementById("true").style.display="none";
    document.getElementById("result").style.display="none"
   }
    }

    function decreaseNo(){
        if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()!="")){
            document.getElementById("false").innerText="Error : Num1 cannot be empty";
            document.getElementById("false").style.display="block";
            document.getElementById("true").style.display="none";
            document.getElementById("result").style.display="none"
            return;
        }
        if((document.getElementById("one").value.trim()!="") && (document.getElementById("two").value.trim()=="")){
            document.getElementById("false").innerText="Error : Num2 cannot be empty";
            document.getElementById("false").style.display="block";
            document.getElementById("true").style.display="none";
            document.getElementById("result").style.display="none"
            return;
        }
        if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()=="")){
            document.getElementById("false").innerText="Error : Num1 & Num2 cannot be empty";
            document.getElementById("false").style.display="block";
            document.getElementById("true").style.display="none";
            document.getElementById("result").style.display="none"
            return;
        }

        if(document.getElementById("one").value && document.getElementById("two").value ){

        
        setCoins(Number(document.getElementById("one").value) - Number(document.getElementById("two").value))
        document.getElementById("true").style.display="block";
        document.getElementById("false").style.display="none";
        document.getElementById("result").style.display="block" 
       }
       else{
        document.getElementById("false").style.display="block";
        document.getElementById("true").style.display="none";
        document.getElementById("result").style.display="none"       }
        }

        function multiplyNo(){
            if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()!="")){
                document.getElementById("false").innerText="Error : Num1 cannot be empty";
                document.getElementById("false").style.display="block";
                document.getElementById("true").style.display="none";
                document.getElementById("result").style.display="none"
                return;
            }
            if((document.getElementById("one").value.trim()!="") && (document.getElementById("two").value.trim()=="")){
                document.getElementById("false").innerText="Error : Num2 cannot be empty";
                document.getElementById("false").style.display="block";
                document.getElementById("true").style.display="none";
                document.getElementById("result").style.display="none"
                return;
            }
            if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()=="")){
                document.getElementById("false").innerText="Error : Num1 & Num2 cannot be empty";
                document.getElementById("false").style.display="block";
                document.getElementById("true").style.display="none";
                document.getElementById("result").style.display="none"
                return;
            }

            if(document.getElementById("one").value && document.getElementById("two").value ){

             
            setCoins(Number(document.getElementById("one").value) * Number(document.getElementById("two").value))
            document.getElementById("true").style.display="block";
            document.getElementById("false").style.display="none";
            document.getElementById("result").style.display="block" 

           }
           else{
            document.getElementById("false").style.display="block";
            document.getElementById("true").style.display="none";
            document.getElementById("result").style.display="none"           }
            }

            function divideNo(){
                if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()!="")){
                    document.getElementById("false").innerText="Error : Num1 cannot be empty";
                    document.getElementById("false").style.display="block";
                    document.getElementById("true").style.display="none";
                    document.getElementById("result").style.display="none"
                    return;
                }
                if((document.getElementById("one").value.trim()!="") && (document.getElementById("two").value.trim()=="")){
                    document.getElementById("false").innerText="Error : Num2 cannot be empty";
                    document.getElementById("false").style.display="block";
                    document.getElementById("true").style.display="none";
                    document.getElementById("result").style.display="none"
                    return;
                }
                if((document.getElementById("one").value.trim()=="") && (document.getElementById("two").value.trim()=="")){
                    document.getElementById("false").innerText="Error : Num1 & Num2 cannot be empty";
                    document.getElementById("false").style.display="block";
                    document.getElementById("true").style.display="none";
                    document.getElementById("result").style.display="none"
                    return;
                }

                if(document.getElementById("one").value && document.getElementById("two").value ){
                  
                setCoins(Number(document.getElementById("one").value) / Number(document.getElementById("two").value))
                document.getElementById("true").style.display="block";
                document.getElementById("false").style.display="none";
                document.getElementById("result").style.display="block" 

               }
               else{
                document.getElementById("false").style.display="block";
                document.getElementById("true").style.display="none";
                document.getElementById("result").style.display="none"               }
                }
    return (
        <div id="calculator">
        <input placeholder="Num1" id="one"></input>
        <input placeholder="Num2" id="two"></input>
       <div id="operation-btns">
        <button onClick={increaseNo}>+</button>
        <button onClick={decreaseNo}>-</button>
        <button onClick={multiplyNo}>*</button>
        <button onClick={divideNo}>/</button>
       </div>
        <h3 id="result" style={{display:"none"}}>Result : {coins}</h3>
        <h3 id="true" style={{display:"none", color:"green"}}>Success : Your result is shown above!</h3>
        <h3 id="false" style={{display:"none", color:"red"}}>Numbers Cannot Be Blank!</h3>
        </div>
    )
}
export default Calculator;