CREATE TABLE IF NOT EXISTS destinations (
  id_destination INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT NOT NULL,
  description TEXT NOT NULL,
  ville TEXT NOT NULL,
  pays TEXT NOT NULL,
  image_url TEXT NOT NULL,
  note FLOAT NOT NULL,
  prix FLOAT NOT NULL
);