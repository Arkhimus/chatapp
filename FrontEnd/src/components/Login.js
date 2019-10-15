import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from '../utils/axios_chat';
import history from '../history';

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: false,
      passwordError: false,
      usernameField: 'Username',
      passwordField: 'Password',
      usernameHelper: '',
      passwordHelper: '',
    }

  }

  handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    axios.post('/user/login', { user })
      .then(res => {
        if (res.data.error) {
          alert('wrong credentials');
        } else {
          history.push('/dashboard');
        }
      })
      .catch();
    return false;
  }

  render() {

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={'this.classes.paper'} style={{
          marginTop: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={'this.classes.form'} noValidate onSubmit={(val) => this.handleSubmit(val)} style={{
            width: '100%',
          }}>
            <TextField
              error={this.state.usernameError}
              required
              id="outlined-error"
              label={this.state.usernameField}
              defaultValue=""
              className={'this.classes.textField'}
              margin="normal"
              variant="outlined"
              autoFocus
              helperText={this.state.usernameHelper}
              fullWidth
              onChange={(event) => this.setState({ username: event.target.value })}
            />
            <TextField
              error={this.state.passwordError}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={this.state.passwordField}
              helperText={this.state.passwordHelper}
              type="password"
              id="password"
              className={'this.classes.textField'}
              autoComplete="current-password"
              onChange={(event) => this.setState({ password: event.target.value })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={'this.classes.submit'}
            >
              Sign In
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/registration" variant="body2">
                  {"REGISTER"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;
