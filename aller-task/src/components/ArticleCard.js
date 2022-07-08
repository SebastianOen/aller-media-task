import React, { useState } from "react";
import styles from "./ArticleCard.module.css";
import Card from "react-bootstrap/Card";

function ArticleCard(props) {
  console.log(props);

  const [edit, setEdit] = useState(props.title);
  const [freeMode, editMode] = useState("Edit");

  function newEdit() {
    setEdit(<input></input>);
  }

  let imageUrl = props.imageUrl + "&height=1000";
  return (
    <>
      <div className={styles.CardContainer}>
        <a href={props.url}>
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: 500,
            }}
          ></div>
        </a>
        <div className={styles.CardBody}>
          {props.edit ? (
            <>
              <input
                type="text"
                name="name"
                placeholder={edit}
                className={styles.InputTitle}
              />
            </>
          ) : (
            <>
              <a href={props.url} className={styles.CardTitle}>
                {edit}
              </a>
            </>
          )}
        </div>
      </div>
      <button className={styles.CardButton} onClick={newEdit}>
        {freeMode}
      </button>
      <button className={styles.CardButton}>Update</button>
    </>
  );
}

export default ArticleCard;
