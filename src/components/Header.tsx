
export default function Header() {
  return (
    <div className='header p-2 flex justify-between items-center'>

      <h2 className='p-2 text-xl leading-6 font-medium'>Myshop</h2>
      <div className='flex gap-4 font-sm leading-5 font-normal cursor-pointer'>
        <p>Sign in</p> <p>Sign Up</p>
      </div>
      
    </div>
  )
}
