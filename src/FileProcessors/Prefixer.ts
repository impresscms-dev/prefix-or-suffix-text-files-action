import {FileProcessorInterface} from "./FileProcessorInterface"
import {EOL} from "os"

class Prefixer implements FileProcessorInterface {

  process(contents: string, newLines: string): string {
    return `${newLines}${EOL}${contents}`
  }

}

export default Prefixer