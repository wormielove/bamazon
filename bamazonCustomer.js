var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "ArtCat23376!",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });


  function findItemID() {
    inquirer
      .prompt({
        name: "item_id",
        type: "input",
        message: "What is the ID of the product you would like to buy?"
      })
      .then(function (answer) {
        var query = "SELECT item_id FROM products WHERE ?";
        connection.query(query, { item_id: answer.item_id }, function (err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Item ID:" + res[i].item_id);
          }
          start();
        });
      });
  }

  function numberOfUnits() {
    inquirer
      .prompt({
        name: "number_of_units",
        type: "input",
        message: "How many units of that item would you like to buy?",
        validate: function (value) {
          if (item_id.number_of_units(value) > stock_quantity) {
            return "insufficient quantity";
          }
          else connection.query(
            "INSERT INTO products SET ?",
            {
              stock_quantity: answer.number_of_units,
            },
            function (err) {
              if (err) throw err;
              console.log("Congratulations on your purchase!");
              start();
            });
        }
      });
  }

}