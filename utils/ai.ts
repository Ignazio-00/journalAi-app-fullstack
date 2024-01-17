import { ChatOpenAI } from '@langchain/openai'
import z from "zod"
import { StructuredOutputParser } from "langchain/output_parsers";

const parser = StructuredOutputParser.fromZodSchema(
    z.object({
        mood: z.string().describe("the mood of the person who wrote the journal entry."),
        summary: z.string().describe("the subject of the journal entry."),
        negative: z.boolean().describe("is the journal entry negative? (i.e. does it contain negative emotions?)."),
        color: z.string().describe("a hexidecimal color code that represents the mood of the entry. Example #0101fe for blue representing happiness."),
    })
)

export const analyze = async (prompt) => {
    const chatModel = new ChatOpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" })
    const result = await chatModel.invoke(prompt)

    console.log(result)
}