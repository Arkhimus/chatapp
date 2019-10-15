import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import axios from '../utils/axios_chat';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import io from 'socket.io-client';

const socketUrl = 'http://localhost:5000';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      from: '',
      message: '',
      socket: null,
    }
  }

  initSocket = () => {
    const socket = io(socketUrl);
    socket.on('connect', () => {
      console.log('connected');
    })
    this.setState({ socket });
  }

  componentDidMount() {

    axios.get('/chat/dashboard')
      .then(res => {
        console.log(this.state.username)
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = {
      from: this.state.username,
      message: this.state.message,
    };


    axios.post('/chat/dashboard', { message })
      .then(res => {
        if (res.data.error) {
          alert('xoxo');
        } else {
        //   socket.on('chat-message', message => {
        //     socket.emit('send-chat-message', message);
        //   });
        //   console.log(message)
        }
      })
      .catch();
    return false;
  }

  render() {
    return (
      <div className={'classes.root'} style={{ margin: ' 5% 5% 10% 5%' }}>
        <CssBaseline />
        <div className={'classes.toolbar'} />
        <main className={'classes.content'}>
          <Paper className={'classes.root'} >
            <form onSubmit={(val) => this.handleSubmit(val)}>
              <Paper className={'classes.root'}>
                <Typography variant="h4" component="h3" >
                  Chat App
                </Typography>
                <Typography variant="h4" component="h3">
                  Rooms
                </Typography>
                <div className={'flexcontainer'} style={{
                  display: 'flex',
                }}>
                  <div className={'topics'} style={{
                    width: '23%',
                    height: '300px',
                    borderRight: '1px solid grey'
                  }}>
                    <List>{['room 1', 'room 2'].map(topic => (
                      <ListItem button key={topic}>
                        <ListItemText primary={topic} />
                      </ListItem>
                    ))}</List>
                  </div>
                  <div className={'chat'} style={{
                    width: '70%',
                    height: '300px',
                    padding: '20px',
                  }}>
                    {[{ from: 'user', msg: 'message' }].map((chat, index) => (
                      <div key={index}>
                        <Typography
                          variant='caption'
                          style={{ fontSize: '10px', }}>
                          {chat.from}
                        </Typography>
                        <br />
                        <Chip label={chat.msg} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={'flexcontainer'} style={{
                  display: 'flex',
                }}>
                  <div className={'chatbox'}>

                  </div>
                  <div className={'chat'}>

                  </div>
                </div>
              </Paper>
              <TextField
                style={{
                  marginLeft: '24%',
                  width: '69%',
                }}
                id="outlined-required"
                autoComplete="off"
                label="message"
                defaultValue=""
                className={'classes.textField'}
                margin="normal"
                autoFocus
                fullWidth
                type={'text'}
                onChange={(event) => this.setState({ message: event.target.value })}
              /><Button
                style={{
                  marginTop: '1.5%'
                }}
                type="submit"
                variant="contained"
                color="primary"
                className={'this.classes.submit'}
              >
                SEND
              </Button>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

export default Dashboard;
