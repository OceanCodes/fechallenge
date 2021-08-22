import React, { forwardRef } from "react";
import { List, AutoSizer } from "react-virtualized";
import CardComponent from "../CardComponent/CardComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Lists.css";

const Lists = forwardRef(({ users, reviewers }, ref) => (
  <div style={{ width: "100%", height: "87vh" }}>
    <AutoSizer>
      {({ width, height }) => (
        <List
          width={width}
          height={height}
          rowHeight={530}
          rowCount={users.length}
          rowRenderer={({ index, style, key }) => {
            const user = users[index];
            const reviewer = reviewers[index];

            return (
              <div style={style} key={key}>
                {user && reviewer ? (
                  <Container className="cards-container">
                    <Row>
                      {user && (
                        <Col>
                          {users.length === index + 2 ? (
                            <div ref={ref}>
                              <CardComponent element={user} key={user.id} />
                            </div>
                          ) : (
                            <CardComponent element={user} key={user.id} />
                          )}
                        </Col>
                      )}
                      <Col>
                        {reviewer && (
                          <CardComponent element={reviewer} key={reviewer.id} />
                        )}
                      </Col>
                    </Row>
                  </Container>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            );
          }}
        />
      )}
    </AutoSizer>
  </div>
));

export default Lists;
