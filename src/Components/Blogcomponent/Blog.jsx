import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

import Tilt from "react-parallax-tilt";
import "./BlogSection.css";
import axios from "axios";

const BlogSection = () => {
  // We handler to set the state should be setStateName so => setData X
  const [articlesList, setArticlesList] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=apple&from=2023-11-07&to=2023-11-07&sortBy=popularity&apiKey=4ff734a982784fbeb8ca580b3af320fd"
      )
      .then((response) => {
        if (response.status === 403) {
          setError(
            "Access forbidden. Please check your API key or permissions."
          );
        } else {
          setArticlesList(response.data.articles);
        }
      })
      .catch((error) => {
        setError("Error fetching data. Please try again later.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="blogs">
      <Container>
        {error ? (
          <h2 className="text-center font-details-b pb-4">{error}</h2>
        ) : (
          articlesList &&
          articlesList.length > 0 && (
            <h2 className="text-center font-details-b pb-4 mt-3 text-dark">
              Latest Blogs
            </h2>
          )
        )}
        {
          <div className="row">
            {articlesList.slice(0, 5).map((article) => {
              return article.urlToImage !== null && article.title != null ? (
                <div className="col-lg-4" key={article.description}>
                  <Tilt className="h-100 p-2">
                    <Card className="card-resize m-2  d-flex flex-column justify-items-between h-100">
                      {article?.urlToImage != null && (
                        <Card.Img
                          className="h-100"
                          variant="top"
                          src={article.urlToImage}
                          alt="Blog 1"
                        />
                      )}

                      <Card.Body className="flex-grow-1">
                        <Card.Title className="text-center">
                          {article.content && article?.content?.slice(0, 29)}
                        </Card.Title>
                        <Card.Text className="text-center">
                          {article?.description?.slice(0, 100)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tilt>
                </div>
              ) : null;
            })}
          </div>
        }
      </Container>
    </div>
  );
};
export default BlogSection;
