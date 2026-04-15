import { useState } from "react";

const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0)
    const ActiveComponent = tabs[activeTab].component;
    const handleClick = (index) => {
        setActiveTab(index)
    }

    return(
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button key={index} onClick={()=>handleClick(index)}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <h2>
                <ActiveComponent />
            </h2>
        </div>
    )
}
export default Tabs;