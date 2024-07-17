const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password:'@233Saalimaar',
    database:"crud"
});


// get api

app.get('/api/get', (req,res) => {
    const sql = "SELECT * FROM music"
   db.query(sql, (err,result) => {
      console.log(err);
       res.send(result)
   })
})

app.get('/api/get/:id', (req,res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM music WHERE id = ?"
   db.query(sql, id, (err,result) => {
      console.log(err);
       res.send(result)
   })
})

// post api
app.post('/api/post', (req,res) => {
    const { artist, songs, releaseYear } = req.body;
    console.log(req.body);
    const sql = "INSERT INTO music (artist, songs, releaseYear) VALUES (?,?,?)"
   db.query(sql,[artist, songs, releaseYear] ,(err,result) => {
      console.log(err);
      console.log(result);
       res.send("added the artists details");
   })
})

app.put('/api/update/:id' , (req, res) => {
const id = req.params.id;
const { artist, songs, releaseYear } =req.body;
const sqlUpdate = "UPDATE music SET artist = ?, songs = ?, releaseYear = ? WHERE ID = ?";
db.query(sqlUpdate, [artist, songs, releaseYear, id], (err, result) => {
    res.send(result);
});

})

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM music WHERE ID = ? ";
    db.query(sqlDelete, id, (err,result) => {
     res.send(result);
    })
})


const port = 5000;

app.listen(port, () => {
    console.log('listening on port ' + port);
});