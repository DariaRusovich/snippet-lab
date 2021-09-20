import { getSnippets } from "../api/api";
import { useState, useEffect } from "react";
import Snippet from "./Snippet";
import "./SnippetList.css";
import SearchField from "./SearchField";

export default function SnippetList({}) {
  const [snippets, setSnippets] = useState([]);
  useEffect(() => {
    (async function () {
      const [snippetsData, snippetsDataError] = await getSnippets();
      if (!snippetsDataError) {
        setSnippets(snippetsData);
      }
    })();
  }, []);
  return (
    <>
      <SearchField></SearchField>
      <div className="snippets">
        {snippets.length > 0 && snippets.map((snippet) => <Snippet snippet={snippet} key={snippet.id}></Snippet>)}
      </div>
    </>
  );
}
