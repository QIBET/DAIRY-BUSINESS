function totalProduction(){
 var shed = [];   


     shed.push(document.getElementById('shedA').value);
     shed.push(document.getElementById('shedB').value);
     shed.push(document.getElementById('shedC').value);
     shed.push(document.getElementById('shedD').value);

console.log(shed)
var shed = [a, b, c, d]
var salesReport=document.getElementById("sales-report");
if(a.lenghth === 0|| b.lenghth===0 || c.lenghth===0 || d.lenghth==0){

}else{
    a=parseFloat(a)
    b=parseFloat(b)
    c=parseFloat(c)
    d=parseFloat(d)
    console.log(a, b, c, d)
    totalProduction(a,b,c,d)
    }
}
var totalProduction = function(a,b,c,d){
    console.log(a,b,c,d)
    var sum = a + b + c + d;
}