import React from "react";

class Test10 extends React.PureComponent {

  constructor(props){
    super(props);
    this.inputFullName = React.createRef();
    this.inputPersonalCode = React.createRef();
    this.inputPhoneNumber = React.createRef();
    this.inputAddress = React.createRef();
  }

  state = {
    fullName: "",
    personalCode: "",
    phoneNumber: "",
    address: "",
  };

  handleSubmit = (event) => {
    const formBody = {
      fullName: this.inputFullName.current.value,
      personalCode: this.inputPersonalCode.current.value,
      phoneNumber: this.inputPhoneNumber.current.value,
      address: this.inputAddress.current.value,
    };
    event.preventDefault();
    console.log(this.state);
    fetch("/api/v1/users/",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formBody),
    })
      .then(res => res.json)
      .catch( err=>{
          console.log(err, "err");
        },
      );
  };


  render() {
    return (
      <div>
        <Task />
        <form onSubmit={this.handleSubmit} className="ds-item style-2" >
          <h3 className="style-2">Kliendi vorm</h3>
          <div className={"row"}>
            <label htmlFor="fullName">Kliendi nimi</label>
            <input
              ref={this.inputFullName}
              name="fullName"
              type="text" />
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Isikukood</label>
            <input
              ref={this.inputPersonalCode}
              name="personalCode"
              type="text" />
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Aadress</label>
            <input
              ref={this.inputAddress}
              name="address"
              type="text" />
          </div>
          <div className={"row"}>

            <label htmlFor="personalCode">Telefoni number</label>
            <input
              ref={this.inputPhoneNumber}
              name="phoneNumber"
              type="text" />
          </div>
          <button style={{width: "100%"}}>
            Loo või uuenda
          </button>
        </form>
      </div>
    );
  }
}

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';
