import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleRow.module.css";

function ArticleRow(props) {
  const columns = props.columns?.map((item, index) => (
    <Col key={index} md={item.width}>
      <ArticleCard {...item} />
    </Col>
  ));

  return (
    <div>
      <Row className={styles.RowStyle}>{columns}</Row>
    </div>
  );
}

export default ArticleRow;
