import { languages, times } from "./constants";

interface Query {
  language?: string;
  time?: string;
}

export default function getQueryData(query: Query = {}) {
  const { language: langQuery, time: timeQuery } = query;

  const language = langQuery ? langQuery : languages["Top Overall"];
  const time = timeQuery ? timeQuery : times["Past Week"];

  return { language, time };
}
