import React from "react";
// import {toast} from "react-toastify";

class Test6 extends React.PureComponent {

  state = {
    fullName: "",
    burger: "",
    drink: "",
    orders: []
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    fetch("/api/v1/orders/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then( res => {
      if(!res.ok) throw "signup failed";
      return res.json();
    }).then(() => {

    });
  };

  render() {
    return (
      <>
        <div className={"ds" }>
          <h3>
            Ülesanne 6:
          </h3>
          <p>
            <ol>
              <li>Kasutaja sisestab väärtused vormi</li>
              <li>Kui kasutaja vajutab "Otsi", siis tehakse päring serveri. Päringuga antakse kaasa vormi andmed</li>
              <li>Serveris on REST teenus, mis otsib andmebaasist vastavad dokumendid ning tagastab need.</li>
              <li>Kasutajaliides saab andmed kätte ning kuvab esitatud tellimused ekraanil.</li>
              <li><b>Pane tähele!</b> Seda ülesannet saab lahendad ainult siis, kui ülesanne 5 on tehtud</li>
              <li>Tuleb muuta faili <code>Test6.jsx</code></li>
              <li>Tuleb muuta faili <code>orders.router.js</code></li>
            </ol>

            Näidise video <a href="/static/videos/video1.mp4">/static/videos/video1.mp4</a>

          </p>

        </div>
        <div className="ds">
          <form onSubmit={this.handleSubmit} className="ds-item style-2">
            <h3 className="style-2">Andmebaasi päring</h3>
            <div className={"row"}>
              <label htmlFor="fullName">Kliendi nimi</label>
              <input onChange={this.handleChange} name="fullName" type="text" />
            </div>
            <div className={"row"}>
              <label htmlFor="burger">Burger</label>
              <select onChange={this.handleChange} name="burger">
                <option value="">-</option>
                <option value="megaBurger">Megaburger</option>
                <option value="baconBurger">Peekoniburger</option>
                <option value="veganBurger">Veganburger</option>
              </select>
            </div>
            <div className={"row"}>
              <label htmlFor="drink">Jook</label>
              <select onChange={this.handleChange} name="drink">
                <option value="">-</option>
                <option value="coke">Coca-Cola</option>
                <option value="sprite">Sprite</option>
                <option value="water">Water</option>
              </select>
            </div>
            <button style={{width: "100%"}}>
              Otsi
            </button>
          </form>

          <div>
            {
              this.state.orders.map(order => (
                <div key={order.fullName}>
                  <div>{order.fullName}</div>
                  <div>{order.burger}</div>
                  <div>{order.drink}</div>
                </div>
              ))
            }
          </div>

        </div>
      </>
    );
  }
}
export default Test6;
