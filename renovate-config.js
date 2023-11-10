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
  ],
  packageRules: [
    {
      automerge: true,
      timezone: "Asia/Ho_Chi_Minh",
      automergeType: "squash",
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
