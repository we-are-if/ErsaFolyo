import { useAsyncData } from "#app";
import { usePrismic } from "@prismicio/vue";
import { useI18n } from "vue-i18n"; // Assuming you're using vue-i18n for locale management

export const useSettings = () => {
  const prismic = usePrismic();
  const { locale } = useI18n(); // Get the current locale

  return useAsyncData("settings", async () => {
    try {
      const response = await prismic.client.getSingle("settings", {
        lang: locale.value,
      });
      return response;
    } catch (error) {
      console.error("Error fetching settings:", error);
      return null;
    }
  }).data;
};
