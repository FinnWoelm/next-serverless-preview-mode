export default async function preview(req, res) {
  res.setPreviewData({});
  res.json({ success: true });
}
