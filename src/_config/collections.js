/** All blog posts as a collection. */
export const getAllPosts = collection => {
  return collection.getFilteredByGlob('./src/posts/**/*.md').reverse();
};

/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = collection => {
  return collection.getFilteredByGlob('./src/**/*.{md,njk}');
};

/** All tags from all posts as a collection - excluding custom collections */
export const tagList = collection => {
  const tagsSet = new Set();
  collection.getAll().forEach(item => {
    if (!item.data.tags) return;
    item.data.tags.filter(tag => !['posts', 'docs', 'all'].includes(tag)).forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

/** * Documents section
 * 1. Sorts by 'order' frontmatter key.
 * 2. If 'order' is missing or identical, sorts alphabetically by title.
 */
export const orderedDocs = collection => {
  return collection.getFilteredByTag('docs').sort((a, b) => {
    // 1. Check for 'order' (default to 999 to push unordered to the bottom)
    const orderA = a.data.order !== undefined ? a.data.order : 999;
    const orderB = b.data.order !== undefined ? b.data.order : 999;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    // 2. Tie-breaker: Alphabetical by title
    const titleA = (a.data.title || '').toLowerCase();
    const titleB = (b.data.title || '').toLowerCase();

    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
};

export default {
  orderedDocs,
  getAllPosts,
  showInSitemap,
  tagList,
};
