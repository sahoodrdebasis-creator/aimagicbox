const API_KEY = "AQ.Ab8RN6KAvNcne3DCL-a896t5EpgwfubiB642pdUvgwj_4zmkDw";


const askButton = document.getElementById("askBtn")
const result = document.getElementById("result")
const promptinput = document.getElementById("prompt")
askButton.addEventListener("click", async function () {
    const prompt = promptinput.value;
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
        {
            method: "post",
            headers: {
                "content-Type": "application/json",
                "x-goog-api-key":API_KEY
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        }
    );
    const data = await response.json();
    console.log(data.candidates[0].content.parts[0].text)
    result.innerText = data.candidates[0].content.parts[0].text;
    
})