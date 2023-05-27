import { useTranslation } from "next-i18next";
import Image from "next/image";
import SliderLogin from "../SliderLogin/SliderLogin";

const LoginRight = () => {
  const { t } = useTranslation("login");
  return (
    <div className="login__right">
      <div className="login__group-link">
        <a href="./" className="login__link">
          {t("signUp")}
        </a>
        <a href="./" className="btn --outline-white">
          {t("joinUs")}
        </a>
      </div>
      <div className="login__community">
        <div className="login__community-icon">
          <Image
            src="/images/login/icon-community.png"
            alt="logo"
            width={41}
            height={41}
          />
        </div>
        <div className="login__community-txt">
          {t("largetsSpace")}
          <br />
          {t("Community")}
        </div>
      </div>
      <SliderLogin />
    </div>
  );
};

export default LoginRight;
