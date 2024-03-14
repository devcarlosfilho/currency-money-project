
//SESSÃO CONVERSOR
    const convertButton = document.querySelector(".convert-button")//DECLARANDO VARIAVEL E IDENTIFICANDO ELA NO HTML
    const currencySelect = document.querySelector(".currency-select-convert")//DECLARANDO VARIAVEL E IDENTIFICANDO ELA NO HTML
    const currentCurrencySelect = document.querySelector(".current-currency-select")//DECLARANDO VARIAVEL E IDENTIFICANDO ELA NO HTML


//SESSÃO RESULTADO
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //valor input //DECLARANDO VARIAVEL E IDENTIFICANDO ELA NO HTML
    const currencyValueConvert = document.querySelector(".currency-value-convert")//valor a converter .class//DECLARANDO VARIAVEL E IDENTIFICANDO ELA NO HTML
    const currentCurrencyValue = document.getElementById("current-currency-value")//valor a converter id //DECLARANDO VARIAVEL E IDENTIFICANDO ELA NO HTML
    const currencyValueResult = document.querySelector(".currency-value-result")//valor convertido .class //DECLARANDO VARIAL E IDENTIFICANDO ELA NO HTML

    console.log(currentCurrencySelect.value)
    console.log(currencySelect.value)

    let dolarToday = 4.98 //DECLARANDO UMA VARIAVEL
    let euroToday = 5.44 //DECLARANDO UMA VARIAVEL
    let libraToday = 6.38 //DECLARANDO UMA VARIAVEL
    let bitcoinToday = 0.0000027 //DECLARANDO UMA VARIAVEL
    let realToday = 1 //DECLARANDO UMA VARIAVEL


//SELECT Converter de
//REAL PARA OUTRAS MOEDAS //REAL PARA OUTRAS MOEDAS //REAL PARA OUTRAS MOEDAS
    if (currentCurrencySelect.value == "real") {
        currentCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    else if (currentCurrencySelect.value == "dolar") {
        currentCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    else if (currentCurrencySelect.value == "euro") {
        currentCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    else if (currentCurrencySelect.value == "libra") {
        currentCurrencyValue.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    else if (currentCurrencySelect.value == "bitcoin") {
        currentCurrencyValue.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }


//DÓLAR PARA OUTRAS MOEDAS //DÓLAR PARA OUTRAS MOEDAS //DÓLAR PARA OUTRAS MOEDAS //DÓLAR PARA OUTRAS MOEDAS
    if (currentCurrencySelect.value == "dolar" && currencySelect.value == "dolar") {
        dolarToday = 1
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    else if (currentCurrencySelect.value == "dolar" && currencySelect.value == "real") {
        realToday = 0.20
        currencyValueResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    else if (currentCurrencySelect.value == "dolar" && currencySelect.value == "euro") {
        euroToday = 1.09
        currencyValueResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    else if (currentCurrencySelect.value == "dolar" && currencySelect.value == "libra") {
        libraToday = 1.28
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    else if (currentCurrencySelect.value == "dolar" && currencySelect.value == "bitcoin") {
        bitcoinToday = 0.0000138
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToday)
    }


//EURO PARA OUTRAS MOEDAS //EURO PARA OUTRAS MOEDAS //EURO PARA OUTRAS MOEDAS //EURO PARA OUTRAS MOEDAS
    if (currentCurrencySelect.value == "euro" && currencySelect.value == "euro") {
        euroToday = 1
        currencyValueResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    else if (currentCurrencySelect.value == "euro" && currencySelect.value == "dolar") {
        dolarToday = 0.91
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    else if (currentCurrencySelect.value == "euro" && currencySelect.value == "real") {
        realToday = 0.18
        currencyValueResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    else if (currentCurrencySelect.value == "euro" && currencySelect.value == "libra") {
        libraToday = 1.17
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    else if (currentCurrencySelect.value == "euro" && currencySelect.value == "bitcoin") {
        bitcoinToday = 0.000015
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToday)
    }


//LIBRA PARA OUTRAS MOEDAS //LIBRA PARA OUTRAS MOEDAS //LIBRA PARA OUTRAS MOEDAS //LIBRA PARA OUTRAS MOEDAS
    if (currentCurrencySelect.value == "libra" && currencySelect.value == "libra") {
        libraToday = 1
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    else if (currentCurrencySelect.value == "libra" && currencySelect.value == "dolar") {
        dolarToday = 0.78
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    else if (currentCurrencySelect.value == "libra" && currencySelect.value == "real") {
        realToday = 0.16
        currencyValueResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    else if (currentCurrencySelect.value == "libra" && currencySelect.value == "euro") {
        euroToday = 0.86
        currencyValueResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / libraToday)
    }

    else if (currentCurrencySelect.value == "libra" && currencySelect.value == "bitcoin") {
        bitcoinToday = 0.000017
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToday)
    }


//BITCOIN PARA OUTRAS MOEDAS //BITCOIN PARA OUTRAS MOEDAS //BITCOIN PARA OUTRAS MOEDAS //BITCOIN PARA OUTRAS MOEDAS
    if (currentCurrencySelect.value == "bitcoin" && currencySelect.value == "bitcoin") {
        bitcoinToday = 1
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
    }

    else if (currentCurrencySelect.value == "bitcoin" && currencySelect.value == "dolar") {
        dolarToday = 0.000014
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    else if (currentCurrencySelect.value == "bitcoin" && currencySelect.value == "real") {
        realToday = 0.0000028
        currencyValueResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    else if (currentCurrencySelect.value == "bitcoin" && currencySelect.value == "euro") {
        euroToday = 0.000015
        currencyValueResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    else if (currentCurrencySelect.value == "bitcoin" && currencySelect.value == "libra") {
        libraToday = 0.000018
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / libraToday)
    }


//SELECT Converter para
    if (currencySelect.value == "dolar") {
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueResult.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 4
        }).format(inputCurrencyValue * bitcoinToday)
    }

    if (currencySelect.value == "real") {
        currencyValueResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
}


//SESSÃO RESULTADO
function changeCurrency() {//FUNÇÃO PARA MUDAR MOEDA E BANDEIRA
    const currentCurrency = document.getElementById("current-currency") //DECLARANDO VARIAVEL id E IDENTIFICANDO ELA NO HTML
    const currentFlag = document.querySelector(".currency-flag") //DECLARANDO VARIAVEL .class E IDENTIFICANDO ELA NO HTML
    const currencyResult = document.getElementById("currency-result") //DECLARANDO VARIAVEL id E IDENTIFICANDO ELA NO HTML
    const currencyFlag = document.querySelector(".result-flag") //DECLARANDO VARIAVEL .class E IDENTIFICANDO ELA NO HTML


//SELECT Converter de
    if (currentCurrencySelect.value == "dolar") {
        currentCurrency.innerHTML = "Dólar"
        currentFlag.src = "./assets/dolar.png"
    }

    if (currentCurrencySelect.value == "euro") {
        currentCurrency.innerHTML = "Euro"
        currentFlag.src = "./assets/euro.png"
    }

    if (currentCurrencySelect.value == "libra") {
        currentCurrency.innerHTML = "Libra"
        currentFlag.src = "./assets/libra.png"
    }

    if (currentCurrencySelect.value == "bitcoin") {
        currentCurrency.innerHTML = "Bitcoin"
        currentFlag.src = "./assets/bitcoin.png"
    }

    if (currentCurrencySelect.value == "real") {
        currentCurrency.innerHTML = "Real"
        currentFlag.src = "./assets/real.png"
    }

//SELECT Converter para
    if (currencySelect.value == "dolar") {//Se currencySelect for igual a "dolar"
        currencyResult.innerHTML = "Dólar"//currenResult recebe "Dólar"
        currencyFlag.src = "./assets/dolar.png"//currencyFlag recebe imagem dolar.png
    }

    if (currencySelect.value == "euro") {
        currencyResult.innerHTML = "Euro"
        currencyFlag.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyResult.innerHTML = "Libra"
        currencyFlag.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyResult.innerHTML = "Bitcoin"
        currencyFlag.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyResult.innerHTML = "Real"
        currencyFlag.src = "./assets/real.png"
    }

    convertValues()
}


currentCurrencySelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


//FUNÇÃO PARA DATA
function updateDate() {
    const dateElement = document.getElementById("today"); //Declarando uma variável, e identificando ela por "id" no HTML
    const today = new Date(); //Declarando uma variável e criando um objeto de Data
    const day = today.getDate().toString().padStart(2, "0"); //Declarando uma variável para chamar o dia e determinando os caracteres para string
    const month = (today.getMonth() + 1).toString().padStart(2, "0");//Declarando uma variável para chamar o mês e determinando os caracteres para string
    const year = today.getFullYear().toString().padStart(4, "0");//Declarando uma variável para chamar o ano e determinando os caracteres para string
    const dateString = `${day}/${month}/${year}`;//Declarando uma variável e determinando o formato
    dateElement.textContent = dateString;
  }
  
  setInterval(updateDate, 60000); // Atualiza a cada segundo
  updateDate(); // Chama a função para exibir a data atual imediatamente


//FUNÇÃO PARA RELÓGIO
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
  }
  
  setInterval(updateTime, 1000); // Atualiza a cada segundo
  updateTime(); // Chama a função para exibir o tempo atual imediatamente


  //FUNÇÃO PARA APARECER O CONVERSOR
    let conversor = document.querySelector(".conversor")
    let logo = document.querySelector(".logo1")
    let main = document.querySelector(".main")

  
  function AparecerConversor(){
      conversor.style.marginTop = "0"
      logo.style.width = "170px"
      logo.style.marginTop = "15px"
      main.style.height = "900px"

  }
  