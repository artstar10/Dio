import { Pool } from 'pg'

const connectionString = 'INSIRA-A-STRING-DE-CONEXAO-AQUI';

const db = new Pool({ connectionString });

export default db;