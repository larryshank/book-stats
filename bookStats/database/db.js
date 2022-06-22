import SQLite from 'react-native-sqlite-storage';
import {AppState} from 'react-native';

import db from './connection.js';
SQLite.enablePromise(true);
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
        thumb TEXT, pageCount INT, shelf TEXT)
        WITHOUT ROWID;`,
      []
    )
      .then((tx, res) => console.log('CTres', res))
      .catch(error => console.log('error CT', error));
  });
};

const getData = () => {
  console.log('get data func');
  db.transaction(tx => {
    tx.executeSql(
      `SELECT ID, book_id, title, subtitle, author, published,
        description, thumb, pageCount, shelf FROM data;`,
      [],
      (tx, res) => {console.log('is this it', res.rows.item(0));}
    )
      .then((tex, results) => console.log('Thing', tex))
      .catch(error => console.log('error GD', error));
  }).then(([tx]) => console.log('other', tx));
};

const insert = (id, info, shelf) => {
  console.log('insert func');
  console.log('info', info);
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO data (book_id, title, subtitle, author, published,
        description, thumb, pageCount, shelf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
      [
        id,
        info.title,
        info.subtitle,
        info.authors[0],
        info.publishedDate,
        info.description,
        info.imageLinks.smallThumbnail,
        info.pageCount,
        shelf,
      ]
    )
      .then((tx, results) => console.log('inny', results))
      .catch(error => console.log('error insert', error));
  });
};

export {createTable, getData, insert};
