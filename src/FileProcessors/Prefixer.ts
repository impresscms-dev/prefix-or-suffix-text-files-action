import {FileProcessorInterface} from "./FileProcessorInterface"
import {EOL} from "os"

class Prefixer implements FileProcessorInterface {

  process(contents: string, newLines: string): string {
    return newLines
        .concat(contents)
        .split(/\n/g)
        .map(line => line.trimRight())
        .join(EOL)
  }

}

export default Prefixer