import IndexBase from "./IndexBase";
import DAG from "../Common/IPFS/DAG";
import { CID } from "typestub-ipfs";
import BTree from "./B+tree/b+tree";
import { BNode, BNodeInternal } from "./B+tree/b+tree";

export default class BTreeIndex extends IndexBase {
    public btree: BTree<string, any>;

    constructor(name: string, iterator: any, key: string | number) {
        super(name, iterator, key);
        this.btree = new BTree()
    }

    public async Create(): Promise<Boolean> {
        for (const object of this.iterator) {
            const cid: CID = await DAG.PutAsync(object)
            this.btree.set(object[this.key], cid)
        }

        const indexRoot: CID = await this.SaveTree(this.btree._root)

        return await this.Publish(indexRoot);
    }

    private async SaveTree(subtree: BNode<string, any>) {
        if (!subtree.isLeaf) {
            const children = (subtree as BNodeInternal<string, any>).children;
            const values = []
            const tasks: Promise<CID>[] = []
            for (const child of children) {
                tasks.push(this.SaveTree(child));
            }
            await Promise.all(tasks).then((results) => {
                for (const cid of results) {
                    values.push(cid);
                }
            })

            const result = {}
            for (let idx = 0; idx < subtree.keys.length; idx++) {
                result[subtree.keys[idx]] = values[idx]
            }
            return await DAG.PutAsync(result);
        } else {
            const result = {}
            for (let idx = 0; idx < subtree.keys.length; idx++) {
                result[subtree.keys[idx]] = subtree.values[idx]
            }
            return await DAG.PutAsync(result);
        }
    }
}
