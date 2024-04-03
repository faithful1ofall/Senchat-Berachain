import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Img, Input, Text } from "components";
import Header from "components/Header/index";
import { NFTStorage, File } from 'nft.storage';
import ContractABI from '../../utils/contractabi.json';
import { ConnectButton, useAccount, useParticleProvider } from '@particle-network/connect-react-ui';
import '@particle-network/connect-react-ui/dist/index.css';
import { isEVMProvider } from '@particle-network/connect';
import Web3 from 'web3';
import { sha256 } from 'js-sha256';



const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFilename] = useState(null);
  const [filetype, setFiletype] = useState(null);
  const [isConnected, setIsConnected] = useState();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errMessage, seterrMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [rpc, setRpc] = useState();
  const [chainId, setChainid] = useState();
  const NFT_STORAGE_KEY = process.env.REACT_APP_NFT_STORAGE_KEY;
  const nftcontract = process.env.REACT_APP_NFTCONTRACT;
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
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        setIsConnected(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [account]);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedFile && !filename) {
        const imageOriginUrl = process.env.REACT_APP_LOGO;
        const r = await fetch(imageOriginUrl);
        const rb = await r.blob();
        setSelectedFile(rb);
        setFilename('senchatlogo.png');
        setFiletype('image/png');
      }
    };
    fetchData();
  });


  const handleFileChange = () => {
    const doc = document.querySelector('input[type="file"]');
    setSelectedFile(doc.files[0]);
    setFilename(doc.files[0].name);
    setFiletype(doc.files[0].type);
  };

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


  const generateNonceAndSign = async () => {
    setIsLoading(true);
    if (isConnected) {
      const hashedAccount = hashAccount(account);
      const numericalCharacters = extractDigits(hashedAccount);
      const big = getFirst10Digits(numericalCharacters);
      console.log(numericalCharacters, big);


      try {
        await new window.web3.eth.Contract(ContractABI, nftcontract)
          .methods.tokenURI(`1${big}`)
          .call();

        seterrMessage('Account Alread Exist and verified try signing in');
      } catch (error) {
        const reader = new FileReader();

        reader.onload = async () => {
          const content = reader.result;
          const image = new File([new Uint8Array(content)], filename, { type: filetype });

          const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

          const signupData = {
            image,
            name: username,
            description: `email: ${email}`,
            address: account,
            chainId: chainId
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
            history('/signin', { replace: true });
          } catch (error) {
            console.log(error);
            setIsLoading(false);
            seterrMessage(`Insufficient balance`);
            nftstorage.delete(response.ipnft);
            history('/signup', { replace: true });
          }
        };

        reader.readAsArrayBuffer(selectedFile);
      }
    } else {
      seterrMessage('Account Not Connected')
      console.error('Account not connected');
    }
  };

  const handleChange = (e) => {
    if (e) {
      setUsername(e);
    } else {
      console.error('Invalid event or value:', e);
    }
  }
  const handleChangeemail = (e) => {
    if (e) {
      setEmail(e);
    } else {
      console.error('Invalid event or value:', e);
    }
  }

  return (
    <div className="bg-gray-100 flex flex-col font-prompt gap-[33px] items-end justify-end mx-auto w-full">
      <div className="flex flex-col items-center w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
      </div>
      <div className="bg-white-A700 flex flex-col items-center justify-start p-[49px] md:px-5 rounded-bl-[70px] rounded-tl-[70px] w-[63%] md:w-full">
        <div className="flex flex-col gap-[5px] items-center justify-start w-[7%] md:w-full">
          <Img
            className="h-[30px] md:h-auto object-cover"
            src="images/img_image3.png"
            alt="imageThree_One"
          />
          <Text
            className="text-[14.39px] text-teal-A400"
            size="txtPromptSemiBold739"
          >
            SENCHAT
          </Text>
        </div>
        <div className="flex flex-col gap-11 items-center justify-start w-full">
          <div className="flex flex-col gap-[17.51px] items-center justify-start w-auto">
            <Text
              className="sm:text-[31.020000000000003px] md:text-[33.02px] text-[35.02px] text-black-900 w-auto"
              size="txtPromptSemiBold3502"
            >
              Create Account
            </Text>
            <Text
              className="text-[17.51px] text-gray-600 tracking-[0.18px] w-auto"
              size="txtPromptRegular1751"
            >
              Let’s Get You Started
            </Text>
          </div>
          <div className="flex flex-col gap-[21.88px] items-start justify-start w-full">
            <div className="flex flex-col gap-[8.75px] items-start justify-start w-full">
              <Text
                className="text-[15.32px] text-gray-800 w-auto"
                size="txtPromptMedium1532"
              >
                Username:
              </Text>
              <Input
                name="frameFour"
                placeholder="Choose a username"
                className="leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-[15.32px] text-gray-600 text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid pl-[17px] pr-[35px] py-3 rounded-lg w-full"
                type="text"
                onChange={handleChange}
              ></Input>
            </div>
            <div className="flex flex-col gap-[8.75px] items-start justify-start w-full">
              <Text
                className="text-[15.32px] text-gray-800 w-auto"
                size="txtPromptMedium1532"
              >
                Email
              </Text>
              <Input
                name="frameFour_One"
                placeholder="Enter email"
                className="leading-[normal] p-0 placeholder:text-gray-600 text-[15.32px] text-gray-600 text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid pl-[17px] pr-3 py-3 rounded-lg w-full"
                type="email"
                onChange={handleChangeemail}
              ></Input>
            </div>
            <Text
              className="text-[15.32px] text-gray-800 w-auto"
              size="txtPromptMedium1532"
            >
              Choose Profile Picture (optional i.e Senchat Logo will be choosed instead)
            </Text>
            <label className="text-[15.32px] text-gray-800 w-auto relative overflow-hidden border border-gray-300 px-3 py-2 rounded cursor-pointer">
              <span>Select a file</span>
              <input
                type="file"
                className="absolute inset-0 opacity-0"
                onChange={handleFileChange}
              />
            </label>
            <p>{filename}</p>
            <ConnectButton.Custom>
              {({ account, chain, openAccountModal, openConnectModal, openChainModal }) => {
                if (chain){
                  setChainid(chain.id);
                  console.log(chain.id);
                  if (chain.rpcUrl === process.env.REACT_APP_RPC) {
                    setRpc(true);
                  } else {
                    setRpc(false);
                  }
                }
                

                return (
                  <div>
                    {!account && (
                      <Button
                        onClick={openConnectModal}
                        className="bg-teal-A400 cursor-pointer font-medium  w-[200%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center"
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


            <Button
              onClick={generateNonceAndSign}
              className="bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-full py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center"
            >
               {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              ) : (
                'Signup and Verify'
              )}              
            </Button>
            {successMessage && (
              <div className="text-green-600">{successMessage}</div>
            )}
            {errMessage && (
              <div className="text-red-600">{errMessage}</div>
            )}
          </div>
         
        </div>
        <div className="flex flex-row gap-[4.38px] items-center justify-start mb-4 mt-[27px] w-full">
          <Text
            className="text-[15.32px] text-gray-600 w-full text-center"
            size="txtPromptMedium1532Gray600"
          >
            Already have an account?{" "}
          </Text>
          <a
            href="/signin"
            className="text-[15.32px] text-teal-A400 w-full text-center"
          >
            <Text size="txtPromptMedium1532TealA400">Sign in</Text>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
