
function trackChecks() {
    let checkCount = $("input[type=checkbox]:checked").length;
    if (checkCount >= maxAllowChecks){
        $("input[type=checkbox]:not(:checked)").prop("checked", true)
//         $("input[type=checkbox]:not(:checked)").prop("disabled", true)
//   } else {
//     $("input[type=checkbox]:not(:checked)").prop("disabled", false);
  }
  }
  function trackRadios() {
    let checkCount = $("input[type=radio]:checked").length;
    $("input[type=radio]:not(:checked)").prop("disabled", checkCount >= 1);
  }
  
function init() {
    $("input[type=checkbox]").change(trackChecks); 
    $("input[type=radio]").change(trackRadios);
    $("#carouselWithIndicators").carousel({
        interval: 625  
      });
    console.log("скрипт подгрузился");
  }

const maxAllowChecks = 2;
$(document).ready(init);
$("#my-carousel").carousel({
    interval: 625
  })


