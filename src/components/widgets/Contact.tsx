import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <div className={`grid ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-1'}`}>
        <div className="h-full pr-6">
          {content && <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">{content}</p>}
          <ul className="mb-6 md:mb-0">
            {items &&
              items.map(({ title, description, icon: Icon, href }, index) => (
                <li key={`item-contact-${index}`} className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                    {Array.isArray(description) ? (
                      <ul className="pl-0">
                        {description.map((desc, idx) => (
                          <li key={`description-${idx}`}>
                            <a
                              className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400"
                              href={href}
                              aria-label={desc}
                            >
                              {desc}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <a
                        className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline dark:text-gray-400"
                        href={href}
                        aria-label={description}
                      >
                        {description}
                      </a>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" /> */}
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
