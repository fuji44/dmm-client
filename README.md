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

```shell
deno test -A
```
