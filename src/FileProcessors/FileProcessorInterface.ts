export interface FileProcessorInterface {
  
  process(contents: string, newLines: string): string;

}