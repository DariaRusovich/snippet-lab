import { useContext, useEffect, useReducer, createContext } from 'react';
import { getTags, updateTag, createTag } from '../api/api';

const initialState = {
  tags: [],
  lastTagAction: {
    type: null,
    payload: null,
  },
};
const TagsContext = createContext(initialState);

export function useTags() {
  return useContext(TagsContext);
}
export function TagsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async function () {
      const [tags, tagsErr] = await getTags();
      if (!tagsErr) {
        console.log(tags);
        dispatch({ type: 'SET_TAGS', payload: tags });
      } else {
        alert('Error getting tags from server');
      }
    })();
  }, []);
  useEffect(() => {
    (async function () {
      if (state.lastTagAction.type === 'update') {
        const [updatedTag, updatedTagErr] = await updateTag(
          state.lastTagAction.payload.id,
          state.lastTagAction.payload
        );
        if (!updatedTagErr) {
          dispatch({ type: 'UPDATE_TAG', payload: updatedTag });
        } else {
          alert('Error updating tag by server');
        }
      }
      if (state.lastTagAction.type === 'create') {
        const [createdTag, createdTagErr] = await createTag(state.lastTagAction.payload);
        if (!createdTagErr) {
          dispatch({ type: 'CREATE_TAG', payload: createdTag });
        } else {
          alert('Error creating tag by server');
        }
      }
    })();
  }, [state.lastTagAction]);
  return <TagsContext.Provider value={[state, dispatch]}>{children}</TagsContext.Provider>;
}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_TAGS': {
      return { ...state, tags: payload };
    }
    case 'PRE_INCREMENT_UPDATE_TAG': {
      const copiedState = JSON.parse(JSON.stringify(state.tags));
      const tagIdx = copiedState.findIndex((tag) => tag.id === payload);
      if (tagIdx !== -1) {
        const updatedTag = copiedState[tagIdx];
        updatedTag.count++;
        return { ...state, lastTagAction: { type: 'update', payload: updatedTag } };
      }
      return state;
    }
    case 'PRE_DECREMENT_UPDATE_TAG': {
      const copiedState = JSON.parse(JSON.stringify(state.tags));
      const tagIdx = copiedState.findIndex((tag) => tag.id === payload);
      if (tagIdx !== -1) {
        const updatedTag = copiedState[tagIdx];
        updatedTag.count--;
        return { ...state, lastTagAction: { type: 'update', payload: updatedTag } };
      }
      return state;
    }
    case 'PRE_CREATE_TAG': {
      const newTag = {
        count: 1,
        name: payload,
      };
      return { ...state, lastTagAction: { type: 'create', payload: newTag } };
    }
    case 'UPDATE_TAG': {
      const copiedState = JSON.parse(JSON.stringify(state.tags));
      const tagIdx = copiedState.findIndex((tag) => tag.id === payload.id);
      if (tagIdx !== -1) {
        const updatedTag = payload;
        copiedState.splice(tagIdx, 1, updatedTag);
        return { ...state, tags: copiedState };
      }
      return state;
    }
    case 'CREATE_TAG': {
      return { ...state, tags: [...state.tags, payload] };
    }
    default:
      throw new Error(`Unknown type =>>>> ${type}`);
  }
}
