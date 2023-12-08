const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const app = express();
const PORT =3000;
app.use(cors());
// Your SQL Server configuration
const config = {
  server: 'DESKTOP-0BJSEJ8',
  database: 'travel',
  options: {
    trustedConnection: true, // Use Windows Authentication
  },
};


app.use(express.json());
app.get('/login', (req, res) => {
  res.json({ message: 'This is the login route for GET requests.' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create a connection pool
    await sql.connect(config);

    const result = await sql.query`
      SELECT * FROM login WHERE email = ${email} AND password = ${password}
    `;

    if (result.recordset.length > 0) {
      // User found, send a success response
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // User not found, send a failure response
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error executing SQL query', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    // Close the connection pool
    await sql.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
