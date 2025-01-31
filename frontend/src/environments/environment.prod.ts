export const environment = {
  production: true,
  name: "production",
  //baseUrl: "https://bemcuidar-mds.onrender.com/",
  baseUrl: "https://bemcuidar-mds-midx.onrender.com/",
  getApiProviders: "providers",
  getApiProviderAnnouncements: "providers/announcements",
  getApiUsersInfo: "users/info/",
  getApiUsers: "users",
  getApiAuth: "login",
  getApiFavoritedProviders: "users/providers",
  getApiUserRequests: "users/requests",
  getApiFavoriteProvider: (providerId: string) =>
    `users/providers/${providerId}`,
  postApiRequestProvider: (providerId: string) =>
    `/users/requests/${providerId}`,
  deleteApiRequestProvider: (requestId: string) => `/users/requests/${requestId}`,
  getApiUserRequest: (requestId: string) =>
    `/users/requests/${requestId}`,
  getApiServiceRequests: "providers/requests",
  getApiServiceRequest: (requestId: string) =>
    `providers/requests/${requestId}`,
  putApiRequestStatus: (requestId: string) =>
    `providers/requests/${requestId}`,
};
