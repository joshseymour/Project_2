drop table parks

CREATE TABLE "parks" (
    "park_id" int   NOT NULL,
    "name" varchar   NULL,
    "park_type" varchar   NULL,
    "developed" varchar   NULL,
    "acres" int   NULL,
    "address" varchar   NULL,
    "zip" varchar   NULL,
    "area" real   NULL,
    "length" real   NULL,
    "state" varchar   NULL,
    "city" varchar   NULL,
    "lat" real   NULL,
    "lng" real   NULL,
    CONSTRAINT "pk_Parks" PRIMARY KEY (
        "park_id"
     )
);

select * from parks

select lat, lng
from parks
