

function lightUp()    {
    var img = document.getElementById('lightMan');
    if  (img.classList.contains("lightman-hidden"))    {
        img.classList.remove("lightman-hidden");
        document.getElementById('button').innerHTML = "Goodbye!";
        var clickOn = document.getElementById('lightSwitchOn');
        clickOn.play();;
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

