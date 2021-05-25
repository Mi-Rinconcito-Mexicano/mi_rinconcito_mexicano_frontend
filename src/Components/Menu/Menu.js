import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loading: {
    display: "flex",
    align: "center",
  },
  categoryBottomPadding: {
    paddingBottom: "15px",
  },
  categoryItemsPadding: {
    paddingBottom: "15px",
  },
  tags: {
    marginLeft: 4,
    marginRight: 4,
  }
}));

function ItemExtras(props) {
  return props.extras.map((extra) => {
    return (
      <Typography align="center" key={extra.info}>
        {extra.info}.....${extra.price}
      </Typography>
    );
  });
}

function ItemTags(props) {
  const classes = useStyles();
  return props.tags.map((tag) => {
    return (
      <Typography className={classes.tags} display="inline" key={tag}>
        {tag}
      </Typography>
    );
  });
}

function CategoryItem(props) {
  const classes = useStyles();

  const hasExtras = () => {
    if (props.menuItem.extra.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const hasTags = () => {
    if (props.menuItem.tags.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Grid item lg={4} md={6} xs={12} className={classes.categoryItemsPadding}>
      <Typography align="center">{props.menuItem.name}</Typography>

      <Typography align="left">{props.menuItem.description}</Typography>

      <Typography align="center">{props.menuItem.price}</Typography>

      {hasExtras ? <ItemExtras extras={props.menuItem.extra} /> : <br />}
      {hasTags ? <ItemTags tags={props.menuItem.tags} /> : <br />}
    </Grid>
  );
}

function MenuCategory(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          {props.attributes.category}
        </Typography>
      </Grid>

      {props.attributes.category_items.map((menuItem) => {
        return <CategoryItem menuItem={menuItem} key={menuItem.name} />;
      })}
    </React.Fragment>
  );
}

export default function Menu() {
  const backend_url = "http://localhost:8000/api/v1/menu";
  const [menu, setMenu] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(backend_url)
      .then((res) => setMenu(res.data))
      .catch((error) => console.log(error));
  }, []);

  if (menu["data"] === undefined) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom>
            Menu
          </Typography>
        </Grid>

        {menu.data.map((menuInfo) => {
          return (
            <MenuCategory
              attributes={menuInfo.attributes}
              key={menuInfo.attributes.category}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
