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
import imageLogo from "../../assets/Monograf.png";

function Header() {
  const { cartCount } = useSelector(selectCart);
  const dispatch = useDispatch();
  const session = true;

  return (
    <header className="sticky top-0 z-30 bg-[#fff] bg-opacity-80 p-4 shadow">
      <div className="container mx-auto flex w-full items-center justify-between">
        <div className="item-center md:fle flex justify-center">
          <Link href="/">
            <div className="relative h-10 w-7 cursor-pointer opacity-75 transition hover:opacity-100">
              <Image src={imageLogo} layout="fill" objectFit="contain" />
            </div>
          </Link>
        </div>

        <div className="hidden flex-1 justify-center space-x-8 md:flex">
          <a className="headerLink text-sm">Product</a>
          <a className="headerLink text-sm">Explore</a>
        </div>

        <div className="flex items-center justify-center gap-x-4 md:flex">
          <SearchIcon className="headerIcon h-5 w-5" />
          <Link href={`/checkout`}>
            <div className="relative cursor-pointer">
              <span className="absolute -right-1 -bottom-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300 text-[11px] text-black">
                {cartCount}
              </span>
              <ShoppingBagIcon className="headerIcon h-5 w-5" />
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
            <UserIcon className="headerIcon h-5 w-5" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
