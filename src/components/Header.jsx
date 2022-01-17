import React from "react";
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import logo from "./img/logo2.png";

export default function Header(props) {

  const [Toggle, setToggle] = React.useState({
    checkedA: false
  });
  const handleChange = (event) => {
   
    setToggle({ ...Toggle, 
      [event.target.name]: event.target.checked 
    });
  };
  console.log(props.textMode);

  const changColor = () => {
    return props.changColorfun();
  };
  return (
    <>
      <div className="header">
        <div className="logo_div">
          <img src={logo} alt="logo" />
          <h1>Hafiz Note </h1>
        </div>

         <FormControlLabel
        control={<Switch checked={Toggle.checkedA} onChange={handleChange} name="checkedA"  onClick={changColor} color="primary" />}
        label={props.textMode}
      />

      </div>
    </>
  );
}
