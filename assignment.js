"use strict";

// Sample books array
const books = [
    { title: "Book 1", onlineContent: "http://example.com/book1" },
    { title: "Book 2" },
    { title: "Book 3", onlineContent: "http://example.com/book3" },
    { title: "Book 4" }
];

// 6.1
for (let i = 0; i < books.length; i++) {
    if (!books[i].onlineContent) {
        console.log(`"${books[i].title}" provides no data about its online content`);
    }
}