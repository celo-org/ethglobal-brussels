![ethglobal_istanbul](./ethglobal_istanbul.png)

# ETHGlobal Istanbul

<p style="text-align:center; font-weight:700">Celo is sponsoring ETHGlobal Istanbul!</text>

<p style="text-align:center; font-weight:700">Prizes!</text>

<p style="text-align:center; font-weight:500">Best Overall</text>

<p style="text-align:center; font-weight:600">3000 USDC · 2000 USDC · 1000 USDC</text>

<p style="text-align:center; font-weight:500">Best Payment dApp for Real World MiniPay or Valora</text>

<p style="text-align:center; font-weight:600">2000 USDC</text>

<p style="text-align:center; font-weight:500">Best Use of AA or SocialConnect
</text>

<p style="text-align:center; font-weight:600">2000 USDC</text>

### Workshop Details

#### Title

🛠 Build dApps for Real World Usecases on Celo

#### Time

03:40 PM (Istanbul Time) – Nov 17, 2023

#### Location

Workshop Room 1

#### Description

Learn how to build decentralized applications for real world use cases and how to deploy your first dApp on Celo. In this workshop we'll go through an overview of Celo, an EVM compatible layer 1 blockchain, and how you can improve user experience for onboarding using SocialConnect and Account Abstraction on Celo.

### What is Celo?

Celo is the carbon-negative, mobile-first, EVM-compatible PoS blockchain where developers can build decentralized applications that create the conditions for prosperity — for everyone.

### Resources for hackers!

#### Get started using Celo Composer

We've put together [this starter project](https://github.com/celo-academy/celo-composer-example) to help you get started quickly, using contracts already deployed to either testnet or Celo mainnet. The project provides: a storage example, how to iterate through a subgraph.

Advanced developers can use [Celo Composer](https://github.com/celo-org/celo-composer) from command-line to customize exactly what platform you want to build for: React, React Native (with or without Expo integration), Angular, or Flutter. It includes a Subgraph integration if you need it.

[Celo Composer Docs](https://github.com/celo-org/celo-composer)

##### Ideas

-   Education DAO
    -   A DAO for community members to create educational content
-   Carbon Negative NFTs
    -   A portion of NFT sale will be used to remove carbon from the atmosphere.
-   Offline transactions
    -   Support for offline or local network transactions in the Celo blockchain client for use in wallets with low connectivity.

[More](https://clabsco.notion.site/Celo-Hackathon-Ideas-1396d40f70944f92b5108d5100fda41b)

##### Guides

-   [Intro to Celo ETHGlobal Guide](https://ethglobal.com/guides/intro-to-celo-j80ti)
-   [Celo Composer: Extend and Customize your Full-Stack Mobile dApps
    ](https://joenyzio.medium.com/celo-dappstarter-customize-your-full-stack-mobile-dapps-on-celo-232d85b7a2c5)
-   [Celo Spark: Celo Composer in 1 min
    ](https://www.youtube.com/watch?v=pNEDt34utqk)
-   [Workshop: Building an NFT collection on Celo using Celo composer
    ](https://www.youtube.com/watch?v=hf5gTAQ8G10)

#### SocialConnect

SocialConnect is an open source protocol that maps off-chain personal identifiers (such as phone numbers, twitter handles, etc.) to on-chain account addresses. This enables a convenient and interoperable user experience for use cases such as:

-   Payments
    -   Send money directly to your friend's phone number!
-   Social Discovery
    -   Find someone's account based on their twitter!
-   Any other identity applications!

##### 🛠 How it Works

SocialConnect uses a federated model, meaning that anyone has the power to be an issuer of attestation mappings. Issuers have the freedom to decide how to verify that the user actually has ownership of their identifier. After verification, issuers register the mapping as an attestation to the [on-chain smart contract registry](https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/identity/FederatedAttestations.sol). Attestations are stored under the issuer that registered them. When looking up attestations, we then have to decide which issuers are trusted.

##### Videos

We've made a mini-series to explain you:

[Celo Spark: SocialConnect Mini-Series (1/3) — What Is It?](https://www.youtube.com/watch?v=a_756GRPcV4&list=PLsQbsop73cfErtQwacE4WgqQwoVcLvLZS&index=1)
[Celo Spark: SocialConnect Mini-Series (2/3) — How Does It Works?](https://www.youtube.com/watch?v=bzZbfoPLYM4&list=PLsQbsop73cfErtQwacE4WgqQwoVcLvLZS&index=2)
[Celo Spark: SocialConnect Mini-Series (3/3) — Coding Session](https://www.youtube.com/watch?v=qrIHC496avs&list=PLsQbsop73cfErtQwacE4WgqQwoVcLvLZS&index=3)

[Quickstart](https://github.com/celo-org/social-connect#-quickstart)

## 🚀 Examples

|                                             Type                                              |
| :-------------------------------------------------------------------------------------------: |
|                            [ContractKit](examples/contractKit.ts)                             |
|                              [EthersJS (v5)](examples/ethers.ts)                              |
|                                  [web3.js](examples/web3.ts)                                  |
|         [NextJS based web app (Phone Number)](https://github.com/celo-org/emisianto)          |
|         [NextJS based templated](https://github.com/celo-org/socialconnect-template)          |
| [React Native App (Phone Number)](https://github.com/celo-org/SocialConnect-ReactNative-Demo) |
|      [NextJS based web app (Twitter)](https://github.com/celo-org/SocialConnect-Twitter)      |
| [Server side NextJS (Twitter)](https://github.com/celo-org/SocialConnect-Twitter-Server-Side) |

The [Runtime Environments section](docs/privacy.md#runtime-environments) shows instructions for using SocialConnect with:

-   [NodeJS](https://nodejs.org) (see [Runtime Environments > Node](docs/privacy.md#node)),
-   [React Native](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiK9paNjYH9AhUIesAKHQZ1CvYQFnoECA0QAQ&url=https%3A%2F%2Freactnative.dev%2F&usg=AOvVaw3N725EvNXK2_crezzoIs9d) (see [Runtime Environments > React Native](docs/privacy.md#react-native)), and
-   Web (see [Runtime Environments > Web](privacy.md#web))

## 📄 Documentation

For a deeper dive under the hood and specific implementation details, check out the documentation of the [protocol](docs/protocol.md) for details on how to interact with the on-chain registry, [privacy](docs/privacy.md) for how identifiers are obfuscated, and [key-setup](docs/key-setup.md) to setup your role keys to interact with the protocol.
