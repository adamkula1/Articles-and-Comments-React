import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Comment from "./Comment";
import moment from "moment";

const Article = ({ author, date, title, image, text, comments }) => {
  const commentsPerRow = 2;
  const [next, setNext] = useState(commentsPerRow);

  const [showComments, setShowComments] = useState(false);
  const [showButton, setShowButton] = useState(false);

  comments.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const handleMoreComments = () => {
    setNext(next + commentsPerRow);
  };

  const loadComments = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        setShowComments(true);
        resolve();
      }, 1000);
    });

    await promise;
  };

  useEffect(() => {
    loadComments();
    if (showComments) {
      setTimeout(() => {
        setShowButton(!showButton);
      }, 1250);
    }
  }, [showComments]);

  return (
    <>
      <section className="wrap-article">
        <Card>
          <CardMedia
            component="img"
            alt="connected"
            height="200"
            image={image}
            sx={{ padding: "1em 1em 0 1em" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{text}</Typography>
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
          
          <h6 className="comments">Comments</h6>

          {showComments &&
            comments
              ?.slice(0, next)
              ?.map((comment, index) => (
                <Comment
                  key={index}
                  commentId={comment.id}
                  avatar={comment.avatar}
                  author={comment.author}
                  text={comment.text}
                  date={comment.date}
                />
              ))}

          {showButton && next < comments?.length && (
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
