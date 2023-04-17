import { IdCard } from "./components/IdCard/Index"
import { Greetings } from "./components/Grettings/Index";
import { RandomNumber } from "./components/RandomNumber/Index";

function App() {
  return (
  <>
      <IdCard
      firstName="John"
      lastName="Doe"
      gender="male"
      height={178}
      birth={new Date("1992-07-14")}
      img="https://randomuser.me/api/portraits/men/44.jpg"
/>

     <IdCard
      lastName='Delores'
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      img="https://randomuser.me/api/portraits/women/44.jpg"
/>


    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    <Greetings lang="de">Schmidt</Greetings>
    <Greetings lang="es">Lucia</Greetings>

    
    <RandomNumber min = {1} max={6}/>
    <RandomNumber min = {1} max={100}/>


</>
);
}

export default App
