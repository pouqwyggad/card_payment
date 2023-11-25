export const changeCVV = (value: string, changeChar: string, length: number) => {
    const result = value.split('');

    while (result.length !== length) {
        result.push('*')
    }

    return result.join('')
}
