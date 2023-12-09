const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'eesports1234',
  database: 'traveldatabase',
  insecureAuth: true,
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/api/viewRequest/', (req, res) => {
  const sqlGet = 'select * from requests;';
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.delete('/api/deleteRequest/:id', (req, res) => {
  const idToDelete = req.params.id;
  const sqlDelete = 'DELETE FROM requests WHERE id = (?)';

  db.query(sqlDelete, idToDelete, (err, result) => {
    if (err) {
      console.error('Error deleting record:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).send('Record deleted successfully');
  });
});

app.put('/api/updateRequest/', (req, res) => {
  const idToUpdate = req.body.row.id;
  const typs = req.body.row.typs;
  const days = req.body.row.days;
  const ranges = req.body.row.ranges;
  const sqlUpdate =
    'UPDATE requests SET typs = ?, days = ? , ranges = ? WHERE id = ?';
  db.query(sqlUpdate, [typs, days, ranges, idToUpdate], (err, result) => {
    if (err) {
      console.error('Error updating record:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).send('Record Updated successfully');
  });
});

app.post('/api/request', (req, res) => {
  const typs = req.body.formData.packageType;
  const days = req.body.formData.numDays;
  const ranges = req.body.formData.priceRange;
  const accountid = req.body.formData.accountId;

  const sqlInsert =
    'INSERT INTO requests (typs, days, ranges, accountid) VALUES (?, ?,?,?)';
  db.query(sqlInsert, [typs, days, ranges, accountid], (err, result) => {
    console.log(result);
    console.log(err);
  });
});

app.post('/api/insertUser', (req, res) => {
  const email = req.body.mail;
  const password = req.body.pass;

  const sqlInsertUser = 'INSERT INTO accounts (email, password) VALUES (?, ?)';
  db.query(sqlInsertUser, [email, password], (err, result) => {});
});

app.get('/api/getUsers', (req, res) => {
  const sqlSelectUsers = 'SELECT email,password FROM accounts';
  db.query(sqlSelectUsers, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log('running on port 3001');
});
