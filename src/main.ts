import { IPFSconnector } from "./IPFS/IPFS"
import { BlockBookApi } from './BlockBook/blockbookApi'

async function runAsync() {
    var ipfsInstance = await IPFSconnector.getInstanceAsync()
    try {
        var txs = BlockBookApi.GetTransactions()
        for (const tx of txs) {
            console.log(await ipfsInstance.dagPutAsync(tx))
        }
    } catch (error) {
        throw error
    }
    finally {
        ipfsInstance.shutDown()
    }

}

runAsync()
    .then(() => {
        console.log("done");
    })
    .catch((e) => {
        throw e;
    })

