import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next';
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
import logo from '../assets/images/logo_scma_light.png'
import french from '../assets/images/french.svg'
import english from '../assets/images/english.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation();
  const [isFrench, setIsFrench] = useState(true)
  const [isEnglish, setIsEnglish] = useState(false)

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
    <header className="bg-white fixed w-screen z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MASC</span>
            <img className="h-8 w-auto" src={logo} alt="Logo SCMA" />
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
          <a href="#aboutMe" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
            {t('navbar.about_me')}
          </a>
          <a href="#skills" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
            {t('navbar.skills')}
          </a>
          <a href="#experience" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
            {t('navbar.experience')}
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
            {t('navbar.education')}
          </a>
          <Popover className="relative">
            <Popover.Button 
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none 
                        hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
              {t('ressources.menu')}
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-lime-800">
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
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
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
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
            Se connecter <span aria-hidden="true">&rarr;</span>
          </a> */}
          
        <Popover className="relative">
          <Popover.Button 
            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none 
                      hover:bg-lime-100 py-2 px-3 rounded-lg ease-in-out delay-80 duration-200">
            
              <LanguageIcon className='mr-2 h-6 w-6' style={{fontSize: 26}} /> {t('french')}
              <img src={french} alt="French flag" className='ml-2 w-4 h-4' />
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
              <Popover.Panel className="absolute top-full z-10 mt-3 w-56 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-lime-800">
                <div className="py-4">
                  <button
                    className="w-full"
                    type='button'
                  >
                    <div 
                      className={`flex py-2 pl-1 ${isFrench ? 'bg-lime-200 hover:bg-lime-200' : 'hover:bg-gray-100'}`}
                      onClick={() =>{ 
                        i18n.changeLanguage('fr')
                        setIsFrench(true)
                        setIsEnglish(false)
                      }}
                    >
                      <img src={french} alt="French flag" className='mr-4 w-6 h-6 ml-3' /> <span>{t('french')}</span> 
                    </div>
                  </button>
                  <button
                    className="w-full"
                    type='button'
                  >
                    <div 
                      className={`flex py-2 pl-1 ${isEnglish ? 'bg-lime-200 hover:bg-lime-200' : 'hover:bg-gray-100'}`}
                      onClick={() =>{ 
                        i18n.changeLanguage('en')
                        setIsEnglish(true)
                        setIsFrench(false)
                      }}
                    >
                      <img src={english} alt="French flag" className='mr-4 w-6 h-6 ml-3' /> <span>{t('english')}</span> 
                    </div>
                  </button>
                </div>
              </Popover.Panel>
            </Transition>  
          </Popover>

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
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
                <a href="#aboutMe" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('navbar.about_me')}
                </a>
                <a href="#skills" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('navbar.skills')}
                </a>
                <a href="#experience" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('navbar.experience')}
                </a>
                <a href="/" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t('navbar.education')}
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {t('ressources.menu')}
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
                </Disclosure>
              </div>
              <div className="py-6">
                {/* <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Se connecter
                </a> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
