import SelectLang from "@/ui/SelectLang/SelectLang";
import { Trans, useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

const LoginLeft = () => {
  const router = useRouter();
  const { t } = useTranslation("login");
  const handleItemLang = async (langOject: any) => {
    let langChange = langOject.lang;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      locale: langChange,
      scroll: false,
    });
  };
  return (
    <div className="login__left">
      <div className="login__header">
        <div className="login__logo">
          <Image
            src="/images/common/logo.png"
            alt="HAZE."
            width={52}
            height={26}
          />
        </div>
        <SelectLang
          list={[
            {
              id: 0,
              lang: "en",
              country: "EN",
              img: "/images/common/flag/flag-en.png",
              width: 512,
              height: 270,
            },
            {
              id: 1,
              lang: "vi",
              country: "VN",
              img: "/images/common/flag/flag-vietnam.png",
              width: 512,
              height: 270,
            },
          ]}
          onClickSelectLang={handleItemLang}
        />
      </div>
      <form className="login__form">
        <h2 className="login__title">{t("title")}</h2>
        <p className="login__intro">{t("intro")}</p>
        <div className="login__form-content">
          <a className="login__btn-google">
            <span className="login__icon-google"></span>
            {t("btnGoogle")}
          </a>
          <div className="login__or">{t("or")}</div>
          <div className="form-group">
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="login__forgot">
            <a href="./">{t("forgotPassword")}</a>
          </div>

          <button className="btn --black" type="submit">
            {t("btnLogin")}
          </button>
          <p className="login__sign-up">
            <Trans i18nKey="dontAccount" t={t}>
              Don&apos;t have an account? <a href="./">Sign up</a>
            </Trans>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginLeft;
