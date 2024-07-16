import { useAsyncData } from "#app";
import { usePrismic } from "@prismicio/vue";

export const useSettings = () => {
  const prismic = usePrismic();

  return useAsyncData("settings", async () => {
    try {
      const response = await prismic.client.getSingle("settings");
      return response;
    } catch (error) {
      console.error("Error fetching settings:", error);
      return null;
    }
  }).data;
};
