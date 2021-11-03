import '../pages/Snippets.css';
import { useTags } from '../hooks/useTags';

export default function Snippets() {
    function countTags(data) {
        return data.reduce((count, el) =>
         count + el
        , 0)}
  const [tagsData, dispatchTags] = useTags();
  console.log(tagsData.tags);
  return (
    <>
      <div className="snippet-filter-card b-radius">
        <div className="snippet-header-wrap">
          <h1 className="snippet-filter-card-title">All snippets</h1>
          <span>Total</span>
        </div>
        <h2 className="tags-list-title">Filter by tags</h2>
        <ul className="tags-list">
          {tagsData.tags.map((tag) => (
            <li key={tag.id}>{tag.name}<span>{tag.count}</span></li>
          ))}
        </ul>
        <button className="btn snippet-filter-btn">Clear filters</button>
      </div>
    </>
  );
}
