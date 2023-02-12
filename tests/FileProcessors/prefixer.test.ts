import Prefixer from "../../src/FileProcessors/Prefixer"
import {LoremIpsum} from "lorem-ipsum"
import {EOL} from "os"

const fakeTextGenerator = new LoremIpsum()

test("Prefixer", () => {
    const instance = new Prefixer()

    const oldText: string = fakeTextGenerator.generateParagraphs(10)
    const prefix: string = fakeTextGenerator.generateSentences(1)
    const newText: string = instance.process(oldText, prefix)

    expect(newText)
        .toMatch(prefix + EOL + oldText)
});