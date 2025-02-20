import Card from './Component/Карточка/card.jsx'; 

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      
      <Card /> 
    </div>
  );
};

export default App;
