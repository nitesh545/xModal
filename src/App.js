import logo from './logo.svg';
import React, {useEffect} from "react";
import './App.css';

function App() {
  const [openForm, setOpenForm] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [dob, setDob] = React.useState('');

  const handleInput = () => {
    let d = new Date(dob);
    let c = new Date();
    if(phone.length !== 10) {alert("Invalid phone number. Please enter a 10-digit phone number."); return false;}
    if(!email.includes('@')){alert("Invalid email. Please enter a 10-digit phone number."); return false;}
    if(d>c){alert("Invalid date of birth. Please enter a 10-digit phone number."); return false;}
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(handleInput())
    {
      setOpenForm(false);
    }
  }

  useEffect(() => {
    let modal = document.querySelector(".modal");

    if(!openForm) {
      modal.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
    else {
      modal.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    }
  }, [openForm]);


  return (
    <div id='modal' className="modal App">
      <h1>User Details Modal</h1>
      <button onClick={()=>setOpenForm(true)}>Open Form</button>
      {
        openForm && (
              <div className="modal-content App" onClick={(e) => e.stopPropagation()}>
                <button className='modal-close' onClick={() => setOpenForm(false)}>x</button>
                <form onSubmit={(e) => {
                  handleSubmit(e);
                }}>
                  <h3>Fill Details</h3>
                  <h5>Username: </h5>
                  <input required type="text" onChange={(e) => setUsername(e.target.value)} id='username'></input>
                  <h5>Email Address: </h5>
                  <input required type="text" onChange={(e) => setEmail(e.target.value)} id='email'></input>
                  <h5>Phone Number: </h5>
                  <input required type="text" onChange={(e) => setPhone(e.target.value)} id='phone'></input>
                  <h5>Date of Birth: </h5>
                  <input required type="date" onChange={(e) => setDob(e.target.value)} id='dob'></input>
                  <h5 />
                  <button type="submit" className='submit-button'>Submit</button>
                </form>
              </div>
          )
      }
    </div>
  );
}

export default App;
