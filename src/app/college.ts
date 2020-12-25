export class Student {
    constructor(
        public id: Number,
        public name: String,
        public year_of_batch: Number,
        public skills: Array<String>
    ){

    }
}

export class College {
    constructor(
        public id: Number,
        public name: String,
        public year_founded: Number,
        public city: String,
        public state: String,
        public country: String,
        public no_of_students: Number,
        public courses: Array<String>,
        public students: Array<Student>
    ) {
    }
}
