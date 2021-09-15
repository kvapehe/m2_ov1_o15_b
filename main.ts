/**
 * Oppgave 15 b) 
 * 
 * Lag et program hvor det gjelder å trykke så fort som mulig på A-knappen Vis ikoner på skjermen i forhold til antall trykk
 * 
 * Denne virker ikke som den skal.
 */
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
let t01 = 0
let t02 = 0
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        t01 += 1
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.showNumber(t01)
})
