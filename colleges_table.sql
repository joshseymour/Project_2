-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

drop table colleges

CREATE TABLE "colleges"
(
    "collegename" text,
    "address" text,
    "city" text,
    "state" text,
    "lat" double precision,
    "lng" double precision
);


select * from colleges

select lat, lng
from colleges