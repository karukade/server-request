const errmsg = {
  url: "URLに使えない文字が含まれているようです",
  id: "IDに使えない文字が含まれています",
  pass: "パスワードに使えない文字が含まれています",
  email: "メールアドレスに誤りがあるようです"
}

function url(val) {
  const flg = !/^[a-zA-Z0-9-]{1,61}$/.test(val)
  return {flg, msg: flg ? errmsg.url : null}
}

function idPassWord(val, type) {
  const flg = !/^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/.test(val)
  return {flg, msg: flg ? errmsg[type.replace(/^(?:[^_]+)_(.+)/, "$1")] : null}
}

function email(val) {
  const flg = !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
  return {flg, msg: flg ? errmsg.email : null}
}

function isEmpty(val, label) {
  const flg = !val || val === ""
  return {flg, msg: flg ? `${label}は必須項目です` : null }
}

export default function validate(type, value, label) {
  switch(type) {

  case "requester":
  case "requesterDepartment":
  case "jobname":
  case "name":
    return isEmpty(value, label)

  case "url": {
    const empty = isEmpty(value, label)
    return empty.flg ? empty : url(value)
  }

  case "requesterMail":
  case "email": {
    const empty = isEmpty(value, label)
    return empty.flg ?  empty : email(value)
  }

  case "ftp_id":
  case "ftp_pass":
  case "basic_id":
  case "basic_pass": {
    const empty = isEmpty(value, label)
    return empty.flg ?  empty : idPassWord(value, type)
  }

  default:
    return {flg: false, msg: null}
  }
}

