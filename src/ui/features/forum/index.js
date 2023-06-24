import React, { useState, useEffect } from 'react';

const ForumScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch forum posts
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    // Simulated data
    const dummyPosts = [
      { id: 1, title: 'First Post', content: 'This is the first post.' },
      { id: 2, title: 'Second Post', content: 'This is the second post.' },
      { id: 3, title: 'Third Post', content: 'This is the third post.' },
    ];

    setPosts(dummyPosts);
  };

  return (
    <div>
      <h2>Forum</h2>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ForumScreen;
