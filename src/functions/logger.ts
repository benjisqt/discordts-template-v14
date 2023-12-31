import chalk from "chalk";

export default async function log(message: string, error: boolean) {
    if(error === false) {
        return console.log(`${chalk.bold(chalk.cyan(`DJS`))}${chalk.bold(chalk.blue(`TS`))} >> ${message}`)
    } else {
        return console.log(`${chalk.bold(chalk.red(`DJSTS`))} >> ${message}`)
    }
}