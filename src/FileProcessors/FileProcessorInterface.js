import NotImplementedError from '../Errors/NotImplementedError'

export class FileProcessorInterface {

  /**
   * @param {string} contents
   * @param {string} newLines
   *
   * @return {string}
   */
  /* eslint-disable no-unused-vars */
  process(contents, newLines) {
    throw new NotImplementedError()
  }
  /* eslint-enable no-unused-vars */

}