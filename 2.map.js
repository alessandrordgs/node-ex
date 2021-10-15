const service = require("./service");

async function main() {
  try {
    const data = await service.obterPessoa("a");
    // const names = [];
    // data.results.forEach((item) => {
    //   names.push(item.name);
    // });

    const names = data.results.map((item, index)=>{
      return `[${index}]${item.name}`
    })
    console.log(names)
  } catch (error) {
    console.log(error);
  }
}

main();
