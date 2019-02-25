import { SORT_BY_NUMBER, SORT_BY_WEIGHT, SHOW_MORE_NODES } from './types';

export const sortBy = method => {
  if (method === 'By Node Number') {
    return {
      type: SORT_BY_NUMBER
    };
  } else {
    return {
      type: SORT_BY_WEIGHT
    };
  }
};

export const showMoreNodes = num => {
  return {
    type: SHOW_MORE_NODES,
    payload: num
  };
};
