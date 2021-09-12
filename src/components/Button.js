import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({
  text,
  size,
  color,
  href,
  className,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        size={size}
        color={color}
        href={href}
        className={className}
      >
        {text}
      </Button>
    </div>
  );
}
