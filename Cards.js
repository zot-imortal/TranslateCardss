function addFlashcard() {
  const englishWord = document.getElementById('englishWord').value;
  const translation = document.getElementById('translation').value;

  if (englishWord && translation) {
      const flashcard = document.createElement('div');
      flashcard.className = 'card';
      flashcard.innerHTML = `
          <div class="word">${englishWord}</div>
          <div class="translation">${translation}</div>
      `;

      document.getElementById('flashcards').appendChild(flashcard);

      // Clear inputs
      document.getElementById('englishWord').value = '';
      document.getElementById('translation').value = '';
  } else {
      alert('Please fill in both fields');
  }
}
///==============Version with image generation 
// async function translateWord(word) {
//     const apiKey = 'YOUR_GOOGLE_CLOUD_API_KEY'; // Замените на ваш API-ключ
//     const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             q: word,
//             source: 'en',
//             target: 'ru',
//             format: 'text'
//         })
//     });

//     const data = await response.json();
//     return data.data.translations[0].translatedText;
// }

// async function generateImage(prompt) {
//     const apiKey = 'YOUR_OPENAI_API_KEY'; // Замените на ваш API-ключ OpenAI
//     const url = 'https://api.openai.com/v1/images/generations';

//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             prompt: prompt,
//             n: 1,
//             size: '256x256'
//         })
//     });

//     const data = await response.json();
//     return data.data[0].url;
// }

// async function addFlashcard() {
//     const englishWord = document.getElementById('englishWord').value;
    
//     if (englishWord) {
//         const translation = await translateWord(englishWord);
//         const imageUrl = await generateImage(englishWord);

//         const flashcard = document.createElement('div');
//         flashcard.className = 'card';
//         flashcard.innerHTML = `
//             <img src="${imageUrl}" alt="${englishWord}">
//             <div class="word">${englishWord}</div>
//             <div class="translation">${translation}</div>
//         `;

//         document.getElementById('flashcards').appendChild(flashcard);

//         // Clear input
//         document.getElementById('englishWord').value = '';
//     } else {
//         alert('Please fill in the English word');
//     }
// }

