# DMM client

DMMアフェリエイトのWebサービスの非公式TypeScriptクライアント。
クライアントコードは[Kiota](https://github.com/microsoft/kiota)で生成しています。
基となるOpenAPI
Specは、[公式リファレンス](https://affiliate.dmm.com/api/)と実際のAPIの動作をもとに独自に作成しています。

## Development

### Generate client code

```shell
deno task generate
```

### Test

テストを実行するためプロジェクトルートに `.env` を作成し、API IDとAffiliate
IDを設定してください。

```ini
# .env
DMM_API_ID=YOUR_API_ID
DMM_AFFILIATE_ID=YOUR_AFFILIATE_ID
```

テストは以下のコマンドで実行します。

```shell
deno test -A
```
