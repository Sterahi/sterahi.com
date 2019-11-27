import React from 'react';
import './Article.scss';

function Article() {
  return (
    <div className="Article">
      <header className="Article-header">
        <p>
          Edit <code>src/Article.js</code> and save to reload.
        </p>
        <a
          className="Article-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Article;
