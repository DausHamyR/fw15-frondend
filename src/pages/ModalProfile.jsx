const Modal = ()=> {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[1135px] h-[600px] relative top-[100px] flex justify-center items-center">
                <div className="w-[1056px] h-[540px]">
                    <h1 className="text-xl font-bold tracking-wider mb-8">Update Event</h1>
                    <div className="flex justify-between w-[600px] mb-2">
                        <h5 className="text-md text-black">Name</h5>
                        <div>
                        <h5 className="text-md text-black">Category</h5>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mb-8">
                        <input type="text" className="input input-bordered w-full mr-12" placeholder="Input Name Event ..." />
                        <input type="text" className="input input-bordered w-full" placeholder="Select Category" />
                    </div>
                    <div className="flex justify-between w-[650px] mb-2">
                        <h5 className="text-md text-black">Location</h5>
                        <div>
                        <h5 className="text-md text-black">Date Time Show</h5>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mb-8">
                        <input type="text" className="input input-bordered w-full mr-12" placeholder="Select Location" />
                        <input type="text" className="input input-bordered w-full" placeholder="01/01/2022" />
                    </div>
                    <div className="flex justify-between w-[580px] mb-2">
                        <h5 className="text-md text-black">Price</h5>
                        <div>
                        <h5 className="text-md text-black">Image</h5>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mb-8">
                        <input type="text" className="input input-bordered w-full mr-12" placeholder="Input Price ..." />
                        <input type="text" className="input input-bordered w-full" placeholder="Chose File ..." />
                    </div>
                    <div className="flex justify-between w-[580px] mb-2">
                        <h5 className="text-md text-black">Detail</h5>
                    </div>
                    <div className="flex justify-between w-full mb-6">
                        <input type="text" className="input input-bordered w-full" placeholder="Input Detail ..." />
                    </div>
                    <div className="flex justify-end">
                    <button className="btn btn-active btn-primary w-[315px]">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal