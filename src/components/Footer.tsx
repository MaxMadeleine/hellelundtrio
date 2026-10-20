import { contact, credits, navigation, site } from '../content/site'

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl">{site.name}</p>
            <p className="mt-2 text-sm text-paper/50">{site.role}</p>
            <p className="mt-6 text-sm text-paper/50">
              <a href={contact.phoneHref} className="hover:text-gold-bright">
                {contact.phoneDisplay}
              </a>
              {' · '}
              <a href={contact.emailHref} className="hover:text-gold-bright">
                {contact.email}
              </a>
            </p>
          </div>

          <nav aria-label="Sidefod">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3 md:grid-cols-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-paper/60 hover:text-gold-bright">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            {credits.photos}
            {' · '}
            {credits.maker.prefix}:{' '}
            <a
              href={credits.maker.href}
              target="_blank"
              rel="noreferrer"
              className="text-paper/75 transition-colors hover:text-gold-bright"
            >
              {credits.maker.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
