# DMM Client

An unofficial TypeScript client for the DMM Affiliate web service. The client
code is generated using [Kiota](https://github.com/microsoft/kiota). The
underlying OpenAPI Spec is independently created based on the
[official reference](https://affiliate.dmm.com/api/) and the actual behavior of
the API.

## Development

### Generate client code

```shell
deno task generate
```

### Test

To run the tests, create a `.env` file at the project root and set the API ID
and Affiliate ID.

```ini
# .env
DMM_API_ID=YOUR_API_ID
DMM_AFFILIATE_ID=YOUR_AFFILIATE_ID
```

Run the tests with the following command:

```shell
deno test -A
```
