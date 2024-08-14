# DMM client

DMMアフェリエイトのWebサービスの非公式TypeScriptクライアント。
クライアントコードは[Kiota](https://github.com/microsoft/kiota)で生成しています。
基となるOpenAPI Specは、[公式リファレンス](https://affiliate.dmm.com/api/)と実際のAPIの動作をもとに独自に作成しています。

> [!WARNING]
> kiota-typescriptはpreviewバージョンのため、kiota関連パッケージのバージョンアップによって動作しなくなる可能性があります。

## Usage

### Deno

このパッケージと `kiota-http-fetchlibrary` を依存関係に追加します。

```shell
deno add @fuji44/dmm-client npm:@microsoft/kiota-http-fetchlibrary@^1.0.0-preview.58
```

Kiotaの作法に則りコーディングします。

```ts
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import {
  ApiKeyLocation,
  createDMMClient,
  MultiApiKeyAuthenticationProvider,
} from "@fuji44/dmm-client";

const authProvider = new MultiApiKeyAuthenticationProvider([
  {
    value: "your-api-id",
    parameterName: "api_id",
    location: ApiKeyLocation.QueryParameter,
  },
  {
    value: "your-affiliate-id",
    parameterName: "affiliate_id",
    location: ApiKeyLocation.QueryParameter,
  },
]);
const adapter = new FetchRequestAdapter(authProvider);
const client = createDMMClient(adapter);

const itemListResp = await client.itemList.get({
  queryParameters: {
    site: "DMM.com",
    keyword: "ワンピース",
  },
});

console.log(itemListResp?.result);
```

## Development

### Generate client code

```shell
deno task generate
```

### Test

テストを実行するためプロジェクトルートに `.env` を作成し、API IDとAffiliate IDを設定してください。

```ini
# .env
DMM_API_ID=YOUR_API_ID
DMM_AFFILIATE_ID=YOUR_AFFILIATE_ID
```

テストは以下のコマンドで実行します。

```shell
deno test -A
```
