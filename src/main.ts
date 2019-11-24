import { IPFSconnector } from "./Common/IPFS"
import { BlockBookApi } from './BlockBook/blockbookApi'

async function runAsync() {
    var ipfsInstance = await IPFSconnector.getInstanceAsync()
    try {
        var txs = BlockBookApi.GetTransactions()
        for (const tx of txs) {
            console.log((await ipfsInstance.dagPutAsync(tx)).toString())
        }
    } catch (error) {
        ipfsInstance.shutDown()
        throw error
    }
}

runAsync()
    .then(() => {
        console.log("done");
    })
    .catch((e) => {
        throw e;
    })

