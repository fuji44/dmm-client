# DMM Client

An unofficial TypeScript client for the DMM web service. The client code is generated using [Kiota](https://github.com/microsoft/kiota). The underlying OpenAPI Spec is independently created based on the [official reference](https://affiliate.dmm.com/api/) and the actual behavior of the API.

> [!WARNING]
> Since kiota-typescript is a preview version, it may stop working when kiota-related packages are upgraded.

## Usage

Add this package and the `kiota-http-fetchlibrary` as dependencies.

```shell
# Deno
deno add @fuji44/dmm-client npm:@microsoft/kiota-http-fetchlibrary@^1.0.0-preview.58

# Node.js
npm i @microsoft/kiota-http-fetchlibrary@^1.0.0-preview.58
npx jsr add @fuji44/dmm-client
```

Coding is the same as for general Kiota client usage.

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
    keyword: "One Piece",
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

To run the tests, create a `.env` file at the project root and set the API ID and Affiliate ID.

```ini
# .env
DMM_API_ID=YOUR_API_ID
DMM_AFFILIATE_ID=YOUR_AFFILIATE_ID
```

Run the tests with the following command:

```shell
deno test -A
```
