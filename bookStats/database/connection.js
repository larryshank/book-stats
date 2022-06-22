import SQLite from 'react-native-sqlite-storage';
// import {AppState} from 'react-native';

// let databaseInstance = SQLite.SQLiteDatabase || undefined;

SQLite.DEBUG(true);

const db = SQLite.openDatabase({
  name: 'books',
  location: 'default',
});

export default db;
