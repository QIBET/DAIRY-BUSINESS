var generate = document.getElementById("generate");
generate.addEventListener("click", totalProduction);

var totalProduction = function() {

    var shedA = document.getElementById("shedA").value;
    var shedB = document.getElementById("shedB").value;
    var shedC = document.getElementById("shedC").value;
    var shedD = document.getElementById("shedD").value;

   totalProduction(shedA + shedB + shedC + shedD);
   var sheds = [shedA, shedB, shedC, shedD];
   for (var i = 0; i = sheds.length; i++){
       console.log("Your production in Shed A" +sheds[i]+ "litres per day ");
       if (sheds.length === 5) {
           

           console.log("The total production is "+totalProduction()+"litres per day");
       }
    
   }
}