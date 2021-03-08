module.exports = {
    eth_accounts: require('./eth_accounts'),
    eth_blockNumber: require('./eth_blockNumber'),
    eth_call: require('./eth_call'),
    eth_chainId: require('./eth_chainId'),
    eth_estimateGas: require('./eth_estimateGas'),
    eth_gasPrice: require('./eth_gasPrice'),
    eth_getBalance: require('./eth_getBalance'),
    eth_getBlockByHash: require('./eth_getBlockByHash'),
    eth_getBlockByNumber: require('./eth_getBlockByNumber'),
    eth_getCode: require('./eth_getCode'),
    eth_getLogs: require('./eth_getLogs'),
    eth_getStorageAt: require('./eth_getStorageAt'),
    eth_getTransactionByHash: require('./eth_getTransactionByHash'),
    eth_getTransactionCount: require('./eth_getTransactionCount'),
    eth_getTransactionReceipt: require('./eth_getTransactionReceipt'),
    eth_sendRawTransaction: require('./eth_sendRawTransaction'),
    eth_sendTransaction: require('./eth_sendTransaction'),
    eth_sign: require('./eth_sign'),
    net_version: require('./net_version'),
    web3_clientVersion: require('./web3_clientVersion'),
    // eth_getBlockTransactionCountByHash: require('./eth_getBlockTransactionCountByHash'),
    // eth_getBlockTransactionCountByNumber: require('./eth_getBlockTransactionCountByNumber'),
    eth_getTransactionByBlockHashAndIndex: require('./eth_getTransactionByBlockHashAndIndex'),
    eth_getTransactionByBlockNumberAndIndex: require('./eth_getTransactionByBlockNumberAndIndex'),
};