root = "git-managers/";

ARR_MODULE = [
  {
    title: "GitHub",
    accent: true,
    themes: [
      [root + "github/ssh", emoji.code + "Подключение по SSH"],
      [root + "github/github-cli", emoji.star + "GitHub CLI"],
      [root + "github/github-desktop", "GitHub Desktop"],
    ],
  },
  {
    title: "Bitbucket",
    accent: true,
    themes: [[root + "bitbucket/ssh", emoji.code + "Подключение по SSH"]],
  },
];
