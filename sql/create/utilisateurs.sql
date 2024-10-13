CREATE TABLE IF NOT EXISTS utilisateurs (
  id_utilisateur INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  mot_de_passe TEXT NOT NULL,
  date_inscription DATE NOT NULL DEFAULT current_date,
  date_naissance DATE NOT NULL
);