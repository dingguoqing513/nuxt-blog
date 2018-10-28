export function formatDate(timestamp, format) {
    if (timestamp === null) return '未知'
    if (!timestamp) return ''
    let reg = /Y|M|D|h|m|s/g
    let date = new Date(timestamp)

    format = 'Y-M-D h:m:s'
    return format.replace(reg, (match) => {
        switch (match) {
        case 'Y':
            return date.getFullYear()
        case 'M':
            return fillIn(date.getMonth() + 1, 2)
        case 'D':
            return fillIn(date.getDate(), 2)
        case 'h':
            return fillIn(date.getHours(), 2)
        case 'm':
            return fillIn(date.getMinutes(), 2)
        case 's':
            return fillIn(date.getSeconds(), 2)
        }
    })
}

export function fillIn(num, digit) {
    let n = String(num)
    let preDigit = []
    for (let i = n.length; i < digit; i++) {
        preDigit.push(0)
    }
    return preDigit.join('') + num
}