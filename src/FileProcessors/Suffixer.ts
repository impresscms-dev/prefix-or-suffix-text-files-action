import {FileProcessorInterface} from "./FileProcessorInterface"
import {EOL} from "os"

class Suffixer implements FileProcessorInterface {

  process(contents: string, newLines: string): string {
    return `${contents}${EOL}${newLines}`
  }

}

export default Suffixer