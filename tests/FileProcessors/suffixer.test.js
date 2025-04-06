import {LoremIpsum} from "lorem-ipsum"
import {EOL} from "os"
import Suffixer from "../../src/FileProcessors/Suffixer"

const fakeTextGenerator = new LoremIpsum()

test("Suffixer", () => {
    const instance = new Suffixer()

    const oldText = fakeTextGenerator.generateParagraphs(10)
    const suffix = fakeTextGenerator.generateSentences(1)
    const newText = instance.process(oldText, suffix)

    expect(newText)
        .toMatch(oldText + EOL + suffix)
});