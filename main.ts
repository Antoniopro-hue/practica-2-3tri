let semaforo_1 = ""
let semaforo_2 = ""
led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    semaforo_2 = "rojo"
    pins.digitalWritePin(DigitalPin.P2, 1)
    semaforo_1 = "verde"
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    semaforo_1 = "amarillo"
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(500)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    semaforo_2 = "rojo"
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P9, 1)
    semaforo_1 = "rojo"
    pins.digitalWritePin(DigitalPin.P14, 1)
    semaforo_2 = "verde"
    basic.pause(100)
    semaforo_1 = "amarillo"
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
basic.forever(function () {
    while (semaforo_1 == "verde" || semaforo_1 == "amarillo") {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.clearScreen()
    }
})
