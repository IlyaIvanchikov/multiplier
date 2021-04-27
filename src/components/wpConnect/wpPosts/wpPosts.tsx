import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../loader/loader';
import classes from './wpPosts.module.scss';
import AuthForm from '../wpAuth/AuthForm'

const wpSiteUrl = 'https://sattvalife.ru';

const getWpPosts = (url: string) => {
  return new Promise<any[]>((resolve: any) => {
    axios
      .get(`${url}/wp-json/wp/v2/posts`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const Posts: React.FC = ({ posts }: any) => {
  console.log(posts);
  return (
    <div className={`mt-5 post-container`}>
      <div style={{ color: 'black' }}>
        <h1>
          Это посты с сайта{' '}
          <a target="_blank" href={wpSiteUrl}>
            {wpSiteUrl}
          </a>
        </h1>
      </div>
      <AuthForm /><br />
      {posts.map((post) => (
        <div
          key={post.id}
          className="card border-dark mb-3"
          style={{ width: '50rem', color: 'black' }}
        >
          <div className="card-header">{post.title.rendered}</div>
          <div className="card-body">{post.content.rendered}</div>
        </div>
      ))}
    </div>
  );
};

const WpPosts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!posts.length) {
      getWpPosts(wpSiteUrl).then((data) => {
        setPosts(data);
        setLoading(false);
      });
    }
  }, [posts]);

  return (
    <div className={classes.posts}>
      {isLoading && <Loader />}
      {!isLoading && posts.length && <Posts posts={posts} />}
      <br />
    </div>
  );
};

export default WpPosts;
