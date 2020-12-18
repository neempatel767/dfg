import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import { UserContext } from '../Authentication/UserProvider';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Keyboard = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);
  const [keyboard, setKeyboards] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/keyboard`)
    .then(({ data }) => {
      setKeyboards(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the data of keyboard: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Keyboard"/>

      <Container>
        {keyboard && keyboard.length > 0 ? (
          keyboard.map((keyboard, i) => (
            <>
              <blockquote>
                {keyboard.quantity}: "{keyboard.keyboardStyle}" ~ {keyboard.client}
              </blockquote>

              {user && user.token ? (
                <Link to={`/keyboard/edit/${keyboard._id}`}>.edit.</Link>
              ) : null}
            </>
          ))
        ) : null}
      </Container>
    </>
  );
}
 
export default Keyboard;