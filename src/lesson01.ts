var t: number = 123

// 联合类型声明
var path: string[] | string
path = 'sdsd'
path = ['dasd', 'sda']

// 类型守护
var str: string = '123'
// str.splice()

// 类型别名

type PrimitiveArray = Array<string | number | boolean>
var arr: PrimitiveArray = [1, '2', true]

type Callback = () => void
var s: Callback = () => {
  console.log('hi~')
}

// 环境声明
interface CustomConsole {
  log(arg: string): void
}

declare var customConsole: CustomConsole

customConsole.log('hello~')

// 多选结构 switch

enum Alertlevel {
  info,
  warning,
  error
}

function getAlertSubscribers(level: Alertlevel) {
  var emails = new Array<string>()
  switch (level) {
    case Alertlevel.info:
      emails.push('cst@domain.com')
      break
    case Alertlevel.warning:
      emails.push('development@domain.com')
      break
    case Alertlevel.error:
      emails.push('management@domain.com')
      break
    default:
      throw new Error('Invalid argument!')
  }
  return emails
}

getAlertSubscribers(Alertlevel.info)

// 函数
function greet(name?: string): string {
  if (name) {
    return 'Hi' + name
  } else {
    return 'Hi'
  }
}

// 箭头函数

var hello = (name?: string): string => {
  if (name) {
    return 'hi' + name
  } else {
    return 'hi'
  }
}

// 匹配匿名函数
var great: (name: string) => string = function(name: string): string {
  if (name) {
    return 'hi' + name
  } else {
    return 'hi'
  }
}

// 无返回值的函数
var returnNull: () => void = function() {
  // do something but return null
}

// 回调函数
function sume(a: number, b: number, callback: (result: number) => void) {
  callback(a + b)
}
