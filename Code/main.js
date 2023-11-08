
//   const advice = fetch('https://api.adviceslip.com/advice');

//   function updateAdvice() {
//   advice
//   .then(response => response.json())
//   .then(data => {
//     const adviceElement = document.querySelector('.advice-box-body h3');
//     adviceElement.innerText = `${data.slip.advice}`
//   })
//   .catch(error => console.error(error));
// }

//   document.getElementById('dice-img').addEventListener('click', updateAdvice);

function updateAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const adviceElement = document.querySelector('.advice-box-body h3');
        const adviceNumberElement = document.querySelector('.advice-box-body p');
        adviceElement.innerText = `"${data.slip.advice}"`;
        adviceNumberElement.innerText = `ADVICE #${data.slip.id}`;
      })
      .catch(error => console.error('Fetch error:', error));
  }
  
  document.getElementById('dice-img').addEventListener('click', updateAdvice);
  