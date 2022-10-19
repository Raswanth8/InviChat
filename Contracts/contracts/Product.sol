//SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract Product {
        struct ProductDetails {
        string name;
        string description;
        string image;
        string price;
        string category;
        string seller;
        string customer;
    }

    // Mapping to store product details
    mapping(uint256 => ProductDetails) public productDetails;

    // Mapping to store product seller
    mapping(uint256 => address) public productSeller;

    // Mapping to store product customer
    mapping(uint256 => address) public productCustomer;

    // Mapping to store product count
    mapping(address => uint256) public productCount;

    // Event to be emitted when a product is added
    event ProductAdded(
        uint256 productId,
        string name,
        string description,
        string image,
        string price,
        string category,
        string seller,
        string customer
    );

    // Function to add product details
    function addProduct(
        uint256 _productId,
        string memory _name,
        string memory _description,
        string memory _image,
        string memory _price,
        string memory _category,
        string memory _seller,
        string memory _customer
    ) public {
        productDetails[_productId] = ProductDetails(
            _name,
            _description,
            _image,
            _price,
            _category,
            _seller,
            _customer
        );
        productSeller[_productId] = msg.sender;
        productCount[msg.sender]++;
        emit ProductAdded(
            _productId,
            _name,
            _description,
            _image,
            _price,
            _category,
            _seller,
            _customer
        );
    }

    // Function to get product details
    function getProduct(uint256 _productId)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        return (
            productDetails[_productId].name,
            productDetails[_productId].description,
            productDetails[_productId].image,
            productDetails[_productId].price,
            productDetails[_productId].category,
            productDetails[_productId].seller,
            productDetails[_productId].customer
        );
    }

    // Function to determine proof of ownership of a product
    function isProductOwner(uint256 _productId) public view returns (bool) {
        return productCustomer[_productId] == msg.sender;
    }
}
