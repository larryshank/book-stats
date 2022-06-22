import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);

const db = SQLite.openDatabase({
  name: 'books',
  location: 'default',
});

export default db;
