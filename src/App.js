import logo from './logo.svg';
import React, {useEffect} from "react";
import './App.css';

function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const [email, setEmail] = React.useState('');
	const [username, setUsername] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [dob, setDob] = React.useState('');

	let modalRef = React.useRef(null);

	const handleInput = () => {
		let d = new Date(dob);
		let c = new Date();
		if (!email.includes('@')) {
			alert("Invalid email. Please enter a 10-digit phone number.");
			return false;
		}
		if (phone.length !== 10) {
			alert("Invalid phone number. Please enter a 10-digit phone number.");
			return false;
		}
		if (d > c) {
			alert("Invalid date of birth. Please enter a 10-digit phone number.");
			return false;
		}
		if (email === '' || username === '' || phone === '' || dob === '') {
			alert("Please enter all details first.");
			return false;
		}
		return true;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (handleInput()) {
			setOpenForm(false);
			setEmail('');
			setUsername('');
			setPhone('');
			setDob('');
		}
	}

	const handleOutsideClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			setOpenForm(false);
		}
	}

	useEffect(() => {
		let modal = document.querySelector(".modal");

		if (!openForm) {
			if(modal) {modal.style.backgroundColor = "rgba(255, 255, 255, 1)";}
		} else {
			if(modal){modal.style.backgroundColor = "rgb(0, 0, 0, 0.5)";}
			document.addEventListener('mousedown', handleOutsideClick);
		}
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		}
	}, [openForm]);


	return (
		<div id="root" style={{width: '100vw', height: '100vh'}}>
			<h1>User Details Modal</h1>
			<button onClick={() => setOpenForm(true)}>Open Form</button>
			{
				openForm && (
					<div id='modal' className="modal">
						<div className="modal-content" ref={modalRef} onClick={(e) => handleOutsideClick(e)}>
							<button className='modal-close' onClick={() => setOpenForm(false)}>x</button>
							<form onSubmit={(e) => {
								handleSubmit(e);
							}}>
								<h3>Fill Details</h3>
								<div className='same-line'>
									<p>Username: </p>
									<input type="text" onChange={(e) => setUsername(e.target.value)}
										   id='username'></input>
								</div>
								<div className='same-line'>
									<p>Email Address: </p>
									<input type="text" onChange={(e) => setEmail(e.target.value)} id='email'></input>
								</div>
								<div className='same-line'>
									<p>Phone Number: </p>
									<input type="text" onChange={(e) => setPhone(e.target.value)} id='phone'></input>
								</div>
								<div className='same-line'>
									<p>Date of Birth: </p>
									<input type="date" onChange={(e) => setDob(e.target.value)} id='dob'></input>
								</div>
								<p/>
								<button type="submit" className='submit-button'>Submit</button>
							</form>
						</div>
					</div>
				)
			}
		</div>

	);
}

export default App;
