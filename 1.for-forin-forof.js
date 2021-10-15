// for forIn e forOf
const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoa("a");
    const names = [];
    console.time("for time:");
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.timeEnd("for time:");
    console.time("forIn time:");
    for (let i in result.results) {
      const pessoa = result.results[i];

      names.push(pessoa.name);
    }
    console.timeEnd("forIn time:");
    
    console.time('forof')
    for(pessoa of result.results){
      names.push(pessoa.name)
    }
    console.timeEnd('forof')
    console.log(names);
  } catch (error) {
    console.log(error);
  }
}

main();
