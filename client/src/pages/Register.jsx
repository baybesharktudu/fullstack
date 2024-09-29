export default function Register() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-violet-200 p-2 rounded-lg flex flex-col w-[400px] gap-2">
        <input placeholder="Nhập email" className="p-2 w-full rounded-md  focus:outline-sky-500" type="email" />
        <input placeholder="Nhập fullname" className="p-2 w-full rounded-md  focus:outline-sky-500" type="text" />
        <input placeholder="Nhập password" className="p-2 w-full rounded-md  focus:outline-sky-500" type="password" />

        <button className="bg-white p-2 rounded-md" type="submit">Đăng ký</button>
      </form>
    </div>
  )
}
