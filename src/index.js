import readlineSync from 'readline-sync';

export const sayHiToUser = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}









