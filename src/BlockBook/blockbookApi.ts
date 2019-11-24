export abstract class BlockBookApi {
    public static GetTransactions() {
        return transactions
    }
}

const transactions = [
    {
        "txid": "128b93e2ba291ea9b7fb2343bc6e96fa55b26c2042b848c081049585aec32b1d",
        "hash": "128b93e2ba291ea9b7fb2343bc6e96fa55b26c2042b848c081049585aec32b1d",
        "version": 1,
        "size": 225,
        "vsize": 225,
        "weight": 900,
        "locktime": 0,
        "vin": [
            {
                "txid": "81b41bb41bd5c1a7b229747b9d1da504f984437d6041a4e9917235f41a5c1f99",
                "vout": 1,
                "scriptSig": {
                    "asm": "30440220788aca6ec5a57162de1ebd3983289a5d2694f62caca09045fb27774642181d86022036a1cf1ee8a2717b67faee98e93f6a1af8014bd2fee63b5c782f7b00f86f1c71[ALL] 029483da277618620f8ba91373e79a274d677362a3336cd79bfaae0ede1a5e0f8b",
                    "hex": "4730440220788aca6ec5a57162de1ebd3983289a5d2694f62caca09045fb27774642181d86022036a1cf1ee8a2717b67faee98e93f6a1af8014bd2fee63b5c782f7b00f86f1c710121029483da277618620f8ba91373e79a274d677362a3336cd79bfaae0ede1a5e0f8b"
                },
                "sequence": 4294967295
            }
        ],
        "vout": [
            {
                "value": 1.07674181,
                "n": 0,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 ffc59624b23d628332b2ed4c5881cdcb197d44b6 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a914ffc59624b23d628332b2ed4c5881cdcb197d44b688ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [
                        "1QKQ1U6vKFXXdqzrJgnsqmbeygeLQ4oaX3"
                    ]
                }
            },
            {
                "value": 35.09614386,
                "n": 1,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 0a5a186039c7fe296b82b1e706777773253707ce OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9140a5a186039c7fe296b82b1e706777773253707ce88ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [
                        "1wjgqwbNeZQphXNDxEK85VFMBrGxZPDQR"
                    ]
                }
            }
        ],
        "hex": "0100000001991f5c1af4357291e9a441607d4384f904a51d9d7b7429b2a7c1d51bb41bb481010000006a4730440220788aca6ec5a57162de1ebd3983289a5d2694f62caca09045fb27774642181d86022036a1cf1ee8a2717b67faee98e93f6a1af8014bd2fee63b5c782f7b00f86f1c710121029483da277618620f8ba91373e79a274d677362a3336cd79bfaae0ede1a5e0f8bffffffff0245fa6a06000000001976a914ffc59624b23d628332b2ed4c5881cdcb197d44b688ac327730d1000000001976a9140a5a186039c7fe296b82b1e706777773253707ce88ac00000000",
        "blockhash": "0000000000000000000d677968af1c6a46b7d05ddf8e565330da0332b52497fe",
        "confirmations": 1,
        "time": 1574589169,
        "blocktime": 1574589169
    },
    {
        "txid": "c093af9001e59004397e11e0bae422fde8b4a478dfdf3750f1f7faaf1a857885",
        "hash": "c093af9001e59004397e11e0bae422fde8b4a478dfdf3750f1f7faaf1a857885",
        "version": 2,
        "size": 371,
        "vsize": 371,
        "weight": 1484,
        "locktime": 605207,
        "vin": [
            {
                "txid": "270b3fe863cac8f5482ab8870b7be29ce47d48f78ee289ea4d8da1e96e0fe262",
                "vout": 5,
                "scriptSig": {
                    "asm": "304402205713a8856669e6a0320adb40ac7061df8b222a19cf3a27870a922d71ed0cb9bc02201ced8fe0a4e8515582fead92a38db1ed3dd23845da9a267bb4c895de6cce705d[ALL] 035b9b549f0d92e47ac8c91a84592caf802bad6a31fc8814339d1f963d2cb5b151",
                    "hex": "47304402205713a8856669e6a0320adb40ac7061df8b222a19cf3a27870a922d71ed0cb9bc02201ced8fe0a4e8515582fead92a38db1ed3dd23845da9a267bb4c895de6cce705d0121035b9b549f0d92e47ac8c91a84592caf802bad6a31fc8814339d1f963d2cb5b151"
                },
                "sequence": 4294967294
            },
            {
                "txid": "7a07aefa6bb2b1117addd1c53cfdffe37737f86e5d4e0e93c4b8badba2c5ac61",
                "vout": 0,
                "scriptSig": {
                    "asm": "3045022100fd242fe8365a3fa81113ebdae11982449d7aaa0cdc07ec4ef44d0fd57b2be22202201a7d80226209076ecc362e328014826a6d9a115637d3bff39cc9758dfa4209d5[ALL] 02058c7414db8efd2c5ae96781a132db1b125c5625e809477cd6f6819dbe37d1b4",
                    "hex": "483045022100fd242fe8365a3fa81113ebdae11982449d7aaa0cdc07ec4ef44d0fd57b2be22202201a7d80226209076ecc362e328014826a6d9a115637d3bff39cc9758dfa4209d5012102058c7414db8efd2c5ae96781a132db1b125c5625e809477cd6f6819dbe37d1b4"
                },
                "sequence": 4294967294
            }
        ],
        "vout": [
            {
                "value": 0.00925383,
                "n": 0,
                "scriptPubKey": {
                    "asm": "OP_DUP OP_HASH160 5eb200e77857743f5416850d24c545dae37c9d20 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex": "76a9145eb200e77857743f5416850d24c545dae37c9d2088ac",
                    "reqSigs": 1,
                    "type": "pubkeyhash",
                    "addresses": [
                        "19dhkwBvus1fZxPuo78ftWjWxP2xyD2wzp"
                    ]
                }
            },
            {
                "value": 0.00084587,
                "n": 1,
                "scriptPubKey": {
                    "asm": "OP_HASH160 7c48b29559774fac82f6ebecd91ab80ecc3bc4d1 OP_EQUAL",
                    "hex": "a9147c48b29559774fac82f6ebecd91ab80ecc3bc4d187",
                    "reqSigs": 1,
                    "type": "scripthash",
                    "addresses": [
                        "3D2AoSw5kJYgVPc7hPHEfQU3ySzGCgphwv"
                    ]
                }
            }
        ],
        "hex": "020000000262e20f6ee9a18d4dea89e28ef7487de49ce27b0b87b82a48f5c8ca63e83f0b27050000006a47304402205713a8856669e6a0320adb40ac7061df8b222a19cf3a27870a922d71ed0cb9bc02201ced8fe0a4e8515582fead92a38db1ed3dd23845da9a267bb4c895de6cce705d0121035b9b549f0d92e47ac8c91a84592caf802bad6a31fc8814339d1f963d2cb5b151feffffff61acc5a2dbbab8c4930e4e5d6ef83777e3fffd3cc5d1dd7a11b1b26bfaae077a000000006b483045022100fd242fe8365a3fa81113ebdae11982449d7aaa0cdc07ec4ef44d0fd57b2be22202201a7d80226209076ecc362e328014826a6d9a115637d3bff39cc9758dfa4209d5012102058c7414db8efd2c5ae96781a132db1b125c5625e809477cd6f6819dbe37d1b4feffffff02c71e0e00000000001976a9145eb200e77857743f5416850d24c545dae37c9d2088ac6b4a01000000000017a9147c48b29559774fac82f6ebecd91ab80ecc3bc4d187173c0900",
        "blockhash": "0000000000000000000d677968af1c6a46b7d05ddf8e565330da0332b52497fe",
        "confirmations": 1,
        "time": 1574589169,
        "blocktime": 1574589169
    },
    {
        "txid": "bbd48997634d46f676c2f27638471c8b65a4a19d7b63fe93f36f8be1c19ecd8e",
        "hash": "47a01f8edbe07fb9c1dc2b43233297101a04c2c2be2c47a83a17658722c61138",
        "version": 2,
        "size": 248,
        "vsize": 166,
        "weight": 662,
        "locktime": 605207,
        "vin": [
            {
                "txid": "dec4a80ebf95bdc18b6dfcc6cff28be5ef71317857f21723693408c29d2dd38f",
                "vout": 1,
                "scriptSig": {
                    "asm": "001420c5c576e61088ee16f15995afd9e9cef117d05d",
                    "hex": "16001420c5c576e61088ee16f15995afd9e9cef117d05d"
                },
                "txinwitness": [
                    "3045022100c36920aa475256ab899f4cc1c0cdfbc3be02ad51f206cbf691e2966eca706bd20220710d90ea05f47de3067349886b3c93947fb25e0c2da57f726cafec5be122d58601",
                    "0281fcc2d06593c070e0bddbd1f58f164b0cb8cd49896e3cf03a8951a403b865a5"
                ],
                "sequence": 4294967294
            }
        ],
        "vout": [
            {
                "value": 4.52444474,
                "n": 0,
                "scriptPubKey": {
                    "asm": "OP_HASH160 9a5d4318ea81911a605c2fc7832ebc34d3174260 OP_EQUAL",
                    "hex": "a9149a5d4318ea81911a605c2fc7832ebc34d317426087",
                    "reqSigs": 1,
                    "type": "scripthash",
                    "addresses": [
                        "3FmDi3r2h3PiZXRSDqaQpTtdF6EUaBncey"
                    ]
                }
            },
            {
                "value": 0.02,
                "n": 1,
                "scriptPubKey": {
                    "asm": "OP_HASH160 e957752f5a7fbdf24715bbbfd8364911f6600531 OP_EQUAL",
                    "hex": "a914e957752f5a7fbdf24715bbbfd8364911f660053187",
                    "reqSigs": 1,
                    "type": "scripthash",
                    "addresses": [
                        "3Nxp8upZfyvqnkdK18W9JNEwcGUe27Ef8b"
                    ]
                }
            }
        ],
        "hex": "020000000001018fd32d9dc20834692317f257783171efe58bf2cfc6fc6d8bc1bd95bf0ea8c4de010000001716001420c5c576e61088ee16f15995afd9e9cef117d05dfeffffff023ac1f71a0000000017a9149a5d4318ea81911a605c2fc7832ebc34d31742608780841e000000000017a914e957752f5a7fbdf24715bbbfd8364911f66005318702483045022100c36920aa475256ab899f4cc1c0cdfbc3be02ad51f206cbf691e2966eca706bd20220710d90ea05f47de3067349886b3c93947fb25e0c2da57f726cafec5be122d58601210281fcc2d06593c070e0bddbd1f58f164b0cb8cd49896e3cf03a8951a403b865a5173c0900",
        "blockhash": "0000000000000000000d677968af1c6a46b7d05ddf8e565330da0332b52497fe",
        "confirmations": 1,
        "time": 1574589169,
        "blocktime": 1574589169
    }
]