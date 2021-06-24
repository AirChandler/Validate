# Thermometer tests
# Functional
## in range

Check that thermometer temperature is in expected range

    check(temperature <= max_temperature+temperature_error)
    check(min_temperature-temperature_error <= temperature)
    
## increase temperature

Blow on the sensor to increase the temperature by one degree C

    increasesBy(temperature, 1.0)

# Non Functional
## Bootloader (300ms orange + 300ms green)

Performs device bootloader startup check, validated with correct behaviour of 300ms orange then 300ms green LED flash

    checkLed(orange, 300)
    checkLed(green, 300)

## Idle (100ms red)

Performs device idle operation check, validated with correct behaviour of 1sec red LED flash

    checkLed(red, 1000)

## CRC verifications

Performs a packet CRC calculation to check for corruption

    checkCRC(pkt, crc)

## Current Test <= (30ma)

Performs a read current check currently being pulled on the Jacdac bus by the module

    checkCurrent(pkt, 0.030)
