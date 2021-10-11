
$(document).ready(function()    {
    $("#button").click(function()    {
        let music = $("#elevatorMusic")[0];
        music.volume = 0.7;
        if ($("#lightMan").hasClass("lightman-hidden"))  {
            $("#lightMan").removeClass("lightman-hidden");
            $("#button").text("Goodbye!");
            let clickOn = $("#lightSwitchOn")[0];
            clickOn.play();
            music.play();
        }
        else {
            $("#lightMan").addClass("lightman-hidden");
            $("#button").text("Hello!");
            let clickOff = $("#lightSwitchOff")[0];
            clickOff.play();
            music.pause();
        }
    })
});

/*
function lightUp()    {
    var img = document.getElementById('lightMan');
    if  (img.classList.contains("lightman-hidden"))    {
        img.classList.remove("lightman-hidden");
        document.getElementById('button').innerHTML = "Goodbye!";
        var clickOn = document.getElementById('lightSwitchOn');
        clickOn.play();
        var music = document.getElementById('elevatorMusic');
        music.volume = 0.7;
        music.play();;
    }
    else    {
        img.classList.add("lightman-hidden");
        document.getElementById('button').innerHTML = "Hello!";
        var clickOff = document.getElementById('lightSwitchOff');
        clickOff.play();
        var music = document.getElementById('elevatorMusic');
        music.pause();;
}};
*/