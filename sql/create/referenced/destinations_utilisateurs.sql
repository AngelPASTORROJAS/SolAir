CREATE TABLE IF NOT EXISTS destinations_utilisateurs (
  id_destination_utilisateur INTEGER PRIMARY KEY AUTOINCREMENT,
  id_utilisateur INTEGER NOT NULL,
  id_destination INTEGER NOT NULL,
  date_sauvegarde DATE NOT NULL DEFAULT current_date,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
  FOREIGN KEY (id_destination) REFERENCES destinations(id_destination)
);