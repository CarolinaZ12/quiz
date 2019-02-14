/* global $ */

$(document).ready(function() {
    $("#clicker").click(function() {
        var finalAnswer = "Your starter pokemon is...";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result) + questionThree(q3Result);
        $("#word").text(answer(totalScore));
        $("#clicker").hide();
    });
        
    function questionOne(q1Result){
        if (q1Result === "Fire" || q1Result==="fire"){
            return 1;
        }
        else if (q1Result === "Earth" || q1Result==="earth"){
            return 2;
        }
        else if (q1Result === "Water"|| q1Result==="water"){
            return 3;
        }
    }
    
    function questionTwo(q2Result){
        if (q2Result === "Salamander" || q2Result==="salamander"){
            return 1;
        }
        else if (q2Result === "Frog" || q2Result==="frog"){
            return 2;
        }
        else if (q2Result === "Turtle" || q2Result==="turtle"){
            return 3;
        }
    }
    
    function questionThree(q3Result){
        if (q3Result=== "Summer" || q3Result==="summer"){
            return 1;
        }
        else if (q3Result==="Spring"|| q3Result==="spring"){
            return 2;
        }
        else if (q3Result==="Winter"|| q3Result==="winter") {
            return 3;
        }  
        
    }
    

  function answer(totalScore){
      var imgSrc;
       var name = $("#name").val();
       
      if (totalScore <= 4){
          imgSrc="Char.gif";
          $("#ending").attr("src",imgSrc);
          return name + " your starter pokemon is Charmander!";
      }
      
     else if (totalScore >4 && totalScore <=  6){
         imgSrc="bulb.gif";
         $("#ending").attr("src",imgSrc);
          return name+ " your starter pokemon is Bulbasaur!";
          
     }
     
     else if(totalScore> 6){
         imgSrc="LHQY.gif";
         $("#ending").attr("src",imgSrc);
         return name + " your starter pokemon is Squirtle!";
     }
      
  }


});
