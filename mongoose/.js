const { title, text } = req.body;
const result = await BlogModel.create({
  title,
  text,
});
res.send(result);
