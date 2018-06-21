(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Rick",
        lastName: "Sanchez"
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!")
    };

    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];



        for (var i = 0; i < shoppers.length; i++) {
            if (shoppers[i].amount > 200) {
                console.log(shoppers[i].name);
                console.log(shoppers[i].amount + " is the amount spent shopping today.");
                var discount = shoppers[i].amount - shoppers[i].amount * .12;
                console.log(discount + " is the amount due after the discount.");
                console.log("*****************");
            }
            else {
                if (shoppers[i].amount < 200) {
                    console.log(shoppers[i].name);
                    console.log(shoppers[i].amount + " is the amount spent shopping today.");
                    console.log("No discount applied.");
                    console.log("*****************");
                }
            }
        }





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Game of Thrones",
            author : {
                firstName : "George",
                lastName : "Martin"
            }
        },
        {
            title: "Lord of the Rings",
            author : {
                firstName : "J. R. R.",
                lastName : "Tolkien"
            }
        },
        {
            title: "Dragon Age: The Calling",
            author : {
                firstName : "David",
                lastName : "Gaider"
            }
        },
        {
            title: "The Hobbit",
            author : {
                firstName : "J. R. R.",
                lastName : "Tolkien"
            }
        },
        {
            title: "Coding for Dummies",
            author : {
                firstName : "Nikhil",
                lastName : "Abraham"
            }
        }


    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



/*    for (var i = 0; i < books.length; i++) {
        console.log("Book # " + (i + 1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---")
    }*/

    books.forEach(function (value, index, array) {
        {
            console.log("Book # " + (index + 1));
            console.log("Title: " + books[index].title);
            console.log("Author: " + books[index].author.firstName + " " + books[index].author.lastName);
            console.log("---")
        }
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */







function createBookListing(title, firstName, lastName) {
    do {


        var title = prompt("What book would you like to add?");
        var firstName = prompt("What is the Author's first name?");
        var lastName = prompt("What is the Author's Last name?");
        return {
            title: title,
            firstName: firstName,
            lastName: lastName
        }
        } while (lastName == null)
    }


    function deleteBook(index) {
        books.forEach(function (book, i) {
            console.log("---");
            console.log(i + " : " + book.title);
        });
        var deletion = prompt("Please select a number to delete.");
        return deletion;
    }

    function showBookSelector(index) {
        books.forEach(function (book, i) {
            console.log(i + " : " + book.title);
        });
        var showbookSelector = prompt("Please select a number to show book information.");
        return showbookSelector;
    }

    function showBookInfo(index) {
        console.log("----");
        console.log("Title: " + books[index].title);
        console.log("Author: " + books[index].author.firstName + " " + books[index].author.lastName);
        console.log("----")
    }





function createBook(input) {
        var choice = input.toLowerCase();
        do {



                if (choice === "create book") {
                    // var createBookListing = prompt("What book would you like to add?");
                    books.push(createBookListing());
                    console.log("Thank you for your contribution! The new book list is: ");
                    books.forEach(function (book, i) {
                        console.log("Title: " + books[i].title);
                    });
                    break;
                }

                else if (choice === "delete book") {
                    books.splice(deleteBook(), deleteBook(+1));
                    books.forEach(function (book, i) {
                        console.log(i + " : " + book.title);
                    });
                    break;
                }

                else if (choice === "book info") {
                    showBookInfo(showBookSelector());
                    books.forEach(function (book, i) {
                        console.log(i + " : " + book.title);
                    });
                    break;
                }

                else if (choice === "list") {
                    console.log("*****************");
                    books.forEach(function (book, i) {
                        console.log(i + " : " + book.title);
                    });
                    break;
                }

            console.log("Closing the app!")
        }
    while (choice !== "quit");
    }


/*

    function createBookSwitch(input) {
        var choice = input.toLowerCase();
        {


                switch (choice) {


                    case (choice === "create book") :
                        books.push(createBookListing());
                        console.log("Thank you for your contribution! The new book list is: ");
                        books.forEach(function (book, i) {
                            console.log("Title: " + books[i].title);
                        });
                        break;


                    case (choice === "delete book") :
                        books.splice(deleteBook(), deleteBook(+1));
                        books.forEach(function (book, i) {
                            console.log(i + " : " + book.title);
                        });
                        break;


                    case (choice === "book info"):
                        showBookInfo(showBookSelector());
                        books.forEach(function (book, i) {
                            console.log(i + " : " + book.title);
                        });
                        break;


                    case(choice === "list"):
                        console.log("*****************");
                        books.forEach(function (book, i) {
                            console.log(i + " : " + book.title);
                        });
                        break;

                    case(choice === "quit"):
                        console.log("Closing the app!");
                        break;
                }

        }
    }
    */


createBook(prompt("Would you like to create a book? Please type:\n Create Book, Delete Book, Book Info., List, or Quit."));


})();
