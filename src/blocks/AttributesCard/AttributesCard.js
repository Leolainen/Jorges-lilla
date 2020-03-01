import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";
import Card from "../../components/Card";
import CardContent from "../../components/CardContent";
import Typography from "../../components/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(4)} 0`
  },
  attribute: {
    padding: 12,
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: 3
  },
  attributes: {
    display: "grid",
    gridGap: 10,
    gridTemplateColumns: "repeat(3, 1fr)",
    textAlign: "center"
  }
}));

const AttributesCard = React.forwardRef(function AttributesCard(props, ref) {
  const { className = "", title = "", attributes, children, ...other } = props;
  const classes = useStyles();

  return (
    <Card ref={ref} className={classnames(classes.root, className)} {...other}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h1">
          {title}
        </Typography>

        <div className={classes.attributes}>
          {Object.values(attributes).map(attribute => (
            <div className={classes.attribute}>
              <Typography variant="body2">{attribute.label}</Typography>

              <Typography variant="caption">{attribute.value}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

AttributesCard.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string
};
AttributesCard.uiName = "AttributesCard";

export default AttributesCard;
