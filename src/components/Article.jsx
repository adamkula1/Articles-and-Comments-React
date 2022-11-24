import React, { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../data/data-test.json";
import Comment from "./Comment";
import moment from "moment";

const Article = (props) => {
  const [articles] = useState(data.articles);
  const [value, setValue] = useState(0);

  const { author, date, title, image, text, comments } = articles[value];

  const commentsPerRow = 2;
  const [next, setNext] = useState(commentsPerRow);

  comments.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const handleMoreComments = () => {
    setNext(next + commentsPerRow);
  };
 

  return (
    <>
      <section className="container wrap-article">
        {/* <Card sx={{ maxWidth: 345 }}> */}
        <Card>
          <CardMedia
            component="img"
            alt="connected"
            height="100"
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">
              {text}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              className="article-author"
              color="text.secondary"
            >
              Author: {author}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="p"
              color="text.secondary"
            >
              Date: {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
            </Typography>
          </CardContent>
          <h5 className="comments">Comments</h5>      

          {comments?.slice(0, next)?.map((comment, index) => (
            <Comment
              key={index}
              commentId={comment.id}
              avatar={comment.avatar}
              author={comment.author}
              text={comment.text}
              date={comment.date}
            />
          ))}

          {next < comments?.length && (
            <Button
              variant="contained"
              onClick={() => {
                handleMoreComments();
              }}
            >
              More comments
            </Button>
          )}
        </Card>
      </section>
    </>
  );
};

export default Article;
