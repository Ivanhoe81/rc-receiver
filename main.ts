function duda () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
}
radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        m1 = value
        m2 = value * -1
    }
    if (name == "x") {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, value)
        steer = value
    }
    if (name == "duda") {
        if (value == 1) {
            duda()
        }
    }
})
let steer = 0
let m2 = 0
let m1 = 0
radio.setGroup(1)
let s1c = 1
let s2c = 1
basic.forever(function () {
    if (m1 > 1) {
        m1 = m1 * s1c
        m2 = m2 * s2c
        wuKong.setMotorSpeed(wuKong.MotorList.M1, m1 * 0.3)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, m2 * 0.3)
    } else {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, m1 * s1c)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, m2 * s2c)
    }
})
