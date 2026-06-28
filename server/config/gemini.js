const Gemini_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash:generateContent"

export const generateGeminiResponse = async ({
    prompt,
    apikey,
    user
}) => {
    try {
        if (!apikey) {
            throw new Error("Gemini API key missing")
        }

        const response = await fetch(`${Gemini_URL}?key=${apikey}`, {
            method: "POST",
            headers: {
                "content-Type":
                    "application/json",
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
        })

        if(!response.ok) {
            //Invalid API Key
            if(
                response.status === 400 ||
                response.status === 401
            ){
                user.geminiStatus = 
                "Invalid";

                await user.save();
            }

            //Quota Exxceeded
            if(
                response.status === 429
            ){
                user.geminiStatus =
                "quota_exceeded";

                await user.save();
            }

            const err = await response.text();

            throw new Error(err);
        }

        user.geminiStatus =
        "active";

        await user.save();

        const data = response.json()

        const text = data.candidates?.[0]
        ?.content?.parts?.[0]
        ?.text;

        if(!text) {
            throw new Error(
                "No text returned from Gemini"
            );
        }

        return text.trime();
    } catch (error) {

        console.error(
            "Gemini Fetch Error:",
            error.message
        );

        throw new Error(
            "Gemmini API fetch Failed"
        )
        
    }
}