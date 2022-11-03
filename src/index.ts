import { Parser } from './Parser.js'

let keyword: string = "Community";

let currentParser = new Parser();
currentParser.fetch(keyword)