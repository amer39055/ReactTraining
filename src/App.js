import React,{Component} from "react";
import './App.css'; 
import * as styles from './Styles'

class App extends Component {
 
  render(){
  const name='moe'
  return (
    <div style={styles.Styles} className="App" >
    React hold <br/>

    <button>{name}</button>
    </div>
  );
  }
}

const Appinstance = new App()
console.log(Appinstance.name)
export default App;
