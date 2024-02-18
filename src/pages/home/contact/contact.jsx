import "./contact.scss";

function Contact() {
  return (
    <div className="main__contact">
      <div className="main__contact--body">
        <div className="main__contact--text">
          <h2> Servicio a domicilio </h2>
          <p>
            Los envíos los realizamos, de momento, un sólo día. Llámenos al
            221-308-8740. Sólo La Plata.
          </p>
          <p>
            También, puede realizar su orden a través de la plataforma de
            PedidosYa.
          </p>
          <img src="./service/pedidosYa.png" />
        </div>
        <div className="main__contact--image">
          <img src="./service/moto.png" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
