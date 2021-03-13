var generate = document.getElementById("generate");
generate.addEventListener("click", totalProduction);

function = totalProduction() {

    var shedA = document.getElementById("shedA").value;
    var shedB = document.getElementById("shedB").value;
    var shedC = document.getElementById("shedC").value;
    var shedD = document.getElementById("shedD").value;
     return(shedA + shedB + shedC + shedD);

   console.log()

    /*if(!shedA || !shedB || !shedC || !shedD) 
    {
        alert("Please enter litres of all Sheds");
        
        //return;
    }
    else{
       
        alert(generate);
    }*/
}
