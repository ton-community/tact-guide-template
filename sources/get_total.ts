import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, Address } from "ton";
import Counter from "./utils/counter";


async function main() {
  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });

  // open Counter instance by address
  const counterAddress = Address.parse("kQDAsx3aaoiLv1r40pe0qP5dSOB_E7Uu7UJuQZ65w-6Wscz6");
  const counter = new Counter(counterAddress);
  const counterContract = client.open(counter);

  // call the getter on chain
  const counterValue = await counterContract.getCounter();
  console.log("value:", counterValue.toString());
}

main();