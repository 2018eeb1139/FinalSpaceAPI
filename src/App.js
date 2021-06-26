import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import axios from 'axios';

const App=() =>{
  const [items, setItems] = useState([])
  const [isLoading,setIsLoading ] = useState(true)

  useEffect(()=>{
    const fetchItems=async()=>{
      const result=await axios(`https://finalspaceapi.com/api/v0/character/`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[])
  return (
    <div className="App">
    <Header/>
    <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
