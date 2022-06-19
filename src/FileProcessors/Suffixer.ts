import {FileProcessorInterface} from "./FileProcessorInterface"
import {EOL} from "os"

class Suffixer implements FileProcessorInterface {

  process(contents: string, newLines: string): string {
    const lines1 = contents
      .split(/\n/g)
      .map(line => line.trimRight())

    const lines2 = newLines
      .split(/\n/g)
      .map(line => line.trimRight())

    return lines1
      .concat(lines2)
      .join(EOL)
  }

}

export default Suffixer