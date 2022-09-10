import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
  render() {
    return (
      <>
        <LanguageContext.Consumer>
          {(language) => (language === "en" ? <h1>Hello!</h1> : <h1>Ciao!</h1>)}
        </LanguageContext.Consumer>
      </>
    );
  }
}
