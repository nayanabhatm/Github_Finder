export const fetchUsersData = async () => {
  const usersData = await fetch(`https://api.github.com/users`, {
    headers: {
      Authorization: `token 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`,
    },
  }).catch((e) => console.log(e));
  const data = await usersData.json();
  return data;
};

export const fetchUser = async (login) => {
  const response = await fetch(`https://api.github.com/users/${login}`, {
    headers: {
      Authorization: `token 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`,
    },
  }).catch((e) => console.log(e));

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    return data;
  }
};

export const getUserRepos = async (login) => {
  const response = await fetch(
    `https://api.github.com/users/${login}/repos?sort=created`,
    {
      headers: {
        Authorization: `token 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`,
      },
    }
  ).catch((e) => console.log(e));

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    return data;
  }
};

export const searchUsers = async (user) => {
  const usersData = await fetch(
    `https://api.github.com/search/users?q=${user}`,
    {
      headers: {
        Authorization: `token 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`,
      },
    }
  ).catch((e) => console.log(e));

  const { items } = await usersData.json();
  return items;
};
