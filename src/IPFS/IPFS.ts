import IPFS from "typestub-ipfs";
const formatUtils = require('../IPLD/formats/util')

export class IPFSconnector {
    private static instance: IPFSconnector;
    private node: IPFS;
    private constructor() {
        // do something construct...
    }
    static async getInstanceAsync() {
        if (!IPFSconnector.instance) {
            IPFSconnector.instance = new IPFSconnector();
            const IPFSc = require('ipfs')

            IPFSconnector.instance.node = await IPFSc.create(ipfsConfig)
        }
        return IPFSconnector.instance;
    }

    public async dagPutAsync(data: any) {
        let test1 = formatUtils.hashToCid(data.hash)

        let test2 = await this.node.dag.put(data, {
            format: 297,
            hashAlg: 'sha2-256'
        })

        let test3 = await this.node.dag.get(test1)
        console.log("succes")
        return test
    }

    public shutDown() {
        try {
            this.node.stop()
            console.log('Node stopped!')
        } catch (error) {
            console.error('Node failed to stop!', error)
        }
    }
}


const ipfsConfig = {
    config: {
        Addresses: {
            Swarm: [
                "/ip4/0.0.0.0/tcp/14002",
                "/ip4/127.0.0.1/tcp/14003/ws",
                "/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star"
            ]
        }
    },
    ipld: {
        formats: [ require('../IPLD/formats'), require('ipld-dag-pb')]
    }
}