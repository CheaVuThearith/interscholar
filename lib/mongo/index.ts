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
  masters: Boolean,
  phd: Boolean,
  exchangeProgram: Boolean,
  //major
  engineering: Boolean,
  science: Boolean,
  socialSciences: Boolean,
  arts: Boolean,
});
const competitionSchema = new Schema({
  title: String,
  organization: String,
  deadline: Date,
  location: String,
  description: String,
  local: Boolean,
  abroad: Boolean,
});
const internshipSchema = new Schema({
  title: String,
  organization: String,
  deadline: Date,
  location: String,
  description: String,
  local: Boolean,
  abroad: Boolean,
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
