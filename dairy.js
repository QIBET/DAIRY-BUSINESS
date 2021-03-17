 var totalproduction = function(){
 var shed = [];   


     shed.push(document.getElementById('shedA').value);
     shed.push(document.getElementById('shedB').value);
     shed.push(document.getElementById('shedC').value);
     shed.push(document.getElementById('shedD').value);

console.log(shed)
var shed = [a, b, c, d]
var salesReport=document.getElementById("report");
if(a.lenghth === 0|| b.lenghth===0 || c.lenghth===0 || d.lenghth==0){

}else{
    a=parseFloat(a)
    b=parseFloat(b)
    c=parseFloat(c)
    d=parseFloat(d)
    console.log(a,b,c,d)
    totalProductioncalculate(a,b,c,d)
    }
}
var totalProductioncalculate = function(a,b,c,d){
    console.log(a,b,c,d)
var total = a + b + c + d;
    console.log(total)   
    document.getElementById("sales").innerHTML="<p> Your production in Shed A is"+a+"Litres per day"<br>
    "Your production in Shed B" +b+ "Litres per day"<br>
    "Your production is shed C is" +c+ "Litres per day"<br> 
    "Your production in shed D is" +d+ "litres per day"<br>
    document.getElementById("sum").innerHTML="The total production is" +total+ "litres per day"
 }     
     

var finance=function(){
    var selling_price=45
    var noOfdays=document.getElementById("days").value
    time= parseInt (noOfdays);
  incomeOverTime(selling_price, time)
  }
  var incomeOverTime=function(selling_price, time){
    if(time===7){
        document.getElementById("time-display").innerHTML="<p>Your weekly income will be " + (1876*selling_price*time) + "</p>"
    }
        else if(time===365){
            document.getElementById("time-display").innerHTML="<p>Your yearly income will be " + (1876*selling_price*time) + "</p>"
    }
  }