import { Network } from '@/state/backendNetworks/types';

// TODO: networkInfo is DEPRECATED after the new network support changes
const networkInfo = {
  [`${Network.mainnet}`]: {
    balance_checker_contract_address: '0x4dcf4562268dd384fe814c00fad239f06c2a0c2b',
    color: '#0E76FD',
    disabled: false,
    exchange_enabled: true,
    faucet_url: null,
    name: 'Ethereum',
    gasToken: 'ETH',
    value: Network.mainnet,
  },
  [`${Network.goerli}`]: {
    balance_checker_contract_address: '0xf3352813b612a2d198e437691557069316b84ebe',
    color: '#f6c343',
    disabled: false,
    exchange_enabled: false,
    faucet_url: 'https://goerli-faucet.slock.it/',
    name: 'Goerli',
    gasToken: 'ETH',
    testnet: true,
    value: Network.goerli,
  },
  [`${Network.arbitrum}`]: {
    balance_checker_contract_address: '0x54A4E5800345c01455a7798E0D96438364e22723',
    color: '#2D374B',
    disabled: false,
    exchange_enabled: true,
    faucet_url: null,
    layer2: true,
    name: 'Arbitrum',
    gasToken: 'ETH',
    value: Network.arbitrum,
  },
  [`${Network.optimism}`]: {
    balance_checker_contract_address: '0x1C8cFdE3Ba6eFc4FF8Dd5C93044B9A690b6CFf36',
    color: '#FF4040',
    disabled: false,
    exchange_enabled: true,
    faucet_url: null,
    layer2: true,
    name: 'Optimism',
    gasToken: 'ETH',
    value: Network.optimism,
  },
  [`${Network.polygon}`]: {
    balance_checker_contract_address: '0x54A4E5800345c01455a7798E0D96438364e22723',
    color: '#8247E5',
    disabled: false,
    exchange_enabled: true,
    faucet_url: null,
    layer2: true,
    longName: 'Polygon (Matic)',
    name: 'Polygon',
    gasToken: 'MATIC',
    value: Network.polygon,
  },
  [`${Network.bsc}`]: {
    balance_checker_contract_address: '0x400A9f1Bb1Db80643C33710C2232A0D74EF5CFf1',
    color: '#F0B90B',
    disabled: false,
    exchange_enabled: true,
    faucet_url: null,
    layer2: true,
    longName: 'Binance Smart Chain',
    name: 'BSC',
    gasToken: 'BNB',
    value: Network.bsc,
  },
};

export default networkInfo;
