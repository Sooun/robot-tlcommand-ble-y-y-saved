bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    RX = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    Commande = RX.split(":")
    Ball_G = Commande[0]
    Ball_D = Commande[1]
    Ball_G_value = parseFloat(Ball_G)
    Ball_D_value = parseFloat(Ball_D)
    vitesse_G = Math.abs(Ball_G_value) * 18
    vitesse_D = Math.abs(Ball_D_value) * 18
    if (Ball_G_value > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vitesse_G)
    }
    if (Ball_G_value < 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, vitesse_G)
    }
    if (Ball_G_value == 0) {
        maqueen.motorStop(maqueen.Motors.M1)
    }
    if (Ball_D_value > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vitesse_D)
    }
    if (Ball_D_value < 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vitesse_D)
    }
    if (Ball_D_value == 0) {
        maqueen.motorStop(maqueen.Motors.M2)
    }
})
let vitesse_D = 0
let vitesse_G = 0
let Ball_D_value = 0
let Ball_G_value = 0
let Ball_D = ""
let Ball_G = ""
let Commande: string[] = []
let RX = ""
basic.showIcon(IconNames.Ghost)
bluetooth.startUartService()
