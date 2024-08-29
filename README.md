# Secure Data Sharing with Ethereum Smart Contract

## Overview

This project provides a solution for secure data sharing using blockchain technology. The `Upload` smart contract, deployed on the Ethereum blockchain, ensures secure storage and selective sharing of sensitive data while maintaining data integrity and privacy.

## Tech Stack

- **Ethereum:** Blockchain platform for deploying the smart contract.
- **Solidity:** Language for developing the `Upload` smart contract.
- **Hardhat:** Development environment for smart contract development.
- **JavaScript:** Used for scripting and testing within the Hardhat environment.
- **Node.js:** Runtime for executing JavaScript code on the server side.

## Installation and Setup

Follow these steps to get the project up and running:

### 1. Clone the Repository

Open your terminal and run the following command to clone the project repository:

```bash
git clone https://github.com/liegen47/secure-medshare.git
```
### 2. Navigate to the Project Directory
```bash
cd secure-medshare
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Compile the Smart Contract
```bash
npx hardhat compile
```
### 5. Configure the Network

Update the Hardhat configuration file (hardhat.config.js) with your network details. Ensure you have the appropriate network settings and credentials.

### 6. Deploy the Smart Contract
```bash
npx hardhat run scripts/deploy.js --network yourNetwork
```
Replace yourNetwork with the name of the network you're deploying to (e.g., rinkeby, mainnet).

### 7.  Interact with the Smart Contract
After deployment, you can interact with the smart contract using provided scripts or integrate it into your application. You may need to write additional scripts or use a frontend to interact with the contract functions.

## Usage
For detailed instructions on how to use Hardhat and interact with the deployed smart contract, refer to the Hardhat documentation.

## Contact
For questions or feedback, please reach out to vanshkapoor418@gmail.com.
