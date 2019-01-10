/* global $ */

$(document).ready(function() {
    $("#clicker").click(function() {
        var name = $("#name").val();
        var finalAnswer = "Your starter pokemon is...";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result) + questionThree(q3Result);
        $(".result").text(answer(totalScore));
    });
        
    function questionOne(q1Result){
        if (q1Result === "Fire"){
            return 1;
        }
        else if (q1Result === "Earth"){
            return 2;
        }
        else if (q1Result === "Water"){
            return 3;
        }
    }
    
    function questionTwo(q2Result){
        if (q2Result === "Salamander"){
            return 1;
        }
        else if (q2Result === "Frog"){
            return 2;
        }
        else if (q2Result === "Turtle"){
            return 3;
        }
    }
    
    function questionThree(q3Result){
        if (q3Result=== "Summer"){
            return 1;
        }
        else if (q3Result==="Spring"){
            return 2;
        }
        else if (q3Result==="Winter") {
            return 3;
        }  
        
    }

  function answer(totalScore){
      if (totalScore <= 4){
          return "Your starter pokemon is Charmander!";
          
      }
      
     else if (totalScore >4 && totalScore <=  6){
          return "Your starter pokemon is Bulbasaur!";
     }
     
     else if(totalScore> 6){
        return "Your starter pokemon is Squirtle!";
     }
          
      
  }


});
