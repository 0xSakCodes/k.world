// javascriptings :)
/// 2026 -> 0xSakCodes :)

/* pet kitty function */
function petKitty(card, type) {
  const img = card.querySelector('img');

  // wiggle effect
  img.style.transform = 'scale(1.1) rotate(10deg)';
  setTimeout(() => img.style.transform="", 300);
  if(type === 'normal'){
    spawnReaction(card, "🦋");
  } 
  else if(type === 'shy'){
    spawnPopup(card, "😶‍🌫️ Aishhh, You Found Me? 🐾");
    card.style.transition = 'transform 0.5s, opacity 0.5s';
    card.style.transform = 'scale(0)';
    card.style.opacity = '0';
    setTimeout(() => card.remove(), 500);
    alert("Oops! Kitty Ran Away :)");
  }
  else if(type === 'furious'){
    spawnPopup(card, '😾💢 Dont Mess With Me!');
    spawnReaction(card, '💢😾');
    spawnScratches(card);

    // shake screen
    let i = 0;
    const interval = setInterval(() => {
      const offset = (i % 2 === 0 ? -10 : 10);
      card.style.transform = `translateX(${offset}px)`;
      i++;
      if (i>5){
        clearInterval(interval);
        card.style.transform="";
      }
    }, 50);
  };
};

// popup function
function spawnPopup(card, message) {
  const rect = card.getBoundingClientRect();
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.textContent = message;
  document.body.appendChild(popup);

  popup.style.left = `${rect.left + rect.width/2}px`;
  popup.style.top = `${rect.top - 40 + window.scrollY}px`;

  setTimeout(() => {
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(-10px)';
  }, 35);

  setTimeout(() => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(-50%) translateY(-20px)';
    setTimeout(() => popup.remove(), 500);
  }, 1500);
}

// floating emojis
function spawnReaction(card, emoji) {
  const reaction = document.createElement('div');
  reaction.className = 'reaction';
  reaction.textContent = emoji;
  const x = Math.random() * 50-25;
  const y = -20;
  reaction.style.left = `calc(50%+ ${x}px)`;
  reaction.style.top = `${y}px`;
  card.appendChild(reaction);
  setTimeout(() => reaction.remove(), 1500);
}

// furious kitty, scratches;
function spawnScratches(card) {
  const rect = card.getBoundingClientRect();
  for(let i=0; i<3; i++) {
    const scratch = document.createElement('div');
    scratch.className = 'scratch';
    scratch.textContent = '💢';
    scratch.style.left = `${rect.left + Math.random() * rect.width}px`;
    scratch.style.top = `${rect.top + Math.random() * rect.height}px`;
    scratch.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
    document.body.appendChild(scratch);
    setTimeout(() => scratch.remove(), 1200);
  }
}
