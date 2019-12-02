import React from "react";

class Test7 extends React.PureComponent {

  state = {
    fullName: "",
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

  handleDisable = () => {
    console.log("click");
  };

  render() {
    return (
      <div>
        <Task />
        <form onSubmit={this.handleSubmit}>
          <div> <label>
            Name:
            <input
              onChange={this.handleChange}
              type="text"
              name="fullName"
              value={this.state.fullName}
              disabled={this.handleDisable}
            />
          </label>
          </div>
          <div>
            <label>
              Elukoht:
              <input
                onChange={this.handleChange}
                type="text"
                name="address"
                value={this.state.address}
                disabled={this.handleDisable}
              />
            </label>
          </div>
          <div>
            <label>
              Kontaktnumber:
              <input
                onChange={this.handleChange}
                type="number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                disabled={this.handleDisable}
              />
            </label>
          </div>
          <input type="submit" value="Salvesta" />
        </form>
        <button onClick={this.handleDisable}>
          Enable/Disable
        </button>
      </div>
    );
  }
}

export default Test7;

const Task = () => (
  <div>
    <h3>
      Ülesanne 7:
    </h3>
    <ol>
      <li>Eelmistes ülesannetes on teile antud juba valmis ehitatud vorm</li>
      <li>Selles ülesandes on teil vaja luua vormi element iseseisvalt</li>
      <li>Kasutaja peab saama sisestada oma nime, elukoha ja kontaktnumbri.</li>
      <li>Kui kasutaja vajutab "esitan" nuppu, siis saadetakse andmed serveri ning salvestatakse andmebaasi.</li>
      <li>Te peate muutma ainult 2 faili <code>server/user.router.js</code> ja <code>src/Test7.jsx</code></li>
      <li>Testimaks, kas andmed salvestusid andmebaasi, kasutage Postmani. <code>GET localhost:3000/api/v1/users </code> </li>
      <li>User Schema'ga saate tutvuda failis <code>server/user.model.js</code></li>
      <li>Pange tähele, et server tuleb uuesti käivitada, kui te teete <code>/server</code> kaustas muudatusi
        (npm run start:backend)
      </li>
      <li>Oleme praktiliselt sama asja teinud eelmistes ülesannetes. Ehk vajadusel saate sealt võtta ideid.</li>
      <li>ReactJS ametlik dokumentatsioon peaks olema juba ammu läbiloetud, tuletage meelde.
        <a href={'https://reactjs.org/docs/forms.html'}>https://reactjs.org/docs/forms.html</a></li>

    </ol>

  </div>

);
