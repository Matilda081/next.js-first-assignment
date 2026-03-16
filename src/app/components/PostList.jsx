"use client";

import React from "react";

const posts = [
{
title: "Hyperglycemia",
desc: "When your blood sugar drops too low, you may feel shaky, dizzy, or weak. Quick sugar fixes like juice or candy can help !!!",
creator: "Chisom",
date: "17/03/26",
},
];

const PostList = () => {
return (
<div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
{posts.map((post, index) => (
  <div
key={index}
style={{
border: "1px solid #ccc",
padding: "15px",
marginBottom: "15px",
borderRadius: "8px",
backgroundColor: "#f9f9f9",
}}
>
<h2 style={{ marginBottom: "10px", color: "#333" }}>{post.title}</h2>
<p style={{ marginBottom: "8px", color: "#555" }}>{post.desc}</p>
<small style={{ color: "#777" }}>
Created by {post.creator} on {post.date}
</small>
</div>
))}
</div>
);
};
export default PostList;