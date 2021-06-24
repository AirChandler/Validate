# TestHat

    identifier: 0x01569102
    extends: _sensor
    tags: C
    group: environment

A Jacdac Test Hat, testing non-functional jacdac service operations along the Jacdac bus

## Registers

    ro current: i32 A { preferred_interval=1000 } @ reading

Measured current from ADC.

    ro current_error: i32 A  @ reading_error

Reading error from ADC

    ro ldr: u8 sec

Reading analog value from LDR 0-254

    ro crc: b

Reading CRC calculaton result (boolean)

    rw gpio: u32

Reading/writing to dedicated GPIO pin

## Commands

    command set_pin @ 0x01 {
        gpio_port: u16
        gpio_pin: u16
    }

Sets state of gpio pin

    command get_pin @ 0x02 {
        gpio_port: u16
        gpio_pin: u16
    }
    report {
        pin_state: u8
    }

Reports state of gpio pin

    command get_Buttons @ 0x03 {
        gpio_port: u16
        gpio_pin: u16
    }
    report {
        button_state: u8
    }

Reports state of Button GPIO

    command calc_crc @ 0x04 {
        pkt: b
        crc: u16
    }
    report {
        crc_result: u8
    }

Calculates valid CRC on passed packet

    command read_adc @ 0x05 {
        device_id: devid
    }
    report {
        adc_conversion: i32
    }

Reads ADC differential conversion for device

    command get_devices @ 0x06 {
        device_id: devid
        service_idx: u8
    }
    report {
        devices: b
    }

Reports list of devices detected on bus

## Events

    event device_detect @ 0x00 {
        device_id: devid
        service_idx: u8
    }

Reports a detected device