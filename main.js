$(document).ready(initializeApp);

function initializeApp(){
        console.log("Initializing App...")
}


var the_number = null;

function pick_number() {
    var random_number = Math.floor((Math.random() * 10) + 1);
    the_number=random_number;
    console.log(the_number);
    return the_number;
}

function videoMisses() {
    var videos = ["Misses/Lebron Miss.mp4", "Misses/Lonzo Miss.mp4", "Misses/McGee Miss.mp4",
                  "Misses/Noah Miss.mp4", "Misses/Parker Miss.mp4"];
    var index=Math.floor(Math.random() * videos.length);

}
function make_guess() {
    var the_guess = $("#guess_input").val();
    the_guess = parseInt(the_guess);

    if(the_guess > the_number){
        $("#response_div").text("Too High!");
    }
    if(the_guess < the_number){
        $("#response_div").text("Too Low!");
    }
    if(the_guess === the_number){
        $("#response_div").text("You guessed it!");
    }
}