import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getWishListedBooks } from "../utility/LocalStorage";
import { useState } from "react";
import ListedBookSingle from "../ListedBookSingle/ListedBookSingle";


const ListedBooks = () => {
    // const [readListedBook, setReadListedBook] = useState([]);
    const books = useLoaderData();

    const readListBookId = getStoredBooks();
    const wishlistedBooksId = getWishListedBooks();

    // console.log("wish listed Book:", wishlistedBooksId, "read listed Book:", readListBookId);

    // Read List Books
    const readListedBooks = [];
    for (const book of books) {
        // console.log(book)
        for (const id of readListBookId) {
            if (id === book.bookId) {
                readListedBooks.push(book);
            }
        }
    }
    console.log(readListedBooks)

    // Wishlisted Books
    const wishListedBooks = [];
    for (const book of books) {
        // console.log(book)
        for (const id of wishlistedBooksId) {
            if (id === book.bookId) {
                wishListedBooks.push(book);
            }
        }
    }
    console.log(wishListedBooks)


    return (
        <div>
            <div className="bg-[#1313130d] py-8 text-center rounded-xl my-6">
                <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
            </div>
            <div className="text-center">
                {/* <button>Sort By</button> */}
                <select className="select select-bordered bg-[#23BE0A] text-white font-semibold">
                    <option className="bg-white text-black" selected>All</option>
                    <option className="bg-white text-black">Rating</option>
                    <option className="bg-white text-black">Number of Pages</option>
                    <option className="bg-white text-black">Published Year</option>

                </select>
            </div>

            {/* Listed Book */}
            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        readListedBooks.map((book, idx) => <ListedBookSingle book={book} key={idx}></ListedBookSingle>)
                    }

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        wishListedBooks.map((book, idx) => <ListedBookSingle book={book} key={idx}></ListedBookSingle>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;