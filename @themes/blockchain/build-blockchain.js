root = 'blockchain/';

ARR_MODULE = [
    {
        title: 'Категории',
        themes: [
            [root+'category/blockchain',     'Blockchain'],
            [root+'category/nft',            'NFT'],
            [root+'category/smart-contract', 'Smart Contract'],
        ]
    },
    {
        title: 'Инструменты',
        themes: [
            [root+'utils/ipfs',        setTheme(5, ['IPFS'])],
            [root+'utils/web3-wallet', setTheme(5, ['Web3 Wallet'])],
            [root+'utils/metamask',    'Metamask'],
            [root+'utils/filecoin',    'Filecoin'],
        ]
    },
]
