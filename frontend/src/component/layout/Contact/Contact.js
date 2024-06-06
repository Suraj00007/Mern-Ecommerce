// Contact.js

import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactButtons">
        <Button
          variant="contained"
          color="primary"
          href="mailto:SK3085042@gmail.com"
        >
          Mail :- SK3085042@gmail.com
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="mailto:harshjoshi7984@gmail.com"
        >
          Mail :- harshjoshi7984@gmail.com
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="mailto: mishrapranjal232@gmail.com"
        >
          Mail :- mishrapranjal232@gmail.com
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="mailto:choudharysunil830@gmail.com"
        >
          Mail :- choudharysunil830@gmail.com
        </Button>
      </div>
    </div>
  );
};

export default Contact;
