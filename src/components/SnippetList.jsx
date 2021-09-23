import { getSnippets } from "../api/api";
import { useState, useEffect } from "react";
import Snippet from "./Snippet";
import "./SnippetList.css"; 



export default function SnippetList({}) {

  const [snippets, setSnippets] = useState([]);
  
  
  useEffect(() => {
    setSnippets(snippets);
  }, [snippets]);
  // useEffect(() => {
  //   filterSnippets();
  // }, [filter, snippets]);
  useEffect(() => {
    (async function () {
      const [snippetsData, snippetsDataError] = await getSnippets();
      if (!snippetsDataError) {
        setSnippets(snippetsData);
      }
    })();
  }, []);

  function filterSnippets(e) {
    e.preventDefault();
    const query = e.target.text.value
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => !!word);
    console.log(query);
    const searchFields = ['title', 'category']
    const filteredMessage = searchSnippets(query, searchFields, snippets);
    console.log(filteredMessage);
  }
  
  function searchSnippets(query, fields, snippets){
    const filteredSnippets = snippets.filter((snippet) => {
      return query.every((word) => {
        return fields.some((field) => {
          return snippet[field]?.trim()?.toLowerCase()?.includes(word);
        })
      })
    })
    return filteredSnippets
  }

  return (
    <>
     <form className="search-form" onSubmit={filterSnippets}>
      <input type="text" name="text" required />
      <button className="btn btn-style btn-search"> Search snippet</button>
    </form>

      <div className="snippets">
        {snippets.length > 0 &&
          snippets.map((snippet) => (
            <Snippet snippet={snippet} key={snippet.id}></Snippet>
          ))}
      </div>
    </>
  );
}
