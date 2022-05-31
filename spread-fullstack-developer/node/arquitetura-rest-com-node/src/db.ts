import { Pool } from 'pg'

const connectionString = 'postgres://ktjnqwno:5S1p_0lbA1hPrNaFa7T0XgUwFOU5tZeH@kesavan.db.elephantsql.com/ktjnqwno';//https://api.elephantsql.com/console

const db = new Pool({ connectionString });

export default db;