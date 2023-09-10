const FormInput = ({type,input_id,placeholder,withIcon,children,isDarkBg}) => {
    if(withIcon){
        return <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {children}
            </div>
            <input type={type} id={input_id} placeholder={placeholder} className={`${isDarkBg ? 'bg-background focus:ring-zinc-500 focus:border-zinc-500 text-white ' : 'bg-white focus:ring-zinc-200 focus:border-zinc-200 text-black '} border border-zinc-800 p-2 pl-10 rounded-md text-sm text-paragraph focus:ring-1 focus:outline-none`} />
        </div>
    }
    return <input type={type} id={input_id} placeholder={placeholder} className={`${isDarkBg ? 'bg-background focus:ring-zinc-500 focus:border-zinc-500 text-white' : 'bg-white focus:ring-zinc-200 focus:border-zinc-200 text-black '} border border-zinc-800 pl-2 rounded-md text-sm text-paragraph focus:ring-1 focus:outline-none`} />
}

export default FormInput;
