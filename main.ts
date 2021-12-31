radio.onReceivedValue(function (name, value) {
    let x = ""
    if (name == x) {
        wuKong.setAllMotor(value, value)
    }
})
radio.setGroup(1)
