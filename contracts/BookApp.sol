//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract BookApp{
    struct Book{
        uint rack;
        string title;
        string bookName;
        string genre;
        uint price;
    }

    mapping(uint => Book[]) booksInRack;

    function addBook(uint rack, string memory title, string memory bookName, string memory genre, uint price) public {
        Book memory newBook = Book({
            rack: rack,
            title: title,
            bookName: bookName,
            genre: genre,
            price: price
        });
        booksInRack[rack].push(newBook);
    }

    function getBooksInRack(uint rack) public view returns (Book[] memory) {
        return booksInRack[rack];
    }

    // function getBooksInfo(string title) public view returns (Book[] memory) {
    //     return booksInRack[rack];
    // }
} 
