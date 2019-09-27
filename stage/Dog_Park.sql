-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "dogParks" (
	"park_id" int NOT NULL,
    "lng" real   NULL,
    "lat" real   NULL,
    "site" varchar   NULL,
    "address" varchar   NULL,
    "status" varchar   NULL,
    "hours" varchar   NULL,
    "agility" varchar   NULL,
    "bathroom" varchar   NULL,
    "bench" varchar   NULL,
    "dog_fountain" varchar   NULL,
    "lights" varchar   NULL,
    "picnic_table" varchar   NULL,
    "shade" varchar   NULL,
    "small_dog_area" varchar   NULL,
    "wood_chips" varchar   NULL,
    "climbing_platform" varchar   NULL,
    CONSTRAINT "pk_dogParks" PRIMARY KEY (
        "park_id"
     )
);

