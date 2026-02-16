import { useTranslation } from "react-i18next";

const OurStory = () => {
    const { t } = useTranslation();

    const storyPoints = [
        t("our_story.point1"),
        t("our_story.point2")
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="space-y-6">
                    <h1 className="text-5xl font-bold">
                        {t("our_story.title")}
                    </h1>

                    {storyPoints.map((point, index) => (
                        <p key={index} className="text-lg text-gray-700">
                            {point}
                        </p>
                    ))}
                </div>

                <div className="relative">
                    <div className="bg-linear-to-r from-pink-300 to-pink-400 rounded-lg overflow-hidden">
                        <img
                            src="/app/images/storyimg.png"
                            alt={t("our_story.image_alt")}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurStory;
