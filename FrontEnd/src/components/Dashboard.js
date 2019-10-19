import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';


const Dashboard = (props) => {
  const [message, setMessage] = useState({
    from: '',
    message: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (message.message !== "") {
      props.mes(message);
      setMessage({ message: "" })
    }
  }

  return (
    <div className={'classes.root'} style={{ margin: ' 5% 5% 10% 5%' }}>
      <CssBaseline />
      <div className={'classes.toolbar'} />
      <main className={'classes.content'}>
        <Paper className={'classes.root'} >
          <form onSubmit={(val) => handleSubmit(val)}>
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
                  flexDirection: 'column',
                }}>
                  {[{ from: 'user', msg: 'message' }].map((chat, index) => (
                    <div key={index}>
                      <Typography
                        variant='caption'
                        style={{ fontSize: '10px', }}>
                        {chat.from}
                      </Typography>
                      <br />
                      <div>
                        {props.messages.map((e, i) => <Chip key={i} label={e.message} />)}
                      </div>
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
              className={'classes.textField'}
              margin="normal"
              autoFocus
              value={message.message}
              fullWidth
              type={'text'}
              onChange={(event) => setMessage({ message: event.target.value })}
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

export default Dashboard;
