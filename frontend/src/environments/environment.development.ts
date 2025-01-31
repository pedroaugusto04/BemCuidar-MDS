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
    `/users/requests/${providerId}`,
  deleteApiRequestProvider: (requestId: string) => `/users/requests/${requestId}`,
  deleteApiServiceProvider: (providerId: string) => `/providers/${providerId}`,
  getApiUserRequest: (requestId: string) =>
    `/users/requests/${requestId}`,
  getApiServiceRequests: "providers/requests",
  getApiServiceRequest: (requestId: string) =>
    `providers/requests/${requestId}`,
  putApiRequestStatus: (requestId: string) =>
    `providers/requests/${requestId}`,
};
