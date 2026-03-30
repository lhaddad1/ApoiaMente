import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('app.db');

// Criar tabela
export const createTables = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
    );
  `);
};
