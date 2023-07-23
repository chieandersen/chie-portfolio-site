import { useState } from "react";

export type TabType = "learn" | "ask";
interface Props {
  defaultActiveTab: TabType;
  labels: Record<TabType, string>;
}
// All the styling in this file still needs to be changed to tailwind styling so that it actually works.
// The javascript function below basically removes or adds back the active class to the li.nav-group element.
// The li.nav-group element is the element that is used to toggle between the learn and ask tabs.
// The active class is the class that is used to change the color of the text in the tab.
// The active class is also used to change the color of the border on the bottom of the tab.
// The active class is also used to change the color of the background of the tab.
// If you check the browser console, you will see that the function is being called when you click on the tab.

const ArtPageToggle = ({ defaultActiveTab, labels }: Props) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  function toggleType(type: TabType) {
    console.log("type is toggled", type);
    document
      .querySelectorAll(`li.nav-group`)
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(`li.nav-group.${type}`)
      .forEach((el) => el.classList.add("active"));
    setActiveTab(type);
  }
  return (
    <div className="hidden w-full flex-row md:flex">
      <div className="flex flex-row items-center">
        {(["learn", "ask"] as const).map((type) => (
          <button
            key={type}
            className={
              activeTab === type
                ? "active w-32 border-b-4 border-brand-400 py-2 text-lg font-bold hover:bg-gray-100 dark:text-gray-50 hover:dark:bg-lavender-700"
                : "text-grey-50 w-32 border-b-4 border-gray-100 py-2 text-lg hover:bg-gray-100 dark:border-lavender-500 dark:bg-lavender-10 hover:dark:bg-lavender-700"
            }
            onClick={() => toggleType(type)}
          >
            {labels[type]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtPageToggle;
