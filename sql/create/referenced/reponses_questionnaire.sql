CREATE TABLE IF NOT EXISTS reponses_questionnaire (
  id_questionnaire INTEGER NOT NULL,
  question TEXT NOT NULL,
  reponse TEXT NOT NULL,
  FOREIGN KEY (id_questionnaire) REFERENCES questionnaires(id_questionnaire)
);