import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://onmtvcaenewtsa:3e19a8202f1bb4493b27c235aa13f7cf9131c76aef0ccdcca291457518007864@ec2-174-129-226-232.compute-1.amazonaws.com:5432/dfl7he1lroc56p"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True, schema="public")


# Save references to each table
Parks = Base.classes.parks
Dog_Parks = Base.classes.dogparks
Colleges = Base.classes.colleges
Crimes = Base.classes.crime
Basicedu = Base.classes.basicedu
Food = Base.classes.wakefood 

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/parks")
def parks():
    # """Return the Park lat, lng and attribute data."""
 
    sel = [
        Parks.lat,
        Parks.lng,
        Parks.name,
        Parks.park_type,
        Parks.address,
        Parks.developed,
        Parks.acres
   ]

    results = db.session.query(*sel).all()
    # print(results)

    # Create a dictionary entry for each row of metadata information
    park_list = []
    for result in results:
        park_data = {}
        park_data["lat"] = result[0]
        park_data["lng"] = result[1]
        park_data["location"] = [result[0],result[1]]
        park_data["name"] = result[2]
        park_data["park_type"] = result[3]
        park_data["address"] = result[4]
        park_data["developed"] = result[5]
        park_data["acres"] = result[6]
        park_list.append(park_data)
    
    

    return jsonify(park_list)

@app.route("/dogParks")
def dogParks():
    # """Return the Dog Park lat, lng and attribute data."""
 
    sel = [
        Dog_Parks.lng,
        Dog_Parks.lat,
        Dog_Parks.site,
        Dog_Parks.address,
        Dog_Parks.status,
        Dog_Parks.hours,
        Dog_Parks.agility,
        Dog_Parks.bathroom,
        Dog_Parks.bench,
        Dog_Parks.dog_fountain,
        Dog_Parks.lights,
        Dog_Parks.picnic_table,
        Dog_Parks.shade,
        Dog_Parks.small_dog_area,
        Dog_Parks.wood_chips,
        Dog_Parks.climbing_platform
   ]

    results = db.session.query(*sel).all()

    # Create a dictionary entry for each row of metadata information
    dog_list = []
    for result in results:
        dog_data = {}
        dog_data["lng"] = result[0]
        dog_data["lat"] = result[1]
        dog_data["location"] = [result[1],result[0]]
        dog_data["site"] = result[2]
        dog_data["address"] = result[3]
        dog_data["status"] = result[4]
        dog_data["hours"] = result[5]
        dog_data["agility"] = result[6]
        dog_data["bathroom"] = result[7]
        dog_data["bench"] = result[8]
        dog_data["dog_fountain"] = result[9]
        dog_data["lights"] = result[10]
        dog_data["picnic_table"] = result[11]
        dog_data["shade"] = result[12]
        dog_data["small_dog_area"] = result[13]
        dog_data["wood_chips"] = result[14]
        dog_data["climbing_platform"] = result[15]
        dog_list.append(dog_data)
    
    return jsonify(dog_list)

@app.route("/colleges")
def get_colleges():
    # """Return the Colleges lat, lng and attribute data."""
 
    sel = [
        colleges.collegename,
        colleges.address,
        colleges.city,
        colleges.state,
        colleges.lat,
        colleges.lng
   ]

    results = db.session.query(*sel).all()
    # Create a dictionary entry for each row of metadata information
    college_list = []
    for result in results:
        college_data = {}
        college_data["collegename"] = result[0]
        college_data["address"] = result[1]
        college_data["city"] = result[2]
        college_data["state"] = result[3]
        college_data["lat"] = result[4]
        college_data["lng"] = result[5]
        college_data["location"] = [result[4], result[5]]
        college_list.append(college_data)
    
    return jsonify(college_list)

@app.route("/crimes")
def get_crimes():
    # """Return the Crimes lat, lng and attribute data."""
    sel = [
        Crimes.lat,
        Crimes.lng,
        Crimes.crime,
        Crimes.crime_description
   ]
    results = db.session.query(*sel).all()
    # Create a dictionary entry for each row of metadata information
    crimes_list = []
    for result in results:
        crimes_data = {}
        crimes_data["lat"] = result[0]
        crimes_data["lng"] = result[1]
        crimes_data["location"] = [result[0],result[1]]
        crimes_data["crime"] = result[2]
        crimes_data["crime_description"] = result[3]
        crimes_list.append(crimes_data)
    
    return jsonify(crimes_list)

@app.route("/basicedu")
def get_schools():
    # """Return the Schools lat, lng and attribute data."""
    sel = [
        Basicedu.lat,
        Basicedu.lng,
        Basicedu.schoolname,
        Basicedu.type
   ]
    results = db.session.query(*sel).all()
    # Create a dictionary entry for each row of metadata information
    edu_list = []
    for result in results:
        edu_data = {}
        edu_data["lat"] = result[0]
        edu_data["lng"] = result[1]
        edu_data["location"] = [result[0],result[1]]
        edu_data["schoolname"] = result[2]
        edu_data["type"] = result[3]
        edu_list.append(edu_data)

    return jsonify(edu_list)

@app.route("/Food")
def get_food():
    # """Return the Schools lat, lng and attribute data."""
    sel = [
        Food.lat,
        Food.lng,
        Food.name,
        Food.address
   ]
    results = db.session.query(*sel).all()
    # Create a dictionary entry for each row of metadata information
    food_list = []
    for result in results:
        food_data = {}
        food_data["lat"] = result[0]
        food_data["lng"] = result[1]
        food_data["location"] = [result[1],result[0]]
        food_data["name"] = result[2]
        food_data["address"] = result[3]
        food_list.append(food_data)

    return jsonify(food_list)

if __name__ == "__main__":
    app.run()