import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export interface IListSelectLang {
  id: number | string;
  lang: string;
  country: string;
  img: string;
  width: number;
  height: number;
}

interface Props {
  list: IListSelectLang[];
  onClickSelectLang?: (e: IListSelectLang) => void;
}

const SelectLang = ({ list, onClickSelectLang }: Props) => {
  const [isSelectLang, setIsSelectLang] = useState(false);
  const router = useRouter();
  const langSelectRouter = list.find(
    (item: any) => item.lang === router.locale
  );

  const [current, setCurrent] = useState(langSelectRouter);

  const refSelectLang = useRef<HTMLDivElement>(null);

  const handleSelectLang = () => {
    setIsSelectLang(!isSelectLang);
  };

  const handleSelectLangItem = (item: IListSelectLang) => {
    setCurrent(item);
    if (onClickSelectLang) {
      onClickSelectLang(item);
    }
  };

  useEffect(() => {
    const handleOutside = (e: any) => {
      if (!refSelectLang.current?.contains(e.target)) {
        setIsSelectLang(false);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, []);

  return (
    <div
      className={`select-lang ${isSelectLang ? "--active" : ""}`}
      onClick={handleSelectLang}
      ref={refSelectLang}
    >
      <div className="select-lang__bar">
        <div className="select-lang__current">
          <Image
            src={current!.img}
            alt={current!.country}
            width={current!.width}
            height={current!.height}
          />
          <span>{current!.country}</span>
        </div>

        <FontAwesomeIcon icon={isSelectLang ? faChevronUp : faChevronDown} />
      </div>
      <ul className="select-lang__list">
        {list.map((item, index) => (
          <li
            className={`select-lang__item ${
              index === current!.id ? "d-none" : ""
            }`}
            key={item.id}
            onClick={() => handleSelectLangItem(item)}
          >
            <Image
              src={item.img}
              alt={item.country}
              width={item.width}
              height={item.height}
            />
            <span>{item.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectLang;
