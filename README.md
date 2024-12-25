# ETH Consolidation Script

This script allows you to consolidate Ether (ETH) from multiple wallets into a single target wallet. It iterates through a list of private keys, checks the balance of each associated wallet, and transfers the available ETH (minus a small buffer for gas fees) to the specified target address.

## Features

*   **Consolidates ETH:** Transfers ETH from multiple source wallets to a single destination.
*   **Gas Fee Handling:** Reserves a small amount of ETH in each source wallet to cover transaction fees.
*   **Error Handling:** Includes `try...catch` blocks to handle potential transaction errors.
*   **Clear Logging:** Provides informative console logs for successful and failed transactions, as well as insufficient balances.

## Prerequisites

*   Node.js and npm (Node Package Manager) installed.
*   A Web3 provider (e.g., Infura, Alchemy, or a local node).
*   Private keys for the source wallets. **Keep these secure!**
*   The target wallet address.

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Happyprince65/Eth-transfer-from-Multiple-wallets-to-one-wallet.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd YOUR_REPOSITORY
    ```

3.  Install dependencies:

    ```bash
    npm install web3
    ```

## Configuration

1.  **Web3 Provider:** Replace `"Add you node link here"` in the `index.js` file with your Web3 provider URL (e.g., `https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID`).

2.  **Target Wallet Address:** Replace `"Public_walletAddress_here"` with the public address of the wallet you want to send ETH to.

3.  **Private Keys:** Replace the placeholder private keys in the `privateKeys` array with the actual private keys of your source wallets. **Exercise extreme caution when handling private keys. Never commit them to version control or share them publicly.** Consider using environment variables for enhanced security.

    ```javascript
    const privateKeys = [
        "YOUR_PRIVATE_KEY_1",
        "YOUR_PRIVATE_KEY_2",
        "YOUR_PRIVATE_KEY_3",
        // ... more private keys
    ];
    ```

4.  **Gas Buffer:** The `gasBuffer` variable (currently set to `0.00005 ETH`) determines the amount of ETH left in each source wallet to cover gas fees for future transactions (if needed). Adjust this value as necessary.

## Usage

1.  Run the script:

    ```bash
    node index.js
    ```

## Security Considerations

*   **Private Key Management:** The most critical security concern is the handling of private keys. **Never store private keys directly in your code or commit them to version control.** Use environment variables or a secure key management solution.
*   **Gas Limit and Price:** The script uses `web3.eth.estimateGas` to estimate gas usage. While generally accurate, in rare cases of network congestion this estimate might be insufficient. Consider adding a small buffer to the gas estimate or manually setting a slightly higher gas price in such situations.
*   **Node Provider Security:** Ensure that your Web3 provider is reputable and secure.

## Disclaimer

This script is provided as-is, without any warranty. Use it at your own risk. The author is not responsible for any loss of funds or other damages resulting from the use of this script. Always test thoroughly in a test environment before using it on mainnet.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
