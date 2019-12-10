import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MainContainer from '../maincontainer/MainContainer';
import { Redirect, withRouter } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordVaild: false,
            toProfile: false,
            retrievedPass:'',
            incorrect: false,

            user: {}

        }
    }

 useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
}));

    // update state variable whenever user inputs.
    onChange = (e) => {
        this.handleUserInput(e);
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {

        // var fieldValidationErrors;
        // let emailValid = this.state.emailValid;
        // let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
               // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
               // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
               // break;
               this.state.email = value
            case 'password':
               this.state.password = value
            default:
                break;
        }
    }

  

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    async validateUser(email) {
        try {
            
            const response = await fetch("http://localhost:3001/user?email=" + email, { method: 'GET' });
            const data = await response.json();
            this.state.user = data[0];
            this.state.retrievedPass = data[0].password;
            return data[0].password;

        }
        catch (error) {
            console.log("ERROR: " + error);
        }
    

  }



    onSubmit = (e) => {
        e.preventDefault();   //prevents actual submission.
        var response = this.validateUser(this.state.email)


        if(this.state.retrievedPass == this.state.password){
          sessionStorage.setItem('email', this.state.user.email);
          this.setState(() => ({ toProfile: true }));
        }
        else {

        }

    }

    render() {
        if (this.state.toProfile === true) {
            return <Redirect to='/user/profile' />
        }

        return (
            <MainContainer>
                     <CssBaseline />
      <div className="login">
         <Avatar>
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Sign in
         </Typography>
         <form onSubmit={this.onSubmit}>
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
            value={this.state.email}
            onChange={this.onChange}
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
            onChange={this.onChange}
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
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
            </MainContainer >

        );
    }
}

export default Login;






