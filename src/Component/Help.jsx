import FooterSmall from "./FooterSmall";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HelpMenu = () => {
    return (
        <>
            <div className="absolute w-screen h-screen bg-izeno-gradien-1">
                <div className='ml-64'>
                    <Navbar />
                </div>

                <div className='flex-1 p-8 flex justify-center items-center ml-72'>
                    <div className="container w-full max-w-3xl mx-80   bg-white p-8 rounded-lg shadow-lg space-y-4">
                        <h2 class="mb-4 text-3xl tracking-tight font-bold text-center text-izeno-white bg-izeno-main rounded py-2">Contact Us</h2>
                        <p class="mb-8 lg:mb-16 font-light text-center text-izeno-main  sm:text-md">Got a technical issue? Want to send feedback about the feature? Need details about our Business plan? Let us know.</p>

                        <table class="min-w-full">
                            <tbody class="divide-y divide-gray-200">
                                <tr class="">
                                    <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Email</td>
                                    <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: einvoicebyizeno@izenomail.com</td>
                                </tr>
                                <tr class="">
                                    <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Hotline</td>
                                    <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900">: (021) 29770070</td>
                                </tr>
                                <tr class="">
                                    <td class="w-48 px-6 py-2 whitespace-nowrap text-base font-bold text-izeno-main">Address</td>
                                    <td class="px-6 py-2 whitespace-nowrap text-base text-gray-900 text-wrap">: World Trade Centre Jakarta WTC 3 Lantai 29, Jl. Jenderal Sudirman No.31 Kav. 29, Karet, Setiabudi, Jakarta 12920</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>


            </div>
            <Sidebar />
            <footer>
                <FooterSmall absolute />
            </footer>

        </>
    )
}

export default HelpMenu;