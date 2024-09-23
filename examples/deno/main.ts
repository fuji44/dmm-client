/**
 * This code retrieves a list of items from the DMM.com website using the DMM API.
 *
 * Before running this code, make sure to create an `.env` file in the parent directory with the following environment variables:
 * - DMM_API_ID: The API ID for accessing the DMM API.
 * - DMM_AFFILIATE_ID: The affiliate ID for tracking affiliate referrals.
 */
import { FetchRequestAdapter } from "npm:@microsoft/kiota-http-fetchlibrary@1.0.0-preview.62";
import {
  ApiKeyLocation,
  createDMMClient,
  MultiApiKeyAuthenticationProvider,
} from "jsr:@fuji44/dmm-client";
import { load } from "@std/dotenv";

await load({
  envPath: "../../.env",
  export: true,
});
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
    keyword: "One Piece",
  },
});

if (itemListResp?.result) {
  console.log(JSON.stringify(itemListResp.result, null, 2));
} else {
  console.log("No result found");
}
