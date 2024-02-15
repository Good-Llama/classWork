-- be sure we are in the database containing the tables we need
use eStore;
-- select * - retrieve all the columns in the order they are defined in the table
select *
    from User
;
select name, email  -- specifies the columns and the order of the columns in the result
    from User
;

select email, name -- specifies the columns and the order of the columns in the result
    from User
;

-- show the names of the users that have 'skywalker.net' emails
select name, email -- column(s) to show in the result
    from User -- table with the columns
where email like '%skywalker.net'  -- only show rows where email ends in skywalker.net
;

-- A join means retrieving data from multiple tables
-- There needs to be something that matches between the tables
-- Typically this is the Primary Key and Foreign Keys

-- an INNER JOIN - show rows that match between tables (MOST COMMON)
-- a LEFT JOIN - show rows that are in the first table, but not the second (not so common)
-- a RIGHT JOIN - shows rows that are in the second table, but not the first (not so common)
-- a FULL OUTER JOIN - shows all rows from both tables (rare)


-- show the names and addresses of all the customers
-- name is in the User table
-- address is in the Customer table
-- uid matches between the tables (i.e. INNER JOIN)

-- if names of the matching columns are the same, you must include the name of the table for the column
--
-- Class syntax of an INNER JOIN:
-- If you forget the WHERE clause, it still runs, but you get a Carterisian Product - all rows from table matches to all rows in the other

select name, email, address                -- columns to see in the result
    from User, Customer             -- table(s) with the columns
    where User.uid = Customer.uid   -- rows to see in the result - the rows where uid match between the tables
;

-- Modern syntax of an INNER JOIN:

select name, email, address                -- columns to see in the result
    from User
        INNER JOIN 
        Customer             
    on User.uid = Customer.uid   -- on referred to as the join condition; the rows where uid match between the tables
;