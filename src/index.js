import readDirSync from 'recursive-readdir-sync'
import {readFileSync, writeFileSync} from 'fs'
import {getBooleanInput, getInput} from '@actions/core'
import Suffixer from './FileProcessors/Suffixer'
import Prefixer from './FileProcessors/Prefixer'

/**
 * @var {FileProcessorInterface} FileProcessor
 */
const FileProcessor = getBooleanInput('suffix')
  ? new Suffixer()
  : new Prefixer()

/**
 * @var {string} filesPath
 */
const filesPath = getInput('path', {required: true})

/**
 * @var {string} text
 */
const text = getInput('text', {required: true})

for (const file of readDirSync(filesPath)) {
  const content = readFileSync(file.toString(), 'utf8')
  const newContent = FileProcessor.process(content, text)
  writeFileSync(file.toString(), newContent)
}
