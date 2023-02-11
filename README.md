# TACT Hello World guide

Demo of increment with same feature for guide https://ton-community.github.io/tutorials/02-contract/

# Overview

```bash
yarn build # To build contract
yarn deploy # To deploy contract 
yarn increment # to send increment message(need input seed and deployed contract address)
yarn get # to get total value from contract message(need input seed and deployed contract address)
```
Note, messages which was not expected with receivers, will be bounced(that's why it was defined "Deploy" receiver)
Example, what will happen: "wrong message" comment for [this](https://testnet.ton.cx/address/kQDAsx3aaoiLv1r40pe0qP5dSOB_E7Uu7UJuQZ65w-6Wscz6) contract.

## Licence

MIT
