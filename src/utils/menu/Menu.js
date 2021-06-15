/* eslint-disable prettier/prettier */
const Menu = [
  {
    icon: "home",
    title: "Welcome Page",
    isLink: true,
    link: "/",
    active: false,
  },
  {
    icon: "language",
    title: "Feed",
    isLink: true,
    link: "/feed",
    active: this.props.currentURL.pathname === "/feed",
  },
  {
    icon: "account_box",
    title: "My Account",
    isLink: true,
    link: "/profile",
    active: this.props.currentURL.pathname === "/profile",
  },
  {
    icon: "apartment",
    title: "My Company",
    isLink: false,
    link: "",
  },
  {
    icon: "import_contacts",
    title: "News",
    isLink: false,
    link: "",
  },
  {
    icon: "insert_chart",
    title: "Analytics",
    isLink: false,
    link: "",
    permission: "dashboard",
  },
]
export default Menu
