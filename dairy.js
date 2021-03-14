function totalProduction(a,b,c,d){
    return a + b + c + d;
}
function doMath() {

    var shedA = Number(document.getElementById('shedA').value);
    var shedB = Number(document.getElementById('shedB').value);
    var shedC = Number(document.getElementById('shedC').value);
    var shedD = Number(document.getElementById('shedD').value);

   var sheds = totalProduction (shedA,shedB,shedC,shedD)

  
}
document.getElementById('generate').addEventListener('click', doMath);

   
   /*   
   var sheds = [shedA, shedB, shedC, shedD];

   for (var i = 0; i = sheds.length; i++){

       console.log("Your production in Shed A" +sheds[i]+ "litres per day ");
       
       if (sheds.length === 5) {
           

           console.log("The total production is "+totalProduction()+"litres per day");
       }
    
   }*/
   
