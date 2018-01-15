DROP DATABASE IF EXISTS db;
CREATE DATABASE db;

-- user table
DROP TABLE IF EXISTS db.user;
CREATE TABLE db.user (
  id       INT AUTO_INCREMENT PRIMARY KEY
  COMMENT 'id PK',
  username VARCHAR(255) NOT NULL
  COMMENT 'username',
  password VARCHAR(255) NOT NULL
  COMMENT 'password'
)
  COMMENT 'User table';

SELECT *
FROM db.user;