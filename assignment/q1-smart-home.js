/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here
// instructions to self: create base signal classes with constructors; use super () for child class extension)
// send method should appear in the parent class as it is inherited by all child classes
class BaseSignal {
    constructor(signal) {
        this.signal = signal;
        if(this.constructor.name === "Permission"){
            throw new Error("This class cannot be instantiated");
        }
    }
    // getName() {
    //     let fullName = toString(this.constructor.name);
    //     let name =(fullName - 'Signal').l
    //     console.log(name);
    // }

    send(name) {
        console.log("Sending " + name + " signal");
        }
}

class TvSignal extends BaseSignal {
        // Add code here
        constructor(signal,mod,send) {
            super(signal, send);
            this.tvModel = mod;
        }
    }

class AirconSignal extends BaseSignal {
        // Add code here
    constructor(signal,mod,send) {
        super(signal,send);
        this.airconModel = mod;
        }
    }

class DoorSignal extends BaseSignal {
    constructor(signal,mod,send){
        // Add code here
        super(signal,send);
        this.doorModel = mod;
        }
    }


const tv = new TvSignal();
tv.send('tv'); // prints "Sending tv signal"

const door = new DoorSignal();
door.send('door'); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send('aircon'); // prints "Sending aircon signal"