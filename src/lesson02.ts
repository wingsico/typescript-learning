// 类
// 类上不存在原型 prototype 属性

class Character {
  fullname: string // 公有属性
  constructor(firstname: string, lastname: string) {
    this.fullname = firstname + lastname
  }
  greet(name?: string) {
    if (name) {
      return `Hi! ${name}! My name is ${this.fullname}.`
    } else {
      return `Hi! My name is ${this.fullname}.`
    }
  }
}

var Lihua = new Character('Li', 'hua')

console.log(Lihua.greet('hanmeimei'))

/**
 * 接口 interface
 * 可用接口约束对象
 */

interface LoggerInterface {
  log(arg: any): void
}
 
class Logger implements LoggerInterface {
  log(arg :any) {
    if (typeof console.log === "function") {
      console.log(arg)
    } else {
      alert(arg)
    }
  }
}

interface UserInterface {
  name: string,
  password: string
}

var user: UserInterface = {
  name: 'wingsico',
  password: 'zwj'
}

/**
 * 命名空间
 */

namespace Geometry {
  interface VertorInterface {
    /*  外部无法访问  */
  }
  export interface Verctor2dInterface { 
    x: number,
    y: number
  }
  export interface Verctor3dInterface { }
  export class Verctor2d implements Verctor2dInterface, VertorInterface { 
    x: number
    y: number
    constructor(x:number , y:number) {
      this.x = x
      this.y = y
    }
  }
  export class Verctor3d implements VertorInterface, Verctor3dInterface { }
}

var verctor2dInstance: Geometry.Verctor2dInterface = new Geometry.Verctor2d(18, 22)