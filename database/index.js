const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher')
  .then(() => console.log('Mongo connected successfully.'))
  .catch(err => console.log(err));

let repoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  user_url: String,
  repo_url: String,
  username: String,
  reponame: String,
  forks: Number,
  watchers: Number,
  stargazers: Number,
  created_at: Date,
  updated_at: Date,
  pushed_at: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // This function should save a repo or repos to
  // the MongoDB
  repos.forEach(repo => {
    Repo.find({ id: repo.id }).exec((err, result) => {
      if (err) { console.log(err); }
      if (result.length === 0) {
        repo = new Repo({
          id: repo.id,
          user_url: repo.owner.html_url,
          repo_url: repo.html_url,
          username: repo.owner.login,
          reponame: repo.name,
          forks: repo.forks_count,
          watchers: repo.watchers_count,
          stargazers: repo.stargazers_count,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at
        });
        repo.save((err) => {
          console.log(err);
        });
      }
    });
  });
}

let getTop = (callback) => {
  Repo.find({}).sort({ 'stargazers': -1, 'watchers': -1, 'id': -1 }).limit(25).exec(function (err, docs) {
    if (err) { return callback(err); }
    Repo.count({}, function (err, count) {
      if (err) { return callback(err); }
      callback(null, { count, repos: docs });
    });
  });
};

module.exports.getTop = getTop;
module.exports.save = save;