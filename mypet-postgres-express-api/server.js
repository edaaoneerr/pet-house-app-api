const express = require('express');
const app = express();
const port = 5000;
const userRoutes = require("./src/user/userRoutes");
const vetRoutes = require("./src/vet/vetRoutes");
const petRoutes = require("./src/pet/petRoutes");
const clinicRoutes = require("./src/clinic/clinicRoutes");

app.use(express.json());

app.get("/", (req,res) => {
    res.send("");
});

app.use('/user', userRoutes);
app.use('/vet', vetRoutes);
app.use('/pet', petRoutes);
app.use('/clinic', clinicRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
