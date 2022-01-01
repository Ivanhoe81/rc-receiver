function tolat3 () {
    music.playTone(988, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
function index_bal () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
}
function tolat1 () {
    music.playTone(988, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
}
function index_jobb () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
function tolat2 () {
    music.playTone(988, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
}
radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        m1 = value
        m2 = value
    }
    if (name == "x") {
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, value)
        steer = value
    }
    if (name == "duda") {
        if (value == 1) {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        }
    }
    if (name == "index_bal") {
        if (value == 1) {
            index_bal()
        }
    }
    if (name == "index_jobb") {
        if (value == 1) {
            index_jobb()
        }
    }
    if (name == "index_bal") {
        if (value == 1) {
            index_bal()
        }
    }
})
let steer = 0
let m2 = 0
let m1 = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
let s1c = 1
let s2c = 1
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
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
    if (steer <= 205) {
        s1c = Math.map(steer, 205, 165, 1, 0.5)
    }
    if (steer >= 205) {
        s2c = Math.map(steer, 205, 245, 1, 0.5)
    }
    if (m1 > 5) {
        if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 40) {
            tolat1()
        }
        if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 20) {
            tolat2()
        }
        if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 10) {
            tolat3()
        }
    }
})
