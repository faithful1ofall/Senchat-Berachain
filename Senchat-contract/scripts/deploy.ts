// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
import fs from "fs";
import { defineChain } from "viem";
import { privateKeyToAccount } from "viem/accounts";


const chainConfiguration = defineChain({
  id: parseInt(`${process.env.CHAIN_ID}`),
  name: `${process.env.NETWORK_NAME}`,
  network: `${process.env.NETWORK_NAME}`,
  nativeCurrency: {
    decimals: parseInt(`${process.env.CURRENCY_DECIMALS}`),
    name: `${process.env.CURRENCY_NAME}`,
    symbol: `${process.env.CURRENCY_SYMBOL}`,
  },
  rpcUrls: {
    default: {
      http: [`${process.env.RPC_URL}`],
    },
    public: {
      http: [`${process.env.RPC_URL}`],
    },
  },
  blockExplorers: {
    default: {
      name: `${process.env.BLOCK_EXPLORER_NAME}`,
      url: `${process.env.BLOCK_EXPLORER_URL}`,
    },
  },
});

async function main() {
   // const mintFee = hre.ethers.parseEther("0.0001");
   const mintFee = 100000000000000;
   const ownerAddress = "0x5AdA0f2f59d2acDbE33Cc87f354E2c1357C4E9C9"
 

  if (hre.network.name === "berachainTestnet") {
    // Retrieve contract artifact ABI & Bytecode
    const contractName = "Senchat";
    const artifactFile = fs.readFileSync(
      `${hre.artifacts._artifactsPath}/contracts/nftscontract.sol/${contractName}.json`,
    );
    const artifactJSON = JSON.parse(artifactFile.toString()) as any;
    const account = privateKeyToAccount(
      hre.network.config.accounts?.[0] as `0x${string}`,
    );
     // Configure wallet client
     const walletClient = await hre.viem.getWalletClient(
      // wallet account
      account.address,
      // configured chain
      {
        chain: chainConfiguration,
        account,
      },
    );

    // Deploy contract
    const hash = await walletClient.deployContract({
      abi: artifactJSON.abi,
      bytecode: artifactJSON.bytecode,
      args: [ownerAddress, mintFee],
    });
    console.log({ hash });

    // Retrieve deployed contract address
    const publicClient = await hre.viem.getPublicClient({
      chain: chainConfiguration,
    });
    const receipt = await publicClient.waitForTransactionReceipt({ hash });
    console.log(`${contractName} deployed to ${receipt?.contractAddress}`);

    await hre.run("verify:verify", {
      address: receipt?.contractAddress,
      constructorArguments: [ownerAddress, mintFee]
    });

  } else {
    const contract = await hre.viem.deployContract("Senchat", [
      ownerAddress, mintFee
    ]);
    console.log(`Senchat deployed to ${contract.address} with mint fee of ${mintFee}`);
  }
}




// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
