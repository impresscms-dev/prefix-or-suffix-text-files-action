import {FileProcessorInterface} from "./FileProcessorInterface"
import {EOL} from "os"

export default class Prefixer extends FileProcessorInterface {

  process(contents, newLines) {
    return `${newLines}${EOL}${contents}`
  }

}