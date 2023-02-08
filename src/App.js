import './App.css';

function App() {
  const name ='엘리';
  const list = ['우유','딸기','바나나','요거트']
  
  return (
    <>
     <h1 className='orange'> {`hello! ${name}`} 하이 {name} </h1>
    <h2>Hello!</h2>
    <p>{name}</p>
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
    <img 
    style={{width:'200px',height:'200px'}}
    src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg" alt="강아지" />
    
    
    </>

   
  );
}

export default App;
