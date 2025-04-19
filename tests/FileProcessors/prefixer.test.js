import Prefixer from "../../src/FileProcessors/Prefixer"
import {LoremIpsum} from "lorem-ipsum"
import {EOL} from "os"

const fakeTextGenerator = new LoremIpsum()

test("Prefixer", () => {
    const instance = new Prefixer()

    const oldText = fakeTextGenerator.generateParagraphs(10)
    const prefix = fakeTextGenerator.generateSentences(1)
    const newText = instance.process(oldText, prefix)

    expect(newText)
        .toMatch(prefix + EOL + oldText)
})