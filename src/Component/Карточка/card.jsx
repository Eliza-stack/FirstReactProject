import myImage from '../../../src/assets/food.jpg'; 
const Card = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '200px',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        height: '400px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',

    }}>
    <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '12px'

    }}>
        <img src={myImage} alt="Pizza" style={{
        objectFit: 'cover',
        borderRadius: '12px',
        width: '100%',
        height: '100%',

        }} /> 
    </div>
      
      <div>
        <h2>Пицца</h2>
            <p style={{
                fontSize: '14px',
                overflow: 'hidden', 
                display: '-webkit-box',
                WebkitLineClamp: 3, 
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                }}>
         Итальянская угощение, которое сочетает в себе нежное тесто, томатный соус, расплавленный сыр и щедрую порцию черных оливок. Каждый кусочек наполняет вкусами Средиземноморья: оливки добавляют насыщенности и легкой горечи, идеально контрастируя с сладостью помидоров и сливочным вкусом сыра.
         </p>
      </div>       
      
    </div>
  );
};

export default Card;
