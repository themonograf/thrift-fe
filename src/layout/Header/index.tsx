import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon as SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, selectCart } from "../../store/features/cart";

function Header() {
  const { cartCount } = useSelector(selectCart);
  const dispatch = useDispatch();
  const session = true;

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#000] bg-opacity-80 p-4">
      <div className="item-center flex justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src={`https://apple.co/3M0sg2k`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 justify-center space-x-8 md:flex">
        <a className="headerLink text-sm text-white">Product</a>
        <a className="headerLink text-sm text-white">Explore</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon h-5 w-5 text-white" />
        <Link href={`/checkout`}>
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -bottom-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-xs text-black">
              {cartCount}
            </span>
            <ShoppingBagIcon className="headerIcon h-5 w-5 text-white" />
          </div>
        </Link>
        {session ? (
          <Image
            src={`https://ui-avatars.com/api/?font-size=0.6&name=Fitzgeral`}
            alt=""
            className="cursor-pointer rounded-full"
            width={20}
            height={20}
            onClick={() => dispatch(incrementByAmount(2))}
          />
        ) : (
          <UserIcon className="headerIcon h-5 w-5 text-white" />
        )}
      </div>
    </header>
  );
}

export default Header;
