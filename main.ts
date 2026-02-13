let start = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        start = 1
    }
    if (start == 1) {
        if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 15) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
            basic.pause(500)
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            basic.pause(500)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        }
    }
})
