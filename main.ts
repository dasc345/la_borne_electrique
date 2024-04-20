input.onButtonPressed(Button.A, function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(1000)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
    basic.pause(250)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(700)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    for (let index = 0; index <= 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # .
            . . # . .
            . # . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        for (let index2 = 0; index2 <= index; index2++) {
            led.plot(0, index2)
            led.plot(1, index2)
            led.plot(2, index2)
            led.plot(3, index2)
            led.plot(4, index2)
            basic.pause(500)
        }
    }
    basic.clearScreen()
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Blue)
    basic.showIcon(IconNames.Happy)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
    basic.pause(500)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(1000)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
})
maqueenPlusV2.I2CInit()
maqueenPlusV2.ledBlank()
