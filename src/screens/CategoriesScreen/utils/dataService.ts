import { Category } from '../../../types';
import { fetchAllCategories } from '../../../api';

let lastPageFull = true; // To track if the last fetched page was full

export const fetchCategories = async (
  page = 1, // Default value if page is not provided
  limit = 10, // Default value if limit is not provided
): Promise<Category[]> => {
  if (!lastPageFull) {
    return []; // Return empty array if last page was not full
  }

  const fetchedCategories = await fetchAllCategories(page, limit);

  // Check if the fetched data is less than the limit
  if (fetchedCategories.length < limit) {
    lastPageFull = false;
  }

  return fetchedCategories;
};
