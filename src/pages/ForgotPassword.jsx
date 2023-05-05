import male from '../assets/male.png'
import female from '../assets/female.png'
import Fill from '../assets/Fill 1.png'
import Wetick from '../assets/Wetick.png'

const ForgotPassword = ()=> {
    return (
        <main className="container mx-auto flex h-[100vh]">
        <section className="bg-blue-500 w-[50%] max-sm:hidden">
            <img src={male} className="relative left-[55%] top-[300px]" />
            <img src={female} className="relative left-[5%] top-[-90px]" />
        </section>
        <section className="bg-white w-[50%] max-sm:w-full">
            <div className="w-[70%] h-[80vh] my-[80px] mx-[15%]">
                <div className="w-full relative top-[50px] flex">
                    <img src={Fill} />
                    <img src={Wetick} className="w-[94px] h-[36px] top-[20px] relative" />
                </div>
                <div className="w-full relative top-[80px]">
                    <h1 className="text-3xl mb-[15px] font-medium tracking-wide">Forgot Password</h1>
                    <h1 className="max-sm:w-[250px] tracking-wide text-sm">You’ll get mail soon on your email</h1>
                </div>
                <div>
                    <form action="">
                        <input type="email" placeholder="Email" className="w-[315px] h-[45px] bg-white border rounded-[15px] relative top-[125px] pl-[25px] tracking-wide" />
                    </form>
                    <button className="w-[315px] h-[45px] bg-blue-500 rounded-[15px] relative top-[155px] text-white text-lg tracking-wider">Send</button>
                </div>
            </div>
        </section>
    </main>
    )
}

export default ForgotPassword