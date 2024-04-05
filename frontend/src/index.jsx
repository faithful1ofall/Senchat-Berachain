import React, { Suspense } from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { ModalProvider } from '@particle-network/connect-react-ui';
import { BerachainArtio } from '@particle-network/chains';
import { evmWallets } from '@particle-network/connect';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ModalProvider
              options={{
                  projectId: process.env.REACT_APP_PROJECTID,
                  clientKey: process.env.REACT_APP_CLIENTKEY,
                  appId: process.env.REACT_APP_APPID,
                  chains: [
                    BerachainArtio
                ],
                wallet: { 
                  visible: true,
              },
              wallets: evmWallets({ 
                    projectId: process.env.REACT_APP_PROJECTIDWALLET,
                    showQrModal: false
                }),
              }}
              theme={'dark'}
              language={'en'}
              walletSort={['Particle Auth', 'Wallet']}
         /*      particleAuthSort={[    //optional：display particle auth items and order
              'twitter',
          ]} */
          >
              <App />
      </ModalProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
