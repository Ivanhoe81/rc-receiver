radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        m1 = value
        m2 = value * -1
    }
    if (name == "x") {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, value)
        steer = value
    }
    if (name == "bal") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 0)
        }
        if (value < 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 180)
        }
    }
    if (name == "jobb") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 360)
        }
        if (value < 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 180)
        }
    }
    if (name == "fel") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 0)
        }
        if (value < 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 180)
        }
    }
    if (name == "le") {
        if (value == 1) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 360)
        }
        if (value < 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 180)
        }
    }
})
let steer = 0
let m2 = 0
let m1 = 0
radio.setGroup(1)
let s1c = 1
let s2c = 1
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 180)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, 180)
basic.forever(function () {
    if (m1 > 1) {
        m1 = m1 * s1c
        m2 = m2 * s2c
        wuKong.setMotorSpeed(wuKong.MotorList.M1, m1 * 0.5)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, m2 * 0.5)
    } else {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, m1 * s1c)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, m2 * s2c)
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, steer)
})
