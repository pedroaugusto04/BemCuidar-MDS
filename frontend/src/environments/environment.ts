export const environment = {
    production: true,
    name: "production",
    baseUrl: "",
    getApiProviders: "providers",
    getApiUsers: "users",
    getApiFavoritedProviders: (userId: string) => `users/${userId}/providers`,
  };