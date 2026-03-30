import { db } from './db';

// Criar usuário
export function createUser(name: string, email: string, password: string) {
  try {
    db.runSync(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?);',
      [name, email, password]
    );

    return true;
  } catch (error) {
    console.log('Erro ao criar usuário:', error);
    return false;
  }
}

// Buscar usuário (login)
export async function loginUser(email: string, password: string) {
  try {
    const user = await db.getFirstAsync(
      'SELECT * FROM users WHERE email = ? AND password = ?;', [email, password]
    );
    return user;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

export function updatePassword(email: string, newPassword: string) {
  try {
    db.runSync(
      'UPDATE users SET password = ? WHERE email = ?;',
      [newPassword, email]
    );

    return true;
  } catch (error) {
    console.log('Erro ao atualizar senha:', error);
    return false;
  }
}

export function findUserByEmail(email: string) {
  try {
    const user = db.getFirstSync(
      'SELECT * FROM users WHERE email = ?;',
      [email]
    );

    return user;
  } catch (error) {
    console.log('Erro ao buscar usuário:', error);
    return null;
  }
}
