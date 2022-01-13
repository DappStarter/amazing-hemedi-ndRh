require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note pave pumpkin grace cash equal giant'; 
let testAccounts = [
"0xdb2364c7fd1c64241f64df4a1441f3621f672e81829559da7a12cd73d0c2ea4a",
"0x399c30ce40e08d392e6d26e3bae13891712f111e270fc9b2593cf54cb34cae27",
"0xcbce1689fe8e8d6a9e8fd640531ed312c854b4d5cdc8a50c2afa39422e71d13a",
"0x2c1a17a03f6d906da0ca6fcd75f294c5e706db19430154dd71c9c29aef68985c",
"0x76d70f749605f9d2ea484db5d104ddbebfb29bc9b88108fb02090f3837935b20",
"0x1d03fc241284a45d2341579e40a4bf5a6924276fe16e73f96e842248e258092d",
"0x659887ad165e3e38f1e9cafac1add73b014858bbbab6d747adfc3cfaab6a4e1e",
"0x34f6e757463cca014f605c6ea16873d85c15b9d06720c57372bcae4ca4cf31b3",
"0xfa063ccd900440965dbf331b983a89bbc713b01ed8764e1f98b03bc6df6ae51e",
"0x29eea850d5cb5bb8174a47fee1421263af58343557ffef6c53b8b575c467a48f"
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

