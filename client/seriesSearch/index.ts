/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import {
  type AdditionalDataHolder,
  type BaseRequestBuilder,
  type Parsable,
  type ParsableFactory,
  type ParseNode,
  type RequestConfiguration,
  type RequestInformation,
  type RequestsMetadata,
  type SerializationWriter,
} from "@microsoft/kiota-abstractions";

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SeriesSearchGetResponse_request_parameters}
 */
// @ts-ignore
export function createSeriesSearchGetResponse_request_parametersFromDiscriminatorValue(
  parseNode: ParseNode | undefined,
): (instance?: Parsable) => Record<string, (node: ParseNode) => void> {
  return deserializeIntoSeriesSearchGetResponse_request_parameters;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SeriesSearchGetResponse_request}
 */
// @ts-ignore
export function createSeriesSearchGetResponse_requestFromDiscriminatorValue(
  parseNode: ParseNode | undefined,
): (instance?: Parsable) => Record<string, (node: ParseNode) => void> {
  return deserializeIntoSeriesSearchGetResponse_request;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SeriesSearchGetResponse_result_series}
 */
// @ts-ignore
export function createSeriesSearchGetResponse_result_seriesFromDiscriminatorValue(
  parseNode: ParseNode | undefined,
): (instance?: Parsable) => Record<string, (node: ParseNode) => void> {
  return deserializeIntoSeriesSearchGetResponse_result_series;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SeriesSearchGetResponse_result}
 */
// @ts-ignore
export function createSeriesSearchGetResponse_resultFromDiscriminatorValue(
  parseNode: ParseNode | undefined,
): (instance?: Parsable) => Record<string, (node: ParseNode) => void> {
  return deserializeIntoSeriesSearchGetResponse_result;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SeriesSearchGetResponse}
 */
// @ts-ignore
export function createSeriesSearchGetResponseFromDiscriminatorValue(
  parseNode: ParseNode | undefined,
): (instance?: Parsable) => Record<string, (node: ParseNode) => void> {
  return deserializeIntoSeriesSearchGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSeriesSearchGetResponse(
  seriesSearchGetResponse: Partial<SeriesSearchGetResponse> | undefined = {},
): Record<string, (node: ParseNode) => void> {
  return {
    "request": (n) => {
      seriesSearchGetResponse.request = n.getObjectValue<
        SeriesSearchGetResponse_request
      >(createSeriesSearchGetResponse_requestFromDiscriminatorValue);
    },
    "result": (n) => {
      seriesSearchGetResponse.result = n.getObjectValue<
        SeriesSearchGetResponse_result
      >(createSeriesSearchGetResponse_resultFromDiscriminatorValue);
    },
  };
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSeriesSearchGetResponse_request(
  seriesSearchGetResponse_request:
    | Partial<SeriesSearchGetResponse_request>
    | undefined = {},
): Record<string, (node: ParseNode) => void> {
  return {
    "parameters": (n) => {
      seriesSearchGetResponse_request.parameters = n.getObjectValue<
        SeriesSearchGetResponse_request_parameters
      >(createSeriesSearchGetResponse_request_parametersFromDiscriminatorValue);
    },
  };
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSeriesSearchGetResponse_request_parameters(
  seriesSearchGetResponse_request_parameters:
    | Partial<SeriesSearchGetResponse_request_parameters>
    | undefined = {},
): Record<string, (node: ParseNode) => void> {
  return {
    "affiliate_id": (n) => {
      seriesSearchGetResponse_request_parameters.affiliateId = n
        .getStringValue();
    },
    "api_id": (n) => {
      seriesSearchGetResponse_request_parameters.apiId = n.getStringValue();
    },
    "floor_id": (n) => {
      seriesSearchGetResponse_request_parameters.floorId = n.getStringValue();
    },
    "hits": (n) => {
      seriesSearchGetResponse_request_parameters.hits = n.getStringValue();
    },
    "initial": (n) => {
      seriesSearchGetResponse_request_parameters.initial = n.getStringValue();
    },
    "output": (n) => {
      seriesSearchGetResponse_request_parameters.output = n.getStringValue();
    },
  };
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSeriesSearchGetResponse_result(
  seriesSearchGetResponse_result:
    | Partial<SeriesSearchGetResponse_result>
    | undefined = {},
): Record<string, (node: ParseNode) => void> {
  return {
    "first_position": (n) => {
      seriesSearchGetResponse_result.firstPosition = n.getNumberValue();
    },
    "floor_code": (n) => {
      seriesSearchGetResponse_result.floorCode = n.getStringValue();
    },
    "floor_id": (n) => {
      seriesSearchGetResponse_result.floorId = n.getStringValue();
    },
    "floor_name": (n) => {
      seriesSearchGetResponse_result.floorName = n.getStringValue();
    },
    "result_count": (n) => {
      seriesSearchGetResponse_result.resultCount = n.getNumberValue();
    },
    "series": (n) => {
      seriesSearchGetResponse_result.series = n.getCollectionOfObjectValues<
        SeriesSearchGetResponse_result_series
      >(createSeriesSearchGetResponse_result_seriesFromDiscriminatorValue);
    },
    "service_code": (n) => {
      seriesSearchGetResponse_result.serviceCode = n.getStringValue();
    },
    "service_name": (n) => {
      seriesSearchGetResponse_result.serviceName = n.getStringValue();
    },
    "site_code": (n) => {
      seriesSearchGetResponse_result.siteCode = n.getStringValue();
    },
    "site_name": (n) => {
      seriesSearchGetResponse_result.siteName = n.getStringValue();
    },
    "status": (n) => {
      seriesSearchGetResponse_result.status = n.getStringValue();
    },
    "total_count": (n) => {
      seriesSearchGetResponse_result.totalCount = n.getStringValue();
    },
  };
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSeriesSearchGetResponse_result_series(
  seriesSearchGetResponse_result_series:
    | Partial<SeriesSearchGetResponse_result_series>
    | undefined = {},
): Record<string, (node: ParseNode) => void> {
  return {
    "list_url": (n) => {
      seriesSearchGetResponse_result_series.listUrl = n.getStringValue();
    },
    "name": (n) => {
      seriesSearchGetResponse_result_series.name = n.getStringValue();
    },
    "ruby": (n) => {
      seriesSearchGetResponse_result_series.ruby = n.getStringValue();
    },
    "series_id": (n) => {
      seriesSearchGetResponse_result_series.seriesId = n.getStringValue();
    },
  };
}
export type GetOutputQueryParameterType =
  (typeof GetOutputQueryParameterTypeObject)[
    keyof typeof GetOutputQueryParameterTypeObject
  ];
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSeriesSearchGetResponse(
  writer: SerializationWriter,
  seriesSearchGetResponse: Partial<SeriesSearchGetResponse> | undefined | null =
    {},
): void {
  if (seriesSearchGetResponse) {
    writer.writeObjectValue<SeriesSearchGetResponse_request>(
      "request",
      seriesSearchGetResponse.request,
      serializeSeriesSearchGetResponse_request,
    );
    writer.writeObjectValue<SeriesSearchGetResponse_result>(
      "result",
      seriesSearchGetResponse.result,
      serializeSeriesSearchGetResponse_result,
    );
    writer.writeAdditionalData(seriesSearchGetResponse.additionalData);
  }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSeriesSearchGetResponse_request(
  writer: SerializationWriter,
  seriesSearchGetResponse_request:
    | Partial<SeriesSearchGetResponse_request>
    | undefined
    | null = {},
): void {
  if (seriesSearchGetResponse_request) {
    writer.writeObjectValue<SeriesSearchGetResponse_request_parameters>(
      "parameters",
      seriesSearchGetResponse_request.parameters,
      serializeSeriesSearchGetResponse_request_parameters,
    );
    writer.writeAdditionalData(seriesSearchGetResponse_request.additionalData);
  }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSeriesSearchGetResponse_request_parameters(
  writer: SerializationWriter,
  seriesSearchGetResponse_request_parameters:
    | Partial<SeriesSearchGetResponse_request_parameters>
    | undefined
    | null = {},
): void {
  if (seriesSearchGetResponse_request_parameters) {
    writer.writeStringValue(
      "affiliate_id",
      seriesSearchGetResponse_request_parameters.affiliateId,
    );
    writer.writeStringValue(
      "api_id",
      seriesSearchGetResponse_request_parameters.apiId,
    );
    writer.writeStringValue(
      "floor_id",
      seriesSearchGetResponse_request_parameters.floorId,
    );
    writer.writeStringValue(
      "hits",
      seriesSearchGetResponse_request_parameters.hits,
    );
    writer.writeStringValue(
      "initial",
      seriesSearchGetResponse_request_parameters.initial,
    );
    writer.writeStringValue(
      "output",
      seriesSearchGetResponse_request_parameters.output,
    );
    writer.writeAdditionalData(
      seriesSearchGetResponse_request_parameters.additionalData,
    );
  }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSeriesSearchGetResponse_result(
  writer: SerializationWriter,
  seriesSearchGetResponse_result:
    | Partial<SeriesSearchGetResponse_result>
    | undefined
    | null = {},
): void {
  if (seriesSearchGetResponse_result) {
    writer.writeNumberValue(
      "first_position",
      seriesSearchGetResponse_result.firstPosition,
    );
    writer.writeStringValue(
      "floor_code",
      seriesSearchGetResponse_result.floorCode,
    );
    writer.writeStringValue("floor_id", seriesSearchGetResponse_result.floorId);
    writer.writeStringValue(
      "floor_name",
      seriesSearchGetResponse_result.floorName,
    );
    writer.writeNumberValue(
      "result_count",
      seriesSearchGetResponse_result.resultCount,
    );
    writer.writeCollectionOfObjectValues<SeriesSearchGetResponse_result_series>(
      "series",
      seriesSearchGetResponse_result.series,
      serializeSeriesSearchGetResponse_result_series,
    );
    writer.writeStringValue(
      "service_code",
      seriesSearchGetResponse_result.serviceCode,
    );
    writer.writeStringValue(
      "service_name",
      seriesSearchGetResponse_result.serviceName,
    );
    writer.writeStringValue(
      "site_code",
      seriesSearchGetResponse_result.siteCode,
    );
    writer.writeStringValue(
      "site_name",
      seriesSearchGetResponse_result.siteName,
    );
    writer.writeStringValue("status", seriesSearchGetResponse_result.status);
    writer.writeStringValue(
      "total_count",
      seriesSearchGetResponse_result.totalCount,
    );
    writer.writeAdditionalData(seriesSearchGetResponse_result.additionalData);
  }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSeriesSearchGetResponse_result_series(
  writer: SerializationWriter,
  seriesSearchGetResponse_result_series:
    | Partial<SeriesSearchGetResponse_result_series>
    | undefined
    | null = {},
): void {
  if (seriesSearchGetResponse_result_series) {
    writer.writeStringValue(
      "list_url",
      seriesSearchGetResponse_result_series.listUrl,
    );
    writer.writeStringValue("name", seriesSearchGetResponse_result_series.name);
    writer.writeStringValue("ruby", seriesSearchGetResponse_result_series.ruby);
    writer.writeStringValue(
      "series_id",
      seriesSearchGetResponse_result_series.seriesId,
    );
    writer.writeAdditionalData(
      seriesSearchGetResponse_result_series.additionalData,
    );
  }
}
/**
 * シリーズ一覧
 */
export interface SeriesSearchGetResponse
  extends AdditionalDataHolder, Parsable {
  /**
   * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
   */
  additionalData?: Record<string, unknown>;
  /**
   * The request property
   */
  request?: SeriesSearchGetResponse_request | null;
  /**
   * The result property
   */
  result?: SeriesSearchGetResponse_result | null;
}
export interface SeriesSearchGetResponse_request
  extends AdditionalDataHolder, Parsable {
  /**
   * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
   */
  additionalData?: Record<string, unknown>;
  /**
   * The parameters property
   */
  parameters?: SeriesSearchGetResponse_request_parameters | null;
}
export interface SeriesSearchGetResponse_request_parameters
  extends AdditionalDataHolder, Parsable {
  /**
   * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
   */
  additionalData?: Record<string, unknown>;
  /**
   * The affiliate_id property
   */
  affiliateId?: string | null;
  /**
   * The api_id property
   */
  apiId?: string | null;
  /**
   * The floor_id property
   */
  floorId?: string | null;
  /**
   * The hits property
   */
  hits?: string | null;
  /**
   * The initial property
   */
  initial?: string | null;
  /**
   * The output property
   */
  output?: string | null;
}
export interface SeriesSearchGetResponse_result
  extends AdditionalDataHolder, Parsable {
  /**
   * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
   */
  additionalData?: Record<string, unknown>;
  /**
   * The first_position property
   */
  firstPosition?: number | null;
  /**
   * The floor_code property
   */
  floorCode?: string | null;
  /**
   * The floor_id property
   */
  floorId?: string | null;
  /**
   * The floor_name property
   */
  floorName?: string | null;
  /**
   * The result_count property
   */
  resultCount?: number | null;
  /**
   * The series property
   */
  series?: SeriesSearchGetResponse_result_series[] | null;
  /**
   * The service_code property
   */
  serviceCode?: string | null;
  /**
   * The service_name property
   */
  serviceName?: string | null;
  /**
   * The site_code property
   */
  siteCode?: string | null;
  /**
   * The site_name property
   */
  siteName?: string | null;
  /**
   * The status property
   */
  status?: string | null;
  /**
   * The total_count property
   */
  totalCount?: string | null;
}
export interface SeriesSearchGetResponse_result_series
  extends AdditionalDataHolder, Parsable {
  /**
   * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
   */
  additionalData?: Record<string, unknown>;
  /**
   * The list_url property
   */
  listUrl?: string | null;
  /**
   * The name property
   */
  name?: string | null;
  /**
   * The ruby property
   */
  ruby?: string | null;
  /**
   * The series_id property
   */
  seriesId?: string | null;
}
/**
 * Builds and executes requests for operations under /SeriesSearch
 */
export interface SeriesSearchRequestBuilder
  extends BaseRequestBuilder<SeriesSearchRequestBuilder> {
  /**
   * シリーズ一覧を取得することが可能がAPIです。```curlhttps://api.dmm.com/affiliate/v3/SeriesSearch?api_id=[APIID]&affiliate_id=[アフィリエイトID]&initial=%e3%81%8a&floor_id=27&hits=10&output=json```
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @returns {Promise<SeriesSearchGetResponse>}
   */
  get(
    requestConfiguration?:
      | RequestConfiguration<SeriesSearchRequestBuilderGetQueryParameters>
      | undefined,
  ): Promise<SeriesSearchGetResponse | undefined>;
  /**
   * シリーズ一覧を取得することが可能がAPIです。```curlhttps://api.dmm.com/affiliate/v3/SeriesSearch?api_id=[APIID]&affiliate_id=[アフィリエイトID]&initial=%e3%81%8a&floor_id=27&hits=10&output=json```
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @returns {RequestInformation}
   */
  toGetRequestInformation(
    requestConfiguration?:
      | RequestConfiguration<SeriesSearchRequestBuilderGetQueryParameters>
      | undefined,
  ): RequestInformation;
}
/**
 * シリーズ一覧を取得することが可能がAPIです。```curlhttps://api.dmm.com/affiliate/v3/SeriesSearch?api_id=[APIID]&affiliate_id=[アフィリエイトID]&initial=%e3%81%8a&floor_id=27&hits=10&output=json```
 */
export interface SeriesSearchRequestBuilderGetQueryParameters {
  /**
   * 出力形式jsonで指定した場合に、このパラメータでコールバック関数名を指定すると、JSONP形式で出力されます
   */
  callback?: string;
  /**
   * フロア検索APIから取得可能なフロアID
   */
  floorId?: string;
  /**
   * 取得件数初期値：100　最大：500
   */
  hits?: number;
  /**
   * 頭文字(50音) 50音をUTF-8で指定
   */
  initial?: string;
  /**
   * 検索開始位置初期値：1
   */
  offset?: number;
  /**
   * 出力形式
   */
  output?: GetOutputQueryParameterType;
}
/**
 * Uri template for the request builder.
 */
export const SeriesSearchRequestBuilderUriTemplate =
  "{+baseurl}/SeriesSearch?floor_id={floor_id}{&callback*,hits*,initial*,offset*,output*}";
export const GetOutputQueryParameterTypeObject = {
  Json: "json",
  Xml: "xml",
} as const;
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SeriesSearchRequestBuilderGetQueryParametersMapper: Record<
  string,
  string
> = {
  "floorId": "floor_id",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SeriesSearchRequestBuilderRequestsMetadata: RequestsMetadata = {
  get: {
    uriTemplate: SeriesSearchRequestBuilderUriTemplate,
    responseBodyContentType: "application/json",
    adapterMethodName: "send",
    responseBodyFactory: createSeriesSearchGetResponseFromDiscriminatorValue,
    queryParametersMapper: SeriesSearchRequestBuilderGetQueryParametersMapper,
  },
};
/* tslint:enable */
/* eslint-enable */
