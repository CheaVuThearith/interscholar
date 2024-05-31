import mongoose, { Schema } from "mongoose";

const mongodbUri = process.env.MONGODB_URI;
if (mongodbUri) {
  mongoose.connect(mongodbUri);
} else {
  throw new Error("Please define the URI in .env file");
}
mongoose.Promise = global.Promise;
const scholarshipSchema = new Schema({
  title: String,
  organization: String,
  deadline: Date,
  location: String,
  description: String,
  local: Boolean,
  abroad: Boolean,
  //level
  bachelors: Boolean,
  masters: Boolean,
  phds: Boolean,
  exchangeprograms: Boolean,
  //major
  facultyofengineering: Boolean,
  facultyofscience: Boolean,
  facultyofsocialsciences: Boolean,
  facultyofarts: Boolean,
  link: String,
  image: String,
});
const competitionSchema = new Schema({
  title: String,
  organization: String,
  deadline: Date,
  location: String,
  description: String,
  local: Boolean,
  abroad: Boolean,
  link: String,
  image: String,
});
const internshipSchema = new Schema({
  title: String,
  organization: String,
  deadline: Date,
  location: String,
  description: String,
  local: Boolean,
  abroad: Boolean,
  link: String,
  image: String,
});

//volunteering activities
const extraCurricularSchema = new Schema({
  title: String,
  organization: String,
  deadline: Date,
  location: String,
  description: String,
  local: Boolean,
  abroad: Boolean,
  link: String,
  image: String,
});

export const Scholarship =
  mongoose.models.Scholarship ||
  mongoose.model("Scholarship", scholarshipSchema);

export const Competition =
  mongoose.models.Competition ||
  mongoose.model("Competition", competitionSchema);

export const Internship =
  mongoose.models.Internship || mongoose.model("Internship", internshipSchema);

export const ExtraCurricular =
  mongoose.models.ExtraCurricular ||
  mongoose.model("ExtraCurricular", extraCurricularSchema);
