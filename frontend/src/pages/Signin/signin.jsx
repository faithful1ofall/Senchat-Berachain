import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Img, Text } from "components";
import Header from "components/Header/index";
import ContractABI from '../../utils/contractabi.json';
import { ConnectButton, useAccount, useParticleProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/dist/index.css';
import { isEVMProvider } from '@particle-network/connect';
import Web3 from 'web3';
import { sha256 } from 'js-sha256';



const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rpc, setRpc] = useState();
  const nftcontract = process.env.REACT_APP_NFTCONTRACT;
  const [isConnected, setIsConnected] = useState();
  const [errMessage, seterrMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const history = useNavigate();


  const account = useAccount();
  const provider = useParticleProvider();
  console.log(provider);

  useEffect(() => {
    if (provider && isEVMProvider(provider)) {
      window.web3 = new Web3(provider);
    }
  }, [provider]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (account) {
          setIsConnected(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [account]);


  const hashAccount = (account) => {
    const hashedAccount = sha256(account.toString());
    return hashedAccount;
  };

  const extractDigits = (text) => {
    const numericalCharacters = text.match(/\d/g);
    if (!numericalCharacters) return '';
    return numericalCharacters.join('');
  };

  const getFirst10Digits = (text) => {
    return text.substring(0, 10);
  };

  const connectToWeb3 = async () => {
    setIsLoading(true);

    if (!account) {
      setIsConnected(false);
      seterrMessage('Account Not Connected');
      return;
    }

    const hashedAccount = hashAccount(account);
    const numericalCharacters = extractDigits(hashedAccount);
    const big = getFirst10Digits(numericalCharacters);

    try {
      const url = await new window.web3.eth.Contract(ContractABI, nftcontract)
        .methods.tokenURI(`1${big}`)
        .call();
      const hash = url.replace('ipfs://', '');
      const cloudflareUrl = `https://cloudflare-ipfs.com/ipfs/${hash}`;

      const response = await fetch(cloudflareUrl);

      if (!response.ok) {
        seterrMessage(`Failed to fetch from your data`);
        throw new Error(`Failed to fetch from IPFS. Status: ${response.status}`);
      }

      const userData = await response.json();

      localStorage.setItem('userData', JSON.stringify(userData));
      setSuccessMessage(`connected succesfully`);
      setIsLoading(false);
      history(`/education`, { replace: true });

    } catch (error) {
      setIsLoading(false);
      console.error(error);
      // seterrMessage(`Failed to fetch from IPFS. Status: ${response.status}`); 
      seterrMessage('Account Do not Exist and try to signup');
    }



  }
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-prompt gap-11 items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="bg-white-A700 flex flex-col gap-[27px] items-center justify-start p-[33px] md:px-5 rounded-bl-[70px] rounded-tl-[70px] w-[63%] md:w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start w-[7%] md:w-full">
            <Img
              className="h-[43px] md:h-auto object-cover w-full"
              src="images/img_image3.png"
              alt="imageThree_One"
            />
            <Text
              className="text-[7.39px] text-teal-A400"
              size="txtPromptSemiBold739"
            >
              SENCHAT
            </Text>
          </div>
          <div className="flex flex-col gap-[45.5px] items-center justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-[18.2px] items-center justify-start w-auto sm:w-full">
              <Text
                className="sm:text-[32.4px] md:text-[34.4px] text-[36.4px] text-black-900 w-auto"
                size="txtPromptSemiBold364"
              >
                Welcome back
              </Text>
              <Text
                className="text-[18.2px] text-gray-600 tracking-[0.18px] w-auto"
                size="txtPromptRegular182"
              >
                Welcome back! Please connect your wallet.
              </Text>
            </div>

            <ConnectButton.Custom>
              {({ account, chain, openAccountModal, openConnectModal, openChainModal }) => {
                if (chain) {
                  if (chain.rpcUrl === process.env.REACT_APP_RPC) {
                    setRpc(true);
                    setIsConnected(true);
                  } else {
                    setRpc(false);
                    setIsConnected(false);
                  }
                } else {
                  setIsConnected(false);
                }

                return (
                  <div>
                    {!account && (
                      <Button
                        onClick={openConnectModal}
                        className="justify-start bg-teal-A400 cursor-pointer font-medium leading-[normal] w-[150%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center"
                      >
                        Connect to web3
                      </Button>
                    )}
                    {account && (
                      <div className="flex justify-start">
                        <Button
                          onClick={openAccountModal}
                          className="bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-[50%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center"
                        >
                          {`${account.slice(0, 10)}...${account.slice(-5)}`}
                        </Button>

                        <Button
                          onClick={openChainModal}
                          className="bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-[30%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center ml-8"
                        >
                          {rpc ? (
                            "Network Connected"
                          ) : (
                            "Wrong Network"
                          )}
                        </Button>
                      </div>
                    )}
                  </div>

                );

              }}
            </ConnectButton.Custom>
            {isConnected && (
              <Button
                onClick={connectToWeb3}
                className="bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-full py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center bg-green-500" // Add your desired class for when connected
              >
                 {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                  ) : (
                    'Verify and Sign in'
                  )}
              </Button>
            )}
            {errMessage && (
              <div className="text-red-600">{errMessage}</div>
            )}

            <div className="flex flex-col gap-11 items-center justify-start w-full">

              <div className="flex flex-col gap-[22.75px] items-start justify-start w-auto sm:w-full">
                {successMessage && (
                  <div className="text-green-600">{successMessage}</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row font-roboto gap-[4.55px] items-center justify-start mb-[59px] w-auto">
            <Text
              className="text-[15.93px] text-gray-600 w-auto"
              size="txtRobotoRomanMedium1593"
            >
              Don’t have an account?{" "}
            </Text>
            <a
              href="/signup"
              className="text-[15.93px] text-teal-A400 w-auto"
            >
              <Text size="txtRobotoRomanMedium1593TealA400">Sign up</Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
