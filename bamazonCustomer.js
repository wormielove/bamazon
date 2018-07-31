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
    findItemID(res);

    // connection.end();
  });
}

  function findItemID(inventory) {
    inquirer
      .prompt({
        name: "item_id",
        type: "input",
        message: "What is the ID of the product you would like to buy?"
      })
      .then(function (answer) {
        for (var i = 0; i < inventory.length; i++) {
          if (parseInt(answer.item_id) === inventory[i].item_id) {
            numberOfUnits(inventory[i])
            return
          }
        }  
      });
  }

  function numberOfUnits(product) {
    inquirer
      .prompt({
        name: "number_of_units",
        type: "input",
        message: "How many units of that item would you like to buy?"
      })
      .then(function (answer) {
        for (var i = 0; i < inventory.length; i++) {
          if (parseInt(answer.number_of_units) === inventory[i].stock_quantity) {
           
          }
        }  
      });
  }