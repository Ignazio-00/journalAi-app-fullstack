import { OpenAI } from "langchain/llms/openai"
import {StructuredOutputParser} from "langchain/output_parsers"
import z from "zod"

const parser = StructuredOutputParser.fromZodSchema(
    z.object({
        mood: z
            .string()
            .describe(
                "The mood of the person who wrote the journal entry."
            ),
        summary: z
            .string()
            .describe(
                "Quick summary of the journal entry."
            ),
        negative: z
            .boolean()
            .describe(
                "Whether the journal entry is negative.(i.e. does it contain negative emotions?)"
            ),
        color: z
            .string()
            .describe(
                "A hexadecimal color code that represents the mood of the entry.(i.e. #0101fe for blue representing happiness.)"
            ),
    })
)

export const analyze = async (prompt) => {
    const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" })
    const result = await model.invoke(prompt)
    console.log(result)
}