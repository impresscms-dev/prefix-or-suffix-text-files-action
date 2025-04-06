import {FileProcessorInterface} from "./FileProcessorInterface"
import {EOL} from "os"

export default class Suffixer extends FileProcessorInterface {

  process(contents, newLines) {
    return `${contents}${EOL}${newLines}`
  }

}