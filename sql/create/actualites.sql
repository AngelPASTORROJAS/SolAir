CREATE TABLE IF NOT EXISTS actualites (
    id_actualite INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    description TEXT NOT NULL,
    date_publication DATE NOT NULL DEFAULT current_date
);