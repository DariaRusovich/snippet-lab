import Snippet from "./Snippet"
import "./SnippetList.css"

export default function SnippetList({}) {
    return(
        <div className="snippets">
        <Snippet></Snippet>
        <Snippet></Snippet>
        <Snippet></Snippet>
        <Snippet></Snippet>
        <Snippet></Snippet>
        </div>
    )
}