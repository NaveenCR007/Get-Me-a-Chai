import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='w-[45%] mx-auto my-10 p-5 bg-[#252626] text-white rounded-md space-y-5'>
        <label htmlFor="Name">Name</label><input className='w-full px-2 h-8 rounded-sm bg-slate-600' type="text" />
        <label htmlFor="Email">Email</label><input className='w-full px-2 h-8 rounded-sm bg-slate-600' type="email" />
        <label htmlFor="User Name">Username</label><input className='w-full px-2 h-8 rounded-sm bg-slate-600' type="text" />
        <label htmlFor="Cover Picture">Cover Picture</label><input className='w-full px-2 text-sm h-8 rounded-sm bg-slate-600 py-1 cursor-pointer' type="file" accept='image/*' />
        <label htmlFor="Razor Pay Credentials">RazorPay ID</label><input className='w-full px-2 h-8 rounded-sm bg-slate-600' type="text" />
        <label htmlFor="Razor Pay Credentials">RazorPay Secret</label><input className='w-full px-2 h-8 rounded-sm bg-slate-600' type="text" />

        <button className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-sm bg-slate-600 text-sm px-5 py-2">Submit</button>
      </div>
    </div>
  )
}

export default Dashboard
