import IPFSconnector from "./Common/IPFS/IPFSConnector"
import Blocks from './BlockBook/BlockGetter'
import ipfsDefaultConfig from './Common/IPFS/ipfsDefaultConfig'
import os from 'os';
import logger from './Common/logger';
import HashtableIndex from "./Indexes/Hashtable";
import ReverseLookup from "./Indexes/ReverseLookup";
import BTreeIndex from "./Indexes/BTree";

async function runAsync() {
    IPFScreate();
    const blockIterator = new Blocks()
    const blocksHashtable = new BTreeIndex("blockByHash", blockIterator, "height")
    const ipnsRecord = await blocksHashtable.Create()
    logger.info(ipnsRecord)
    logger.info("finished");
    // (await IPFSconnector.getInstanceAsync()).shutDown()
}


async function IPFScreate() {
    let config = ipfsDefaultConfig
    config.repo = os.homedir() + '/.ipfsFeeder'
    config.config = {
        Addresses: {
            Swarm: [
                '/ip4/0.0.0.0/tcp/14030',
                '/ip4/127.0.0.1/tcp/14031/ws'
            ],
            API: '/ip4/127.0.0.1/tcp/5012',
            Gateway: '/ip4/127.0.0.1/tcp/9191'
        }
    }

    IPFSconnector.setConfig(config)
}

runAsync()
    .then(() => {
        console.log("done");
    })
    .catch((e) => {
        throw e;
    })



