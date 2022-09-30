import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/notifications",
      title: "Notifications",
    },
    {
      href: "/messages",
      title: "Messages",
    },
    {
      href: "/bookmarks",
      title: "Bookmarks",
    },
    {
      href: "/lists",
      title: "Lists",
    },
    {
      href: "/subscriptions",
      title: "Subscriptions",
    },
    {
      href: "/profile",
      title: "My Profile",
    },
    // This needs to be a button
    {
      href: "/newpost",
      title: "New Post",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-1">
      <aside className="bg-fuchsia-100 w-full md:w-60">
        <nav>
          <ul>
            {menuItems.map(({ href, title }) => (
              <li className="m-2" key={title}>
                <Link href={href}>
                  <a
                    className={`flex p-2 rounded hover:underline cursor-pointer ${
                      router.asPath === href && "text-grey"
                    }`}
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
