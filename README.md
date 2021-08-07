# `react-repo-card`

<div align="center">

[![npm version](http://img.shields.io/npm/v/react-repo-card.svg?style=flat)](https://npmjs.org/package/react-repo-card)
[![downloads](http://img.shields.io/npm/dt/react-repo-card.svg?style=flat)](https://npmjs.org/package/react-repo-card)
[![license](https://img.shields.io/npm/l/react-repo-card.svg?style=flat)](https://github.com/dawsonbooth/react-repo-card/blob/master/LICENSE)

</div>

# Description

This Node.js package is a React component for the GitHub repository card

# Installation

With [Node.js](https://nodejs.org/en/download/) installed, simply run the following command to add the package to your React project.

```bash
npm install react-repo-card
```

# Usage

Check out the examples below or [check out the storybook](https://dawsonbooth.github.io/react-repo-card/).

The package comes with a main RepoCard component and a few hooks that make it work. Here's an example of how it works:

```js
import React from "react";
import RepoCard from "react-repo-card";

const App = () => {
  return (
    <div style={{ width: "405px" }}>
      <RepoCard username="tarptaeya" repository="repo-card" />
    </div>
  );
};
```

# License

This software is released under the terms of the [MIT license](LICENSE).

# Acknowledgments

- This package is based on Tarptaeya's [repo-card](https://github.com/Tarptaeya/repo-card)
