import { SORT_BY_NUMBER, SORT_BY_WEIGHT } from './types';

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
