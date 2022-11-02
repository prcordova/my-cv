import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <div>
          <AiFillPhone id="phone-icon" />
          <h3>Telefone</h3>
          <p>(51) 99193-4216</p>
        </div>
      </div>
      <div className="info-card">
        <div>
          <AiOutlineMail id="email-icon" />
          <h3>E-mail</h3>
          <a href="mailto: pedroricardocordova@yahoo.com.br">
            pedroricardocordova@yahoo.com.br
          </a>
        </div>
      </div>
      <div className="info-card">
        <div>
          <AiFillEnvironment id="pin-icon" />
          <h3>Localização</h3>

          <p>Canoas / RS</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
