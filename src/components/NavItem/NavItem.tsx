export function NavItem ({label, href, active, onClick}: {label: string, href: string, active: boolean, onClick?: () => void}) {
    return (
        <li onClick={onClick}>
            <a href={`#${href}`} className="block py-2 pr-4 pl-3 text-black font-light bg-primary-700 lg:bg-transparent" aria-current="page">{label}</a>
        </li>
    )
}
