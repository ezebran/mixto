import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: '16px'
  }
  })
);

const Footer = () => {
  const classes = useStyles();
    return (
      <Typography variant="body2" color="textSecondary" align="center" className={classes.footer}>
        {'Challenge from studio mixto, developed by '}
        <Link color="inherit" href="https://ezebran.github.io/portafolio/">
          Ezequiel Brandan
        </Link>
        {'.'}
      </Typography>
    );
  }

export default Footer;