use eStore; 
drop table if exist Customer;
create table Customer (
    cid   int,
    name  varchar(256),
    phone varchar(16),
    email varchar(256)
);
show tables; 
drescribe Customer;