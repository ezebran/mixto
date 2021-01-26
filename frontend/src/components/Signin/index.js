import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Typography, Container, Link as LinkCss} from '@material-ui/core'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Swal from 'sweetalert2'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [error, setError ] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const logUser = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    console.log(logUser)
    const url = 'http://localhost:4000';
    axios.post(`${url}/api/users/signin`, logUser)
      .then(function (response) {
        console.log(response.data.message)
        if(response.data.userData){
          Swal.fire(
            `Welcom ${response.data.userData.name}!`,
            'You are login now',
            'success'
          ).then(()=>{window.location.href = '/welcome';})
        }else{
          Swal.fire(
            'Error !',
            response.data.message,
            'error'
          )
        }
      })

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Link to={'/singup'} variant="body2">
            <LinkCss>
              Don't have an account? Sign Up
            </LinkCss>
          </Link>
        </form>
      </div>
    </Container>
  );
}