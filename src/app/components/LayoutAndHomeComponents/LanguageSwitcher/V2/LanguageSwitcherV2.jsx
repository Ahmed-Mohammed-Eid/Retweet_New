'use client'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import Button from './Button'

const LangSwitcher = () => {

    const pathname = usePathname()
    const urlSegments = useSelectedLayoutSegments()

    const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
    const options = [
        { country: 'English', code: 'en' }, // Native name is the same
        { country: 'العربية', code: 'ar' },
    ]

    return (
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <Button
                    className='text-destructive inline-flex w-full items-center justify-between gap-3'
                    size='small'
                    onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
                    onBlur={() => setIsOptionsExpanded(false)}
                    style={{
                        border: '1px solid #E5E7EB',
                    }}
                >
                    Language
                    <FiGlobe />
                </Button>
                {isOptionsExpanded && (
                    <div className='absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg'>
                        <div
                            className='py-1'
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='options-menu'
                            style={{
                                zIndex: 999999,
                            }}
                        >
                            {options.map(lang => {
                                return (
                                    <Link
                                        key={lang.code}
                                        href={`/${lang.code}/${urlSegments.join('/')}`}
                                    >
                                        <button
                                            lang={lang.code}
                                            onMouseDown={e => {
                                                e.preventDefault()
                                            }}
                                            className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                                                pathname === `/${lang.code}`
                                                    ? 'bg-selected text-primary hover:bg-selected'
                                                    : 'text-secondary'
                                            }`}
                                        >
                                            {lang.country}
                                        </button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LangSwitcher