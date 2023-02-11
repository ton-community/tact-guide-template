import { beginCell, contractAddress, toNano, Address } from "ton";
import { Counter } from "./output/sample_Counter";
import { deploy } from "./utils/deploy";
import { printAddress, printDeploy, printHeader } from "./utils/print";

(async () => {

    // Parameters
    const initialCounterValue = BigInt(Date.now());
    let init = await Counter.init(initialCounterValue);

    //let msg = beginCell().store(storeAdd({ $$type: 'Add', amount: 1n })).endCell(); // Replace if you want another message used
    let msg = "Deploy";
    let address = contractAddress(0, init);
    let deployAmount = toNano('0.2');
    let testnet = true;

    // Print basics
    printHeader('SampleTactContract');
    printAddress(address);
    // printDeploy(init, deployAmount, packed, testnet);
    
    // Do deploy
    await deploy(init, deployAmount, msg, testnet)
})();
