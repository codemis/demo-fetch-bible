/**
 * A demo example of https://fetch.bible/
 */
import { BibleClient } from '@gracious.tech/fetch-client';

const getData = async () => {
    const client = new BibleClient();
    const collection = await client.fetch_collection();
    const translations = collection.get_translations();
    const firstId = translations[0].id;
    const books = collection.get_books(firstId);
    const book = await collection.fetch_book(firstId, books[0].id);
    console.log(book.get_chapter(1));
};

getData();
