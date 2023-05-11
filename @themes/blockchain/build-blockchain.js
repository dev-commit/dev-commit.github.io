root = 'blockchain/';

ARR_MODULE = [

    {
        title: 'Основное',
        themes: [
            [root+'main/structure',        emoji.theory+'Структура'],
            [root+'main/algoritm',         emoji.fire+'Алгоритм работы'],
        ]
    },
    {
        title: '1. Blockchain',
        themes: [
            [root+'blockchain/blockchain',     emoji.theory+'Blockchain'],
            [root+'blockchain/smart-contract', 'Smart Contract'],
            [root+'blockchain/solidity',       setTheme(1, ['Solidity'])],
            [root+'blockchain/ipfs',           setTheme(1, ['IPFS'])],
            [root+'blockchain/filecoin',       setTheme(6, ['Filecoin'])],
        ]
    },
    {
        title: '2. Crypto Wallet',
        themes: [
            [root+'crypto-wallet/crypto-wallet', emoji.theory+'Crypto Wallet'],
            [root+'crypto-wallet/metamask', setTheme(1, ['Metamask'])],
            [root+'crypto-wallet/web3auth', setTheme(1, ['web3auth'])],
        ]
    },
    {
        title: '3. NFT',
        themes: [
            [root+'nft/nft',   emoji.theory+'NFT'],
            [root+'nft/token', emoji.theory+'Token'],
        ]
    },
    {
        title: '4. Application Web 3.0',
        themes: [
            [root+'application-web3/application-web3', emoji.theory+'Application Web 3.0'],
            [root+'application-web3/web3',             setTheme(1, ['Web3.js', 'Ethers.js'])],
            [root+'application-web3/truffle',          setTheme(6, ['Truffle'])],
        ]
    },
]
