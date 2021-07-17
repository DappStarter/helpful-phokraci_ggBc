require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth script assume hidden narrow flee square'; 
let testAccounts = [
"0x5b7d94986da1353ed409dd21d21ea8a131da649969c26aaf1733bd707886c7f0",
"0x54d4b411c1a2679466f2416ee2a752adee5ee8b20f3f46191b555f290b231346",
"0x96bef027a90e267157b3eeba4bbe80128fea44da51b5fb808cf33630942de47f",
"0x2e825ccc8bd304e03095fac73d673b10ce9c24915619d52b3311280e47d0d620",
"0x539059b856658334e0402ae3f3c9569a7bbd88e95a76a37a15d5a62cb1e0649b",
"0xf387002024d3f847ab0ee2a75771c58b6434d4bb2121a8bdb9c67522abd97aaf",
"0x3933d07a99beb3b278ad0f6d0f8c91100f222a962ad33d267dd944b321fae391",
"0x5b8599d32cc54e4489c8ec84a2fc44e4aeaab4cce3b4b474d0ac8d5313d62b15",
"0x2e3a5094e4032ea851e48551a8cee5f204ee4ea7ac2ae7dcc7bd01cbda393c98",
"0x7f08039727001cd48398926986dfa850cee2a19a1aadcedea0054e2b97666554"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

