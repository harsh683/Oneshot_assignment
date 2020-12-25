const faker = require('faker')
const indianCitiesDatabase = require('indian-cities-database')
const cities = indianCitiesDatabase.cities;
const data = require('../models/data')
const connection = require('../utilities/connection')

const createConnection = async () => {
    try {
        return (await connection.getcollection());
    }
    catch (err) {
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    }
}

const collection = createConnection();

const model = {}

model.insertScript = async () => {
    try {
        await (await collection).deleteMany();
        for (i = 0; i < 100; i++) {
            let city_state = cities[Math.floor(Math.random() * 1466)]
            let number_of_students = faker.random.number({ min: 100, max: 200 });
            var studentArray = []
            for (j = 0; j < number_of_students; j++) {
                let student = {
                    id: j,
                    name: faker.name.firstName(),
                    year_of_batch: Math.floor(Math.random() * 4 + 1),
                    skills: data.getSkills(),
                }
                studentArray.push(student)
            }
            var college = {
                id: i,
                name: faker.name.findName(),
                year_founded: (faker.date.past(200).getFullYear() - 1),
                city: city_state.city,
                state: city_state.state,
                country: 'India',
                no_of_students: number_of_students,
                courses: data.getCourses(),
                students: studentArray
            }
            await (await collection).create(college);
        }
        return ("Mock Data inserted")
    }
    catch (err) {
        let error = new Error("Cannot insert documents")
        error.status = 500
        throw error
    }
}

model.getAllColleges = async () => {
    try {
        let response = await (await collection).find({});
        if (response) {
            return response
        }
        else {
            let err = new Error("Error finding colleges details")
            err.status = 500
            throw new Error
        }
    }
    catch (err) {
        let error = new Error("Cannot get collections")
        error.status = 500
        throw error
    }
}

model.getSimilarColleges = async (college_id) => {
    try {
        let response = await (await collection).findOne({ "id": college_id })
        if (response) {
            return await (await collection).find({
                $and: [
                    {
                        "state": response.state
                    },
                    {
                        "no_of_students": { $gte: ((response.no_of_students) - 100), $lt: ((response.no_of_students) + 100) }
                    }
                ]
            })
        }
        else {
            let error = new Error("College with this id not found")
            error.status = 500
            throw error
        }
    }
    catch (err) {
        let error = new Error("Error finding similar colleges or college not found")
        error.status = 500
        throw error
    }
}

module.exports = model;