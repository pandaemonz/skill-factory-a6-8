function init() {

  console.log("скрипт подгрузился");
}
	

let progressValue = 0;

function addOnePoint() {
	progressValue += 1;
}

function addThreePoint() {
	progressValue += 3;
}

function addSevenPoint() {
	progressValue += 7;
}

$('.jBut1').on("click", function(event){
	addOnePoint();
	$('.progress-bar').attr("style", "width: " + progressValue + "%");
});

$('.jBut3').on("click", function(event){
	addThreePoint();
	$('.progress-bar').attr("style", "width: " + progressValue + "%");
});

$('.jBut7').on("click", function(event){
	addSevenPoint();
	$('.progress-bar').attr("style", "width: " + progressValue + "%");
});

$(document).ready(init);
