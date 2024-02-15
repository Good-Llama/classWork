--Add some rows to the User ttable

--the SQL INSERT statement is how you add rows to the ttable

--Insert into table (columns-in-the-table-you-have-data-for)
--      Values(list-of-values-for-the-columns)
--
--Note: order of the values must match the order of the columns specified

insert into User
    (name, phone, email)
    value('Frank', '123-456-7890', 'frank@frank.come')
    ;   -- ;
    )