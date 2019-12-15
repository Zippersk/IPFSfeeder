import IPFSconnector from "./Common/IPFS/IPFSConnector"
import BlockBookApi from './BlockBook/blockbookApi'
import ipfsDefaultConfig from './Common/IPFS/ipfsDefaultConfig'
import os from 'os';
import DAG from './Common/IPFS/DAG';
import logger from './Common/logger';

async function runAsync() {
    let config = ipfsDefaultConfig
    config.repo = os.homedir() + '/.ipfsFeeder'
    config.config = {
        Addresses: {
            Swarm: [
                '/ip4/0.0.0.0/tcp/14012',
                '/ip4/127.0.0.1/tcp/14013/ws'
            ],
            API: '/ip4/127.0.0.1/tcp/5012',
            Gateway: '/ip4/127.0.0.1/tcp/9191'
        }
    }

    IPFSconnector.setConfig(config)
    var ipfsInstance = await IPFSconnector.getInstanceAsync()
    const index = {}
    try {
        var blocks = BlockBookApi.GetBlocks()
        for (const block of blocks) {
                const blockCid = await DAG.PutAsync(block);
                index[block.hash] = blockCid.toString();
                index[block.height] = blockCid.toString();
                for (const [i, tx] of block["txs"].entries()) {
                    index[tx.txid] = blockCid + "/txs/" + i;
                }
        }
        await DAG.PutAsync(index);
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



