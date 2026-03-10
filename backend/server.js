
require("dotenv").config();
const app = require("./app");

const PORT = 4000;

app.listen(PORT,()=>{
console.log("API traiteur 971 lancée sur http://localhost:"+PORT);
});
