async function fetchAIResponse(input) {
    const response = await fetch('https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputs: input,
        }),
    });

    const result = await response.json();
    console.log(result);
    return result[0].generated_text;
}
// Function to create and append a new <p> element in the output div
function addParagraph(content) {
const newParagraph = document.createElement('p');
newParagraph.textContent = content;
document.querySelector('.output').appendChild(newParagraph);
document.querySelector('.output').scrollTop = document.querySelector('.output').scrollHeight;
}
const intake = document.querySelector(".scroll-hide svelte-1f354aw");
// Event listener for handling input when "Enter" is pressed
document.getElementById("text").addEventListener('keypress', async function(event) {
  if (event.key === 'Enter') {
      const inputText = document.getElementById("text").value.trim();  // Get and trim user input

      if (inputText !== "") {
          addParagraph(`You: ${inputText}`);  // Display user's input
          document.getElementById("text").value = '';  // Clear the input field

          // Fetch AI response and display it
          const aiResponse = await fetchAIResponse(inputText);  // Get AI response from Hugging Face
          // Display the correct AI response content
          addParagraph(`NPC: ${aiResponse}`);  // Display AI's response
      }
  }
});

