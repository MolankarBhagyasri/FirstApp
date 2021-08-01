import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import './index.css';



ReactDOM.render(
  <>
  <h1 class="heading__style">Top 6 Netflix series</h1>
  <Card
  imgsrc="https://upload.wikimedia.org/wikipedia/en/0/0d/The_Crown_season_4.jpg"
  title=" A Netflix Original Series"
  sname="THECROWN"
  link="https://www.netflix.com/in/title/80025678"
  />

  <Card
  imgsrc="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/gbepvjettqttzqlz_1593258788.jpeg"
  title=" A Netflix Original Series"
  sname="DARK"
  link="https://www.netflix.com/in/title/80100172"
  />

  <Card
  imgsrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/castlevania-season-3-1583498354.png"
  title=" A Netflix Original Series"
  sname="CastleVania"
  link="https://www.netflix.com/in/title/80095241"
  />
  <Card
  imgsrc="http://gonewiththetwins.com/new/wp-content/uploads/2014/01/twilighteclipse.jpg"
  title="Twilight Series"
  sname="The Twilight Saga: Eclipse"
  link="https://www.imdb.com/title/tt1325004/"
  />
  <Card
  imgsrc="https://m.media-amazon.com/images/M/MV5BYmFiMjc0MTAtMzJmZC00MzM5LTg3M2MtZmY2YmVkYzQ5OTA2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
  title=" Dark Series"
  sname="Stranger Things"
  link="https://www.imdb.com/title/tt4574334/episodes"
  />
  <Card
  imgsrc="https://m.media-amazon.com/images/M/MV5BNjdjY2M2OTEtOGJhNC00MDE1LWI4ZGQtZjk0M2ExOGJkMTE3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
  title="Rise of the Titans"
  sname="TrollHunters"
  link=" https://www.imdb.com/title/tt12851396/"
  />
  
  </>,
   document.getElementById("root")
);
  