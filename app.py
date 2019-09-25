# import necessary libraries
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
Base.prepare(db.engine, reflect=True)

# Save references to each table
colleges = Base.classes.colleges

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/colleges")
def get_colleges():
    # """Return the Park lat, lng and attribute data."""
 
    sel = [
        colleges.collegename,
        colleges.address,
        colleges.city,
        colleges.state,
        colleges.lat,
        colleges.lng
   ]

    results = db.session.query(*sel).all()
    print(results)

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


if __name__ == "__main__":
    app.run()