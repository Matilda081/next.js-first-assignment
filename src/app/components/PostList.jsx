export default function PostList() {
  const posts = [
    {
      Title : "Hyperglycemia",
      Desc : "When your blood sugar drops too low, you may feel shaky, dizzy, or weak. Quick sugar fixes like juice or candy can     help !!!",
      Creator: "Chisom",
      Date: "17/3/26",
    }
  ];

  return (
    <div>
      <h1>Posts</h1>
      {
        posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <p>Creator: {post.creator}</p>
            <p>Date: {post.date}</p>
          </div>
        )
      )
      }
    </div>
  );
}