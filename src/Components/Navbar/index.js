import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from './Logo/Mi_Rinconcito_Mexicano.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 100,
        marginRight: '10px'
      },
    button: {
        padding:0
    }
  }));

export default function Navbar() {
    const classes = useStyles();

    return (
    <AppBar position="static">
        <Toolbar>
            <Button className={classes.button} color="inherit" component={Link} to='/' disableRipple={true}>
                <img src={Logo} alt="logo" className={classes.logo} />
            </Button>

            <Typography variant="h6" className={classes.title}>
                Mi Rinconcito Mexicano Auténtica Comida Mexicana
            </Typography>

            <Button color="inherit" component={Link} to='/'>Home</Button>
            <Button color="inherit" component={Link} to='/Menu'>Menu</Button>
            <Button color="inherit" component={Link} to='/panaderia'>Panaderia</Button>
        </Toolbar>
    </AppBar>
    )
}