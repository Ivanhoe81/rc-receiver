radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        wuKong.setAllMotor(value, value)
    }
})
radio.setGroup(1)
