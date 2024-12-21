import axios from "axios";

const newsOrgInstance = axios.create({
  baseURL: "https://newsapi.org/",
  params: {
    apiKey: "1dcdf3ffa2a246dd86d9627221517478",
  },
});

const newsNYInstance = axios.create({
  baseURL: "https://api.nytimes.com/",
  params: {
    "api-key": "o6JoNSvXWG4CC5OOweNMbwetrMaKAvuE",
  },
});

const newsGuardianInstance = axios.create({
  baseURL: "https://content.guardianapis.com/",
  params: {
    "api-key": "a1420dfd-abfd-4898-988f-586f829d1ef3",
  },
});

export { newsOrgInstance, newsNYInstance, newsGuardianInstance };
