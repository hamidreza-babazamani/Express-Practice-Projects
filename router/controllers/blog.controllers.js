class BlogController {
  getBlogs(req, res, next) {
    res.send("blog");
  }
  createNewBlog(req, res, next) {
    res.send("created new blog");
  }
  deleteBlog(req, res, next) {
    res.send(`delete blog by id#${req.params.id}`);
  }
  updateBlog(req, res, next) {
    res.send(`updated blog by id#${req.params.id}`);
  }
}
module.exports = BlogController;
