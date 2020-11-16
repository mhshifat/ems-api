import { connect } from "mongoose";

export default (str: string) => {
  return connect(str, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
