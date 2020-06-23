let currentProgress = 0;
function displayProgress(progressValue){ 
    if (progressValue > 100){
        $('.progress-status').text("Complete");
        $('.j-progress-bar').attr("style", "width: 100%");
    }
    else{
        $('.progress-status').text(progressValue + "%");
        $('.j-progress-bar').attr("style", "width: " + progressValue + "%");
    }
}
$('.btn-1-proc').click(function(){
    currentProgress++;
    displayProgress(currentProgress);

})
$('.btn-3-proc').click(function(){
    currentProgress += 3;
    displayProgress(currentProgress);
})
$('.btn-7-proc').click(function(){
    currentProgress += 7;
    displayProgress(currentProgress);
})