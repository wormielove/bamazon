DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price VARCHAR(10),
  stock_quantity VARCHAR(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('chocolate_cookie', 'bakery', '$2.00', '20');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('vanillla_cookie', 'bakery', '$2.50', '100');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('gingersnap_cookie', 'bakery', '$3.00', '40');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('pinwheel_cookie', 'bakery', '$2.00', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('snickerdoodle_cookie', 'bakery', '$2.00', '20');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('banana_cookie', 'bakery', '$2.00', '200');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('chocolate_cake', 'cakery', '$10.00', '20');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('vanilla_cake', 'cakery', '$10.00', '30');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('banana_cake', 'cakery', '$15.00', '250');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('jelly_cake', 'cakery', '$10.00', '10');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('lava_cake', 'cakery', '$50.00', '20');


