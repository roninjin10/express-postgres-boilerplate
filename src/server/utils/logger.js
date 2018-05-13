import log from 'loglevel'


if (process.env.HEROKU) {
  log.setLevel('error')
} else {
  log.setLevel('info')
}

export default log
