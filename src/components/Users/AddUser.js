import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge)
    setEnteredUserName('')
    setEnteredAge('')
  };

  const usernameChangeHandler = (event) =>{
    setEnteredUserName(event.target.value)
  }

  const ageChangeHandler = (event) =>{
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUserName} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
