const Axios = require("axios");

exports.getBlogs = (req, res, next) => {
  try {
    const url = "https://intent-kit-16.hasura.app/api/rest/blogs";
    Axios.get(url, {
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    }).then((response) => {
      req.blogs = response.data.blogs;
      next();
    });
  } catch (err) {
    console.log(err);
  }
};
