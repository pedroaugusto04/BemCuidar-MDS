export const environment = {
  production: true,
  name: "production",
  baseUrl: "https://bemcuidar-mds.onrender.com/",
  getApiProviders: "providers",
  getApiUsersInfo: "users/info/",
  getApiUsers: "users",
  getApiAuth: "login",
  getApiFavoritedProviders: "users/providers",
  getApiFavoriteProvider: (providerId: string) =>
    `users/providers/${providerId}`,
  getApiRequestProvider: (providerId: string) =>
    `/users/request/providers/${providerId}`,
};
