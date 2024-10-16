import { useOutletContext } from "react-router-dom";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBook from "../WishlistBook/WishlistBook";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  const data = useOutletContext();
  console.log(data);
  const { readBook, wishlistBook } = data;
  console.log(readBook);

  return (
    <div>
      <h2 className="py-10 bg-slate-200 text-center text-2xl font-bold rounded-2xl mb-8">
        Books
      </h2>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readBook.map((book) => (
              <ReadBooks key={book.bookId} book={book}></ReadBooks>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {wishlistBook.map((book) => (
              <WishlistBook key={book.bookId} book={book}></WishlistBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
