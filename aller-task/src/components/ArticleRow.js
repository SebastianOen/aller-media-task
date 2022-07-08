import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleRow.module.css";

function ArticleRow(props) {
  const colAmmount = props.columns?.map((item) => (
    <Col md={item.width}>
      <ArticleCard {...item} />
    </Col>
  ));

  return (
    <div>
      <Row className={styles.RowStyle}>{colAmmount}</Row>
    </div>
  );
}

export default ArticleRow;
