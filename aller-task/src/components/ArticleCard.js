import React, { useState } from "react";
import styles from "./ArticleCard.module.css";

function ArticleCard(props) {
  const [title, setTitle] = useState(props.title);

  const [editMode, setEditMode] = useState(false);

  const imageUrl = props.imageUrl + "&height=1000";
  return (
    <>
      <div className={styles.CardContainer}>
        <a href={props.url}>
          <div
            role="img"
            aria-label="missing description"
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
          {editMode ? (
            <input
              className={styles.InputTitle}
              onBlur={(event) => {
                setTitle(event.target.value);
                setEditMode(false);
              }}
              defaultValue={title}
            />
          ) : (
            <a href={props.url} className={styles.CardLink}>
              <h2 className={styles.CardTitle}>{title}</h2>
            </a>
          )}
        </div>
      </div>
      <button
        className={styles.CardButton}
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        {editMode ? "Save" : "Edit"}
      </button>
    </>
  );
}

export default ArticleCard;
