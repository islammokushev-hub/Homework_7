const student = { name: "Ivan", age: 21, skills: ["js", "css"] };

const {name, age, skills: [one, too]} = student

console.log(`name: ${name}, age: ${age}`)
console.log(`skills: ${one}, ${too}.`)

// const {name, age, skills} = student
// const [one, too] = skills
// console.log(one, too)

const person = ({name, age}) => {
    return `name: ${name}, age: ${age}`
    // console.log(`name: ${name}, age: ${age}`)
}
console.log(person(student))
/////////////////////////////////////////////////////////////////////////////////////////////

const numbers = [2, 5, 3, 8, 9, 9]

const sumAndMultiply = ([first, ...numbers]) => {
    const summ = numbers.reduce((total, number) => {
        return total + number
    }, 0);

    return first * summ
}

console.log(sumAndMultiply(numbers))

////////////////////////////////////////////////////////////////////////////////////////////////

const arrayFirst = [4, 5, 6]
const arraySecond = [1, 2]
const arrayThird = [9, 10]
const arrayFourth = [3]
const arrayFiveth = [7, 8]

const result = [
    ...arraySecond,
    ...arrayFourth,
    ...arrayFirst,
    ...arrayFiveth,
    ...arrayThird
]

console.log(result)