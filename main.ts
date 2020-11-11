basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() <= 34 && input.temperature() >= 26) {
        basic.showString("T. Normal")
    }
    if (input.temperature() > 34) {
        basic.showString("T. Alta")
    }
    if (input.temperature() < 26) {
        basic.showString("T. Baja")
    }
})
