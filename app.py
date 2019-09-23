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
Parks = Base.classes.parks

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
    
    
    # print(park_list)
    return jsonify(park_list)




if __name__ == "__main__":
    app.run()