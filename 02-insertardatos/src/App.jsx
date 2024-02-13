const persona ={
  Nombre: "HERNANDEZ OLIVERA PEDRO",
  Edad: 22,
  Fecha_y_Lugar_De_Nacimiento: [
    "Fecha: 29 junio 2001📅",
    "lugar:san juan bautista tuxtepec Oaxaca🗺️"
  ],
  Profesion: "Estudiante 👨🏼‍🎓",
  PasaTiempo:[
    "Rodar🏍️",
    "Calistenia 🦾",
    "Videos juegos🎮",
    "Peliculas📽️",
    "Ver Formula 1🏎️y Motos GP🏍️"
  ],
  signo_zodiacal: "cancer♋",
  }
  function App() {
    return (
      <div>
        <h1>Informacion Personal</h1>
        <hr />
        <ul>
          <li>Nombre: {persona.Nombre}</li>
          <li>Edad: {persona.Edad}</li>
          <li>Fecha_y_Lugar_De_Nacimiento:
          <ul> 
            <li>{persona.Fecha_y_Lugar_De_Nacimiento[0]}</li>
            <li>{persona.Fecha_y_Lugar_De_Nacimiento[1]}</li>
            </ul>
          </li>
          <li>Profesion: {persona.Profesion}</li>
          <li>Pasatiempo:
            <ul> 
            <li>{persona.PasaTiempo[0]}</li>
            <li>{persona.PasaTiempo[1]}</li>
            <li>{persona.PasaTiempo[2]}</li>
            <li>{persona.PasaTiempo[3]}</li>
            <li>{persona.PasaTiempo[4]}</li>
            </ul>
          </li>
          <li>signo_zodiacal: {persona.signo_zodiacal}</li>
        </ul>
      </div>
    )
  }
  
  export default App