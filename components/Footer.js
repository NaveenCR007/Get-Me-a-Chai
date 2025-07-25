import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="bg-zinc-900 text-white text-center py-3">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} GetMeAChai. All rights reserved.
            </p>
            <p className="text-xs mt-2">
            Made with ❤️ by the GetMeAChai team
            </p>  
        </div>
    </footer>
  )
}

export default Footer
