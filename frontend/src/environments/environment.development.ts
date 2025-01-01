export const environment = {
  production: false,
  name: "development",
  baseUrl: "http://localhost:3000/",
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
    `/users/request/${providerId}`,
  getApiUserRequest: (requestId: string) =>
    `/users/request/${requestId}`,
  getApiServiceRequests: "providers/requests",
  getApiServiceRequest: (requestId: string) =>
    `providers/requests/${requestId}`,
  putApiRequestStatus: (requestId: string) =>
    `providers/requests/${requestId}`,
};
