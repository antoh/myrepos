import React, { Component } from "react";

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>There are no repos to display</p>;
  return (
    <ul>
      <h2 className="list-key">Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className="list">
            <span className="repo-text">{repo.name} </span>
            <span className="repo-description">{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
