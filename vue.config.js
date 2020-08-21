let fs = require("fs");
let content = fs.readFileSync(`./bt.config.yml`, {
  encoding: "utf8"
});
console.log(process.env.NODE_ENV);
let result = require("js-yaml").load(content);
let data = result[`${process.env.NODE_ENV}`];
if (!data) data = result.dev;
console.log(data);
process.env = {
  ...process.env,
  ...data
};
// console.log(process.env);