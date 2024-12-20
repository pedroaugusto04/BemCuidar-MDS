export const environment = {
  production: true,
  name: "production",
  baseUrl: "https://bemcuidar-mds.onrender.com/",
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
