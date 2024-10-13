const app = require('./app');

app.get("/", (_req, res) => {
  res.send("Welcome to the API Solair.");
});

// app.get("/users", (req, res) => {
//   db.all("SELECT * FROM users", (err, rows) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).send("Internal server error.");
//     } else {
//       res.send(rows);
//     }
//   });
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).send("Internal server error.");
//     } else if (row) {
//       res.send(row);
//     } else {
//       res.status(404).send("User not found.");
//     }
//   });
// });

// app.post("/users", (req, res) => {
//   const { name, email } = req.body;
//   db.run(
//     "INSERT INTO users (name, email) VALUES (?, ?)",
//     [name, email],
//     (err) => {
//       if (err) {
//         console.error(err.message);
//         res.status(500).send("Internal server error.");
//       } else {
//         res.send("User created successfully.");
//       }
//     }
//   );
// });

// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const { name, email } = req.body;
//   db.run(
//     "UPDATE users SET name = ?, email = ? WHERE id = ?",
//     [name, email, id],
//     (err) => {
//       if (err) {
//         console.error(err.message);
//         res.status(500).send("Internal server error.");
//       } else {
//         res.send("User updated successfully.");
//       }
//     }
//   );
// });

// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).send("Internal server error.");
//     } else {
//       res.send("User deleted successfully.");
//     }
//   });
// });

const main = () => {
  app.listen(app.get("port"), () => {
    console.log(`Server started on port ${app.get("port")}.
    http://localhost:${app.get("port")}`);
  });
}
main();

