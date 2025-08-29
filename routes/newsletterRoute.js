const express = require("express");
const newsletterRoute = express.Router();

const {
    getNewsletter,
    getOneNewsletter,
    postNewsletter,
    putNewsletter,
    deleteNewsletter,
    countNews
} = require("../controllers/newsletterController");

const isAuth = require("../middleware/isAuth");
const isAutho = require("../middleware/isAutho");
const upload = require("../middleware/upload");

newsletterRoute.get("/newsletter", getNewsletter);
newsletterRoute.get("/newsletter/:id", getOneNewsletter  /*,isAuth, /*isAutho(['admin'])*/ );
newsletterRoute.get("/news/count", countNews /*,isAuth, /*isAutho(['admin'])*/ );
newsletterRoute.post("/addNewsletter", upload.single("file"),  postNewsletter , /*isAuth, isAutho(['admin'])*/ );
newsletterRoute.put("/putNewsletter/:id",upload.single("file"), putNewsletter);
newsletterRoute.delete("/deleteNewsletter/:id", deleteNewsletter);

module.exports = newsletterRoute;