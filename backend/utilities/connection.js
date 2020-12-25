const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)
const url = 'mongodb://localhost:27017/DB'
var current = new Date();
var current_year = current.getFullYear();


const collegeSchema =
{
    id: Number,
    name: String,
    year_founded: {
        type : Number,
        max : current_year
    },
    city: String,
    state: String,
    country: String,
    no_of_students: Number,
    courses: Array,
    students: {
        type: [{
            id: Number,
            name: String,
            year_of_batch: {
                type: Number,
                max: 4,
            },
            skills: Array
        }]
    }
}

const College = new Schema(collegeSchema, { collection: "college", timestamps: true })

let connection = {}
connection.getcollection = async () => {
    try {
        return (await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })).model("college", College)
    } catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

module.exports = connection;