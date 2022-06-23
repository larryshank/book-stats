import db from './connection.js';

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
