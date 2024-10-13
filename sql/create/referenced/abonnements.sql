CREATE TABLE IF NOT EXISTS abonnements (
  id_abonnement INTEGER PRIMARY KEY AUTOINCREMENT,
  id_utilisateur INTEGER NOT NULL,
  id_actualite INTEGER NOT NULL,
  date_abonnement DATE NOT NULL DEFAULT current_date,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
  FOREIGN KEY (id_actualite) REFERENCES actualites(id_actualite)
);