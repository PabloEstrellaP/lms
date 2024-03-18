import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routerUser from '../routes/user.js'
import routerCourse from '../routes/course.js'
import routerChapter from '../routes/chapter.js'
import routerCourseProgress from '../routes/courseProgress.js'
import dbConection from '../database/config.js'
import morgan from 'morgan'
export class Server {
  constructor () {
    this.port = process.env.PORT
    this.app = express()

    this.paths = {
      users: '/api/users',
      courses: '/api/courses',
      chapters: '/api/chapters',
      courseProgresses: '/api/courseProgresses',
    }

    this.conectDB()

    this.middlewares()
    this.routes()
  }

  async conectDB () {
    try {
      await dbConection()
    } catch (error) {
      console.log(error)
    }
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static('public'))
    this.app.use(morgan('dev'))
  }

  routes () {
    this.app.use(this.paths.users, routerUser)
    this.app.use(this.paths.courses, routerCourse)
    this.app.use(this.paths.chapters, routerChapter)
    this.app.use(this.paths.courseProgresses, routerCourseProgress)
  }

  async getLocalIp () {
    return import('os')
      .then((os) => {
        const networkInterfaces = os.networkInterfaces()
        console.log(networkInterfaces)
        const ipv4 = networkInterfaces.Ethernet.find(network => network.family === 'IPv4')

        return ipv4.address
      }).catch(err => {
        console.log(err)
      })
  }

  listen () {
    console.clear()
    this.app.listen(this.port, () => {
      console.log(' -------------------------------------------------')
      console.log(`|  💻 Server runing on port ${this.port}.                 |`)
      console.log(`|  You can watch here: http://localhost:${this.port}/     |`)
      console.log(`|  ${this.paths.users}                                     |`)
      console.log(`|  ${this.paths.courses}                                   |`)
      console.log(`|  ${this.paths.chapters}                                  |`)
      console.log(`|  ${this.paths.courseProgresses}                          |`)
      console.log(' -------------------------------------------------')
    })

    // Run local server
    if (process.env.NODE_ENV === 'development') {
      this.getLocalIp()
        .then(ip => (
          this.app.listen(this.port, ip, () => {
            console.log('|                                                 |')
            console.log('|  📡 Server runing on local network.             |')
            console.log(`|  You can watch here: http://${ip}:${this.port}/  |`)
            console.log(' ------------------------------------------------- ')
          })
        ))
    }
  }
}