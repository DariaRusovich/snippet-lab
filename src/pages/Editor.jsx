import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSnippet, createSnippet, updateSnippet } from '../api/api';
import PageHeader from '../components/PageHeader';
import { useHistory } from 'react-router';
import '../pages/Editor.css';
import { useTags } from '../hooks/useTags';
import serializeTags from '../utils/serializeTags';

export default function Editor() {
  const [tagsData, dispatchTags] = useTags();
  console.log(tagsData);
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lang, setLang] = useState('');
  const [tags, setTags] = useState('');
  const [prevTags, setPrevTags] = useState('');
  const [code, setCode] = useState('');
  const [documentation, setDocumentation] = useState('');

  useEffect(() => {
    (async function () {
      if (id) {
        const [editingSnippet, editingSnippetError] = await getSnippet(id);
        if (!editingSnippetError) {
          console.log('editingSnippet', editingSnippet);
          setTitle(editingSnippet.title);
          setDescription(editingSnippet.description);
          setLang(editingSnippet.lang);
          setTags(editingSnippet.tags.join());
          setPrevTags(editingSnippet.tags.join());
          setCode(editingSnippet.code);
          setDocumentation(editingSnippet.documentation);
        } else {
          alert('Error getting snippet by id');
          history.replace('/404');
        }
      } else {
        setTitle('');
        setDescription('');
        setLang('');
        setTags('');
        setCode('');
        setDocumentation('');
      }
    })();
  }, [id]);
  useEffect(() => {
    console.log('tags', tags);
  }, [tags]);

  //   useEffect(() => {
  //     const tagsArray = tags.split(',');
  //     tagsArray[0] = lang;
  //     const newTags = tagsArray.join();
  //     console.log(tags,newTags);
  //     setTags(newTags);
  //   }, [lang]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      const updatedSnippetData = {
        code,
        description,
        lang,
        tags: serializeTags(tags),
        title,
        documentation,
        updatedAt: Date.now(),
      };
      const [updatedSnippet, updatedSnippetError] = await updateSnippet(
        id,
        updatedSnippetData
      );
      if (!updatedSnippetError) {
        if (prevTags !== updatedSnippet.tags) {
          const prevTagsArray = serializeTags(prevTags);
          const tagsArray = updatedSnippet.tags;
          console.log(prevTagsArray, tagsArray);
          let overallTags = [
            ...prevTagsArray
              .map((prevTag) => {
                if (!tagsArray.includes(prevTag)) {
                  let count = -1;
                  return { name: prevTag, count };
                }
                return false;
              })
              .filter(Boolean),
            ...tagsArray
              .map((tag) => {
                if (!prevTagsArray.includes(tag)) {
                  let count = 1;
                  return { name: tag, count };
                }
                return false;
              })
              .filter(Boolean),
          ];
          console.log(overallTags);
          overallTags.forEach((overallTag) => {
            const existedTag = tagsData.tags.find(
              (tag) => tag.name === overallTag.name
            );
            if (overallTag.count === -1) {
              if (existedTag) {
                dispatchTags({
                  type: 'PRE_DECREMENT_UPDATE_TAG',
                  payload: existedTag.id,
                });
              }
            } else {
              if (existedTag) {
                dispatchTags({
                  type: 'PRE_INCREMENT_UPDATE_TAG',
                  payload: existedTag.id,
                });
              } else {
                dispatchTags({
                  type: 'PRE_CREATE_TAG',
                  payload: overallTag.name,
                });
              }
            }
          });
        } else {
          console.log('tags equals');
        }
        alert('Snippet updated!');
      } else {
        alert('Error updating snippet by server');
      }
    } else {
      const newSnippet = {
        code,
        description,
        lang,
        tags: serializeTags(tags),
        title,
        documentation,
        createdAt: Date.now(),
        updatedAt: null,
        copied: 0,
        pinned: false,
      };
      const [createdSnippet, createdSnippetError] = await createSnippet(
        newSnippet
      );
      if (!createdSnippetError) {
        const snippetTags = createdSnippet.tags;
        snippetTags.forEach((snippetTag) => {
          const existedTag = tagsData.tags.find(
            (tag) => tag.name === snippetTag
          );
          if (existedTag) {
            dispatchTags({
              type: 'PRE_INCREMENT_UPDATE_TAG',
              payload: existedTag.id,
            });
          } else {
            dispatchTags({ type: 'PRE_CREATE_TAG', payload: snippetTag });
          }
        });
        alert('Snippet created!');
      } else {
        alert('Error creating snippet by server');
      }
    }
    setTitle('');
    setDescription('');
    setLang('');
    setTags('');
    setCode('');
    setDocumentation('');
  }
  return (
    <>
      <PageHeader title="Create snippet" />
      <form onSubmit={handleSubmit} className="form b-radius">
        <fieldset className="form-fieldset">
          <legend>Snippet details</legend>
          <label>
            <span>Title</span>
            <input
              className="b-radius"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <span>Short description</span>
            <input
            className="b-radius"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <span>Language</span>
            <select
            className="b-radius"
              required
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option>HTML</option>
              <option>JS</option>
              <option>CSS</option>
            </select>
          </label>
          <label>
            <span>
              Tags (
              {tagsData.tags.map((tag) => (
                <span key={tag.id}>
                  {tag.name}({tag.count})
                </span>
              ))}
              )
            </span>
            <input
            className="b-radius"
              type="text"
              required
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <small>
              Tag should be separated with a comma. Language tag will be added
              automatically
            </small>
          </label>
        </fieldset>
        <fieldset className="form-fieldset form-fieldset-text">
          <legend className="line">Snippet code</legend>
          <textarea
          className="b-radius"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
        </fieldset>
        <fieldset className="form-fieldset form-fieldset-text">
          <legend className="line">Snippet documentation</legend>
          <textarea
          className="b-radius"
            value={documentation}
            onChange={(e) => setDocumentation(e.target.value)}
          ></textarea>
        </fieldset>
        <div className="form-btn-group">
          <button onClick={() => history.push('/')} className="btn btn-cancel b-radius">
            Cancel
          </button>
          <button type="submit" className="btn btn-create b-radius">
            {id ? 'Edit' : 'Create'}{' '}
          </button>
        </div>
      </form>
    </>
  );
}

// const snippet = {
//   "id": 1,
//   "code": "",
//   "description": "",
//   "lang": "",
//   "tags": ["id", "id", "id"],
//   "title": "",
//   "documentation": "",
//   "createdAt": "time",
//   "updatedAt": "time",
//   "copied": 0,
//   "pinned": false,
// };
