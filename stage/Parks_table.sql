-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "parks" (
    "park_id" int   NOT NULL,
    "name" varchar   NULL,
    "park_type" varchar   NULL,
    "developed" varchar   NULL,
    "acres" real   NULL,
    "address" varchar   NULL,
    "zip" varchar   NULL,
    "area" real   NULL,
    "length" real   NULL,
    "state" varchar   NULL,
    "city" varchar   NULL,
    "lat" real   NULL,
    "lng" real   NULL,
    CONSTRAINT "pk_parks" PRIMARY KEY (
        "park_id"
     )
);

