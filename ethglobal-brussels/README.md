![ethseoul](./ethglobal-brussels/images/main.png)

<p align="center">

<h1 align="center">ETHGlobal Brussels</h1>

<h2 align="center">Celo is sponsoring ETHGlobal Brussels 2024!</h2>

|                        Best Mobile dApp                         |                        Best use of Fee Currencies                         |
| :-------------------------------------------------------------: | :-----------------------------------------------------------------------: |
| ![best-mobile-dapp](./ethglobal-brussels/images/bounties-1.png) | ![best-use-of-fee-currencies](./ethglobal-brussels/images/bounties-2.png) |

### Workshop Details

#### Title

📲 Celo Workshop

#### Slides

[Here](https://docs.google.com/presentation/d/15vCsXPWbQ4GKbHtfDiqlVTqQIGsGbQzoHcwXQFWbO00/edit?usp=sharing)

#### Time

15:40 (Brussels Time) – July 12, 2024

#### Description

Learn how to build decentralized applications for real world use cases and how to deploy your first dApp on MiniPay. In this workshop we'll go through an overview of Celo, an EVM compatible layer 1 blockchain, and how you can improve user experience for onboarding by building dApps on MiniPay.

You will also learn about how to leverage Celo's unique Fee Currency feature that lets you pay for gas using alternate ERC20 tokens.

## Judging Criteria

For all bounties

- Contracts must be deployed on Alfajores or Mainnet
- Demo to someone on the Celo team during Sponsor Judging
- Mention smart contract addresses of all contracts deployed on Celo in your top-level project README, also Verify them on Celoscan or Celo Explorer.

For "Best Mobile dApp":

- Project must be demo'ed using MiniPay Site Tester

For "Best Use of Stable Gas Currency":

- Project must be demo a transaction on Celoscan where the gas fee is paid in any of the supported ERC20 tokens.

## What is Celo?

Celo is the carbon-negative, mobile-first, EVM-compatible PoS blockchain where developers can build decentralized applications that create the conditions for prosperity — for everyone.

## Resources for hackers

🙋‍♂️ Ask for help

- [Github Discussions (Recommended)](https://github.com/celo-org/ethglobal-brussels/discussions/categories/q-a)
- [Celo Discord](https://discord.com/invite/celo)

💰 Using [Faucet](https://faucet.celo.org/) you can request CELO, cUSD, cEUR and cREAL tokens on testnet!

### Get started using Celo Composer

You can use the following command to initialize MiniPay starter project:

```bash
npx @celo/celo-composer create --template minipay
```

We've put together [this MiniPay starter project](https://github.com/celo-org/minipay-template) to help you get started quickly, using contracts already deployed to either testnet or Celo mainnet. The project provides: a storage example, how to iterate through a subgraph.

Advanced developers can use [Celo Composer](https://github.com/celo-org/celo-composer) from command-line to customize exactly what platform you want to build for: React, React Native (with or without Expo integration), Angular, or Flutter. It includes a Subgraph integration if you need it.

[Celo Composer Docs](https://github.com/celo-org/celo-composer)

### [MiniPay](https://www.opera.com/products/minipay)

MiniPay is a stablecoin-based non-custodial wallet that allows you to send and receive funds instantly using just a phone number.

#### Guides

|                                                                                                               |                                                                                                                         |
| :-----------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| [![MiniPay video](https://img.youtube.com/vi/cNp5vhwZdao/0.jpg)](https://www.youtube.com/watch?v=cNp5vhwZdao) | [![How to build on MiniPay](https://img.youtube.com/vi/NxZojrjVXQA/0.jpg)](https://www.youtube.com/watch?v=NxZojrjVXQA) |

- [Build on MiniPay](https://docs.celo.org/developer/build-on-minipay/overview)

- ##### Prerequisite Guides

  - [Android Studio Setup](https://docs.celo.org/developer/build-on-minipay/prerequisites/android-studio-setup)

  - [Ngrok Setup](https://docs.celo.org/developer/build-on-minipay/prerequisites/ngrok-setup)

- [Intro to Celo ETHGlobal Guide](https://ethglobal.com/guides/intro-to-celo-j80ti)

- [Celo Composer: Extend and Customize your Full-Stack Mobile dApps](https://joenyzio.medium.com/celo-dappstarter-customize-your-full-stack-mobile-dapps-on-celo-232d85b7a2c5)

- [Celo Spark: Celo Composer in 1 min](https://www.youtube.com/watch?v=pNEDt34utqk)

- [Workshop: Building an NFT collection on Celo using Celo composer](https://www.youtube.com/watch?v=hf5gTAQ8G10)

#### [Cheatsheet](https://celoplatform.notion.site/MiniPay-Cheatsheet-60066f16d136421ab2ef19522ffe6200?pvs=74) 🤫

#### Ideas

- Earn Using MiniPay
- Billing with MiniPay
  - Example:- Khatabook
- Ecommerce Store with MiniPay
  - Example:- Dukaan
- Scratch and win
- NFT Viewer
- Gift cards
- Asset tracking and accounting
- Bulk payments
- Expense approval

### [Fee Currency](https://docs.celo.org/developer/fee-currency)

Celo allows paying gas fees in currency other than the native currency. The tokens that can be used to pay gas fees is controlled via governance and the list of tokens allowed is maintained in `FeeCurrencyWhitelist.sol`.

[Guide](https://docs.celo.org/developer/fee-currency)

Currently supports USDC, USDT, cUSD, cEUR and cREAL.

> [!WARNING]  
> Tokens with decimals other than 18 (USDC, USDT, etc...) require adapters to be used.

#### Adapters by network

##### Mainnet

| Name   | Token                                                                                                                       | Adapter                                                                                                                     |
| ------ | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `USDC` | [`0xcebA9300f2b948710d2653dD7B07f33A8B32118C`](https://celoscan.io/address/0xcebA9300f2b948710d2653dD7B07f33A8B32118C#code) | [`0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B`](https://celoscan.io/address/0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B#code) |
| `USDT` | [`0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e`](https://celoscan.io/address/0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e#code) | [`0x0e2a3e05bc9a16f5292a6170456a710cb89c6f72`](https://celoscan.io/address/0x0e2a3e05bc9a16f5292a6170456a710cb89c6f72#code) |

##### Alfajores (testnet)

| Name   | Token                                                                                                                                 | Adapter                                                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `USDC` | [`0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B`](https://alfajores.celoscan.io/address/0x2f25deb3848c207fc8e0c34035b3ba7fc157602b#code) | [`0x4822e58de6f5e485eF90df51C41CE01721331dC0`](https://alfajores.celoscan.io/address/0x4822e58de6f5e485eF90df51C41CE01721331dC0#code) |

### Show and Tell

Tell us more about your project [here](https://github.com/celo-org/ethglobal-istanbul/discussions/categories/show-and-tell) and stay in touch with us!

**All the best!**
