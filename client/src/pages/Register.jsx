import { useState } from "react"

export default function Register() {
  // hooks luu lai gia tri da nhap
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, fullname, password }),
      });

      const data = await res.json()

      if (!res.ok) {
        setError(data)
        setSuccess(undefined)
      } else {
        setSuccess(data)
        setError(undefined)
      }
       
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-violet-200 p-2 rounded-lg flex flex-col w-[400px] gap-2">
        <input onChange={ (e) => setEmail(e.target.value) } placeholder="Nhập email" className="p-2 w-full rounded-md  focus:outline-sky-500" type="email" />
        <input onChange={ (e) => setFullname(e.target.value) }  placeholder="Nhập fullname" className="p-2 w-full rounded-md  focus:outline-sky-500" type="text" />
        <input onChange={ (e) => setPassword(e.target.value) } placeholder="Nhập password" className="p-2 w-full rounded-md  focus:outline-sky-500" type="password" />

        <button className={`${!email || !fullname || !password ? "bg-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed pointer-events-none" : "bg-white p-2 rounded-md"}`} type="submit">Đăng ký</button>
        {/* <span>{error}</span> */}
        {error && <span className="text-red-500">{error.message}</span>}
        {success && <span className="text-sky-500">Tạo thành công</span>}
      </form>
    </div>
  )
}
