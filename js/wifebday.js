 
  const envelope = document.getElementById('envelope');
    envelope.addEventListener('click', () => {
      envelope.classList.toggle('opened');
    });
   
    function toggleEnvelope() {
      
      envelope.classList.remove('opened')
      alert("Happy Happy Birthday My Wife! I love you so much!");
      setTimeout(() => {
        envelope.classList.add('opened');
      }, 100);
    }
    

  
    