import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Button, Img, Text } from "components";
import ContractABI from '../utils/contractabi.json';
import { ConnectButton, useAccount, useParticleProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/dist/index.css';
import { isEVMProvider } from '@particle-network/connect';
import Web3 from 'web3';
import { sha256 } from 'js-sha256';
import { NFTStorage, File } from 'nft.storage';
// import { useAuthCore } from '@particle-network/auth-core-modal';

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [rpc, setRpc] = useState();
  const nftcontract = process.env.REACT_APP_NFTCONTRACT;
  const [isConnected, setIsConnected] = useState();
  const [errMessage, seterrMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFilename] = useState(null);
  const [filetype, setFiletype] = useState(null);
  const NFT_STORAGE_KEY = process.env.REACT_APP_NFT_STORAGE_KEY;

  
  const history = useNavigate();


  const account = useAccount();
  const provider = useParticleProvider();
 // console.log(provider);

 // const { useInfo } = useWalletMetas();
 console.log(account);
 

  useEffect(() => {
    if (provider && isEVMProvider(provider)) {
      window.web3 = new Web3(provider);
    }
  }, [provider]);


  useEffect(() => {
    const fetchData = async () => {
      generateFavicon();
      try {
        if (account) {
          setIsConnected(true);
          
          connectToWeb3();
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

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

  const generateFavicon = async() => {
    const canvas = document.createElement('canvas');
    canvas.width = 80;
    canvas.height = 80;
    const context = canvas.getContext('2d');

    context.fillStyle = getRandomColor();
    context.fillRect(0, 0, 80, 80);

    const url = canvas.toDataURL('image/png');
    const r = await fetch(url);
    const rb = await r.blob();
    setSelectedFile(rb);
    console.log(rb);
    setFilename('randomfavicon.png');
    setFiletype('image/png');
  }
 

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
      
      const reader = new FileReader();

        reader.onload = async () => {
          const content = reader.result;
          const image = new File([new Uint8Array(content)], filename, { type: filetype });

          const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

          const signupData = {
            image,
            name: account.toString(),
            description: `email: ${account.toString()}`,
            address: account,
          };

          // Store data using NFT.Storage
          const response = await nftstorage.store(signupData);

          console.log(response);
          try {
            await new window.web3.eth.Contract(ContractABI, nftcontract)
              .methods.userMint(account, `1${big}`, `${response.url}`)
              .send({ from: account, value: window.web3.utils.toWei('0.0001', 'ether') });

            setSuccessMessage('Successfully signed and verified');
            setIsLoading(false);
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
            console.log(error);
            setIsLoading(false);
            seterrMessage(`Insufficient balance`);
            nftstorage.delete(response.ipnft);
          }
        };

        reader.readAsArrayBuffer(selectedFile);
    }
  }

 

  return (
    <React.Fragment>
      <div className="flex justify-between bg-white p-2 h-[12px]">
        <div className="flex flex-col gap-[5px] w-[4rem] lg:w-full">
          <Img
            className="h-[43px] md:h-auto object-cover"
            src="images/img_image3.png"
            alt="imageThree"
          />
          <Text
            className="text-[7.39px] text-teal-A400"
            size="txtPromptSemiBold739"
          >
            SENCHAT
          </Text>
        </div>

        <div className="mt-5">
          {/* <Link
            to="/signup"
            className="text-teal-A400 text-center text-[22px] p-5 font-semibold"
          >
            Sign up
          </Link>

          <Link
            to="/signin"
            className="bg-teal-A400 cursor-pointer font-medium font-prompt p-4 rounded-[13px] text-black-900 text-lg"
          >
            Sign in
          </Link> */}
          <ConnectButton />
          {/* <ConnectButton.Custom>
              {({ account, chain, openAccountModal, openConnectModal, openChainModal }) => {
                if (chain) {
                  console.log(chain.rpcUrl);
                  if (chain.rpcUrl === process.env.REACT_APP_RPC) {
                    console.log(chain.rpcUrl);
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
                        className="bg-teal-A400 cursor-pointer font-medium font-prompt p-4 rounded-[13px] text-black-900 text-lg"
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

                        {isConnected && (
                          <Button
                            onClick={connectToWeb3}
                            className="bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-[30%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center ml-8" // Add your desired class for when connected
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

                        {!isConnected && (
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
                        )}
                      </div>
                    )}
                  </div>

                );

              }}
            </ConnectButton.Custom> */}
            
        </div>
      </div>

      <div className="px-5 h-[100vh] bg-gray-100 mt-20 flex sm:flex-col md:flex-row items-center justify-center gap-28 ">
        <div className="first-layout ">
          <h1 className="text-4xl front-prompt font-semibold">
            WELCOME TO SENCHAT
          </h1>
        </div>
        <div className="second-layout ">
          <Img
            className="w-60"
            src="images/img_rectangle2.png"
            alt="rectangle2"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
