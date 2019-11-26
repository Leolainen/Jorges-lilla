import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";

import Card from "../../components/Card";
import CardMedia from "../../components/CardMedia";
import CardContent from "../../components/CardContent";
import Typography from "../../components/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  avatar: {
    height: "100%",
    objectFit: "contain"
  },
  species: {
    marginBottom: theme.spacing(4)
  },
  p: theme.typography.body1
}));

const AvatarCard = props => {
  const { className = "", entry, ...other } = props;
  const classes = useStyles();

  /* 
    Dynamically imports all image assets
    https://webpack.js.org/guides/dependency-management/#require-context
  */
  function importAll(r) {
    let parsedImages = {};
    r.keys().map(image => (parsedImages[image.replace("./", "")] = r(image)));

    return parsedImages;
  }

  const images = importAll(
    require.context("../../assets/images/", false, /\.(png|PNG)$/)
  );

  return (
    <Card className={classnames(classes.root, className)} {...other}>
      <CardMedia
        component="img"
        alt={entry.species}
        height="400"
        image={images[`${entry.img_name}.PNG`]}
        title={entry.species}
        className={classes.avatar}
      />
      <CardContent>
        <Typography
          className={classes.species}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {entry.species}
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: entry.description_html }}
        />
      </CardContent>
    </Card>
  );
};

AvatarCard.propTypes = {
  className: PropTypes.string,
  entry: PropTypes.object.isRequired
};

AvatarCard.uiName = "AvatarCard";

export default AvatarCard;
