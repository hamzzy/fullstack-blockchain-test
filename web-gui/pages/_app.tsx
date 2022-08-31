import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
	allChains,
	Chain,
	chain,
	configureChains,
	createClient,
	WagmiConfig,
} from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { infuraProvider } from 'wagmi/providers/infura'

const { chains, provider } = configureChains([chain.rinkeby], [
	infuraProvider({ apiKey: "4b04ec09c7064bf09d9ca00e5a3ba87a" }),
    // jsonRpcProvider({
    //   rpc: (chain) => ({
    //     http: `http://${chain.id}.127.0.0.1:8545/`,
    //     // webSocket: `wss://${chain.id}.example.com`,
    //   }),
    // }),
	publicProvider(),
])

// Set up client
const client = createClient({
	autoConnect: true,
	connectors: [
		new InjectedConnector({
			chains,
			options: {
				name: 'Injected',
				shimDisconnect: true,
			},
		}),
		new MetaMaskConnector({
			chains,
			options: {
				shimDisconnect: true,
			},
		}),
		new WalletConnectConnector({
			chains,
			options: {
				qrcode: true,
			},
		}),
	],
	provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </WagmiConfig>
  )
}

export default MyApp
