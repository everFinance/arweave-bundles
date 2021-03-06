import { Dependencies } from "./ar-data-base";
import { JWKPublicInterface, JWKInterface } from "./interface-jwk";
import { getSignatureData, DataItemJson } from "./ar-data-base";
import { createData, sign, DataItemCreateOptions } from "./ar-data-create";
import { decodeData, decodeTag, decodeTagAt, unpackTags } from "./ar-data-read";
import { verify } from "./ar-data-verify";
export { createData as create, sign, decodeData, decodeTag, decodeTagAt, unpackTags, verify, DataItemCreateOptions, DataItemJson, getSignatureData, };
export default function ArweaveBundles(deps: Dependencies): {
    createData(opts: DataItemCreateOptions, jwk: JWKPublicInterface): Promise<DataItemJson>;
    sign(d: DataItemJson, jwk: JWKInterface): Promise<DataItemJson>;
    addTag(d: DataItemJson, name: string, value: string): void;
    verify(d: DataItemJson): Promise<boolean>;
    decodeData(d: DataItemJson, options?: {
        string: boolean;
    }): Promise<string | Uint8Array>;
    decodeTag(tag: {
        name: string;
        value: string;
    }): Promise<{
        name: string;
        value: string;
    }>;
    decodeTagAt(d: DataItemJson, index: number): Promise<{
        name: string;
        value: string;
    }>;
    unpackTags(d: DataItemJson): Promise<Record<string, string | string[]>>;
    bundleData(txData: any): Promise<{
        items: DataItemJson[];
    }>;
    unbundleData(txData: any): Promise<DataItemJson[]>;
};
