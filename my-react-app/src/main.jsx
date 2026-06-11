import { createRoot } from 'react-dom/client'
class Car{
  constructor(name){
    this.brand = name;
  }
}
function GetCar(){
  const mycar = new Car("bilbo");
  return <h1>{mycar.brand}</h1>;
}
const element = (
  <table>
    <tr>
      <th> Name</th>
    </tr>
    <tr>
      <td>
        <GetCar/>
      </td>
    </tr>
    <tr>
      <td> mi</td>
    </tr>
    <tr>
      <td> rahh</td>
    </tr>
  </table>
);

createRoot(document.getElementById('gojo')).render(
  element
);
