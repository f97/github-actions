module.exports = {
  username: 'f97',
  gitAuthor: 'f97 <huynhduckhoan@gmail.com>',
  endpoint: 'https://git.f97.xyz/api/v1/',
  platform: 'gitea',
  labels: ["dependencies"],
  repositories: [
    'f97/f97.xyz',
    'f97/fire',
    'f97/docln',
    'f97/pictshare',
    'f97/wp',
    'f97/wp-phoenix',
    'f97/unicorn',
  ],
  packageRules: [
    {
      automerge: true,
      timezone: "Asia/Ho_Chi_Minh",
      automergeType: "squash",
      dependencyDashboardApproval: false,
      minimumReleaseAge: null,
      optimizeForDisabled: true,
      persistRepoData: true,
    },
  ],
};
