use sales_db;

select * from customers

select * from salespeople

select * from orders





-- Write a query that lists each order number followed by the name of the customer who made the

-- order.

        select o.onum, c.cname from orders o ,customers c where c.cnum = o.cnum

-- Write a query that gives the names of both the salesperson and the customer for each order along

-- with the order number.

        select s.sname, c.cname, o.onum from orders o, salespeople s, customers c where o.snum = c.snum and o.snum = s .snum

-- Write a query that produces all customers serviced by salespeople with a commission above 12%.

-- Output the customer’s name, the salesperson’s name, and the salesperson’s rate of commission

        select c.cname, s.sname , comm*100 "Rate of Comm" from customers c, salespeople s where c.snum = s.snum and comm >.12

-- Write a query that calculates the amount of the salesperson’s commission on each order by a

-- customer with a rating above 100.

        SELECT s.sname, (o.amt*s.comm)*100 as salesPersonsCommission

        from orders o join salespeople s

        on o.snum = s.snum

        join customers c on o.cnum = c.cnum

        where c.rating > 100;

-- Write a query that produces all pairs of salespeople who are living in the same city.Exclude

-- combinations of salespeople with themselves as well as duplicate rows with the order reversed

        select s.sname, n.sname, s.city

        from salespeople s, salespeople n where s.city=n.city and s.sname<n.sname