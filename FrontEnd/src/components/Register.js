import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from '../utils/axios_chat';
import history from '../history';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios.post('/user/register', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.data.error) {
          alert('wrong credentials');
        } else {
          history.push('/');
        }
      })
      .catch(res => {
      });
    return false;
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={'this.classes.paper'} style={{ marginTop: '25%' }}>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={'this.classes.form'} noValidate onSubmit={(val) => this.handleSubmit(val)}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Username"
                  defaultValue=""
                  className={'this.classes.textField'}
                  margin="normal"
                  variant="outlined"
                  autoFocus
                  fullWidth
                  onChange={(event) => this.setState({ username: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  onChange={(event) => this.setState({ email: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  className={'this.classes.textField'}
                  autoComplete="current-password"
                  onChange={(event) => this.setState({ password: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  className={'this.classes.textField'}
                  onChange={(event) => this.setState({ confirm: event.target.value })}
                />
              </Grid>
            </Grid>
            <Button
              // href='/'
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={'this.classes.submit'}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  BACK
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

export default Register;
