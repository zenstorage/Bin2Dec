import React from 'react';

function AboutDecimal() {
    return (
        <div className='bg-gray-700 flex justify-center items-center flex-col gap-4 p-6'>
            <div className='w-[20rem] sm:w-[80rem] bg-gray-900 p-4 rounded-md'>
                <h1 className='text-2xl text-gray-50 font-bold mb-4'>Understanding Decimal Numbers</h1>
                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>What are Decimal Numbers?</h2>
                <p className='text-gray-300 mb-4'>
                    The decimal number system, also known as the base-10 numeral system, is the most commonly used system for representing numbers. It uses ten digits:
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>0</code>,<code className='bg-gray-700 px-1 rounded text-gray-100'>1</code>,<code className='bg-gray-700 px-1 rounded text-gray-100'>2</code>, and so on up to
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>9</code>. Each digit has a positional value based on powers of 10.
                </p>
                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>How Decimal Numbers Work</h2>
                <p className='text-gray-300 mb-4'>
                    In the decimal system, each position in a number represents a power of 10, starting from the rightmost digit (ones place). For example, the number
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>325</code> can be broken down as follows:
                </p>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>
                            3 × 10<sup>2</sup> = 300
                        </code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>
                            2 × 10<sup>1</sup> = 20
                        </code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>
                            5 × 10<sup>0</sup> = 5
                        </code>
                    </li>
                </ul>
                <p className='text-gray-300 mb-4'>
                    Adding these values gives us
                    <code className='bg-gray-700 px-1 rounded text-gray-100'>300 + 20 + 5 = 325</code>.
                </p>

                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>Arithmetic with Decimal Numbers</h2>
                <p className='text-gray-300 mb-4'>Arithmetic in the decimal system is straightforward and forms the foundation of everyday calculations. Here are some basic operations:</p>
                <h3 className='text-lg text-gray-200 font-semibold mt-4 mb-2'>Addition</h3>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>23 + 45 = 68</code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>100 + 250 = 350</code>
                    </li>
                </ul>

                <h3 className='text-lg text-gray-200 font-semibold mt-4 mb-2'>Subtraction</h3>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>50 - 15 = 35</code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>200 - 75 = 125</code>
                    </li>
                </ul>

                <h3 className='text-lg text-gray-200 font-semibold mt-4 mb-2'>Multiplication</h3>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>12 × 5 = 60</code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>25 × 4 = 100</code>
                    </li>
                </ul>

                <h3 className='text-lg text-gray-200 font-semibold mt-4 mb-2'>Division</h3>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>50 ÷ 5 = 10</code>
                    </li>
                    <li>
                        <code className='bg-gray-700 px-1 rounded text-gray-100'>144 ÷ 12 = 12</code>
                    </li>
                </ul>

                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>Applications of Decimal Numbers</h2>
                <p className='text-gray-300 mb-4'>Decimal numbers are used universally in various fields, including:</p>
                <ul className='list-disc list-inside text-gray-300 mb-4'>
                    <li>Commerce: Prices, weights, and measurements are represented in decimals.</li>
                    <li>Science: Decimal notation is used in calculations and measurements.</li>
                    <li>Daily Life: Everyday tasks like telling time or calculating expenses rely on decimals.</li>
                </ul>

                <h2 className='text-xl text-gray-200 font-semibold mt-6 mb-2'>Conclusion</h2>
                <p className='text-gray-300'>The decimal system is the most familiar and widely used numeral system. Its simplicity and versatility make it essential for mathematics, science, and everyday life.</p>
            </div>
        </div>
    );
}

export default AboutDecimal;
