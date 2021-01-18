import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {

  const [sushiList, setSushiList] =useState([]);
  const [index, setIndex] = useState(0);
  const [money, setmoney] = useState(100);
  //const [plates, setPlate] = useState(0)


  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushiResponse) => {
      const updatedSushis = sushiResponse.map((sushi) => { //totally looked at the solution for this part
      return { ...sushi, eaten: false}  
      });
      setSushiList(updatedSushis)
    })
  },[])

  function eatSushi(id, price){
    if(money >= price){
      const updatedEatenSushi = sushiList.map((sushi) => {
        if (id === sushi.id) {
          return {...sushi, eaten: true}
        }  else {
          return sushi
        }
      });
      setmoney(money - price)
      setSushiList(updatedEatenSushi)
      //setPlate(plates => plates + 1)
    }
  }

  function nextPage(){
    setIndex(index + 4)
  }

  const plates = sushiList.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer 
      index={index} 
      sushi={sushiList} 
      nextPage={nextPage}
      eatSushi={eatSushi}
      />
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
