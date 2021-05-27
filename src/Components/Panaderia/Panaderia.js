import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Collapse from '@material-ui/core/Collapse';
import { Card, CardContent, CardMedia, GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";

import Pastel from "./images/pastel.jpg";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden"
      },
    media: {
      height: 270,
    },
    media2: {
        height: 270,
      },
      gridList: {
        width: "100%",
        height: "100%"
      },
  });


function Panaderia() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
      };

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                            <CardMedia
                            className={classes.media} 
                            image={Pastel}
                            title='test' />
                    </Card>
                </Grid>

                <Grid item xs={3}>
                    <Card>
                            <CardMedia
                            className={classes.media} 
                            image={Pastel}
                            title='test' />
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                            <CardMedia
                            className={classes.media} 
                            image={Pastel}
                            title='test' />
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                            <CardMedia
                            className={classes.media} 
                            image={Pastel}
                            title='test' />
                    </Card>
                </Grid>
            </Grid>

            <GridList cellHeight={270} cols={4} spacing={20} className={classes.gridList}>
                <GridListTile>
                    <Card>
                        <CardMedia
                            className={classes.media2} 
                            image={Pastel}
                            title='test' />
                    </Card>
                    <GridListTileBar title='Pastel' />
                </GridListTile>
                <GridListTile>
                    <Card onMouseOver={handleChange} onMouseLeave={handleChange}>
                        <CardMedia
                            className={classes.media2} 
                            image={Pastel}
                            title='test' />
                    </Card>
                    <Collapse in={checked}>
                        <GridListTileBar title='Pastel' />
                    </Collapse>
                </GridListTile>

                <GridListTile>
                    <img src={Pastel} alt="test" />
                </GridListTile>
                <GridListTile>
                    <img src={Pastel} alt="test" />
                </GridListTile>
                <GridListTile>
                    <img src={Pastel} alt="test" />
                </GridListTile>
            </GridList>


        </Container>
    )
}

export default Panaderia;