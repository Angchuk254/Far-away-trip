
import { useState } from 'react';
import './index.css'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];


export default function App(){
  return(
    <div className='app'>
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>
  )
}

function Logo(){
 return  <h1>Far Away 🚗</h1>
}
function Form(){
const [description,setDescription]=useState("")
const[quantity,setQuantity]=useState(1)
function handleSubmit(e){
e.preventDefault();

if(!description) return ;

const newItems={description,quantity,packed:false,id:44};
console.log(newItems)
setDescription('');
setQuantity(1);
}





return <form className='add-form' onSubmit={handleSubmit}>
  <h3>What you need for trips 😍</h3>
<select onChange={(e)=>setQuantity(Number((e.target.value)))} value={quantity}>
 {Array.from({length:12},(_,i)=> i+1).map(num=><option value={num} key={num}>{num}</option>)}
</select>
<input placeholder='Items..' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
<button>Add ➕</button>
</form>
}
function PackingList(){
return <div className='list'>
  <ul >
{initialItems.map((item)=><Item item={item} key={item.id}></Item>)}
</ul>
</div>
}


function Item({ item }) {
  
  const [packed, setPacked] = useState(item.packed);

  
  const toggleStatus = () => {
    setPacked(!packed);
  };
  

  return (
    <li>
      <span style={packed ? { textDecoration: "line-through", color:'green' } : {}}>
        {item.description}
      </span>
      <span onClick={toggleStatus} style={{cursor:'pointer'}}>❌</span>
    </li>
  );
}
function Stats(){
return <footer className='stats'>
  <em>
  you have x items on your list and you already packed x%

  </em>
</footer>
}