'use strict';
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.resolve(__dirname, '../db/sermons.db'));
const sermonDbTableName = 'sermons';

module.exports.getSermonData = function getSermonData() {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM ' + sermonDbTableName
        db.run(sql);
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    })
    
    // let sermondb = new sqlite3('../db/sermons.db', { verbose: console.log });
    // sermondb.pragma('journal_mode = WAL');
    // let sermondataselectstatement = sermondb.prepare(
    //     'SELECT * FROM ' + sermonDbTableName
    // );
    // let sermondata = sermondataselectstatement.get();
    // sermondb.close();
    // return sermondata;
}