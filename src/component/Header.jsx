import { Fragment, useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  LanguageIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import detectBrowserLanguage from 'detect-browser-language'
import { Switcher } from './switcher/Switcher'
import logo from '../assets/images/logo_scma_light.png'
import cv from '../assets/files/CV.pdf'
import french from '../assets/images/french.svg'
import english from '../assets/images/english.svg'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation();
  const [isFrench, setIsFrench] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)
  const [curr_lng, setCurrentLanguage] = useState('en');
  const location = useLocation();

  useEffect(() => {
    let lng = detectBrowserLanguage().split('-')[0];

    if(lng === 'fr'){
      setIsFrench(true);
      setCurrentLanguage('fr');
    } else {
      setIsEnglish(true);
      setCurrentLanguage('en');
    }
  }, []);

  const handleSetFrench = useCallback((lng) => {
    i18n.changeLanguage(lng);
    setIsFrench(true);
    setIsEnglish(false);
    setCurrentLanguage(lng);
  }, [i18n])

  const handleSetEnglish = useCallback((lng) => {
    i18n.changeLanguage(lng)
    setIsEnglish(true);
    setIsFrench(false);
    setCurrentLanguage(lng);
  }, [i18n])

  const products = [
    { name: t('navbar.ressources.ask_for_quotation.title'), description: t('navbar.ressources.ask_for_quotation.text'), href: '#', icon: ChartPieIcon },
    { name: t('navbar.ressources.my_projects.title'), description: t('navbar.ressources.my_projects.text'), href: '#', icon: FingerPrintIcon },
    { name: t('navbar.ressources.my_resources.title'), description: t('navbar.ressources.my_resources.text'), href: '#', icon: CursorArrowRaysIcon },
    { name: t('navbar.ressources.f1_predictor.title'), description: t('navbar.ressources.f1_predictor.text'), href: '#', icon: SquaresPlusIcon },
    { name: t('navbar.ressources.blog.title'), description: t('navbar.ressources.blog.text'), href: '#', icon: ArrowPathIcon },
  ]

  const callsToAction = [
    { name: t('navbar.ressources.call_to_action.movie'), href: '#', icon: PlayCircleIcon },
    { name: t('navbar.ressources.call_to_action.contact'), href: '#contact', icon: PhoneIcon },
  ]

  return (
    <header className="bg-white fixed w-screen z-10 dark:bg-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MASC</span>
            <img className="h-8 w-auto dark:bg-white dark:p-1 dark:w-12 dark:rounded-full dark:h-8" src={logo} alt="Logo SCMA" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {location.pathname === '/' && 
            <>
              <a href="#aboutMe" className="dark:text-gray-100 dark:hover:text-gray-600 text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
                {t('navbar.about_me')}
              </a>
              <a href="#skills" className="dark:text-gray-100 dark:hover:text-gray-600 text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
                {t('navbar.skills')}
              </a>
              <a href="#experience" className="dark:text-gray-100 dark:hover:text-gray-600 text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
                {t('navbar.experience')}
              </a>
              <a href="https://f1.stephanemebenga.site" target='_blank' rel="noreferrer"  className="dark:text-gray-100 dark:hover:text-gray-600 text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
                {t('predictor')}
              </a>
            </>
          }

          {/* <Popover className="relative">
            <Popover.Button 
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none 
                        hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200 dark:text-gray-100 dark:hover:text-gray-600">
              {t('navbar.ressources.menu')}
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-lime-800 dark:bg-gray-800">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-lime-100"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900 dark:text-gray-100 dark:hover:text-gray-600">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 dark:text-gray-400 dark:hover:text-gray-800">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
          <a href={cv} 
            className="dark:text-lime-100 dark:active:text-gray-700 dark:bg-black dark:hover:text-white -mx-3 
                        rounded-lg px-2 py-2 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold leading-7 text-gray-800 
                        hover:bg-gray-50 hover:text-lime-600 bg-lime-100"
          >
            <span className='hidden lg:inline-block mr-1'>{t('download')}</span>
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
            Se connecter <span aria-hidden="true">&rarr;</span>
          </a> */}
          
        <Popover className="relative">
          <Popover.Button 
            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none 
                      hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200 dark:text-gray-100 dark:hover:text-gray-600">
            
              <LanguageIcon className='mr-2 h-6 w-6' style={{fontSize: 26}} /> {curr_lng === 'en' ? t('english') : t('french')}
              <img src={curr_lng === 'en' ? english : french} alt={`${curr_lng} flag`} className='ml-2 w-4 h-4' />
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-full z-10 mt-3 w-56 max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-lime-800">
                <div className="py-4">
                  <button
                    className="w-full dark:text-gray-100 dark:hover:text-gray-800"
                    type='button'
                  >
                    <div 
                      className={`flex py-2 pl-1 ${isFrench ? 'bg-lime-200 hover:bg-lime-200 dark:text-gray-800' : 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-lime-200'}`}
                      onClick={() => handleSetFrench('fr')}
                    >
                      <img src={french} alt="French flag" className='mr-4 w-6 h-6 ml-3' /> <span>{t('french')}</span> 
                    </div>
                  </button>
                  <button
                    className="w-full dark:text-gray-100 dark:hover:text-gray-800"
                    type='button'
                  >
                    <div 
                      className={`flex py-2 pl-1 ${isEnglish ? 'bg-lime-200 hover:bg-lime-200 dark:text-gray-800' : 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-lime-200'}`}
                      onClick={() => handleSetEnglish('en')}
                    >
                      <img src={english} alt="French flag" className='mr-4 w-6 h-6 ml-3' /> <span>{t('english')}</span> 
                    </div>
                  </button>
                </div>
              </Popover.Panel>
            </Transition>  
          </Popover>
          <Switcher />

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto dark:bg-white dark:p-1 dark:w-12 dark:rounded-full dark:h-8"
                src={logo}
                alt=""
              />
            </a>
            <Popover className="relative">
              <Popover.Button 
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none 
                          hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200 dark:text-gray-100 dark:hover:text-gray-600">
                
                  <LanguageIcon className='mr-2 h-6 w-6' style={{fontSize: 26}} /> {curr_lng === 'en' ? t('english') : t('french')}
                  <img src={curr_lng === 'en' ? english : french} alt={`${curr_lng} flag`} className='ml-2 w-4 h-4' />
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>
              <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute top-full z-10 mt-3 w-56 max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-lime-800">
                    <div className="py-4">
                      <button
                        className="w-full dark:text-gray-100 dark:hover:text-gray-800"
                        type='button'
                      >
                        <div 
                          className={`flex py-2 pl-1 ${isFrench ? 'bg-lime-200 hover:bg-lime-200 dark:text-gray-800' : 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-lime-200'}`}
                          onClick={() => handleSetFrench('fr')}
                        >
                          <img src={french} alt="French flag" className='mr-4 w-6 h-6 ml-3' /> <span>{t('french')}</span> 
                        </div>
                      </button>
                      <button
                        className="w-full dark:text-gray-100 dark:hover:text-gray-800"
                        type='button'
                      >
                        <div 
                          className={`flex py-2 pl-1 ${isEnglish ? 'bg-lime-200 hover:bg-lime-200 dark:text-gray-800' : 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-lime-200'}`}
                          onClick={() => handleSetEnglish('en')}
                        >
                          <img src={english} alt="French flag" className='mr-4 w-6 h-6 ml-3' /> <span>{t('english')}</span> 
                        </div>
                      </button>
                    </div>
                  </Popover.Panel>
                </Transition>  
              </Popover>
              
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                   
                {location.pathname === '/' && 
                  <>
                    <a href="#aboutMe" 
                      className="dark:text-gray-200 dark:active:text-gray-700 dark:hover:text-gray-700 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {t('navbar.about_me')}
                    </a>
                    <a href="#skills" 
                      className="dark:text-gray-200 dark:active:text-gray-700 dark:hover:text-gray-700 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {t('navbar.skills')}
                    </a>
                    <a href="#experience" 
                      className="dark:text-gray-200 dark:active:text-gray-700 dark:hover:text-gray-700 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {t('navbar.experience')}
                    </a>
                    <a href="https://f1.stephanemebenga.site" target='_blank' rel="noreferrer"  className="dark:text-gray-200 dark:active:text-gray-700 dark:hover:text-gray-700 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {t('predictor')}
                    </a>
                    <a href={cv} 
                  className="dark:text-lime-100 dark:active:text-gray-700 dark:bg-black dark:hover:text-white ounded-lg px-3 py-2 text-base font-semibold leading-7 lg:px-4 lg:py-2 lg:text-sm text-gray-800 
                              hover:bg-gray-50 hover:text-lime-600 bg-lime-100"
                >
                  {t('download')}
                </a>
                  </>
                }
                {/* <Disclosure as="div" className="-mx-3 dark:bg-gray-300">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:active:text-gray-700 dark:hover:text-gray-700 dark:rounded-none">
                      {t('navbar.ressources.menu')}
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
              </div>
              <div className="py-6">
                {/* <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Se connecter
                </a> */}
                <div className='flex'>
                  <span className='mr-3 mt-1 dark:text-gray-50 dark:active:text-lime-300'>Switch theme</span><Switcher />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
