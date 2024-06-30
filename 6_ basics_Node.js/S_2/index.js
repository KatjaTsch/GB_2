// Необходимо найти, установить и применить библиотеку, которая позволит
// избежать проблем со сложением и умножением чисел с плавающей запятой

function calculeteResultSum(purchases, discount) {
      let total = purchases.reduce((acc, purchase) => (acc += purchase), 0);
    
      total = total * discount;
      return total;
    }
    
    const total = calculeteResultSum([12.1, 32.2, 43.1], 0.9);
    
    console.log("Общая стоимость покупок: " + total + "рублей");