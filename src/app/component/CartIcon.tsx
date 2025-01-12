"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

type CartIconProps = {
  onClickCart?: (state: boolean) => void
}

const CartIcon: React.FC<CartIconProps> = ({ onClickCart }) => {
  const handleClick = () => {
    if (onClickCart) {
      onClickCart(false)
    }
  }

  return (
    <div className="flex items-center gap-4" onClick={handleClick}>
      <Link href="/cart" className="flex items-center gap-4">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
          <Image src="/cart.png" alt="Cart Icon" fill />
        </div>
        <span>Cart (3)</span>
      </Link>
    </div>
  );
};

export default CartIcon;
