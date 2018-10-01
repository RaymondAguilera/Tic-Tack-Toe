//Wait for the HTML document to be loaded before running any of our code...
//The way we do that is listen for an event the browser triggers when it is done loading the HTML, called "DOMContentLoaded"
document.addEventListener('DOMContentLoaded', ()=>{
    //Now we are ready :-)
    //grab button elements. 
    //All of our buttons have class name "gamebutton" so we can use that to get the elements into our javascript variable.
    let buttons = document.getElementsByClassName('gamebutton');
    //buttons is an array of HTML button elements

    //loop over the buttons, add an event listener to each that listens for the "click" event, and then changes the text inside the buttons based on what text was already in the button.
    for (let i=0; i < buttons.length; i++) {
        let myButton = buttons[i]; //grab i-th button
        myButton.addEventListener('click', function (event) {
            //change the text based on what is already in the button.
            switch (event.srcElement.innerHTML.trim()) { //make sure to trim the text since it could have a bunch of spaces in it.
                case '':
                    //empty
                    event.srcElement.innerHTML = 'X';
                    break;
                case 'X':
                    //X goes to O
                    event.srcElement.innerHTML = 'O';
                    break;
                case 'O':
                    //'O' goes to blank
                    event.srcElement.innerHTML = '';
                    break;
            }
        });
    }
})