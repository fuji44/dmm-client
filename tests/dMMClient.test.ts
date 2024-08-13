import { load } from "@std/dotenv";
import { assertExists } from "@std/assert";

import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import {
  ApiKeyLocation,
  MultiApiKeyAuthenticationProvider,
} from "../kiota/authenticationProvider.ts";
import { createDMMClient } from "../client/dMMClient.ts";

await load({
  envPath: "./.env",
  export: true,
});

Deno.test({
  name: "search itemList",
  async fn() {
    const apiId = Deno.env.get("DMM_API_ID");
    if (!apiId) {
      throw new Error("environment variable DMM_API_ID is not set");
    }
    const affiliateId = Deno.env.get("DMM_AFFILIATE_ID");
    if (!affiliateId) {
      throw new Error("environment variable DMM_AFFILIATE_ID is not set");
    }

    const authProvider = new MultiApiKeyAuthenticationProvider([
      {
        value: apiId,
        parameterName: "api_id",
        location: ApiKeyLocation.QueryParameter,
      },
      {
        value: affiliateId,
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

    assertExists(itemListResp?.result);
  },
});
