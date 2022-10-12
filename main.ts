input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
    }
})
