import { ChatOpenAI } from '@langchain/openai'

export const analyze = async (prompt) => {
    const chatModel = new ChatOpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" })
    const result = await chatModel.invoke(prompt)
    
    console.log(result)
}