const LOGIN_COOKIE_NAME = 'sessionId'

export function isAuthenticated () {
  return _getCookie(LOGIN_COOKIE_NAME)
}

export function authenticateSuccess (token) {
  _setCookie(LOGIN_COOKIE_NAME, token)
}

export function logout () {
  _setCookie(LOGIN_COOKIE_NAME, '', 0)
}

function _getCookie (name) {
  let start, end
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}

function _setCookie (name, value, expire) {
  let date = new Date()
  date.setDate(date.getDate() + expire)
  document.cookie = name + '=' + escape(value) + '; path=/' +
    (expire ? ';expires=' + date.toGMTString() : '')
}

export　function _getType(rawdata) {
    if(rawdata ){
        let type = {
          'virtual':0,
          'physical':0,
          'comingmore':0
        }
        // console.log(rawdata)
        type.all = rawdata.length
        rawdata.map((item,key) => {
          if(item.type === 'virtual'){
              type.virtual  += 1 
          }
          if(item.type === 'physical'){
              type.physical +=1
          }

          return type
        })
        return type
    }
}
export　function _getStatus(rawdata) {
    if(rawdata ){
        let status = {
          idle:0,
          building:0,
        }
        rawdata.map((item,key) => {
          if(item.status === 'idle'){
              status.idle  += 1 
          }
          if(item.status === 'building'){
             status.building +=1
          }
          return status

        })
        return status
    }
}


export function _sortInputValue(value){
    if(!value){
      return
    }
    return value.split(',')
}