const _ = require("lodash");

exports.getBlogStats = (req, res) => {
  const blogsData = req.blogs;

  const totalBlogs = blogsData.length;

  const blogWithLongestTitle = _.maxBy(blogsData, "title.length");

  const blogsWithPrivacyInTitle = _.filter(blogsData, (blog) =>
    _.includes(blog.title.toLowerCase(), "privacy")
  );

  const uniqueBlogTitles = _.uniqBy(blogsData, "title").map(
    (blog) => blog.title
  );

  const analyticsResult = {
    uniqueBlogTitles,
    totalBlogs,
    blogWithLongestTitle: blogWithLongestTitle["title"],
    numberOfBlogsWithPrivacy: blogsWithPrivacyInTitle.length,
  };

  return res.json(analyticsResult);
};
