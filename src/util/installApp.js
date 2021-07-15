import React, { useEffect, useState } from "react";


export const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  console.log("InstallPWA");
  useEffect(() => {
    console.log("InstallPWA useeffect  are being triggered");
    const handler = event => {
      console.log("InstallPWA we are being triggered :D");
      event.preventDefault();
      
      setSupportsPWA(true);
      setPromptInstall(event);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();

    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    console.log("InstallPWA blir ikke supportert");
    return null;
  }
  return (
    <>
    <p> Hvorfor virker ikke denne </p>
    <button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </button>
    </>
  );
};

export default InstallPWA;