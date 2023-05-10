export function NavItem ({label, href, active}: {label: string, href: string, active: boolean}) {
    return (
        <li>
            <a href={`#${href}`} className="block py-2 pr-4 pl-3 text-[#E79C88] rounded bg-primary-700 lg:bg-transparent" aria-current="page">{label}</a>
        </li>
    )
}