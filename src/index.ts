import readDirSync from 'recursive-readdir-sync'
import {readFileSync, writeFileSync} from 'fs'
import {getBooleanInput, getInput, notice} from '@actions/core'
import Suffixer from './FileProcessors/Suffixer'
import Prefixer from './FileProcessors/Prefixer'
import {FileProcessorInterface} from './FileProcessors/FileProcessorInterface'

const FileProcessor: FileProcessorInterface = getBooleanInput('suffix')
  ? new Suffixer()
  : new Prefixer()
const filesPath: string = getInput('path', {required: true})
const text: string = getInput('text', {required: true})

for (const file of readDirSync(filesPath)) {
  notice(`  ${file.toString()}`)
  const content = readFileSync(file.toString(), 'utf8')
  const newContent = FileProcessor.process(content, text)
  writeFileSync(file.toString(), newContent)
}
