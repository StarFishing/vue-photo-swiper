// 首先判断当前dom是否已经包含了要添加的类
export function hasClass(el: HTMLElement, className: string) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
// 动态添加class
export function addClass(el: HTMLElement, className: string) {
  if (hasClass(el, className)) {
    return
  }
  // 将原有的class按空格拆分，并将类名保存到newclass数组中
  let newClass = el.className.split(' ')
  // 将要添加的类也push到这个数组
  newClass.push(className)
  // 将数组拼接成字符串返回给dom
  el.className = newClass.join(' ')
}

export function setElTop(el: HTMLElement, top: number) {
  el.style.top = top + 'px'
}
export function setElRight(el: HTMLElement, right: number) {
  el.style.right = right + 'px'
}
export function setElBottom(el: HTMLElement, bottom: number) {
  el.style.bottom = bottom + 'px'
}
export function setElLeft(el: HTMLElement, left: number) {
  el.style.left = left + 'px'
}

export function setElWidth(el: HTMLElement, width: number) {
  el.style.width = width + 'px'
}
export function setElHeight(el: HTMLElement, height: number) {
  el.style.height = height + 'px'
}
