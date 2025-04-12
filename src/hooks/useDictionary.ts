import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Locale } from "@/types/common";

import { Dict, getDictionary } from "@/utils/i18";

export const useDictionary = () => {
  const { locale } = useParams<{ locale: Locale }>();

  const [dict, setDict] = useState<Dict | null>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(locale);

      setDict(dict);
    };

    fetchDictionary();
  }, [locale]);

  return dict;
};
