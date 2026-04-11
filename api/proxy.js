export default function handler(req, res) {
  const PRJ = "prj_S16ag2ja7SJMyA3zcArUHz7WLGJH";

  res.status(200).json({
    message: "API bismilah",
    project_id: PRJ
  });
}
