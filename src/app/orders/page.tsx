import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-red-50'>
            <td className='hidden md:block py-6 px-1'>349824729847</td>
            <td className='py-6 px-1'>01.01.2025</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On The Way (approx. 1 min)</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>349824729847</td>
            <td className='py-6 px-1'>01.01.2025</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On The Way (approx. 1 min)</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>349824729847</td>
            <td className='py-6 px-1'>01.01.2025</td>
            <td className='py-6 px-1'>89.90</td>
            <td className='hidden md:block py-6 px-1'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On The Way (approx. 1 min)</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage