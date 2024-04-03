import React, { useState, useEffect } from "react";
import { Img, Line,Text } from "components";
import PortCol from "components/PortfolioColumn/portfolioColumn"
import ContractABI from '../../utils/contractabi.json';
import { sha256 } from 'js-sha256';
import Web3 from 'web3';
import { isEVMProvider } from '@particle-network/connect';
import { ConnectButton, useParticleProvider, useAccount } from '@particle-network/connect-react-ui';


const Portfolio = () => {
  const [owner, setOwner] = useState();
  const [provider, setRpc] = useState();
  const [count, setCount] = useState(0);
  const nftcontract = process.env.REACT_APP_NFTCONTRACT;


   useEffect(() => {
    
    const fetchData = async () => {

       if (provider && isEVMProvider(provider)) {
            window.web3 = new Web3(provider);
            console.log(provider);



            const func = async (index) => {
              try {
                const tokenId = await new window.web3.eth.Contract(ContractABI, nftcontract)
                  .methods.tokenOfOwnerByIndex(owner.toString(), `${index}`)
                  .call();
            
                const tokenURI = await new window.web3.eth.Contract(ContractABI, nftcontract)
                  .methods.tokenURI(`${tokenId}`)
                  .call();
            
                const startsWithB2 = tokenId.toString().startsWith("2")
            
                if (startsWithB2) {
                  return {
                    tokenId,
                    tokenURI,
                  };
                }
            
                return null; // Return null for tokens that don't start with '2'
            
              } catch (error) {
                console.error(`Error fetching details for token at index ${index}:`, error.message);
                return null; // or throw the error if needed
              }
            };
            
            const fetchAllTokenDetails = async (startIndex, endIndex) => {
             
            
              const allTokenDetails = [];
            
              // Create an array of promises for concurrent execution
              const promises = Array.from({ length: endIndex - startIndex + 1 }, (_, i) => func(endIndex - i));
            
              // Use Promise.all to wait for all promises to resolve
              const results = await Promise.all(promises);
            

              results.filter((result) => result !== null).forEach((result) => allTokenDetails.push(result) );

            
              return allTokenDetails;
            }

            
            const totalSupply = await new window.web3.eth.Contract(ContractABI, nftcontract).methods.totalSupply().call();

            const totalSupplyNumber = parseInt(totalSupply, 10);
    
           const all = await fetchAllTokenDetails(0, totalSupplyNumber - 1);

           setCount(all.length);

            

           /*  try {



              const tokenId = await new window.web3.eth.Contract(ContractABI, nftcontract)
                .methods.tokenOfOwnerByIndex(owner,`${count}`)
                .call();

                const startsWithB2 = tokenId.toString().startsWith("2")

              if (startsWithB2) {                
                setCount(prevCount => prevCount + 1);
                console.log(count);
              }
              setCount(prevCount => prevCount + 1);
            } catch (error) {
              console.log(count);
              console.log(error);
            } */
          } 
    };
    fetchData();
  }, [ count, nftcontract, owner, provider ]);

  return (
    <>
    
     <div className="bg-gray-100 pt-6 sm:pt-10 flex flex-col font-prompt items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <ConnectButton.Custom>
            {({ account, chain }) => {
              if (chain) {
                setRpc(chain.rpcUrl);
                setOwner(account);
              };       
            }}
          </ConnectButton.Custom>
         
          {/* <List
            className="sm:flex-col flex-row gap-[22px] grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1421px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          > */}
            <div className="sm:h-[30rem] h-[] md:h-[2054px] sm:ml-[0] relative w-full">
              
              <div className="absolute bg-gray-100 flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[17px] pl-[17px] top-[0] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                
                  <div className="flex flex-col items-start justify-start mt-[46px] p-1 w-full">
                    <Text
                      className="mb-[22px] mt-[17px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtPromptBold40"
                    >
                      Portfolio Overview
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-8 items-end justify-start mt-[5px] w-[81%] md:w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
                        size="txtPromptSemiBold24Bluegray90001"
                      >
                        Wallet Balance (SenTokens)
                      </Text>
                      <Text
                        className="sm:text-[21.5px] md:text-[23.5px] text-[25.5px] text-blue_gray-400"
                        size="txtPromptSemiBold255Bluegray400"
                      >
                         Earn Points Through Activities
                      </Text> 
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center mb-0.5 ml-0.5 md:ml-[0] md:mt-0 mt-12 w-[27%] md:w-full">
                      <Img
                        className="h-[22px]"
                        src="images/img_send.svg"
                        alt="send"
                      />
                      <Text
                        className="sm:text-[21.5px] md:text-[23.5px] text-[25.5px] text-blue_gray-400"
                        size="txtPromptSemiBold255Bluegray400"
                      >
                        {count/100}
                      </Text>
                    </div>
                     {/* <Button className="bg-teal-A400 cursor-pointer font-semibold leading-[normal] mb-1 min-w-[146px] md:ml-[0] ml-[54px] md:mt-0 mt-[35px] py-3 rounded-[15px] text-[16.34px] text-black-900 text-center tracking-[-0.49px]">
                      DEPOSIT
                    </Button>
                    <Button className="border border-blue_gray-400 border-solid cursor-pointer font-semibold leading-[normal] mb-1 min-w-[146px] ml-4 md:ml-[0] md:mt-0 mt-[35px] py-3 rounded-[15px] text-[16.34px] text-blue_gray-400 text-center tracking-[-0.49px]">
                      WITHDRAWAL
                    </Button> */} 
                  </div>
                  <Line className="bg-teal-100 h-[3px] mt-7 w-full" />
                  <PortCol className="flex flex-col bg-white-A700 gap-[19.03px] items-start justify-start w-full" />
                  </div>
              </div>
            </div>
            
         {/*  </List> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
