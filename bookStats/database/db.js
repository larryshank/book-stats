import SQLite from 'react-native-sqlite-storage';
import {AppState} from 'react-native';
import {useContext} from 'react';

import db from './connection.js';

import {BookContext} from '../components/provider/BookProvider.js';

// SQLite.enablePromise(true);
// let databaseInstance = SQLite.SQLiteDatabase || undefined;

// const open = async () => {
//   SQLite.DEBUG(true);
//   SQLite.enablePromise(true);

//   if (databaseInstance !== undefined) {
//     console.log('Database already open returning instance');
//     return databaseInstance;
//   }

//   const db = await SQLite.openDatabase({
//     name: 'books',
//     location: 'default',
//   }, () => {}, (error) => console.log(error))

//   databaseInstance = db;
//   return db;
// };

const createTable = () => {
  console.log('DB', db);
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS data
      (ID INTEGER PRIMARY KEY AUTOINCREMENT,
        book_id TEXT, title Text, subtitle TEXT,
        author TEXT, published TEXT, description TEXT,
        thumb TEXT, pageCount INT, category TEXT, shelf TEXT);`,
      [],
      (tx, res) => {
        console.log('CT:', res);
      },
    );
  });
};

// const UseData = () => {
//   const book = useContext(BookContext);
//   console.log('get data func');
//   db.transaction(tx => {
//     tx.executeSql(
//       `SELECT ID, book_id, title, subtitle, author, published,
//         description, thumb, pageCount, shelf FROM data;`,
//       [],
//       (tx, res) => {
//         console.log('is this it', res.rows.item(0));
//         const {rows} = res;
//         let books = [];
//         for (let i = 0; i < rows.length; i++) {
//           books.push({
//             ...rows.item(i),
//           });
//         }
//         console.log('books', books);
//       },
//     ).catch(error => console.log('error GD', error));
//   });
// };

const insert = (id, info, shelf) => {
  if (!info.subtitle) {
    info.subtitle = '';
  }
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO data (book_id, title, subtitle, author, published,
        description, thumb, pageCount, category, shelf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,
      [
        id,
        info.title,
        info.subtitle,
        info.authors[0],
        info.publishedDate,
        info.description,
        info.imageLinks.smallThumbnail,
        info.pageCount,
        info.categories[0],
        shelf,
      ],
      (tx, res) => console.log('Insert', res),
    );
  });
};

export {createTable, insert};
