import React, { useState } from "react";
import styles from "./ArticleCard.module.css";
import Card from "react-bootstrap/Card";

function ArticleCard(props) {
  console.log(props);
  const [title, setTitle] = useState("");

  const [edit, setEdit] = useState();

  let imageUrl = props.imageUrl + "&height=1000";
  return (
    <>
      <a href={props.url} className={styles.CardContainer}>
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: 500,
          }}
        ></div>
        <div className={styles.CardBody}>
          <h2 className={styles.CardTitle}>{props.title}</h2>
        </div>
      </a>
      <button className={styles.CardButton}>Edit</button>
    </>
  );
}

export default ArticleCard;
