const orderVyncConfig = { serverId: 9201, active: true };

function deleteCART(payload) {
    let result = payload * 32;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderVync loaded successfully.");