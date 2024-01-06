import Database, {Statement} from 'better-sqlite3';

const sermonDbTableName = 'sermons';

export function getSermonData() {
    let sermondb = new Database('../db/sermons.db', { verbose: console.log });
    sermondb.pragma('journal_mode = WAL');
    let sermondataselectstatement : Statement = sermondb.prepare(
        'SELECT * FROM ' + sermonDbTableName
    );
    let sermondata = sermondataselectstatement.get();
    sermondb.close();
    return sermondata;
}