async function fetchCoins() {
    let url = "https://api.coinranking.com/v2/coins?limit=50";

    let options = {
        headers: {
        'x-access-token': 'coinrankingd3c899e3f5aba1b05fe8c43fcab6757fdbe144b7c1c67c26'
    }};
    
    let response = await fetch(url, options);
    let data = await response.json();
    
    let select = document.getElementById("coinSelect");
    select.innerHTML = "";
    
    data.data.coins.forEach(coin => {
        let option = document.createElement("option");
        option.value = coin.uuid;
        option.textContent = `${coin.name} (${coin.symbol})`;
        select.appendChild(option);
    });
}

async function fetchCoinDetails() {
    let select = document.getElementById("coinSelect");
    let coinId = select.value;
    let url = `https://api.coinranking.com/v2/coin/${coinId}`;
    
    let response = await fetch(url, {
        headers: {
            'x-access-token': 'coinrankingd3c899e3f5aba1b05fe8c43fcab6757fdbe144b7c1c67c26'
        }
    });
    let data = await response.json();
    let coin = data.data.coin;
    
    document.getElementById("output").innerHTML = 
        `<h3>${coin.name} (${coin.symbol})</h3>
        <p>Price: $${parseFloat(coin.price).toFixed(2)}</p>
        <img src='${coin.iconUrl}' width='100'>`;
}
fetchCoins();

