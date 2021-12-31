radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        wuKong.setAllMotor(value, value)
    }
    if (name == "duda") {
        if (value == 1) {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        }
    }
})
radio.setGroup(1)
