import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { davomatlogin} from '../data/DavomatData'
import '../css/login.css'
export default function AdminLog({ setShowDavomat, showDavomat }) {


  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSuccesFull, setSuccesFull] = useState(false);

  const navigate = useNavigate()


  const errors = {
    uname: "foydalanuvchi ismi tog`ri kiritilmagan",
    pass: "parol notog'ri kiritilgan"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // userni izlash
    const userData = davomatlogin.find((user) => user.username === uname.value);

    // malumotlrni tekshirish
    if (userData) {
      if (userData.password !== pass.value) {
        //parolni tekshirish
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setSuccesFull(true);
        navigate('/Admin007maktabMain')
        setShowDavomat(false)

      }
    } else {
      // login topilmadi
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  //  login yoki parol xato vaqti chiqadigan habar
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const HandlerCancel = () => {
    setShowDavomat(false)
  }

  return (

    <>
      <div className='admilog' style={{ display: showDavomat !== true ? "none" : "block" }}>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h3>
              Davomatga kirish
            </h3>
          </div>
          <div className="inputs-container">
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label htmlFor="pass">Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
          </div>
          <div className="button-container">
            <div className="input-jc">
              <button>Login</button>
              <div onClick={HandlerCancel}>Cancel</div>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}
