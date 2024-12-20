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
  getApiRequestProvider: (providerId: string) =>
    `/users/request/providers/${providerId}`,
};
