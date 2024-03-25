const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Tvrtka"
});

con.connect(function (err) {
    if (err) throw err;

    app.get('/dodaj_djelatnika/:ime/:prezime/:grad', (req, res) => {
        let ime = req.params.ime
        let prezime = req.params.prezime
        let grad = req.params.grad

        var sql = "INSERT INTO djelatnici (ime, prezime, grad) VALUES ('" + ime + "', '" + prezime + "','" + grad + "')";
        con.query(sql, function (err, result) {
            if (err) res.send('Greška!' + err)
            res.send('Dodano!')
        });
    })

});

app.listen(port, () => {
    console.log(`Web aplikacija pokrenuta na portu ${port}`)
})