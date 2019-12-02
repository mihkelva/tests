import React from "react";

class Test10 extends React.PureComponent {
  state = {
    fullName: "",
    personalCode: "",
    phoneNumber: "",
    address: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    fetch("/api/v1/users/",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state),
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
              onChange={this.handleChange}
              name="fullName"
              type="text"
              value={this.state.fullName}/>
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Isikukood</label>
            <input
              onChange={this.handleChange}
              name="personalCode"
              type="text"
              value={this.state.personalCode}/>
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Aadress</label>
            <input
              onChange={this.handleChange}
              name="address" type="text"
              value={this.state.address}/>
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Telefoni number</label>
            <input
              onChange={this.handleChange}
              name="phoneNumber"
              type="text"
              value={this.state.phoneNumber}/>
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
