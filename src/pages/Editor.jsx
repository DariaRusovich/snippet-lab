import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSnippet, createSnippet, updateSnippet } from '../api/api';
import PageHeader from '../components/PageHeader';
import { useHistory } from 'react-router';
export default function Editor() {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lang, setLang] = useState('');
  const [tags, setTags] = useState('');
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
          setCode(editingSnippet.code);
          setDocumentation(editingSnippet.documentation);
        } else {
          alert('Error getting snippet by id');
          history.replace('/404');
        }
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
        tags: tags.split(','),
        title,
        documentation,
        updatedAt: Date.now(),
      };
      const [updatedSnippet, updatedSnippetError] = await updateSnippet(id, updatedSnippetData);
      if (!updatedSnippetError) {
        alert('Snippet updated!');
      } else {
        alert('Error updating snippet by server');
      }
    } else {
      const newSnippet = {
        code,
        description,
        lang,
        tags: tags.split(','),
        title,
        documentation,
        createdAt: Date.now(),
        updatedAt: null,
        copied: 0,
        pinned: false,
      };
      const [createdSnippet, createdSnippetError] = await createSnippet(newSnippet);
      if (!createdSnippetError) {
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
      <PageHeader />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Snippet details</legend>
          <label>
            <span>Title</span>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            <span>Short description</span>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            <span>Language</span>
            <select required value={lang} onChange={(e) => setLang(e.target.value)}>
              <option>HTML</option>
              <option>JS</option>
              <option>CSS</option>
            </select>
          </label>
          <label>
            <span>Tags</span>
            <input type="text" required value={tags} onChange={(e) => setTags(e.target.value)} />
            <small></small>
          </label>
        </fieldset>
        <fieldset>
          <legend>Snippet code</legend>
          <textarea required value={code} onChange={(e) => setCode(e.target.value)}></textarea>
        </fieldset>
        <fieldset>
          <legend>Snippet documentation</legend>
          <textarea value={documentation} onChange={(e) => setDocumentation(e.target.value)}></textarea>
        </fieldset>
        <button onClick={() => history.push('/')}>Cancel</button>
        <button type="submit">{id ? 'Edit' : 'Create'}</button>
      </form>
    </>
  );
}

// const snippet = {
//   "id: 1,
//   "code: '',
//   "description: '',
//   "lang: '',
//   "tags: ['id', 'id', 'id'],
//   "title: '',
//   "documentation: '',
//   "createdAt: 'time',
//   "updatedAt: 'time',
//   "copied: 0,
//   "pinned: false,
// };
