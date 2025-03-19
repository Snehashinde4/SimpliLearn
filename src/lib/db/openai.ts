import {Configuration,OpenAIApi} from 'openai-edge';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai=  new OpenAIApi(configuration);

export async function generateImagePrompt(name:string) {
    try {
        const response=await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content:
                     `You are a creative and helpful AI Assistant capable of generating thumbnail description for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled.`
                },
                {
                    role: 'user',
                    content: `Generate a thumbnail for a note titled ${name}`
                }
            ],
        });

        const data=await response.json()
        const imageDescription=data.choices[0].message.content;
        return imageDescription as string;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function generateImage() {
    
} 

