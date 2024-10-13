CREATE TABLE IF NOT EXISTS questionnaires (
  id_questionnaire INTEGER PRIMARY KEY AUTOINCREMENT,
  id_utilisateur INTEGER NOT NULL,
  date_creation DATE NOT NULL DEFAULT current_date,
  FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id_utilisateur)
);