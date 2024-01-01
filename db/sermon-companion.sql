CREATE TABLE sermons (
    catalog TEXT PRIMARY KEY,
    date TEXT NOT NULL,
    title TEXT NOT NULL,
    primary_scripture TEXT NOT NULL,
    print INTEGER NOT NULL,
    audio INTEGER NOT NULL,
    p_p INTEGER NOT NULL,
    drive INTEGER NOT NULL,
    locations TEXT NOT NULL,
    occasion TEXT NOT NULL,
    keywords TEXT NOT NULL
);