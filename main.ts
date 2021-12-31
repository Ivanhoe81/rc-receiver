radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        wuKong.setAllMotor(value, value)
    }
})
radio.setGroup(1)
