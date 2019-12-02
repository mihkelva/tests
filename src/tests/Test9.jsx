import React from "react";

class Test9 extends React.PureComponent {

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
            <input onChange={this.handleChange} name="fullName" type="text" value={this.state.fullName}/>
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Isikukood</label>
            <input onChange={this.handleChange} name="personalCode" type="text" value={this.state.personalCode}/>
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Telefoni number</label>
            <input onChange={this.handleChange} name="phoneNumber" type="text" value={this.state.phoneNumber}/>
          </div>
          <div className={"row"}>
            <label htmlFor="personalCode">Aadress</label>
            <input onChange={this.handleChange} name="address" type="text" value={this.state.address}/>
          </div>
          <button style={{width: "100%"}}>
            Salvesta
          </button>
        </form>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';
