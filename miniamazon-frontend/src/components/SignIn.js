import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { useHistory, withRouter } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Kamazon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class SignIn extends React.Component {
  constructor(props){
    super(props);
    //const classes = useStyles();
    
    this.state = {
      credentials : {username: '', password: ''},
      open: false
    }
    this.submitLogin = this.submitLogin.bind(this)
  }

  submitLogin = function (e) {
    console.log(this.state.credentials);
    e.preventDefault();
    this.props.history.push('/');
  }

  valueChanged = (event) => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials:cred});
    console.log(this.state.credentials);
  }

 

  render() {
    
    const handleClose = (event, reason) => {
      if (reason==='clickaway') {
        return;
      }
      this.setState({open: false});
    }
  
    const handleClick=(e, data) => {
      this.setState({open: true});
      this.props.handle_login(e, data);
    }
     
    const {classes} = this.props;
    //if already signed in, redirect elsewhere.
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login to your Kamazon account
        </Typography>
          <form onSubmit = {handleClick} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={this.state.username}
              onChange={this.valueChanged}
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
              value={this.state.password}
              onChange={this.valueChanged}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={e => handleClick(e, this.state.credentials)}
              className={classes.submit}
            >
              Login
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal:'left',
            }}
            open={this.state.open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Login Successful!"
            action={
              <React.Fragment>
                <Button color='secondary' size='small' onClick={this.handleClose}>
                  Proceed to Kamazon
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          ></Snackbar>
          
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>)
  }
} 

export default withStyles(useStyles, {withTheme: true}) (withRouter(SignIn));