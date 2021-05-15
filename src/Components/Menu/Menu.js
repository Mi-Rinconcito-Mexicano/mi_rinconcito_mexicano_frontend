import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loading: {
    display: 'flex',
      align: 'center',
    }
  }));

export default function Menu() {
  const backend_url = 'http://localhost:8000/api/v1/menu'
  const [menu, setMenu] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get(backend_url)
        .then(res => setMenu(res.data))
        .catch(error => console.log(error))
  }, []);


  if (menu['data'] === undefined) {
    return (
      <div className={classes.loading}>
      <CircularProgress />
    </div>
    );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          Menu
        </Typography>
      </Grid>

      {
        menu.data.map((menuInfo) => {
          return(
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                  {menuInfo.attributes.category}
                </Typography>
              </Grid>

            {
              menuInfo.attributes.category_items.map((menuItem) => {
                return(
                  <Grid item xs={4}>
                    <Typography align="center">
                      {menuItem.name}
                    </Typography>

                    <Typography align="center">
                      {menuItem.description}
                    </Typography>

                    <Typography align="center">
                      {menuItem.price}
                    </Typography>

                    {
                      menuItem.extra.map((extraItem) => {
                        return(
                          <Typography align="center">
                            {extraItem.info}.....${extraItem.price}
                          </Typography>
                        )
                      })
                    }
                  </Grid>
                )
              })
            }
            </Grid>
          )
        })
      }
    </Grid>
  )
}
