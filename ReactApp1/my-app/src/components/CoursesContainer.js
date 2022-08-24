import React from "react";
import listStyles from "./StyleCard.module.css";
import listStyles2 from "./StyleCuorsel.module.css";
import Card from "./Card.js";
const data = require("./courses.json");
let DataArray = data.courses_python;
let Data = Object.keys(DataArray).map(function (key) {
  return DataArray[key];
});
const CoursesContainer = (props) => {
  return (
    <div className="container2">
      <h3>Expand your Career opportunities with Python</h3>
      <p>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language.
      </p>
      <p>
        Its simple syntax and readability makes Python perfect for Flask,
        Django, data science, and machine learning.
      </p>
      <p>
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <br />
      <section>
        <div className={listStyles2.Con2Button}>
          <a className={listStyles2.Con2Button_tag} href="">
            Explore Python
          </a>
        </div>
      </section>
      <div className={listStyles2.Courses_Section}>
        {<Card {...Data.map((x) => x)}></Card>}
      </div>
    </div>
  );
};
export default CoursesContainer;
