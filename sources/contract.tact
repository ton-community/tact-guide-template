// define msg Increment with op = 1
message(0x00000001) Increment{
    queryId: Int as uint64;
}

contract Counter{
    //define contract storage
    counter: Int as uint64;

    //define init function for deploying
    init(initCounterValue: Int) {
        self.counter = initCounterValue;
    }

    //empty receiver need to get empty message
    receive("Deploy") {
        //do deploy with Init()
    }

    //define receiver, that will increment counter value by 1
    receive(msg: Increment) {
        self.counter = (self.counter + 1);
    }

    //define getter function
    get fun counter(): Int {
        return self.counter;
    }
}