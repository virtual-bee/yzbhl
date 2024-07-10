import { langOptions } from "@/lang/base";

export const useLanguage = () => {
  const lang = useCookie("lang");
  const options = langOptions.map((it) => it.value);
  const [defLang] = langOptions.filter((it) => it.key === lang.value);
  const language = ref<string>(defLang.value || options[0]);

  const setLanguage = async (v: string) => {
    const [actItem]: any = langOptions.filter((it) => it.value === v);
    language.value = v;
    lang.value = actItem.key;
    // 切换语言刷新页面
    reloadNuxtApp({ ttl: 1000 });
  };
  return { setLanguage, language, options };
};
