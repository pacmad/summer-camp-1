import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");

  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);
  return (
    <div className="flag">
      <Link href={route} locale={otherLocale}>
        <a className="text-dark dropdown-item">
          {t("switchLocale", { locale: otherLocale })}
        </a>
      </Link>
    </div>
  );
}
