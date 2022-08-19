import mongoose, { connect } from "mongoose";
import { config } from "dotenv";

config();

function connects() {
  return connect(`${process.env.MONGODB_URL}`)
    .then(() => {
      console.log("db connect");
    })
    .catch((error) => {
      console.log(error);
    });
}
export default connects;
