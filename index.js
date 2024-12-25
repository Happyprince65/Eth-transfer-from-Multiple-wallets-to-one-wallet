
const Web3 = require('web3');


// reciever_wallet
const targetWalletAddress = 'Public_walletAddress_here';

// Initialize Web3
const web3 = new Web3(`Add you node link here`);

// List of private keys of the sendeer wallets
const privateKeys = [
    "privatekey1",
    "privatekey2",
    "privatekey3",
    // Add more private keys here
];

// Fixed amount to keep for gas fees (in ETH)
const gasBuffer = 0.00005;

// Function to send ETH from a single wallet to the target wallet
const sendEth = async (privateKey) => {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const address = account.address;

    const balance = await web3.eth.getBalance(address);
    const balanceInEther = web3.utils.fromWei(balance, 'ether');

    if (parseFloat(balanceInEther) > gasBuffer) {
        const nonce = await web3.eth.getTransactionCount(address, 'latest');
        const gasPrice = await web3.eth.getGasPrice();

        // Deduct gasBuffer from balance to cover the gas fees
        const transferAmountInEther = parseFloat(balanceInEther) - gasBuffer;
        const transferAmountInWei = web3.utils.toWei(transferAmountInEther.toFixed(18), 'ether');

        const gasEstimate = await web3.eth.estimateGas({
            from: address,
            to: targetWalletAddress,
            value: transferAmountInWei
        });

        const transaction = {
            to: targetWalletAddress,
            value: transferAmountInWei,
            gas: gasEstimate,
            gasPrice: gasPrice,
            nonce: nonce
        };

        const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey);

        try {
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
        } catch (error) {
            console.error(`Transaction failed: ${error}`);
        }
    } else {
        console.log(`Insufficient balance to cover gas fees in wallet: ${address}`);
    }
};

// Iterate over the private keys and send ETH
const transferAll = async () => {
    for (const privateKey of privateKeys) {
        await sendEth(privateKey);
    }
};

// Execute the transfer
transferAll().catch(console.error);