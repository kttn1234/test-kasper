import LoginLeft from "@/components/Login/LoginLeft/LoginLeft";
import LoginRight from "@/components/Login/LoginRight/LoginRight";
import { getI18nProps } from "@/lib/getStatic";
import { useTranslation } from "next-i18next";
const Login = () => {
  const { t } = useTranslation("login");
  return (
    <div className="login">
      <div className="container --login">
        <div className="login__content">
          <LoginLeft />
          <LoginRight />
        </div>
      </div>
    </div>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await getI18nProps(locale, ["login"])),
    },
  };
};

export default Login;
