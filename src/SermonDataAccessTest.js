'use strict';

const sermondb = require('better-sqlite3');

const sermonDbTableName = 'sermons';

export function getSermonData() {
    let sermondb = new sermondb('../db/sermons.db', { verbose: console.log });
    sermondb.pragma('journal_mode = WAL');
    let sermondataselectstatement = sermondb.prepare(
        'SELECT * FROM ' + sermonDbTableName
    );
    let sermondata = sermondataselectstatement.get();
    sermondb.close();
    return sermondata;
}