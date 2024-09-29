const Web3 = require('web3');

// Initialize web3 (assuming you are using Infura or similar service)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Example blockchain function to store incident on the blockchain
const sendToBlockchain = async (incident) => {
    try {
        const account = web3.eth.accounts.wallet.add('YOUR_PRIVATE_KEY');

        const transaction = {
            from: account.address,
            to: '0xRecipientAddress', // Smart contract address
            data: web3.utils.toHex(`Incident: ${incident.name}, Description: ${incident.description}`),
            gas: 2000000,
        };

        const signedTransaction = await web3.eth.accounts.signTransaction(transaction, account.privateKey);

        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

        // Return the transaction hash as proof
        return receipt.transactionHash;
    } catch (error) {
        console.error('Blockchain Error:', error);
        throw new Error('Failed to store incident on the blockchain');
    }
};

module.exports = { sendToBlockchain };
