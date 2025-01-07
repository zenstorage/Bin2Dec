import React from 'react';

function AboutBinary() {
    return (
        <div className='bg-gray-700 flex justify-center items-center flex-col gap-4 p-6'>
            <div className='w-[20rem] sm:w-[80rem] bg-gray-900 p-4 rounded-md'>
                <h1 className='text-2xl text-gray-50 font-bold mb-4'>Understanding Binary Numbers</h1>
                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>What is Binary?</h2>
                <p className='text-gray-300 mb-4'>
                    The binary number system is a base-2 numeral system that uses only two digits:
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>0</code> and
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>1</code>. It is the foundation of all computer systems and digital electronics.
                </p>
                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>How Binary Works</h2>
                <p className='text-gray-300 mb-4'>
                    Each digit in a binary number is called a<strong className='text-gray-50'>bit</strong>. The place value of each bit increases by powers of 2, starting from the right. For example, the binary number
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>1011</code> can be calculated as follows:
                </p>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>
                            1 × 2<sup>3</sup> = 8
                        </code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>
                            0 × 2<sup>2</sup> = 0
                        </code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>
                            1 × 2<sup>1</sup> = 2
                        </code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>
                            1 × 2<sup>0</sup> = 1
                        </code>
                    </li>
                </ul>
                <p className='text-gray-300 mb-4'>
                    Therefore, <code className='bg-gray-700 px-1 rounded text-gray-100'>1011</code> in binary equals
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>8 + 0 + 2 + 1 = 11</code> in decimal.
                </p>

                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>Binary Arithmetic</h2>
                <p className='text-gray-300 mb-4'>Binary arithmetic is similar to decimal arithmetic but simpler. Here are some basic operations:</p>
                <h3 className='text-lg text-gray-200 font-semibold mt-4 mb-2'>Addition</h3>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>0 + 0 = 0</code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>0 + 1 = 1</code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>1 + 0 = 1</code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>1 + 1 = 10</code> (which is 0 with a carry of 1)
                    </li>
                </ul>

                <h3 className='text-lg text-gray-200 font-semibold mt-4 mb-2'>Subtraction</h3>
                <p className='text-gray-300 mb-4'>Similar to decimal, but you may need to borrow from the next higher bit.</p>
                <h3 className='text-lg text-gray-200 font-semibold mt-4 mb-2'>Multiplication</h3>
                <p className='text-gray-300 mb-4'>Follows the same principles as decimal multiplication, using shifts and additions.</p>

                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>Applications of Binary</h2>
                <p className='text-gray-300 mb-4'>Binary numbers are used in various applications, including:</p>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>Computers: All data is represented in binary.</li>
                    <li>Networking: IP addresses and protocols use binary representations.</li>
                    <li>Digital Electronics: Logic gates and circuits operate using binary signals.</li>
                </ul>

                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>Conclusion</h2>
                <p className='text-gray-300'>Understanding binary numbers is crucial for anyone interested in computer science and digital technology. The simplicity of the binary system allows computers to perform complex calculations efficiently.</p>
            </div>
        </div>
    );
}

export default AboutBinary;
