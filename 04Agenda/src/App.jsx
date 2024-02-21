import ListItem from "./ListItem"
const persona = [{
  nombre:"Pedro",
  apellido:"Hernandez olivera",
  gmail:"Hernandez@gmail.com",
  telefono:"45654656"

},
{
  nombre:"Sixto",
  apellido:"Tellez",
  gmail:"sixto@gmail.com",
  telefono:"3453453453"

},
{
  nombre:"Ares",
  apellido:"Matinez Silvs ",
  gmail:"Ares3r43@gmail.com",
  telefono:"456456456"

},
{
  nombre:"Hades",
  apellido:"Contreras",
  gmail:"Hades@gmail.com",
  telefono:"34534534"

}]

function App() {
  return (
    <div >
     <h1>Agenda</h1>
     <hr />

     <ul>
      {persona.map((persona)=>(
        <ListItem
        key={persona.gmail}
        persona={persona}
        />

      ))}
     </ul>
    </div>
  );
}

export default App;