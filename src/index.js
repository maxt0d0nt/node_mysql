const express = require ("express");
const morgan = require ("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

//initializations
const app = express();

//settings

app.set("port", process.env.PORT || 4000); // si existe un puerto libre tomalo sino el 4000
app.set("views", path.join(__dirname, "views"));
    app.engine('.hbs', exphbs.engine({ extname: '.hbs',
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./lib/handlebars")
    
}));
app.set("view engine", ".hbs"),

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//globalvariables
app.use((req, res, next) => {
    next();
});


//routes
app.use(require("./routes"));
app.use(require("./routes/authentication"));
app.use("links", require("./routes/links"));

//public
app.use

// start server
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
})
