import React, { useState } from 'react';

export default function Dec() {
    const [text, setText] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [formatInt, setFormat] = useState(4);
    const [inputValue, setInputValue] = useState('');

    const handleFormatInt = (ev) => {
        const newFormat = ev?.target?.value || ev;
        setFormat(newFormat);
        setInputValue(formatInput(inputValue.replace(/\s/gm, ''), newFormat));
    };

    const handleChange = (ev) => {
        const value = ev.target.value;
        const formattedValue = formatInput(value.replace(/\s/gm, ''), formatInt);
        setInputValue(formattedValue);
        setText(binaryToDecimal(value));
        setIsValid(/^[0-1\s]*$/.test(value));
    };

    const formatInput = (input, char) => {
        const regex = new RegExp(`(.{${char}})`, 'g');
        return input.replace(regex, '$1 ').trim();
    };

    function binaryToDecimal(binaryInText) {
        let decimal = 0;
        binaryInText = binaryInText.replace(/\s/gm, '');
        const isValid = /^[0-1]+$/gm.test(binaryInText);
        const throwError = () => {
            throw new Error('Invalid input. Insert valid binary numbers');
        };
        try {
            if (!isValid) {
                throwError();
            }
            const binaryWSpace = [...binaryInText].reverse();

            binaryWSpace.forEach((binary, index) => (decimal += binary * 2 ** index));

            console.log(`Binary: ${binaryInText} | Decimal: ${decimal}`);
        } catch (error) {
            console.error('Error: ', error);
        }

        return decimal.toString();
    }

    return (
        <>
            <div className='h-main bg-gray-700 flex justify-center items-center flex-col gap-4'>
                <div className='w-[32rem] bg-gray-900 p-2 rounded-md flex justify-start items-center'>
                    <span className='text-xl text-gray-50'>Format in:</span>
                    <input className='w-10 ml-5 text-gray-200 bg-gray-600 px-2 text-center rounded-md pointer-events-none' onChange={handleFormatInt} value={formatInt} type='text'></input>
                    <button className='w-10 ml-2 text-gray-200 bg-gray-600 px-2 text-center rounded-md' onClick={() => handleFormatInt(formatInt + 1)}>
                        <svg className='fill-gray-50' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z' />
                        </svg>
                    </button>
                    <button className='w-10 ml-2 text-gray-200 bg-gray-600 px-2 text-center rounded-md' onClick={() => handleFormatInt(formatInt - 1)}>
                        <svg className='fill-gray-50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                            <path d='M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z' />
                        </svg>
                    </button>
                </div>
                <textarea
                    onChange={handleChange}
                    value={inputValue} // Usa o estado inputValue
                    className={`h-[16rem] w-[32rem] bg-gray-800 text-gray-50 size text-xl focus-visible:border-none focus-visible:outline-3 focus-visible:outline rounded-md p-1 transition-[outline] ease-out ${isValid ? 'outline-gray-500' : 'outline-red-500'}`}
                    placeholder='1110 1101'
                ></textarea>
                <textarea value={text} readOnly className='h-[16rem] w-[32rem] bg-gray-800 text-gray-50 size text-xl focus-visible:border-none focus-visible:outline-3 focus-visible:outline rounded-md p-1 outline-gray-400 transition-[outline] ease-out' placeholder='237'></textarea>
            </div>
        </>
    );
}
