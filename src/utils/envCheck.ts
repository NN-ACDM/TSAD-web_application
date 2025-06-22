export function verifyEnv(): void {
  const env = process.env.ENV;
  const baseApiUrl = process.env.BASE_API_URL;
  const baseMediaUrl = process.env.BASE_MEDIA_URL;

  if (!env) {
    throw new Error("verifyEnv() ... Misconfigured ENV");
  }
  if (!baseApiUrl) {
    throw new Error("verifyEnv() ... Misconfigured BASE_API_URL");
  }
  if (!baseMediaUrl) {
    throw new Error("verifyEnv() ... Misconfigured BASE_MEDIA_URL");
  }

  if (env === "development") {
    if (!baseApiUrl.includes(":8080")) {
      throw new Error("verifyEnv() ... Misconfigured Development BASE_API_URL");
    }
    if (!baseMediaUrl.includes(":8081")) {
      throw new Error("verifyEnv() ... Misconfigured Development BASE_MEDIA_URL");
    }
  }

  if (env === "uat" && !baseApiUrl.includes("astral-containers.com")) {
    if (!baseApiUrl.includes(":8080")) {
      throw new Error("verifyEnv() ... Misconfigured UAT BASE_API_URL");
    }
    if (!baseMediaUrl.includes(":8081")) {
      throw new Error("verifyEnv() ... Misconfigured UAT BASE_MEDIA_URL");
    }
  }

  if (env === "production" && !baseApiUrl.includes("api.example.com")) {
    if (!baseApiUrl.includes(":8080")) {
      throw new Error("verifyEnv() ... Misconfigured Production BASE_API_URL");
    }
    if (!baseMediaUrl.includes(":8081")) {
      throw new Error("verifyEnv() ... Misconfigured Production BASE_MEDIA_URL");
    }
  }

  // console.log(`verifyEnv() ... Running in ${env} environment.`);
}
