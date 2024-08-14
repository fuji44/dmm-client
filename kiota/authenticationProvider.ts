import {
  AllowedHostsValidator,
  type AuthenticationProvider,
  type RequestInformation,
  validateProtocol,
} from "@microsoft/kiota-abstractions";

/** The location for the API key */
export enum ApiKeyLocation {
  /** The API key is in the query parameters */
  QueryParameter = 0,
  /** The API key is in the headers */
  Header = 1,
}

export class MultiApiKeyAuthenticationProvider
  implements AuthenticationProvider {
  private readonly apiKeys;
  private readonly validator;

  constructor(
    apiKeys: {
      value: string;
      parameterName: string;
      location: ApiKeyLocation;
    }[],
    validHosts?: Set<string>,
  ) {
    this.apiKeys = apiKeys;
    this.validator = new AllowedHostsValidator(validHosts);
  }

  authenticateRequest(
    request: RequestInformation,
    // deno-lint-ignore no-unused-vars
    additionalAuthenticationContext?: Record<string, unknown> | undefined,
  ): Promise<void> {
    const url = request.URL;
    if (!url || !this.validator.isUrlHostValid(url)) {
      return Promise.resolve();
    }
    validateProtocol(url);
    for (const apiKey of this.apiKeys) {
      switch (apiKey.location) {
        case ApiKeyLocation.QueryParameter:
          request.URL += (url.includes("?") ? "&" : "?") +
            apiKey.parameterName + "=" + apiKey.value;
          break;
        case ApiKeyLocation.Header:
          request.headers.add(apiKey.parameterName, apiKey.value);
          break;
      }
    }
    return Promise.resolve();
  }
}
