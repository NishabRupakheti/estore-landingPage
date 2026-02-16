import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";


const Footer = () => {
    const { t } = useTranslation();

    const supportInfoKeys = [
        "footer.support.address",
        "footer.support.phone",
        "footer.support.email"
    ];

    const accountLinkKeys = [
        { to: "/signup", key: "footer.account.login_register" },
        { to: "/cart", key: "footer.account.cart" },
        { to: "/wishlist", key: "footer.account.wishlist" }
    ];

    const quickLinkKeys = [
        "footer.quick_links.privacy",
        "footer.quick_links.terms",
        "footer.quick_links.faq",
        "footer.quick_links.contact"
    ];

    return (
        <div className="bg-black text-white px-4 py-10 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Exclusive</h3>
                    <h4 className="text-sm">{t("footer.subscribe")}</h4>

                    <input
                        type="text"
                        placeholder={t("footer.email_placeholder")}
                        className="p-2 rounded border border-gray-600 bg-black text-white focus:outline-none focus:border-white"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{t("footer.support.title")}</h3>

                    {supportInfoKeys.map(key => (
                        <p key={key} className="text-sm">{t(key)}</p>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{t("footer.account.title")}</h3>

                    <p className="text-sm cursor-pointer hover:underline">
                        {t("footer.account.my_account")}
                    </p>

                    {accountLinkKeys.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className="text-sm cursor-pointer hover:underline"
                        >
                            {t(link.key)}
                        </NavLink>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{t("footer.quick_links.title")}</h3>

                    {quickLinkKeys.map(key => (
                        <p key={key} className="text-sm cursor-pointer hover:underline">
                            {t(key)}
                        </p>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{t("footer.download.title")}</h3>

                    <p className="text-xs text-gray-400">
                        {t("footer.download.promo")}
                    </p>

                    {/* Images usually don't need translation except alt */}
                    <div className="flex gap-2">
                        <div className="bg-white p-1 rounded">
                            <img src="/app/images/qrcode.png" alt={t("footer.download.qr_alt")} className="w-20 h-20" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <img src="/app/images/gplay.png" alt={t("footer.download.gplay_alt")} className="h-10" />
                            <img src="/app/images/appstore.png" alt={t("footer.download.appstore_alt")} className="h-10" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
