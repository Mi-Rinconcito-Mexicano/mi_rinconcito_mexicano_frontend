import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { 
  CardContent, 
  Grid, 
  Container,
  Card,
  Chip,
  Typography,
  CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loading: {
    display: "flex",
    align: "center",
  },
  tagsGrid: {
    align: "center",
  },
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

// Returns extras the menu item has
function ItemExtras(props) {
  return props.extras.map((extra) => {
    return (
      <Typography variant="body2" component="p" key={extra}>
        {extra}
      </Typography>
    );
  });
}

// Returns a any tags the menu item has in a grid
function ItemTags(props) {
  const classes = useStyles();
  return (
    <div className={classes.chip}>
      {props.tags.map((tag) => {
          return(
            <Chip label={tag} key={tag} />
          )
      })}
    </div>
  )
}

// Returns the menu description
function ItemDescription(props) {
  return (
    <Typography paragraph variant="body2" component="p">
      {props.description}
    </Typography>
  );
}

// Returns the menu category item and its different components
function CategoryItem(props) {
  // Checks if item has any extras
  const hasExtras = () => {
    if (props.menuItem.extra.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  // Checks if item has any tags
  const hasTags = () => {
    if (props.menuItem.tags.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  // Checks if item has a description
  const hasDescription = () => {
    if (props.menuItem.description === null) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Grid item lg={4} md={6} xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.menuItem.name}
          </Typography>

          {hasDescription() ? <ItemDescription description={props.menuItem.description} /> : null}
          {hasExtras() ? <ItemExtras extras={props.menuItem.extra} /> : null}
          {hasTags() ? <ItemTags tags={props.menuItem.tags} /> : null}
        </CardContent>
      </Card>
    </Grid>
  );
}

// Returns a menu category and items in the category
function MenuCategory(props) {
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
      <Grid container className={classes.root} spacing={4}>
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
