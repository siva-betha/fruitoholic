import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerBottomMenuLinks = [
    {
      name: "Terms & Conditions",
      link: "",
    },
    {
      name: "Return & Refund Policy",
      link: "",
    },
    {
      name: "Privacy Policy",
      link: "",
    },
    {
      name: "Shipping & Payment Policy",
      link: "",
    },
  ];

  const footerMenuItems = [];

  const FooterMenu = () => {
    const footerMenu = [
      {
        name: "Fruitoholic",
        link: "",
      },
      {
        name: "Home",
        link: "",
      },
      {
        name: "About us",
        link: "",
      },
      {
        name: "Logout",
        link: "",
      },
    ];

    const subscriptionMenu = [
      {
        name: "Shop",
        link: "",
      },
      {
        name: "Subscriptions",
        link: "",
      },
      {
        name: "Cold-pressed Juices",
        link: "",
      },
      {
        name: "Oats & Fruit",
        link: "",
      },
      {
        name: "Fresh Fruit Smoothies",
        link: "",
      },
      {
        name: "Fresh Fruit Milkshakes",
        link: "",
      },
      {
        name: "Fruitoholic Combos",
        link: "",
      },
      {
        name: "Dryfruit Delights",
        link: "",
      },
      {
        name: "Fruitoholic Party",
        link: "",
      },
      {
        name: "Fruit Kombuchas",
        link: "",
      },
      {
        name: "Fresh Fruit Teas",
        link: "",
      },
    ];

    const availableMenuItems = [
      {
        name: "",
        link: "",
      },
      {
        name: "Bakery",
        link: "",
      },
      {
        name: "Fruits",
        link: "",
      },
      {
        name: "Fruit Ice Creams",
        link: "",
      },
      {
        name: "Yogurt Smoothies",
        link: "",
      },
      {
        name: "Super Smoothies",
        link: "",
      },
      {
        name: "Freshly Cut Fruits",
        link: "",
      },
      {
        name: "Exotic Salads & Desserts",
        link: "",
      },
      {
        name: "Coconut Coladas",
        link: "",
      },
    ];

    return (
      <div className="flex items-start py-10 justify-center w-full ">
        <div className="flex flex-col gap-4 w-[200px]">
          {footerMenu.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="text-sm hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-[200px]">
          {subscriptionMenu.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="text-sm hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-[200px]">
          {availableMenuItems.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="text-sm hover:underline"
            >
              {item.name ? item.name : `----------`}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-[200px]">
          Visit our store Jubilee Hills, HYDERABAD, TELANGANA, 500033 
          mail: care@fruitoholic.live 
          phone: 9550893369
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white">
      {/* location */}
      <div className="h-[300px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7613.76982044228!2d78.413865!3d17.41731!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI1JzAyLjMiTiA3OMKwMjQnNDkuOSJF!5e0!3m2!1sen!2sus!4v1742631130018!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
      </div>

      {/* footer menu */}
      <FooterMenu />

      {/* copyright */}
      <div className="w-full text-sm border-t-slate-500 ">
        <div className="h-[150px] flex items-center w-full gap-20 justify-center">
          {footerBottomMenuLinks.map((item) => (
            <Link href={item.link} key={item.name} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>

        <p className="text-slate-500 w-full pb-4 flex items-center justify-center">
          Copyright 2025. Cloned by&nbsp;
          <Link href="https://siva-betha.vercel.app/">ME</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
