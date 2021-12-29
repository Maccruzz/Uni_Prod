import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Reminder: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
       {isIncome ? 'Rs100 ' : 'Rs50 '}  
      in {isIncome ? 'Savings ' : 'House '}
      for every {isIncome ? 'Friday ' : 'Monday '}
    </div>
  );
};

export default InfoCard