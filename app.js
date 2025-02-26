document.getElementById('imageForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const prompt = document.getElementById('prompt').value;

    const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR-API-KEY`
        },
        body: JSON.stringify({
            model: 'dall-e-3',
            prompt: prompt,
            quality: 'standard',
            n: 1,
            size: '1024x1024'   // 장당 50원 정도?
        })
    });

    const data = await response.json();
    const imageUrl = data.data[0].url;

    const generatedImage = document.getElementById('generatedImage');
    generatedImage.src = imageUrl;
    generatedImage.style.display = 'block';
});