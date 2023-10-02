const _ = require("lodash");

queryBlogs = (queryToBeSearched, blogsData) => {
  // Filtering the blogs based on given query
  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(queryToBeSearched.toLowerCase())
  );
  
  // If no blogs available with given query
  if (filteredBlogs.length === 0)
    return "No blogs available with the given query";

  return filteredBlogs;
};

exports.searchBlogs = (req, res) => {
  const { query } = req.body;
  const blogsData = req.blogs;

  const cachedSearchBlogs = _.memoize(
    queryBlogs,
    (query, blogsData) => query + JSON.stringify(blogsData),
    {
      maxAge: 5 * 60 * 1000,
    }
  );

  // Calling the cached searchBlogs function
  const filteredBlogs = cachedSearchBlogs(query, blogsData);

  res.json(filteredBlogs);
};
