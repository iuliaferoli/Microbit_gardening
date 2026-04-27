let wind_speed = 0
let RH = 0
let Temp = 0
datalogger.setColumnTitles(
"rh",
"temp"
)
basic.forever(function () {
    Temp = Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1)
    RH = Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P1)
    wind_speed = Environment.ReadWindSpeed(AnalogPin.P3)
    datalogger.log(
    datalogger.createCV("temp", Temp),
    datalogger.createCV("rh", RH)
    )
    basic.pause(600000)
})
