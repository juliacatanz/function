input.onButtonPressed(Button.A, function () {
    while (true) {
        stuff()
    }
})
function stuff () {
    basic.showIcon(IconNames.Duck)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
}
input.onButtonPressed(Button.B, function () {
    stuff()
})
basic.forever(function () {
	
})
