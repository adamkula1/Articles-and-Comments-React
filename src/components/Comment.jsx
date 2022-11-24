import React from "react";
// import { Divider, Avatar, Grid, Paper } from "@material-ui/material";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import moment from "moment";


const Comment = (props) => {
  return (
    <>
      <section className="wrap-comments">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 2,
              width: 410,
              // height: 100,
            },
          }}
        >
          <Paper style={{ padding: "15px 15px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={props.avatar} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <p className="author">{props.author}</p>
                <p className="date">
                  {moment(props.date).format("MMMM Do YYYY, h:mm:ss a")}
                </p>

                <p className="text">{props.text}</p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: "15px 0 0 0" }} />
          </Paper>
        </Box>
      </section>
    </>
  );
};

export default Comment;
