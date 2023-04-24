import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center justify-center py-10">
      <div className="flex items-center text-base leading-7">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-md mx-auto font-medium text-gray-900 transition-colors duration-100 ease-in-out hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400 sm:px-5 sm:py-2"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}
export default Header
