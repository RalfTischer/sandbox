// API: 


src =  "https://unpkg.com/@openai/chatgpt@0.6.0/dist/chatgpt.min.js";

const chatgpt = new ChatGPT();
// const chatgpt = chatGPT(this);
let message, response;

chatgpt.setApiKey("MY_API");

/*
chatgpt.sendMessage("Hello, how are you?", function(error, response) ) {
    if (error) {
        console.error(error);
    } else {
        console.log(response.text)
    }

}
*/

response = chatgpt.sendmessage(message);
console.log(response);

