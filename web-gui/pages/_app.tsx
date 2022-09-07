import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
  allChains,
  Chain,
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { infuraProvider } from "wagmi/providers/infura";
import React, { createContext, ReactElement, ReactNode, useMemo } from "react";
import SubgraphClient from "utils/SubGraph";

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [
    infuraProvider({ apiKey: "4b04ec09c7064bf09d9ca00e5a3ba87a" }),
    // jsonRpcProvider({
    //   rpc: (chain) => ({
    //     http: `http://${chain.id}.127.0.0.1:8545/`,
    //     // webSocket: `wss://${chain.id}.example.com`,
    //   }),
    // }),
    publicProvider(),
  ]
);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
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
  provider,
});
export const ApiClientsContext = createContext<{
  subgraphClients: SubgraphClient
} | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const clients = useMemo(() => {
    return new SubgraphClient()
  }, []);

  const apiClients = useMemo(() => ({ subgraphClients: clients }), [clients]);
  return (
    <WagmiConfig client={client}>
      <ApiClientsContext.Provider value={apiClients}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApiClientsContext.Provider>
    </WagmiConfig>
  );
}

export default MyApp;
