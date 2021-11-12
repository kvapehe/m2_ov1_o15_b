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
// Det er noe trøbbel med å ha alt dette inni en timer.
// Bedre med en "evig" while-løkke og telle millisek mellom hvert trykk.
// Uansett så telles det opp for hvert registrert trykk.
loops.everyInterval(5000, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        t01 += 1
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.showNumber(t01)
})
