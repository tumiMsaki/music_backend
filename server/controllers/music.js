import * as userModel from '../../init/util/mysql'
import uuid from 'node-uuid'
const searchMusic = async ctx  => {
  ctx.body = {
    code: 200,
    msg: 'searchMusic'
  }
}

const musicCollection = async ctx => {
  ctx.body = {
    code: 200,
    msg: 'collectionList'
  }
}

const addFavorites = async ctx => {
  ctx.body = {
    code: 200,
    msg: 'addMusci'
  }
}

const addMusic = async ctx => {
  let { name, author, url } = ctx.request.body
  await userModel.addMusic([uuid.v4(), name, author, url])
    .then(result => {
      ctx.body = {
        code: 200,
        msg: '添加成功'
      }
    }).catch(err => {
      ctx.body = {
        code: 500,
        msg: '服务器炸了'
      }
    })
}

export {
  searchMusic,
  musicCollection,
  addFavorites,
  addMusic
}