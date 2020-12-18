import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { NotificationContext } from '../../shared/Notifications';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const KeyboardForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
      ...inputs,
      secret_token: (user && user.token)
    })
    .then(({ data }) => {
      if (data) {
        setNotification({
          type: "success",
          message: "Keyboard entry was updated successfully"
        });
      }

      setRedirect(true);
    })
    .catch((error) => {
      setNotification({
        type: "danger",
        message: `There was an error updating the keyboard entry: ${error.message}`
      });
    });
  };

  if (redirect) return <Redirect to="/keyboard"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        name="keyboardStyle" 
        placeholder="keyboardStyle"
        defaultValue={inputs.keyBoardStyle}
      />
      <input 
        onChange={handleChange} 
        name="keyType" 
        placeholder="keyType"
        defaultValue={inputs.keyType}
      />
      <input 
        onChange={handleChange} 
        name="quantity" 
        placeholder="quantity"
        defaultValue={inputs.quantity}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
 
export default KeyboardForm;