import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Поиск",
      link: "searchPage",
    },
    {
      name: "NFT Подробности",
      link: "NFT-details",
    },
    {
      name: "Настройки аккаунта",
      link: "account",
    },
    {
      name: "Создать NFT",
      link: "uploadNFT",
    },
    {
      name: "Подключить кошелек",
      link: "connectWallet",
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;