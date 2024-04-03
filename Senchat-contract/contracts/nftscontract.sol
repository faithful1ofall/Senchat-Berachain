// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SignedMath.sol";

contract Senchat is ERC721, ERC721URIStorage, ERC721Enumerable, ERC721Burnable, Ownable {
    using SignedMath for uint256;

    uint256 public mintFee;

    event MintFeeUpdated(uint256 newMintFee);

    constructor(address initialOwner, uint256 _mintFee)
        ERC721("Senchat", "SENCHAT")
        Ownable(initialOwner)
    {
        setMintFee(_mintFee);
    }

        struct TokenData
        {
        uint256 tokenId;
        string tokenURI;
        }

    function getAllTokenData() external view returns (TokenData[] memory) {
        uint256 totalSupply = totalSupply();
        TokenData[] memory tokenData = new TokenData[](totalSupply);

        for (uint256 i = 0; i < totalSupply; i++) {
            tokenData[i] = TokenData({
                tokenId: i,
                tokenURI: tokenURI(i)
            });
        }

        return tokenData;
    }



    function setMintFee(uint256 newMintFee) internal {
        mintFee = newMintFee;
        emit MintFeeUpdated(newMintFee);
    }

    function updateMintFee(uint256 newMintFee) external onlyOwner {
        mintFee = newMintFee;
        emit MintFeeUpdated(newMintFee);
    }

    function transferEthToOwner(uint256 amount) internal {
        require(amount > 0, "Amount must be greater than 0");
        payable(owner()).transfer(amount);
    }

    function safeMint(address to, uint256 tokenId, string memory uri) public payable onlyOwner {
        require(msg.value >= mintFee, "Insufficient payment for mint fee");

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        // Send mint fee to the owner
        transferEthToOwner(msg.value);
    }

     function userMint(address to, uint256 tokenId, string memory uri) external payable {
        require(msg.value >= mintFee);

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        transferEthToOwner(msg.value);
    }

    // The following functions are overrides required by Solidity.

     function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
} 