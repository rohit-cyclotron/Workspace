const express = require('express');
const sqlite3 = require('sqlite3');
// Set up the express app

const app = express();
// get all todos
app.get('/api/v1/todos', (req, res) => {

  let db = new sqlite3.Database("./chinook.sqlite3", (err) => {
    if (err) {
      console.log('Error when finding the database', err)
    } else {
      console.log('Database found!')
    }
  });

  db.all("SELECT * FROM employees", function (err, rows) {
    // rows.forEach(function (row) {
    //   console.log(row.LastName + ": " + row.FirstName);
    // });
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: rows
    });
  });
  db.close();
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});